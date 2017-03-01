/**
 * Func:文字Toast
 *      使用UI工程，来创建图文Toast
 */
var MOST_TOAST_NUM= 4;//最多支持toast个数
var ToastView= {
    m_arrToast:[],
    m_arrCloseTime:[],
    m_view:null,
    m_fontSize:25,//字号
    showViewX:1136* 0.5,
    showViewY:640* 0.4,
    MaxHeight:80,
    slowDisappearTime:0.7,
    //清空数据
    clearData:function(){
        for(var i=0; i< this.m_arrToast.length; ++i){
            this.m_arrToast[i].removeFromParent(true);
            this.m_arrToast.splice(i, 1);
            this.m_arrCloseTime.splice(i, 1);
            i--;
        }
        this.m_arrToast= [];
    },
    //预加载资源
    preLoad:function(params){
        var arrRes= [
            Common.getJinHuaResourcePath("toast_bg.png")
        ];
        var self= this;
        Load.LoadJsonOrPic(arrRes, function(){
            self.initData(params);//初始化数据
        })
    },
    showToast:function(text, time){
        var params = {};
        params.txt = text;
        params.time = time== undefined?2:time* 3;
        this.preLoad(params);//预加载资源
    },
    //初始化数据
    initData:function(params){
        this.addToast(params);//显示toast
        this.resetAllToastPosition();
    },
    //创建View
    create:function(){
        if(this.m_view== null){
            this.m_view= cc.Layer.create();
            MvcEngine.getRootNode().addChild(this.m_view);
        }
    },
    //显示Toast
    addToast:function(params){
        if(!Common.judgeValueIsEffect(this.m_view)){
            this.create();//创建toast背景
        }
        var msg= cc.LabelTTF.create(params.txt, "微软雅黑",this.m_fontSize);
        //根据要显示的文案的宽度和高度，设置点九图的尺寸
        var toastSp= GamePub.createPointNineSpriteForPlist("res/toast_bg.png", 20, 90, msg.width+ 50, msg.height+ 20);
        toastSp.setPosition(cc.winSize.width* 0.5, cc.winSize.height* 0.35);
        msg.setPosition(toastSp.getContentSize().width* 0.5, toastSp.getContentSize().height* 0.5);
        toastSp.addChild(msg);

        toastSp.setTag(1);
        this.m_arrToast.push(toastSp);
        this.m_arrCloseTime.push(params.time+ Common.getServerTime());

        this.m_view.addChild(toastSp);
    },
    //上移&&不透明度逐渐降低
    toastMoveUp:function(index){
        var scale1= cc.scaleTo(0.2, 1.1);
        var scale2= cc.scaleTo(0.1, 1);

        var moveTo= cc.moveTo(0.3, this.showViewX, this.showViewY+ index* this.MaxHeight);
        var time= this.getToastCloseTime(index)- this.slowDisappearTime;
        var delay= cc.delayTime(time);
        var fadeOut= cc.fadeOut(this.slowDisappearTime);
        var self= this;

        var seq= null;
        if(index==0){
            seq= cc.sequence(scale1, scale2, moveTo, delay, fadeOut, cc.callFunc(function(pSender){
                Common.judgeValueIsEffect(self.m_arrToast[index])&&self.m_arrToast[index].setTag(-1);
                self.removeElements();
            }));
        }else{
            seq= cc.sequence(moveTo, delay, fadeOut, cc.callFunc(function(pSender){
                Common.judgeValueIsEffect(self.m_arrToast[index])&&self.m_arrToast[index].setTag(-1);
                self.removeElements();
            }));
        }
        self.m_arrToast[index].runAction(seq);
    },
    removeElements:function(){
        for(var i=0; i< this.m_arrToast.length; ++i){
            if(this.m_arrToast[i].getTag()== -1){
                this.m_arrToast[i].removeFromParent(true);
                this.m_arrToast.splice(i, 1);
                this.m_arrCloseTime.splice(i, 1);
                i--;
            }
        }
        if(this.m_arrToast.length== 0){
            Common.judgeValueIsEffect(this.m_view)&&(this.m_view.removeFromParent(true));
            this.m_view= null;
        }
    },
    resetAllToastPosition:function(){
        for(var i=0; i< this.m_arrToast.length; ++i){
            if(i>= MOST_TOAST_NUM){
                this.removeOneElement(i);
            }else{
                this.m_arrToast[i].stopAllActions();
                this.m_arrToast[i].setScale(1);
                this.m_arrToast[i].setOpacity(255);
                this.m_arrToast[i].setPosition(cc.p(this.showViewX, this.showViewY+ (i- 1)* this.MaxHeight));
                this.toastMoveUp(i);
            }
        }
    },
    //移除某个元素
    removeOneElement:function(index){
        this.m_arrToast[index].removeFromParent(true);
        this.m_arrToast.splice(index, 1);
        this.m_arrCloseTime.splice(index, 1);
    },
    //获取toast显示的剩余时间
    getToastCloseTime:function(index){
        var time= this.m_arrCloseTime[index]- Common.getServerTime();
        if(time< this.slowDisappearTime){
            time= this.slowDisappearTime+ 0.1;
        }
        return time;
    }
};
var LoadingLogic= {
    view:null,//视图
    labelMsg:null,//加载中
    m_curActionTimers:0,//动画次数
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["Loading"]["Layer"]);
        
        this.initView();
    },
    
	initView:function(){
        this.labelMsg= cc.LabelTTF.create("玩命加载中", "微软雅黑", 36);
        this.labelMsg.setColor(cc.color(0, 255, 0));
        this.labelMsg.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* 0.5));
        this.view.addChild(this.labelMsg);

        this.m_curActionTimers= 0;
        var self= this;
        var seq= cc.sequence(cc.delayTime(0.5), cc.callFunc(function(pSender){
            self.m_curActionTimers++;
            self.m_curActionTimers= self.m_curActionTimers%4;
            if(!Common.judgeValueIsEffect(self.labelMsg)) return;
            self.labelMsg.setString(self.getMsg(self.m_curActionTimers));
        }));
        this.view.runAction(seq.repeatForever());
	},
    //更新文案
    getMsg:function(num){
        var msg= "玩命加载中";
        while(num--){
            msg+= ".";
        }
        return msg;
    },

    initLayer:function(){
        //适配方案 Pad加黑边
        this.view = cc.LayerColor.create(cc.color(255, 255, 255, 10));
        //添加监听事件，显示加载中时，下层不接受监听事件
        this.addTouchListener();
    },

    //安卓手机的返回键的监听事件
    onKeypad:function(event){
    	if(event == "backClicked"){//返回键

    	}else if(event == "menuClicked"){//菜单键

    	}
    },
    //添加信号
    addSlot:function(){
    	
    },
    //移除信号
    removeSlot:function(){
    	
    },
    
    //释放界面的私有数据
    releaseData:function(){
    
    },
    
    requestMsg:function(){
    
    },
    //添加触摸监听机制(点击、滑动)
    addTouchListener:function(){
        var self= this;
        self.listener= cc.EventListener.create({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,//点对点触摸
            swallowTouches:true,//是否吞噬其他监听事件
            onTouchBegan:self.onTouchBegan
        });
        cc.eventManager.addListener(self.listener, self.view);
    },
    //开始触摸
    onTouchBegan:function(touch, event){
        return true;
    }
};

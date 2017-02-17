/**
 * Func:图文Toast
 */
var ImageToast= {
    m_toastTable:{},
    m_view:null,
    //清空数据
    clearData:function(){
        this.m_toastTable= {};
        (Common.judgeValueIsEffect(this.m_view))&&this.m_view.removeFromParent(true);
    },
    createView:function(Imageurl, ImagePath, strTitle, strDetails, time){
        var params = {};
        params.Imageurl = Imageurl;
        params.ImagePath = ImagePath;
        params.strTitle = strTitle;
        params.strDetails = strDetails;
        params.time = time * 3;

        this.initData(params);//初始化数据
        if(Common.getTableSize(this.m_toastTable)== 1){
            this.showToast(params);//显示toast
        }
    },
    //初始化数据
    initData:function(params){
        this.m_toastTable[Common.getTableSize(this.m_toastTable)]= params;
    },
    //创建toast背景
    createLayerColor:function(){
        var scene= cc.director.getRunningScene();
        this.m_view= cc.LayerColor.create(cc.color(0,0,0, 100));
        scene.addChild(this.m_view);
    },
    //显示Toast
    showToast:function(params){
        var self= this;
        self.createLayerColor();//创建toast背景

        Load.LoadJsonOrPic(params.Imageurl,function(){
            var prizePic= cc.Sprite.create(params.Imageurl);
            prizePic.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* 0.4));
            self.m_view.addChild(prizePic);
        });

        var titleLabel= cc.LabelTTF.create(params.strTitle,"微软雅黑",24);
        titleLabel.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* 0.45));

        var destailsLabel= cc.LabelTTF.create(params.strDetails,"微软雅黑",24);
        destailsLabel.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* 0.35));

        self.m_view.addChild(titleLabel);
        self.m_view.addChild(destailsLabel);

        this.runAnimation(params);
    },
    runAnimation:function(params){
        var scaleBig= cc.scaleTo(0.2, 1.1);
        var scaleSmall= cc.scaleTo(0.1, 1.0);
        var delay= cc.delayTime(params.time/8);
        var spawn= cc.spawn(cc.moveBy(0, 50), cc.fadeOut(params.time/8));
        var seq= cc.sequence(scaleBig, scaleSmall, delay, spawn, cc.callFunc(this.removeMySelf));
        this.m_view.runAction(seq);
    },
    removeMySelf:function(){
        (Common.judgeValueIsEffect(ImageToast.m_view))&&ImageToast.m_view.removeFromParent(true);
        ImageToast.m_toastTable= Common.removeFirstElement(ImageToast.m_toastTable);
        if(Common.getTableSize(ImageToast.m_toastTable)> 0){
            ImageToast.showToast(Common.getFirstElement(ImageToast.m_toastTable));
        }
    }
};
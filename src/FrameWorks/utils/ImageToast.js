/**
 * Func:图文Toast
 *      使用UI工程，来创建图文Toast
 */
var ImageToast= {
    m_toastTable:{},
    m_view:null,
    //清空数据
    clearData:function(){
        this.m_toastTable= {};
        (Common.judgeValueIsEffect(this.m_view))&&this.m_view.removeFromParent(true);
    },
    //预加载资源
    preLoad:function(params){
        var arrRes= [
            Common.getJinHuaResourcePath("menghei2_hall_gengduo_ic.png"),
            Common.getJinHuaResourcePath("px1.png"),
            Common.getJinHuaResourcePath("ui_liangdian.png"),
            Common.getJinHuaResourcePath("ReceiveItem.json"),
            params.Imageurl
        ];
        (Common.judgeValueIsEffect(params.ImagePath))&&arrRes.push(params.ImagePath);

        var self= this;
        Load.LoadJsonOrPic(arrRes, function(){
            self.initData(params);//初始化数据
        })
    },
    createView:function(Imageurl, ImagePath, strTitle, strDetails, time){
        var params = {};
        params.Imageurl = Imageurl;
        params.ImagePath = ImagePath;
        params.strTitle = strTitle;
        params.strDetails = strDetails;
        params.time = time * 3;

        this.preLoad(params);//预加载资源
    },
    //初始化数据
    initData:function(params){
        this.m_toastTable[Common.getTableSize(this.m_toastTable)]= params;

        if(Common.getTableSize(this.m_toastTable)== 1){
            this.showToast(params);//显示toast
        }
    },
    //创建View
    create:function(){
        this.m_view= CocoStudio.createView(Common.getJinHuaResourcePath("ReceiveItem.json"));
        MvcEngine.getRootNode().addChild(this.m_view);
    },
    //显示Toast
    showToast:function(params){
        var self= this;
        self.create();//创建toast背景

        var ImageWindow = CocoStudio.getComponent(this.m_view,"ImageView_35");
        var ImageView = CocoStudio.getComponent(this.m_view, "ImageView_TuPian");

        Load.LoadJsonOrPic(params.Imageurl,function(){
            ImageView.loadTexture(params.Imageurl);
        });

        ImageWindow.setScale(0);

        var titleLabel= CocoStudio.getComponent(this.m_view, "Label_ShuZhi");
        titleLabel.setString(params.strTitle);

        var destailsLabel= CocoStudio.getComponent(this.m_view, "Label_24");
        destailsLabel.setString(params.strDetails);

        this.runAnimation(params);
    },
    runAnimation:function(params){
        var scaleBig= cc.scaleTo(0.2, 1.1);
        var scaleSmall= cc.scaleTo(0.1, 1.0);
        var delay= cc.delayTime(params.time/8);
        var spawn= cc.spawn(cc.moveBy(0, 50), cc.fadeOut(params.time/8));
        var seq= cc.sequence(scaleBig, scaleSmall, delay, spawn, cc.callFunc(this.removeMySelf));

        var ImageWindow = CocoStudio.getComponent(this.m_view,"ImageView_35");
        ImageWindow.runAction(seq);
    },
    removeMySelf:function(){
        (Common.judgeValueIsEffect(ImageToast.m_view))&&ImageToast.m_view.removeFromParent(true);
        ImageToast.m_toastTable= Common.removeFirstElement(ImageToast.m_toastTable);
        if(Common.getTableSize(ImageToast.m_toastTable)> 0){
            ImageToast.showToast(Common.getFirstElement(ImageToast.m_toastTable));
        }
    }
};
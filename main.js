cc.game.onStart = function(){
    
    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(960, 640,cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);
    //初始化WbSocket
    Network.getInstance().initNetwork();
    //加载完毕之后
    MvcEngine.getInstance().init();
    MvcEngine.getInstance().setNeedCreateModuleName(GUI_LOGIN);//创建Table
};
cc.game.run();

//有时候资源加载的Label显示不出来的原因是:UI工程导出的Json问题
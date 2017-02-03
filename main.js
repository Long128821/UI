//获取连接中的Code
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

cc.game.onStart = function(){
    if(!cc.sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
        document.body.removeChild(document.getElementById("cocosLoading"));

    cc.view.enableRetina(cc.sys.os === cc.sys.OS_IOS ? true : false);
    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(568, 320, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);

    //自动登录——初始化WbSocket
    Network.getInstance().initNetwork();

    //加载完毕之后
    MvcEngine.init();
    var access_code= getQueryString('code');
    alert("access_code=" + access_code);
    //创建Table
    if(access_code== null||access_code== undefined){
        MvcEngine.createModule(GUI_LOGIN);
    }else{
        sendBASEID_THIRD_PART_PLAT_LOGIN(access_code, "", 15, "", "");
        MvcEngine.createModule(GUI_HALL);
    }
};
cc.game.run();
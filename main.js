cc.game.onStart = function(){
    
    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(960, 640,cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);
    //初始化WbSocket
    Network.getInstance().initNetwork();
    //加载完毕之后
    MvcEngine.init();
    MvcEngine.createModule(GUI_LOGIN);//创建Table
};
cc.game.run();

//有时候资源加载的Label显示不出来的原因是:UI工程导出的Json问题

///**
// *
// * @type {number[]}
// */
//var arr= [1, 2, 2, 3, 2];
//for(var i= 0; i< arr.length; ++i){
//    if(arr[i]== 2){
//        arr.splice(i, 1);
//        i--;
//    }
//    console.log(arr.join("-"));
//}
//console.log(arr.join("-"));
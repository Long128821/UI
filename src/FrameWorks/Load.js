/******Table中所需要的资源(文件、图片、音频)，实现异步加载*********/
var Load= {
    m_index:0,//加载完毕项
    m_callBack:null,//加载回调
    //加载某一个页面的所需要的JS文件
    LoadRes:function(needCreateModuleName, callback){
        this.m_index= 0;
        this.m_callBack= callback== undefined?null:callback;

        this.LoadJs(needCreateModuleName);
        this.LoadJson(needCreateModuleName);
    },
    //加载某一个页面的所需要的JS文件
    LoadJs:function(needCreateModuleName){
        //没有校验的原因是，有些场景可能已经加载过了
        var jsLists= g_ModuleTable[needCreateModuleName]["jsLists"];

        var self= this;
        //所需要的文件，异步下载，所以只能等到加载完毕之后
        cc.loader.loadJs(jsLists,function(msg){
            self.LoadingProgress();
        });
    },
    //加载UI工程
    LoadJson:function(needCreateModuleName){
        //没有校验的原因是，有些场景可能已经加载过了
        var resLists= g_ModuleTable[needCreateModuleName]["resLists"];
        var self= this;
        cc.loader.load(resLists,
            function (result, count, loadedCount) {
                //加载中
            }, function () {
                //加载完成
                self.LoadingProgress();
            });
    },
    LoadingProgress:function(){
        this.m_index++;
        //需要加载的一共两项，JS文件和图片、音效等资源
        if((this.m_index== 2)&&(this.m_callBack!=null)){
            //此处为什么不立即跳转，需要停留一毫秒进行跳转？
            //测试时，如果不停留一毫秒，有些资源 有时 会缺失，例如:文本、TextFiled
            setTimeout(this.m_callBack, 1);
        }
    }
};
//同意用户协议
var webViewURL= "http://f.99sai.com/lord/ServiceTerm.html";

var UserAgreementLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	Panel_webview:null,
	Panel:null,
	btn_close:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["UserAgreement"]["Layer"]);

        this.initView();

        this.showWebView();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.Panel_webview = CocoStudio.getComponent(this.view, "Panel_webview");//Panel
		this.Panel = CocoStudio.getComponent(this.view, "Panel");//Panel
		this.btn_close = CocoStudio.getComponent(this.view, "btn_close");//Button
	},

    initLayer:function(){
		var gui = GUI_USERAGREEMENT;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/UserAgreement.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/UserAgreement.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/UserAgreement.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}
	},
    //显示WebView
    showWebView:function(){
        var webView = new ccui.WebView(webViewURL);
        var size= this.Panel_webview.getContentSize();
        webView.setContentSize(size);
        webView.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* 0.5));
        //移除原有的webView
        //获取bgColor(this.Panel_webview._color)
        //设置背景色
        webView._renderCmd._div.style["background"]= "rgb(56, 0, 38)";

        this.view.addChild(webView);
    },
    
	callback_btn_close:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_USERAGREEMENT);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
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
    
    }
};

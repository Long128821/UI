var UserAgreementLogic= cc.Layer.extend({
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	Panel_webview:null,
	Panel:null,
	btn_close:null,
	
    ctor:function(){
        this._super();
    },

    createView:function(){
    	this.initLayer();
        
        //this.view.setTag(getDiffTag());
        
        this.initView();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");
		this.Panel_webview = CocoStudio.getComponent(this.view, "Panel_webview");
		this.Panel = CocoStudio.getComponent(this.view, "Panel");
		this.btn_close = CocoStudio.getComponent(this.view, "btn_close");
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
    
	callback_btn_close:function(type){
		if(type == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(type == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(type == ccui.Widget.TOUCH_CANCELED){
			//取消
		}
	},


    
    onKeypad:function(event){
    	if(event == "backClicked"){//返回键
    		
    	}else if(event == "menuClicked"){//菜单键
    	
    	}
    },
    
    addSlot:function(){
    	
    },
    
    removeSlot:function(){
    	
    },
    
    //释放界面的私有数据
    releaseData:function(){
    
    },
    
    requestMsg:function(){
    
    }
});


UserAgreementLogic= new UserAgreementLogic();

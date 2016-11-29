var DeleteUserLogic= cc.Layer.extend({
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	panel:null,
	lab_text:null,
	btn_close:null,
	btn_go:null,
	img_ok:null,
	
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
		this.panel = CocoStudio.getComponent(this.view, "panel");
		this.lab_text = CocoStudio.getComponent(this.view, "lab_text");
		this.btn_close = CocoStudio.getComponent(this.view, "btn_close");
		this.btn_go = CocoStudio.getComponent(this.view, "btn_go");
		this.img_ok = CocoStudio.getComponent(this.view, "img_ok");
	},

    initLayer:function(){
		var gui = GUI_DELETEUSER;
        this.view = CocoStudio.createView("res/DeleteUser.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/DeleteUser.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/DeleteUser.json");
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

	callback_btn_go:function(type){
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


DeleteUserLogic= new DeleteUserLogic();

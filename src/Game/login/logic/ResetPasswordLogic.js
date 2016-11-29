var ResetPasswordLogic= cc.Layer.extend({
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	Panel:null,
	Label_phonenum:null,
	txt_phonenum:null,
	ImageView_nickBg:null,
	btn_more:null,
	Image_more:null,
	Image_moreup:null,
	Label_username:null,
	txt_username:null,
	btn_commit:null,
	btn_cancel:null,
	
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
		this.Panel = CocoStudio.getComponent(this.view, "Panel");
		this.Label_phonenum = CocoStudio.getComponent(this.view, "Label_phonenum");
		this.txt_phonenum = CocoStudio.getComponent(this.view, "txt_phonenum");
		this.ImageView_nickBg = CocoStudio.getComponent(this.view, "ImageView_nickBg");
		this.btn_more = CocoStudio.getComponent(this.view, "btn_more");
		this.Image_more = CocoStudio.getComponent(this.view, "Image_more");
		this.Image_moreup = CocoStudio.getComponent(this.view, "Image_moreup");
		this.Label_username = CocoStudio.getComponent(this.view, "Label_username");
		this.txt_username = CocoStudio.getComponent(this.view, "txt_username");
		this.btn_commit = CocoStudio.getComponent(this.view, "btn_commit");
		this.btn_cancel = CocoStudio.getComponent(this.view, "btn_cancel");
	},

    initLayer:function(){
		var gui = GUI_RESETPASSWORD;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/ResetPassword.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/ResetPassword.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/ResetPassword.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}
	},
    
	callback_btn_more:function(type){
		if(type == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(type == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(type == ccui.Widget.TOUCH_CANCELED){
			//取消
		}
	},

	callback_btn_commit:function(type){
		if(type == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(type == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(type == ccui.Widget.TOUCH_CANCELED){
			//取消
		}
	},

	callback_btn_cancel:function(type){
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


ResetPasswordLogic= new ResetPasswordLogic();

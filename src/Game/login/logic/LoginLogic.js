var LoginLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	btn_weixin_login:null,
	btn_olduser_login:null,
	btn_reg:null,
	text_login:null,
	check_agree:null,
	img_bg:null,
	ImageView_ip:null,
	btn_setIp:null,
	lable_ip_text:null,
	Label_imei:null,
	btn_showLog:null,
	Image_logo:null,
	Panel_login:null,
	text_resetpass:null,
	btn_more:null,
	ImageView_username:null,
	ImageView_password:null,
	btn_login:null,
	Button_login_close:null,
	
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
		this.btn_weixin_login = CocoStudio.getComponent(this.view, "btn_weixin_login");
		this.btn_olduser_login = CocoStudio.getComponent(this.view, "btn_olduser_login");
		this.btn_reg = CocoStudio.getComponent(this.view, "btn_reg");
		this.text_login = CocoStudio.getComponent(this.view, "text_login");
		this.check_agree = CocoStudio.getComponent(this.view, "check_agree");
		this.img_bg = CocoStudio.getComponent(this.view, "img_bg");
		this.ImageView_ip = CocoStudio.getComponent(this.view, "ImageView_ip");
		this.btn_setIp = CocoStudio.getComponent(this.view, "btn_setIp");
		this.lable_ip_text = CocoStudio.getComponent(this.view, "lable_ip_text");
		this.Label_imei = CocoStudio.getComponent(this.view, "Label_imei");
		this.btn_showLog = CocoStudio.getComponent(this.view, "btn_showLog");
		this.Image_logo = CocoStudio.getComponent(this.view, "Image_logo");
		this.Panel_login = CocoStudio.getComponent(this.view, "Panel_login");
		this.text_resetpass = CocoStudio.getComponent(this.view, "text_resetpass");
		this.btn_more = CocoStudio.getComponent(this.view, "btn_more");
		this.ImageView_username = CocoStudio.getComponent(this.view, "ImageView_username");
		this.ImageView_password = CocoStudio.getComponent(this.view, "ImageView_password");
		this.btn_login = CocoStudio.getComponent(this.view, "btn_login");
		this.Button_login_close = CocoStudio.getComponent(this.view, "Button_login_close");
	},

    initLayer:function(){
		var gui = GUI_LOGIN;
        //适配方案 1136x640
        this.view = CocoStudio.createView("res/Login.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
        //Todo:适配方案
        /*
		if(GameConfig.RealProportion >= GameConfig.SCREEN_PROPORTION_GREAT){
			//适配方案 1136x640
			this.view = CocoStudio.createView("res/Login.json");
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 Pad加黑边
			this.view = CocoStudio.createView("res/Login.json");
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
		}else if((GameConfig.RealProportion < GameConfig.SCREEN_PROPORTION_GREAT) && (GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL)){
			//适配方案 960x640
			this.view = CocoStudio.createView("res/Login_960_640.json");
			GameConfig.setCurrentScreenResolution(this.view, gui, 960, 640, cc.ResolutionPolicy.EXACT_FIT);
		}
		*/
	},
    
	callback_btn_weixin_login:function(type){
		if(type == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(type == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(type == ccui.Widget.TOUCH_CANCELED){
			//取消
		}
	},

	callback_btn_olduser_login:function(type){
		if(type == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(type == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(type == ccui.Widget.TOUCH_CANCELED){
			//取消
		}
	},

	callback_btn_reg:function(type){
		if(type == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(type == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(type == ccui.Widget.TOUCH_CANCELED){
			//取消
		}
	},

	callback_text_login:function(type){
		if(type == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(type == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(type == ccui.Widget.TOUCH_CANCELED){
			//取消
		}
	},

	callback_btn_setIp:function(type){
		if(type == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(type == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(type == ccui.Widget.TOUCH_CANCELED){
			//取消
		}
	},

	callback_btn_showLog:function(type){
		if(type == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(type == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(type == ccui.Widget.TOUCH_CANCELED){
			//取消
		}
	},

	callback_text_resetpass:function(type){
		if(type == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(type == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(type == ccui.Widget.TOUCH_CANCELED){
			//取消
		}
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

	callback_btn_login:function(type){
		if(type == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(type == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(type == ccui.Widget.TOUCH_CANCELED){
			//取消
		}
	},

	callback_Button_login_close:function(type){
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
};

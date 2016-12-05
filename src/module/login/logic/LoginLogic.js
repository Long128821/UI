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
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["Login"]["Layer"]);
        
        this.initView();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.btn_weixin_login = CocoStudio.getComponent(this.view, "btn_weixin_login");//Button
		this.btn_olduser_login = CocoStudio.getComponent(this.view, "btn_olduser_login");//Button
		this.btn_reg = CocoStudio.getComponent(this.view, "btn_reg");//Button
		this.text_login = CocoStudio.getComponent(this.view, "text_login");//ImageView
		this.check_agree = CocoStudio.getComponent(this.view, "check_agree");//CheckBox
		this.img_bg = CocoStudio.getComponent(this.view, "img_bg");//ImageView
		this.ImageView_ip = CocoStudio.getComponent(this.view, "ImageView_ip");//ImageView
		this.btn_setIp = CocoStudio.getComponent(this.view, "btn_setIp");//Button
		this.lable_ip_text = CocoStudio.getComponent(this.view, "lable_ip_text");//Label
		this.Label_imei = CocoStudio.getComponent(this.view, "Label_imei");//Label
		this.btn_showLog = CocoStudio.getComponent(this.view, "btn_showLog");//Button
		this.Image_logo = CocoStudio.getComponent(this.view, "Image_logo");//ImageView
		this.Panel_login = CocoStudio.getComponent(this.view, "Panel_login");//Panel
		this.text_resetpass = CocoStudio.getComponent(this.view, "text_resetpass");//ImageView
		this.btn_more = CocoStudio.getComponent(this.view, "btn_more");//ImageView
		this.ImageView_username = CocoStudio.getComponent(this.view, "ImageView_username");//ImageView
		this.ImageView_password = CocoStudio.getComponent(this.view, "ImageView_password");//ImageView
		this.btn_login = CocoStudio.getComponent(this.view, "btn_login");//Button
		this.Button_login_close = CocoStudio.getComponent(this.view, "Button_login_close");//Button
	},

    initLayer:function(){
		var gui = GUI_LOGIN; 
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
	},
    
	callback_btn_weixin_login:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            //MvcEngine.createModule(GUI_USERAGREEMENT);
            sendBASEID_LOGIN(ProfileLogin.getLoginUserName(), ProfileLogin.getLoginPassword());
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_olduser_login:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_reg:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_text_login:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_setIp:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_showLog:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_text_resetpass:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_more:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_login:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_login_close:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

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
    	Frameworks.addSlot2Signal(BASEID_LOGIN, ProfileLogin.loginManage);
    },
    //移除信号
    removeSlot:function(){
    	Frameworks.removeSlotFromSignal(BASEID_LOGIN, ProfileLogin.loginManage);
    },
    
    //释放界面的私有数据
    releaseData:function(){
    
    },
    
    requestMsg:function(){
    
    }
};

var ResetPasswordLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	Panel_66:null,
	btn_cancel:null,
	btn_commit:null,
	btn_more:null,
	label_username:null,
	txt_username:null,
	label_password:null,
	txt_phonenum:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["ResetPassword"]["Layer"]);
        
        this.initView();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.Panel_66 = CocoStudio.getComponent(this.view, "Panel_66");//Panel
		this.btn_cancel = CocoStudio.getComponent(this.view, "btn_cancel");//Button
		this.btn_commit = CocoStudio.getComponent(this.view, "btn_commit");//Button
		this.btn_more = CocoStudio.getComponent(this.view, "btn_more");//Button
		this.label_username = CocoStudio.getComponent(this.view, "label_username");//Label
		this.txt_username = CocoStudio.getComponent(this.view, "txt_username");//TextField
		this.label_password = CocoStudio.getComponent(this.view, "label_password");//Label
		this.txt_phonenum = CocoStudio.getComponent(this.view, "txt_phonenum");//TextField
	},

    initLayer:function(){
		var gui = GUI_RESETPASSWORD; 
		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 1136x640  
			this.view = CocoStudio.createView("res/ResetPassword.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT); 
		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 Pad加黑边  
			this.view = CocoStudio.createView("res/ResetPassword.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL); 
		}
	},
    
	callback_btn_cancel:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_commit:function(pSender, event){
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

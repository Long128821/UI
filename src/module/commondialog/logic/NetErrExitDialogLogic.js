var NetErrExitDialogLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	panel:null,
	android:null,
	btn_logout:null,
	btn_exit:null,
	ios:null,
	btn_logout_ios:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["NetErrExitDialog"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.panel = CocoStudio.getComponent(this.view, "panel");//Panel
		this.android = CocoStudio.getComponent(this.view, "android");//Panel
		this.btn_logout = CocoStudio.getComponent(this.view, "btn_logout");//Button
		this.btn_exit = CocoStudio.getComponent(this.view, "btn_exit");//Button
		this.ios = CocoStudio.getComponent(this.view, "ios");//Panel
		this.btn_logout_ios = CocoStudio.getComponent(this.view, "btn_logout_ios");//Button
	},

    initLayer:function(){
		var gui = GUI_NETERREXITDIALOG;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/NetErrExitDialog.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
    },
    
	callback_btn_logout:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MessageCenter.reConnect();
            MvcEngine.destroyModule(GUI_NETERREXITDIALOG);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_exit:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_NETERREXITDIALOG);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_logout_ios:function(pSender, event){
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
    
    },
    //初始化界面
    initData:function(){
        this.btn_logout_ios.setVisible(false);
    }
};

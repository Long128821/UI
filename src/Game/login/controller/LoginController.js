var LoginController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        LoginLogic.view= null;
    },

    getLayer:function(){
        return LoginLogic.view;
    },

    createView:function(){
        LoginLogic.createView();
        //framework.setOnKeypadEventListener(LoginLogic.view, LoginLogic.onKeypad);
    },
    
    requestMsg:function(){
    	LoginLogic.requestMsg();
    },
    
    addSlot:function(){
    	LoginLogic.addSlot();
    },

	removeSlot:function(){
		LoginLogic.removeSlot();
	},
    
    addCallback:function(){
//		framework.bindEventCallback(CocoStudio.getComponent(LoginLogic.view,"btn_weixin_login"), LoginLogic.callback_btn_weixin_login, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
//		framework.bindEventCallback(CocoStudio.getComponent(LoginLogic.view,"btn_olduser_login"), LoginLogic.callback_btn_olduser_login, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
//		framework.bindEventCallback(CocoStudio.getComponent(LoginLogic.view,"btn_reg"), LoginLogic.callback_btn_reg, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
//		framework.bindEventCallback(CocoStudio.getComponent(LoginLogic.view,"text_login"), LoginLogic.callback_text_login, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
//		framework.bindEventCallback(CocoStudio.getComponent(LoginLogic.view,"btn_setIp"), LoginLogic.callback_btn_setIp, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
//		framework.bindEventCallback(CocoStudio.getComponent(LoginLogic.view,"btn_showLog"), LoginLogic.callback_btn_showLog, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
//		framework.bindEventCallback(CocoStudio.getComponent(LoginLogic.view,"text_resetpass"), LoginLogic.callback_text_resetpass, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
//		framework.bindEventCallback(CocoStudio.getComponent(LoginLogic.view,"btn_more"), LoginLogic.callback_btn_more, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
//		framework.bindEventCallback(CocoStudio.getComponent(LoginLogic.view,"btn_login"), LoginLogic.callback_btn_login, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
//		framework.bindEventCallback(CocoStudio.getComponent(LoginLogic.view,"Button_login_close"), LoginLogic.callback_Button_login_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    
    removeCallback:function(){
//		framework.unbindEventCallback(CocoStudio.getComponent(LoginLogic.view,"btn_weixin_login"), LoginLogic.callback_btn_weixin_login, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
//		framework.unbindEventCallback(CocoStudio.getComponent(LoginLogic.view,"btn_olduser_login"), LoginLogic.callback_btn_olduser_login, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
//		framework.unbindEventCallback(CocoStudio.getComponent(LoginLogic.view,"btn_reg"), LoginLogic.callback_btn_reg, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
//		framework.unbindEventCallback(CocoStudio.getComponent(LoginLogic.view,"text_login"), LoginLogic.callback_text_login, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
//		framework.unbindEventCallback(CocoStudio.getComponent(LoginLogic.view,"btn_setIp"), LoginLogic.callback_btn_setIp, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
//		framework.unbindEventCallback(CocoStudio.getComponent(LoginLogic.view,"btn_showLog"), LoginLogic.callback_btn_showLog, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
//		framework.unbindEventCallback(CocoStudio.getComponent(LoginLogic.view,"text_resetpass"), LoginLogic.callback_text_resetpass, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
//		framework.unbindEventCallback(CocoStudio.getComponent(LoginLogic.view,"btn_more"), LoginLogic.callback_btn_more, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
//		framework.unbindEventCallback(CocoStudio.getComponent(LoginLogic.view,"btn_login"), LoginLogic.callback_btn_login, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
//		framework.unbindEventCallback(CocoStudio.getComponent(LoginLogic.view,"Button_login_close"), LoginLogic.callback_Button_login_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    
    setModuleLayer:function(moduleLayer){
    	this.moduleLayer = moduleLayer;
	},

	getModuleLayer:function(moduleLayer){
		return this.moduleLayer;
	},
    
    sleepModule:function(){
		//framework.releaseOnKeypadEventListener(LoginLogic.view);
		LoginLogic.view.setTouchEnabled(false);
		//framework.emit(signal.common.Signal_SleepModule_Done);
    },

    wakeModule:function(){
        LoginLogic.view.setTouchEnabled(true);
    },

    destroyModule:function(){
        //framework.releaseOnKeypadEventListener(LoginLogic.view);
		this.destroy();

//		if(destroyType == DESTORY_TYPE_EFFECT){
//			//不销毁数据
//		}else if(destroyType == DESTORY_TYPE_CLEAN){
//			//销毁数据
//			framework.moduleCleanUp(LoginLogic);
//			LoginLogic.releaseData();
//		}
	
		LoginLogic.view.removeFromParentAndCleanup(true);
		this.reset();
	
		//framework.emit(signal.common.Signal_DestroyModule_Done);
    }
});

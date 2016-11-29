var UserAgreementController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        UserAgreementLogic.view= null;
    },

    getLayer:function(){
        return UserAgreementLogic.view;
    },

    createView:function(){
        UserAgreementLogic.createView();
        //framework.setOnKeypadEventListener(UserAgreementLogic.view, UserAgreementLogic.onKeypad);
    },
    
    requestMsg:function(){
    	UserAgreementLogic.requestMsg();
    },
    
    addSlot:function(){
    	UserAgreementLogic.addSlot();
    },

	removeSlot:function(){
		UserAgreementLogic.removeSlot();
	},
    
    addCallback:function(){
		//framework.bindEventCallback(CocoStudio.getComponent(UserAgreementLogic.view,"btn_close"), UserAgreementLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    
    removeCallback:function(){
		//framework.unbindEventCallback(CocoStudio.getComponent(UserAgreementLogic.view,"btn_close"), UserAgreementLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    
    setModuleLayer:function(moduleLayer){
    	this.moduleLayer = moduleLayer;
	},

	getModuleLayer:function(moduleLayer){
		return this.moduleLayer;
	},
    
    sleepModule:function(){
		//framework.releaseOnKeypadEventListener(UserAgreementLogic.view);
		UserAgreementLogic.view.setTouchEnabled(false);
		//framework.emit(signal.common.Signal_SleepModule_Done);
    },

    wakeModule:function(){
    	//framework.setOnKeypadEventListener(UserAgreementLogic.view, UserAgreementLogic.onKeypad);
        UserAgreementLogic.view.setTouchEnabled(true);
    },

    destroyModule:function(){
        //framework.releaseOnKeypadEventListener(UserAgreementLogic.view);
		this.destroy();

//		if(destroyType == DESTORY_TYPE_EFFECT){
//			//不销毁数据
//		}else if(destroyType == DESTORY_TYPE_CLEAN){
//			//销毁数据
//			framework.moduleCleanUp(UserAgreementLogic);
//			UserAgreementLogic.releaseData();
//		}
	
		UserAgreementLogic.view.removeFromParentAndCleanup(true);
		this.reset();
	
		//framework.emit(signal.common.Signal_DestroyModule_Done);
    }
});

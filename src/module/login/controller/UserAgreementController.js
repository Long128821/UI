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
        //Frameworks.setOnKeypadEventListener(UserAgreementLogic.view, UserAgreementLogic.onKeypad);
    },
    
    requestMsg:function(){
    	UserAgreementLogic.requestMsg();
    },
    
    addSlot:function(){
    	UserAgreementLogic.addSlot();
    },

	removeSlot:function(){
		UserAgreementLogic.Slot();
	},
    
    addCallback:function(){
		Frameworks.bindEventCallback(CocoStudio.getComponent(UserAgreementLogic.view,"btn_close"), UserAgreementLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(UserAgreementLogic.view,"btn_close"), UserAgreementLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    
    setModuleLayer:function(moduleLayer){
    	this.moduleLayer = moduleLayer;
	},

	getModuleLayer:function(moduleLayer){
		return this.moduleLayer;
	},
    
    sleepModule:function(){
		//Frameworks.releaseOnKeypadEventListener(UserAgreementLogic.view);
		UserAgreementLogic.view.setTouchEnabled(false);
		Frameworks.emit(signal.common.Signal_SleepModule_Done);
    },

    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(UserAgreementLogic.view, UserAgreementLogic.onKeypad);
        UserAgreementLogic.view.setTouchEnabled(true);
        this.addCallback();
    },

    destroyModule:function(){
        //Frameworks.releaseOnKeypadEventListener(UserAgreementLogic.view);
		this.destroy();

		if(destroyType == DESTORY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTORY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(UserAgreementLogic);
			UserAgreementLogic.releaseData();
		}
	
		UserAgreementLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(signal.common.Signal_DestroyModule_Done);
    }
});

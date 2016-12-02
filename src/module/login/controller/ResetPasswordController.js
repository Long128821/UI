var ResetPasswordController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        ResetPasswordLogic.view= null;
    },

    getLayer:function(){
        return ResetPasswordLogic.view;
    },

    createView:function(){
        ResetPasswordLogic.createView();
        //Frameworks.setOnKeypadEventListener(ResetPasswordLogic.view, ResetPasswordLogic.onKeypad);
    },
    
    requestMsg:function(){
    	ResetPasswordLogic.requestMsg();
    },
    
    addSlot:function(){
    	ResetPasswordLogic.addSlot();
    },

	removeSlot:function(){
		ResetPasswordLogic.removeSlot();
	},
    
    addCallback:function(){
		Frameworks.bindEventCallback(CocoStudio.getComponent(ResetPasswordLogic.view,"btn_cancel"), ResetPasswordLogic.callback_btn_cancel, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback(CocoStudio.getComponent(ResetPasswordLogic.view,"btn_commit"), ResetPasswordLogic.callback_btn_commit, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback(CocoStudio.getComponent(ResetPasswordLogic.view,"btn_more"), ResetPasswordLogic.callback_btn_more, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
    },
    
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(ResetPasswordLogic.view,"btn_cancel"), ResetPasswordLogic.callback_btn_cancel, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(ResetPasswordLogic.view,"btn_commit"), ResetPasswordLogic.callback_btn_commit, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(ResetPasswordLogic.view,"btn_more"), ResetPasswordLogic.callback_btn_more, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
    },
    
    setModuleLayer:function(moduleLayer){
    	this.moduleLayer = moduleLayer;
	},

	getModuleLayer:function(moduleLayer){
		return this.moduleLayer;
	},
    
    sleepModule:function(){
		//Frameworks.releaseOnKeypadEventListener(ResetPasswordLogic.view);
		ResetPasswordLogic.view.setTouchEnabled(false);
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },

    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(ResetPasswordLogic.view, ResetPasswordLogic.onKeypad);
        ResetPasswordLogic.view.setTouchEnabled(true);
        this.addCallback();
    },

    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(ResetPasswordLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(ResetPasswordLogic);
			ResetPasswordLogic.releaseData();
		}
	
		ResetPasswordLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});

var DeleteUserController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        DeleteUserLogic.view= null;
    },

    getLayer:function(){
        return DeleteUserLogic.view;
    },

    createView:function(){
        DeleteUserLogic.createView();
        //framework.setOnKeypadEventListener(DeleteUserLogic.view, DeleteUserLogic.onKeypad);
    },
    
    requestMsg:function(){
    	DeleteUserLogic.requestMsg();
    },
    
    addSlot:function(){
    	DeleteUserLogic.addSlot();
    },

	removeSlot:function(){
		DeleteUserLogic.removeSlot();
	},
    
    addCallback:function(){
//		framework.bindEventCallback(CocoStudio.getComponent(DeleteUserLogic.view,"btn_close"), DeleteUserLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
//		framework.bindEventCallback(CocoStudio.getComponent(DeleteUserLogic.view,"btn_go"), DeleteUserLogic.callback_btn_go, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    
    removeCallback:function(){
//		framework.unbindEventCallback(CocoStudio.getComponent(DeleteUserLogic.view,"btn_close"), DeleteUserLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
//		framework.unbindEventCallback(CocoStudio.getComponent(DeleteUserLogic.view,"btn_go"), DeleteUserLogic.callback_btn_go, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    
    setModuleLayer:function(moduleLayer){
    	this.moduleLayer = moduleLayer;
	},

	getModuleLayer:function(moduleLayer){
		return this.moduleLayer;
	},
    
    sleepModule:function(){
//		framework.releaseOnKeypadEventListener(DeleteUserLogic.view);
		DeleteUserLogic.view.setTouchEnabled(false);
//		framework.emit(signal.common.Signal_SleepModule_Done);
    },

    wakeModule:function(){
//    	framework.setOnKeypadEventListener(DeleteUserLogic.view, DeleteUserLogic.onKeypad);
        DeleteUserLogic.view.setTouchEnabled(true);
    },

    destroyModule:function(){
//        framework.releaseOnKeypadEventListener(DeleteUserLogic.view);
		this.destroy();

//		if(destroyType == DESTORY_TYPE_EFFECT){
//			//不销毁数据
//		}else if(destroyType == DESTORY_TYPE_CLEAN){
//			//销毁数据
//			framework.moduleCleanUp(DeleteUserLogic);
//			DeleteUserLogic.releaseData();
//		}
	
		DeleteUserLogic.view.removeFromParentAndCleanup(true);
		this.reset();
	
//		framework.emit(signal.common.Signal_DestroyModule_Done);
    }
});

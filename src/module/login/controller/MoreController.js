var MoreController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        MoreLogic.view= null;
    },

    getLayer:function(){
        return MoreLogic.view;
    },

    createView:function(){
        MoreLogic.createView();
        //Frameworks.setOnKeypadEventListener(MoreLogic.view, MoreLogic.onKeypad);
    },
    
    requestMsg:function(){
    	MoreLogic.requestMsg();
    },
    
    addSlot:function(){
    	MoreLogic.addSlot();
    },

	removeSlot:function(){
		MoreLogic.removeSlot();
	},
    
    addCallback:function(){
		Frameworks.bindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Panel_main"), MoreLogic.callback_Panel_main, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Img_TopUser"), MoreLogic.callback_Img_TopUser, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Img_DeleteTopUser"), MoreLogic.callback_Img_DeleteTopUser, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Img_MiddleUser"), MoreLogic.callback_Img_MiddleUser, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Img_DeleteMiddleUser"), MoreLogic.callback_Img_DeleteMiddleUser, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Image_BottomUser"), MoreLogic.callback_Image_BottomUser, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Img_DeleteBottomUser"), MoreLogic.callback_Img_DeleteBottomUser, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
    },
    
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Panel_main"), MoreLogic.callback_Panel_main, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Img_TopUser"), MoreLogic.callback_Img_TopUser, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Img_DeleteTopUser"), MoreLogic.callback_Img_DeleteTopUser, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Img_MiddleUser"), MoreLogic.callback_Img_MiddleUser, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Img_DeleteMiddleUser"), MoreLogic.callback_Img_DeleteMiddleUser, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Image_BottomUser"), MoreLogic.callback_Image_BottomUser, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Img_DeleteBottomUser"), MoreLogic.callback_Img_DeleteBottomUser, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
    },
    
    setModuleLayer:function(moduleLayer){
    	this.moduleLayer = moduleLayer;
	},

	getModuleLayer:function(moduleLayer){
		return this.moduleLayer;
	},
    
    sleepModule:function(){
		//Frameworks.releaseOnKeypadEventListener(MoreLogic.view);
		MoreLogic.view.setTouchEnabled(false);
		Frameworks.emit(signal.common.Signal_SleepModule_Done);
    },

    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(MoreLogic.view, MoreLogic.onKeypad);
        MoreLogic.view.setTouchEnabled(true);
        this.addCallback();
    },

    destroyModule:function(){
        //Frameworks.releaseOnKeypadEventListener(MoreLogic.view);
		this.destroy();

		if(destroyType == DESTORY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTORY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(MoreLogic);
			MoreLogic.releaseData();
		}
	
		MoreLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(signal.common.Signal_DestroyModule_Done);
    }
});

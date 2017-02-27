var PresentGiftController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        PresentGiftLogic.view= null;
    },

    getLayer:function(){
        return PresentGiftLogic.view;
    },

    createView:function(){
        PresentGiftLogic.createView();
        //Frameworks.setOnKeypadEventListener(PresentGiftLogic.view, PresentGiftLogic.onKeypad);
    },
    
    requestMsg:function(){
    	PresentGiftLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	PresentGiftLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		PresentGiftLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
		Frameworks.bindEventCallback("PresentGiftLogic#", CocoStudio.getComponent(PresentGiftLogic.view,"Panel_2"), PresentGiftLogic.callback_Panel_2, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("PresentGiftLogic#", CocoStudio.getComponent(PresentGiftLogic.view,"Image_songliwu1"), PresentGiftLogic.callback_Image_songliwu1, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("PresentGiftLogic#", CocoStudio.getComponent(PresentGiftLogic.view,"Image_songliwu2"), PresentGiftLogic.callback_Image_songliwu2, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("PresentGiftLogic#", CocoStudio.getComponent(PresentGiftLogic.view,"Image_songliwu3"), PresentGiftLogic.callback_Image_songliwu3, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("PresentGiftLogic#", CocoStudio.getComponent(PresentGiftLogic.view,"Image_songliwu4"), PresentGiftLogic.callback_Image_songliwu4, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("PresentGiftLogic#", CocoStudio.getComponent(PresentGiftLogic.view,"Button_quxiao"), PresentGiftLogic.callback_Button_quxiao, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_IN);
    },
    //移除监听
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(PresentGiftLogic.view,"PresentGiftLogic#Panel_2"), PresentGiftLogic.callback_Panel_2, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(PresentGiftLogic.view,"PresentGiftLogic#Image_songliwu1"), PresentGiftLogic.callback_Image_songliwu1, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(PresentGiftLogic.view,"PresentGiftLogic#Image_songliwu2"), PresentGiftLogic.callback_Image_songliwu2, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(PresentGiftLogic.view,"PresentGiftLogic#Image_songliwu3"), PresentGiftLogic.callback_Image_songliwu3, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(PresentGiftLogic.view,"PresentGiftLogic#Image_songliwu4"), PresentGiftLogic.callback_Image_songliwu4, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(PresentGiftLogic.view,"PresentGiftLogic#Button_quxiao"), PresentGiftLogic.callback_Button_quxiao, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_IN);
    },
    
    setModuleLayer:function(moduleLayer){
    	this.moduleLayer = moduleLayer;
	},
	//层级
	getModuleLayer:function(moduleLayer){
		return this.moduleLayer;
	},
    //休眠
    sleepModule:function(){
		//Frameworks.releaseOnKeypadEventListener(PresentGiftLogic.view);
		PresentGiftLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
        MvcEngine.setCurActiveModuleName(GUI_PRESENTGIFT);
    	//Frameworks.setOnKeypadEventListener(PresentGiftLogic.view, PresentGiftLogic.onKeypad);
        PresentGiftLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(PresentGiftLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(PresentGiftLogic);
			PresentGiftLogic.releaseData();
		}
	
		PresentGiftLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});

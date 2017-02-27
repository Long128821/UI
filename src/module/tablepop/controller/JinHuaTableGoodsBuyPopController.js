var JinHuaTableGoodsBuyPopController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        JinHuaTableGoodsBuyPopLogic.view= null;
    },

    getLayer:function(){
        return JinHuaTableGoodsBuyPopLogic.view;
    },

    createView:function(){
        JinHuaTableGoodsBuyPopLogic.createView();
        //Frameworks.setOnKeypadEventListener(JinHuaTableGoodsBuyPopLogic.view, JinHuaTableGoodsBuyPopLogic.onKeypad);
    },
    
    requestMsg:function(){
    	JinHuaTableGoodsBuyPopLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	JinHuaTableGoodsBuyPopLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		JinHuaTableGoodsBuyPopLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
		Frameworks.bindEventCallback("JinHuaTableGoodsBuyPopLogic#", CocoStudio.getComponent(JinHuaTableGoodsBuyPopLogic.view,"Panel_14"), JinHuaTableGoodsBuyPopLogic.callback_Panel_14, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("JinHuaTableGoodsBuyPopLogic#", CocoStudio.getComponent(JinHuaTableGoodsBuyPopLogic.view,"btn_close"), JinHuaTableGoodsBuyPopLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableGoodsBuyPopLogic#", CocoStudio.getComponent(JinHuaTableGoodsBuyPopLogic.view,"btn_confirm"), JinHuaTableGoodsBuyPopLogic.callback_btn_confirm, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableGoodsBuyPopLogic.view,"JinHuaTableGoodsBuyPopLogic#Panel_14"), JinHuaTableGoodsBuyPopLogic.callback_Panel_14, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableGoodsBuyPopLogic.view,"JinHuaTableGoodsBuyPopLogic#btn_close"), JinHuaTableGoodsBuyPopLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableGoodsBuyPopLogic.view,"JinHuaTableGoodsBuyPopLogic#btn_confirm"), JinHuaTableGoodsBuyPopLogic.callback_btn_confirm, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
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
		//Frameworks.releaseOnKeypadEventListener(JinHuaTableGoodsBuyPopLogic.view);
		JinHuaTableGoodsBuyPopLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
        MvcEngine.setCurActiveModuleName(GUI_JINHUATABLEGOODSBUYPOP);
    	//Frameworks.setOnKeypadEventListener(JinHuaTableGoodsBuyPopLogic.view, JinHuaTableGoodsBuyPopLogic.onKeypad);
        JinHuaTableGoodsBuyPopLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(JinHuaTableGoodsBuyPopLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(JinHuaTableGoodsBuyPopLogic);
			JinHuaTableGoodsBuyPopLogic.releaseData();
		}
	
		JinHuaTableGoodsBuyPopLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});

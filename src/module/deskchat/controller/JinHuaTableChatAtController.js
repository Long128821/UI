var JinHuaTableChatAtController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        JinHuaTableChatAtLogic.view= null;
    },

    getLayer:function(){
        return JinHuaTableChatAtLogic.view;
    },

    createView:function(){
        JinHuaTableChatAtLogic.createView();
        //Frameworks.setOnKeypadEventListener(JinHuaTableChatAtLogic.view, JinHuaTableChatAtLogic.onKeypad);
    },
    
    requestMsg:function(){
    	JinHuaTableChatAtLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	JinHuaTableChatAtLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		JinHuaTableChatAtLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
		Frameworks.bindEventCallback("JinHuaTableChatAtLogic#", CocoStudio.getComponent(JinHuaTableChatAtLogic.view,"Panel_main"), JinHuaTableChatAtLogic.callback_Panel_main, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("JinHuaTableChatAtLogic#", CocoStudio.getComponent(JinHuaTableChatAtLogic.view,"Img_User4"), JinHuaTableChatAtLogic.callback_Img_User4, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("JinHuaTableChatAtLogic#", CocoStudio.getComponent(JinHuaTableChatAtLogic.view,"Img_User3"), JinHuaTableChatAtLogic.callback_Img_User3, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("JinHuaTableChatAtLogic#", CocoStudio.getComponent(JinHuaTableChatAtLogic.view,"Img_User2"), JinHuaTableChatAtLogic.callback_Img_User2, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("JinHuaTableChatAtLogic#", CocoStudio.getComponent(JinHuaTableChatAtLogic.view,"Img_User1"), JinHuaTableChatAtLogic.callback_Img_User1, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
    },
    //移除监听
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableChatAtLogic.view,"JinHuaTableChatAtLogic#Panel_main"), JinHuaTableChatAtLogic.callback_Panel_main, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableChatAtLogic.view,"JinHuaTableChatAtLogic#Img_User4"), JinHuaTableChatAtLogic.callback_Img_User4, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableChatAtLogic.view,"JinHuaTableChatAtLogic#Img_User3"), JinHuaTableChatAtLogic.callback_Img_User3, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableChatAtLogic.view,"JinHuaTableChatAtLogic#Img_User2"), JinHuaTableChatAtLogic.callback_Img_User2, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableChatAtLogic.view,"JinHuaTableChatAtLogic#Img_User1"), JinHuaTableChatAtLogic.callback_Img_User1, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
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
		//Frameworks.releaseOnKeypadEventListener(JinHuaTableChatAtLogic.view);
		JinHuaTableChatAtLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(JinHuaTableChatAtLogic.view, JinHuaTableChatAtLogic.onKeypad);
        JinHuaTableChatAtLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(JinHuaTableChatAtLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(JinHuaTableChatAtLogic);
			JinHuaTableChatAtLogic.releaseData();
		}
	
		JinHuaTableChatAtLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});

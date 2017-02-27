var JinHuaChatPopController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        JinHuaChatPopLogic.view= null;
    },

    getLayer:function(){
        return JinHuaChatPopLogic.view;
    },

    createView:function(){
        JinHuaChatPopLogic.createView();
        //Frameworks.setOnKeypadEventListener(JinHuaChatPopLogic.view, JinHuaChatPopLogic.onKeypad);
    },
    
    requestMsg:function(){
    	JinHuaChatPopLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	JinHuaChatPopLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		JinHuaChatPopLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"Panel_20"), JinHuaChatPopLogic.callback_Panel_20, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"Panel_chatlog"), JinHuaChatPopLogic.callback_Panel_chatlog, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"btn_bq_common1"), JinHuaChatPopLogic.callback_btn_bq_common1, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"btn_bq_common2"), JinHuaChatPopLogic.callback_btn_bq_common2, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"btn_bq_common3"), JinHuaChatPopLogic.callback_btn_bq_common3, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"btn_bq_common4"), JinHuaChatPopLogic.callback_btn_bq_common4, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"btn_bq_common5"), JinHuaChatPopLogic.callback_btn_bq_common5, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"btn_bq_common6"), JinHuaChatPopLogic.callback_btn_bq_common6, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"btn_bq_common7"), JinHuaChatPopLogic.callback_btn_bq_common7, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"btn_bq_common8"), JinHuaChatPopLogic.callback_btn_bq_common8, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"btn_bq_common9"), JinHuaChatPopLogic.callback_btn_bq_common9, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"btn_bq_common10"), JinHuaChatPopLogic.callback_btn_bq_common10, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"btn_bq_common11"), JinHuaChatPopLogic.callback_btn_bq_common11, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"btn_bq_common12"), JinHuaChatPopLogic.callback_btn_bq_common12, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"btn_bq_common13"), JinHuaChatPopLogic.callback_btn_bq_common13, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"btn_bq_common14"), JinHuaChatPopLogic.callback_btn_bq_common14, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"btn_sendmsg_log"), JinHuaChatPopLogic.callback_btn_sendmsg_log, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"Button_bugle"), JinHuaChatPopLogic.callback_Button_bugle, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"Button_At"), JinHuaChatPopLogic.callback_Button_At, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"btn_close"), JinHuaChatPopLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaChatPopLogic#", CocoStudio.getComponent(JinHuaChatPopLogic.view,"et_msg_log"), JinHuaChatPopLogic.callback_et_msg_log, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#Panel_20"), JinHuaChatPopLogic.callback_Panel_20, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#Panel_chatlog"), JinHuaChatPopLogic.callback_Panel_chatlog, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#btn_bq_common1"), JinHuaChatPopLogic.callback_btn_bq_common1, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#btn_bq_common2"), JinHuaChatPopLogic.callback_btn_bq_common2, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#btn_bq_common3"), JinHuaChatPopLogic.callback_btn_bq_common3, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#btn_bq_common4"), JinHuaChatPopLogic.callback_btn_bq_common4, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#btn_bq_common5"), JinHuaChatPopLogic.callback_btn_bq_common5, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#btn_bq_common6"), JinHuaChatPopLogic.callback_btn_bq_common6, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#btn_bq_common7"), JinHuaChatPopLogic.callback_btn_bq_common7, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#btn_bq_common8"), JinHuaChatPopLogic.callback_btn_bq_common8, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#btn_bq_common9"), JinHuaChatPopLogic.callback_btn_bq_common9, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#btn_bq_common10"), JinHuaChatPopLogic.callback_btn_bq_common10, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#btn_bq_common11"), JinHuaChatPopLogic.callback_btn_bq_common11, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#btn_bq_common12"), JinHuaChatPopLogic.callback_btn_bq_common12, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#btn_bq_common13"), JinHuaChatPopLogic.callback_btn_bq_common13, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#btn_bq_common14"), JinHuaChatPopLogic.callback_btn_bq_common14, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#btn_sendmsg_log"), JinHuaChatPopLogic.callback_btn_sendmsg_log, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#Button_bugle"), JinHuaChatPopLogic.callback_Button_bugle, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#Button_At"), JinHuaChatPopLogic.callback_Button_At, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#btn_close"), JinHuaChatPopLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaChatPopLogic.view,"JinHuaChatPopLogic#et_msg_log"), JinHuaChatPopLogic.callback_et_msg_log, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
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
		//Frameworks.releaseOnKeypadEventListener(JinHuaChatPopLogic.view);
		JinHuaChatPopLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
        MvcEngine.setCurActiveModuleName(GUI_JINHUACHATPOP);
    	//Frameworks.setOnKeypadEventListener(JinHuaChatPopLogic.view, JinHuaChatPopLogic.onKeypad);
        JinHuaChatPopLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(JinHuaChatPopLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(JinHuaChatPopLogic);
			JinHuaChatPopLogic.releaseData();
		}
	
		JinHuaChatPopLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});

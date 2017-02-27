var NetErrExitDialogController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        NetErrExitDialogLogic.view= null;
    },

    getLayer:function(){
        return NetErrExitDialogLogic.view;
    },

    createView:function(){
        NetErrExitDialogLogic.createView();
        //Frameworks.setOnKeypadEventListener(NetErrExitDialogLogic.view, NetErrExitDialogLogic.onKeypad);
    },
    
    requestMsg:function(){
    	NetErrExitDialogLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	NetErrExitDialogLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		NetErrExitDialogLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
		Frameworks.bindEventCallback("NetErrExitDialogLogic#", CocoStudio.getComponent(NetErrExitDialogLogic.view,"btn_logout"), NetErrExitDialogLogic.callback_btn_logout, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("NetErrExitDialogLogic#", CocoStudio.getComponent(NetErrExitDialogLogic.view,"btn_exit"), NetErrExitDialogLogic.callback_btn_exit, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("NetErrExitDialogLogic#", CocoStudio.getComponent(NetErrExitDialogLogic.view,"btn_logout_ios"), NetErrExitDialogLogic.callback_btn_logout_ios, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(NetErrExitDialogLogic.view,"NetErrExitDialogLogic#btn_logout"), NetErrExitDialogLogic.callback_btn_logout, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(NetErrExitDialogLogic.view,"NetErrExitDialogLogic#btn_exit"), NetErrExitDialogLogic.callback_btn_exit, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(NetErrExitDialogLogic.view,"NetErrExitDialogLogic#btn_logout_ios"), NetErrExitDialogLogic.callback_btn_logout_ios, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
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
		//Frameworks.releaseOnKeypadEventListener(NetErrExitDialogLogic.view);
		NetErrExitDialogLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
        MvcEngine.setCurActiveModuleName(GUI_NETERREXITDIALOG);
    	//Frameworks.setOnKeypadEventListener(NetErrExitDialogLogic.view, NetErrExitDialogLogic.onKeypad);
        NetErrExitDialogLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(NetErrExitDialogLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(NetErrExitDialogLogic);
			NetErrExitDialogLogic.releaseData();
		}
	
		NetErrExitDialogLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});

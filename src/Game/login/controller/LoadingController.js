var LoadingController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        LoadingLogic.view= null;
    },

    getLayer:function(){
        return LoadingLogic.view;
    },

    createView:function(){
        LoadingLogic.createView();
//        framework.setOnKeypadEventListener(LoadingLogic.view, LoadingLogic.onKeypad);
    },
    
    requestMsg:function(){
    	LoadingLogic.requestMsg();
    },
    
    addSlot:function(){
    	LoadingLogic.addSlot();
    },

	removeSlot:function(){
		LoadingLogic.removeSlot();
	},
    
    addCallback:function(){

    },
    
    removeCallback:function(){

    },
    
    setModuleLayer:function(moduleLayer){
    	this.moduleLayer = moduleLayer;
	},

	getModuleLayer:function(moduleLayer){
		return this.moduleLayer;
	},
    
    sleepModule:function(){
		//framework.releaseOnKeypadEventListener(LoadingLogic.view);
		LoadingLogic.view.setTouchEnabled(false);
		//framework.emit(signal.common.Signal_SleepModule_Done);
    },

    wakeModule:function(){
    	//framework.setOnKeypadEventListener(LoadingLogic.view, LoadingLogic.onKeypad);
        LoadingLogic.view.setTouchEnabled(true);
    },

    destroyModule:function(){
        //framework.releaseOnKeypadEventListener(LoadingLogic.view);
		this.destroy();

//		if(destroyType == DESTORY_TYPE_EFFECT){
//			//不销毁数据
//		}else if(destroyType == DESTORY_TYPE_CLEAN){
//			//销毁数据
//			framework.moduleCleanUp(LoadingLogic);
//			LoadingLogic.releaseData();
//		}
	
		LoadingLogic.view.removeFromParentAndCleanup(true);
		this.reset();
	
		//framework.emit(signal.common.Signal_DestroyModule_Done);
    }
});

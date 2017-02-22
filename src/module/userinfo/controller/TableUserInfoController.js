var TableUserInfoController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        TableUserInfoLogic.view= null;
    },

    getLayer:function(){
        return TableUserInfoLogic.view;
    },

    createView:function(){
        TableUserInfoLogic.createView();
        //Frameworks.setOnKeypadEventListener(TableUserInfoLogic.view, TableUserInfoLogic.onKeypad);
    },
    
    requestMsg:function(){
    	TableUserInfoLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	TableUserInfoLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		TableUserInfoLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Panel_shang"), TableUserInfoLogic.callback_Panel_shang, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Panel_touxiangkuang"), TableUserInfoLogic.callback_Panel_touxiangkuang, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Image_biaoqian"), TableUserInfoLogic.callback_Image_biaoqian, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Panel_name_bg"), TableUserInfoLogic.callback_Panel_name_bg, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Image_name_mark"), TableUserInfoLogic.callback_Image_name_mark, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Button_hua"), TableUserInfoLogic.callback_Button_hua, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Button_xihongshi"), TableUserInfoLogic.callback_Button_xihongshi, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Button_zhadan"), TableUserInfoLogic.callback_Button_zhadan, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Button_zuichun"), TableUserInfoLogic.callback_Button_zuichun, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Button_dabian"), TableUserInfoLogic.callback_Button_dabian, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Button_gun"), TableUserInfoLogic.callback_Button_gun, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Image_saveText"), TableUserInfoLogic.callback_Image_saveText, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Image_draw"), TableUserInfoLogic.callback_Image_draw, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Button_add1000w"), TableUserInfoLogic.callback_Button_add1000w, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Button_add5000w"), TableUserInfoLogic.callback_Button_add5000w, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Button_addMax"), TableUserInfoLogic.callback_Button_addMax, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Button_comfirm"), TableUserInfoLogic.callback_Button_comfirm, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Button_mofa"), TableUserInfoLogic.callback_Button_mofa, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Button_shoudaoliwu"), TableUserInfoLogic.callback_Button_shoudaoliwu, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Button_paiju"), TableUserInfoLogic.callback_Button_paiju, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Button_safety"), TableUserInfoLogic.callback_Button_safety, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Button_close"), TableUserInfoLogic.callback_Button_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Button_tichupaizhuo"), TableUserInfoLogic.callback_Button_tichupaizhuo, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Button_zengsongliwu"), TableUserInfoLogic.callback_Button_zengsongliwu, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Button_jiaweihaoyou"), TableUserInfoLogic.callback_Button_jiaweihaoyou, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("TableUserInfoLogic#", CocoStudio.getComponent(TableUserInfoLogic.view,"Button_zhuizong"), TableUserInfoLogic.callback_Button_zhuizong, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Panel_shang"), TableUserInfoLogic.callback_Panel_shang, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Panel_touxiangkuang"), TableUserInfoLogic.callback_Panel_touxiangkuang, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Image_biaoqian"), TableUserInfoLogic.callback_Image_biaoqian, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Panel_name_bg"), TableUserInfoLogic.callback_Panel_name_bg, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Image_name_mark"), TableUserInfoLogic.callback_Image_name_mark, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Button_hua"), TableUserInfoLogic.callback_Button_hua, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Button_xihongshi"), TableUserInfoLogic.callback_Button_xihongshi, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Button_zhadan"), TableUserInfoLogic.callback_Button_zhadan, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Button_zuichun"), TableUserInfoLogic.callback_Button_zuichun, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Button_dabian"), TableUserInfoLogic.callback_Button_dabian, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Button_gun"), TableUserInfoLogic.callback_Button_gun, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Image_saveText"), TableUserInfoLogic.callback_Image_saveText, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Image_draw"), TableUserInfoLogic.callback_Image_draw, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Button_add1000w"), TableUserInfoLogic.callback_Button_add1000w, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Button_add5000w"), TableUserInfoLogic.callback_Button_add5000w, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Button_addMax"), TableUserInfoLogic.callback_Button_addMax, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Button_comfirm"), TableUserInfoLogic.callback_Button_comfirm, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Button_mofa"), TableUserInfoLogic.callback_Button_mofa, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Button_shoudaoliwu"), TableUserInfoLogic.callback_Button_shoudaoliwu, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Button_paiju"), TableUserInfoLogic.callback_Button_paiju, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Button_safety"), TableUserInfoLogic.callback_Button_safety, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Button_close"), TableUserInfoLogic.callback_Button_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Button_tichupaizhuo"), TableUserInfoLogic.callback_Button_tichupaizhuo, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Button_zengsongliwu"), TableUserInfoLogic.callback_Button_zengsongliwu, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Button_jiaweihaoyou"), TableUserInfoLogic.callback_Button_jiaweihaoyou, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(TableUserInfoLogic.view,"TableUserInfoLogic#Button_zhuizong"), TableUserInfoLogic.callback_Button_zhuizong, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
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
		//Frameworks.releaseOnKeypadEventListener(TableUserInfoLogic.view);
		TableUserInfoLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(TableUserInfoLogic.view, TableUserInfoLogic.onKeypad);
        TableUserInfoLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(TableUserInfoLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(TableUserInfoLogic);
			TableUserInfoLogic.releaseData();
		}
	
		TableUserInfoLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});

var HallController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        HallLogic.view= null;
    },

    getLayer:function(){
        return HallLogic.view;
    },

    createView:function(){
        HallLogic.createView();
        //Frameworks.setOnKeypadEventListener(HallLogic.view, HallLogic.onKeypad);
    },
    
    requestMsg:function(){
    	HallLogic.requestMsg();
    },
    
    addSlot:function(){
    	HallLogic.addSlot();
    },

	removeSlot:function(){
		HallLogic.Slot();
	},
    
    addCallback:function(){
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"Button_lijiyouxi"), HallLogic.callback_Button_lijiyouxi, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_setting"), HallLogic.callback_btn_setting, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_message"), HallLogic.callback_btn_message, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_rankinglist"), HallLogic.callback_btn_rankinglist, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_shop"), HallLogic.callback_btn_shop, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_friend"), HallLogic.callback_btn_friend, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"Button_task"), HallLogic.callback_Button_task, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_show_chat"), HallLogic.callback_btn_show_chat, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"Button_Coin"), HallLogic.callback_Button_Coin, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"Button_YuanBao"), HallLogic.callback_Button_YuanBao, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_vip"), HallLogic.callback_btn_vip, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"Image_Portrait"), HallLogic.callback_Image_Portrait, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"Button_yaoqianshu"), HallLogic.callback_Button_yaoqianshu, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"Button_arena"), HallLogic.callback_Button_arena, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_yueka"), HallLogic.callback_btn_yueka, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_chongzhi"), HallLogic.callback_btn_chongzhi, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_libao"), HallLogic.callback_btn_libao, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_huodong"), HallLogic.callback_btn_huodong, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"Button_Return"), HallLogic.callback_Button_Return, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"Button_match"), HallLogic.callback_Button_match, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"Button_jingdian"), HallLogic.callback_Button_jingdian, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"Button_qianwang"), HallLogic.callback_Button_qianwang, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback(CocoStudio.getComponent(HallLogic.view,"Image_vipInfo"), HallLogic.callback_Image_vipInfo, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
    },
    
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"Button_lijiyouxi"), HallLogic.callback_Button_lijiyouxi, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_setting"), HallLogic.callback_btn_setting, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_message"), HallLogic.callback_btn_message, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_rankinglist"), HallLogic.callback_btn_rankinglist, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_shop"), HallLogic.callback_btn_shop, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_friend"), HallLogic.callback_btn_friend, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"Button_task"), HallLogic.callback_Button_task, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_show_chat"), HallLogic.callback_btn_show_chat, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"Button_Coin"), HallLogic.callback_Button_Coin, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"Button_YuanBao"), HallLogic.callback_Button_YuanBao, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_vip"), HallLogic.callback_btn_vip, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"Image_Portrait"), HallLogic.callback_Image_Portrait, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"Button_yaoqianshu"), HallLogic.callback_Button_yaoqianshu, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"Button_arena"), HallLogic.callback_Button_arena, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_yueka"), HallLogic.callback_btn_yueka, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_chongzhi"), HallLogic.callback_btn_chongzhi, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_libao"), HallLogic.callback_btn_libao, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"btn_huodong"), HallLogic.callback_btn_huodong, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"Button_Return"), HallLogic.callback_Button_Return, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"Button_match"), HallLogic.callback_Button_match, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"Button_jingdian"), HallLogic.callback_Button_jingdian, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"Button_qianwang"), HallLogic.callback_Button_qianwang, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(HallLogic.view,"Image_vipInfo"), HallLogic.callback_Image_vipInfo, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
    },
    
    setModuleLayer:function(moduleLayer){
    	this.moduleLayer = moduleLayer;
	},

	getModuleLayer:function(moduleLayer){
		return this.moduleLayer;
	},
    
    sleepModule:function(){
		//Frameworks.releaseOnKeypadEventListener(HallLogic.view);
		HallLogic.view.setTouchEnabled(false);
		Frameworks.emit(signal.common.Signal_SleepModule_Done);
    },

    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(HallLogic.view, HallLogic.onKeypad);
        HallLogic.view.setTouchEnabled(true);
        this.addCallback();
    },

    destroyModule:function(){
        //Frameworks.releaseOnKeypadEventListener(HallLogic.view);
		this.destroy();

		if(destroyType == DESTORY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTORY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(HallLogic);
			HallLogic.releaseData();
		}
	
		HallLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(signal.common.Signal_DestroyModule_Done);
    }
});

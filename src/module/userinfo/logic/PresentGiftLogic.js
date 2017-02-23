var PresentGiftLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_127:null,
	Panel_2:null,
	Image_songliwu1:null,
	Image_liwu1:null,
	AtlasLabel_jiage1:null,
	Image_songliwu2:null,
	Image_liwu2:null,
	AtlasLabel_liwu2:null,
	Image_songliwu3:null,
	Image_liwu3:null,
	AtlasLabel_liwu3:null,
	Image_songliwu4:null,
	Image_liwu4:null,
	AtlasLabel_liwu4:null,
	Button_quxiao:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["PresentGift"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_127 = CocoStudio.getComponent(this.view, "Panel_127");//Panel
		this.Panel_2 = CocoStudio.getComponent(this.view, "Panel_2");//Panel
		this.Image_songliwu1 = CocoStudio.getComponent(this.view, "Image_songliwu1");//ImageView
		this.Image_liwu1 = CocoStudio.getComponent(this.view, "Image_liwu1");//ImageView
		this.AtlasLabel_jiage1 = CocoStudio.getComponent(this.view, "AtlasLabel_jiage1");//LabelAtlas
		this.Image_songliwu2 = CocoStudio.getComponent(this.view, "Image_songliwu2");//ImageView
		this.Image_liwu2 = CocoStudio.getComponent(this.view, "Image_liwu2");//ImageView
		this.AtlasLabel_liwu2 = CocoStudio.getComponent(this.view, "AtlasLabel_liwu2");//LabelAtlas
		this.Image_songliwu3 = CocoStudio.getComponent(this.view, "Image_songliwu3");//ImageView
		this.Image_liwu3 = CocoStudio.getComponent(this.view, "Image_liwu3");//ImageView
		this.AtlasLabel_liwu3 = CocoStudio.getComponent(this.view, "AtlasLabel_liwu3");//LabelAtlas
		this.Image_songliwu4 = CocoStudio.getComponent(this.view, "Image_songliwu4");//ImageView
		this.Image_liwu4 = CocoStudio.getComponent(this.view, "Image_liwu4");//ImageView
		this.AtlasLabel_liwu4 = CocoStudio.getComponent(this.view, "AtlasLabel_liwu4");//LabelAtlas
		this.Button_quxiao = CocoStudio.getComponent(this.view, "Button_quxiao");//Button
	},

    initLayer:function(){
		var gui = GUI_PRESENTGIFT;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/PresentGift.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/PresentGift.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/PresentGift.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}
	},
    
	callback_Panel_2:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_songliwu1:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            PresentGiftLogic.onPresentGift(ProfilePresentGift.GiftType.GIFT_FLOWER);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_songliwu2:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            PresentGiftLogic.onPresentGift(ProfilePresentGift.GiftType.GIFT_CAR);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_songliwu3:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            PresentGiftLogic.onPresentGift(ProfilePresentGift.GiftType.GIFT_HOME);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_songliwu4:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            PresentGiftLogic.onPresentGift(ProfilePresentGift.GiftType.GIFT_BOAT);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_quxiao:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_PRESENTGIFT);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},
    //安卓手机的返回键的监听事件
    onKeypad:function(event){
    	if(event == "backClicked"){//返回键
    		
    	}else if(event == "menuClicked"){//菜单键
    	
    	}
    },
    //添加信号
    addSlot:function(){
    	Frameworks.addSlot2Signal(JINHUA_MGR_SEND_GIFT, ProfilePresentGift.slot_JINHUA_MGR_SEND_GIFT);//送礼物
    },
    //移除信号
    removeSlot:function(){
    	Frameworks.removeSlotFromSignal(JINHUA_MGR_SEND_GIFT, ProfilePresentGift.slot_JINHUA_MGR_SEND_GIFT);//送礼物
    },
    
    //释放界面的私有数据
    releaseData:function(){
    
    },
    
    requestMsg:function(){
    
    },
    //初始化界面
    initData:function(){
        //目标ID
        ProfilePresentGift.m_targetUserID= ProfileTableUserInfo.getTargetUserID();
    },
    onPresentGift:function(type){
        //var GameData= Profile_JinHuaGameData.getGameData();
        //if(Common.judgeValueIsEffect(GameData)&&Common.judgeValueIsEffect(GameData["matchInstanceId"]))
        sendJINHUA_MGR_SEND_GIFT(ProfileTableUserInfo.getTargetUserID(), type);
        //MvcEngine.destroyModule(GUI_PRESENTGIFT);
    },
    //目前赠送礼物 没有下行
    updateJINHUA_MGR_SEND_GIFT:function(){
        var giftResultTable= Profile_JinHuaFriends.getGiftResultTable();
        if(Common.judgeValueIsEffect(giftResultTable)&&(Common.judgeValueIsEffect(giftResultTable["Result"]))){
            Common.showToast(giftResultTable["Result"],3);
            if(giftResultTable["Result"]== 2){
                MvcEngine.createModule(GUI_DOUBLEBUTTONCONFIRM, function(){
                    ProfileDoubleButtonConfirm.setMessageByType(ProfileDoubleButtonConfirm.typeTable.Send_Gift_Buy_Vip);
                })
            }
        }
        MvcEngine.destroyModule(GUI_PRESENTGIFT);
    }
};

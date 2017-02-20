var TableUserInfoLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_127:null,
	Panel_2:null,
	Image_beijing:null,
	Panel_shang:null,
	Image_jindutiao:null,
	Image_jindu:null,
	Label_exp:null,
	AtlasLabel_level:null,
	Panel_touxiangkuang:null,
	Image_toux:null,
	Image_vip_bg:null,
	AtlasLabel_vip_level:null,
	Image_vip_highsign:null,
	Image_vip_lowsignbg:null,
	AtlasLabel_lowsign:null,
	Image_touxiangkuang:null,
	Image_biaoqian:null,
	Image_lucky_icon:null,
	Image_sex_bg:null,
	Image_money_bg:null,
	AtlasLabel_arena_position:null,
	Image_money:null,
	AtlasLabel_jinbi:null,
	Image_chengwei:null,
	Label_arena_title:null,
	Label_arena_NoPosition:null,
	Panel_name_bg:null,
	Label_name:null,
	Image_name_mark:null,
	Image_zhong:null,
	Image_xin1:null,
	Image_liang1:null,
	Image_xin2:null,
	Image_liang2:null,
	AtlasLabel_meilizhi:null,
	Image_xin3:null,
	Image_liang3:null,
	Image_xin4:null,
	Image_liang4:null,
	Image_xin5:null,
	Image_liang5:null,
	Image_xia:null,
	Panel_mofa:null,
	Button_hua:null,
	Label_huaCoin:null,
	Button_xihongshi:null,
	Label_xihongshiCoin:null,
	Button_zhadan:null,
	Label_zhadanCoin:null,
	Label_v6:null,
	Button_zuichun:null,
	Label_zuichunCoin:null,
	Button_dabian:null,
	Label_dabianCoin:null,
	Image_viphuanzuan:null,
	Button_gun:null,
	Label_gunCoin:null,
	Panel_shoudaoliwu:null,
	Image_liwu1:null,
	Image_liwu_xin_bg1:null,
	Label_gift1_addvalue:null,
	Image_liwu_jinbi_bg1:null,
	Label_gift1_needCoin:null,
	Label_gift1_havevalue:null,
	Image_liwu2:null,
	Image_liwu_xin_bg2:null,
	Label_gift2_addvalue:null,
	Image_liwu_jinbi_bg2:null,
	Label_gift2_needcoin:null,
	Label_gift2_havevalue:null,
	Image_liwu3:null,
	Image_liwu_xin_bg3:null,
	Label_gift3_addvalue:null,
	Image_liwu_jinbi_bg3:null,
	Label_gift3_needcoin:null,
	Label_gift3_havevalue:null,
	Image_liwu4:null,
	Image_liwu_xin_bg4:null,
	Label_gift4_addvalue:null,
	Image_liwu_jinbi_bg4:null,
	Label_gift4_needcoin:null,
	Label_gift4_havevalue:null,
	Panel_paiju:null,
	Label_jushu:null,
	Label_shenglichang:null,
	Label_shenglvshu:null,
	Label_liansheng:null,
	Label_eachzuigao:null,
	Panel_baoxianxiang:null,
	Image_baoxianxiang:null,
	Image_save:null,
	Image_saveText:null,
	Image_draw:null,
	Image_drawText:null,
	Label_haveMoney:null,
	Label_changeMoney:null,
	Button_add1000w:null,
	Button_add5000w:null,
	Button_addMax:null,
	Button_comfirm:null,
	Button_mofa:null,
	Button_shoudaoliwu:null,
	Button_paiju:null,
	Button_safety:null,
	Button_close:null,
	Button_tichupaizhuo:null,
	Image_tichupaizhuo1:null,
	Button_zengsongliwu:null,
	Image_zengsongliwu1:null,
	Button_jiaweihaoyou:null,
	Image_jiaweihaoyou1:null,
	Button_zhuizong:null,
	Image_zhuizong:null,
	
    createView:function(){
        if(cc.spriteFrameCache.getSpriteFrame("bg_toumingditu.png")== null){
            cc.spriteFrameCache.addSpriteFrames(Common.getJinHuaResourcePath("co_desk.plist"), Common.getJinHuaResourcePath("co_desk.png"));
        }
        if(cc.spriteFrameCache.getSpriteFrame("ui_jindutiaodi.png")== null){
            cc.spriteFrameCache.addSpriteFrames(Common.getJinHuaResourcePath("userinfo_mine.plist"), Common.getJinHuaResourcePath("userinfo_mine.png"));
        }
        //进入牌桌时，就已经添加了table_elements.plist,所以不需要再添加。
    	this.initLayer();
        
        this.view.setTag(ModuleTable["TableUserInfo"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_127 = CocoStudio.getComponent(this.view, "Panel_127");//Panel
		this.Panel_2 = CocoStudio.getComponent(this.view, "Panel_2");//Panel
		this.Image_beijing = CocoStudio.getComponent(this.view, "Image_beijing");//ImageView
		this.Panel_shang = CocoStudio.getComponent(this.view, "Panel_shang");//Panel
		this.Image_jindutiao = CocoStudio.getComponent(this.view, "Image_jindutiao");//ImageView
		this.Image_jindu = CocoStudio.getComponent(this.view, "Image_jindu");//ImageView
		this.Label_exp = CocoStudio.getComponent(this.view, "Label_exp");//Label
		this.AtlasLabel_level = CocoStudio.getComponent(this.view, "AtlasLabel_level");//LabelAtlas
		this.Panel_touxiangkuang = CocoStudio.getComponent(this.view, "Panel_touxiangkuang");//Panel
		this.Image_toux = CocoStudio.getComponent(this.view, "Image_toux");//ImageView
		this.Image_vip_bg = CocoStudio.getComponent(this.view, "Image_vip_bg");//ImageView
		this.AtlasLabel_vip_level = CocoStudio.getComponent(this.view, "AtlasLabel_vip_level");//LabelAtlas
		this.Image_vip_highsign = CocoStudio.getComponent(this.view, "Image_vip_highsign");//ImageView
		this.Image_vip_lowsignbg = CocoStudio.getComponent(this.view, "Image_vip_lowsignbg");//ImageView
		this.AtlasLabel_lowsign = CocoStudio.getComponent(this.view, "AtlasLabel_lowsign");//LabelAtlas
		this.Image_touxiangkuang = CocoStudio.getComponent(this.view, "Image_touxiangkuang");//ImageView
		this.Image_biaoqian = CocoStudio.getComponent(this.view, "Image_biaoqian");//ImageView
		this.Image_lucky_icon = CocoStudio.getComponent(this.view, "Image_lucky_icon");//ImageView
		this.Image_sex_bg = CocoStudio.getComponent(this.view, "Image_sex_bg");//ImageView
		this.Image_money_bg = CocoStudio.getComponent(this.view, "Image_money_bg");//ImageView
		this.AtlasLabel_arena_position = CocoStudio.getComponent(this.view, "AtlasLabel_arena_position");//LabelAtlas
		this.Image_money = CocoStudio.getComponent(this.view, "Image_money");//ImageView
		this.AtlasLabel_jinbi = CocoStudio.getComponent(this.view, "AtlasLabel_jinbi");//LabelAtlas
		this.Image_chengwei = CocoStudio.getComponent(this.view, "Image_chengwei");//ImageView
		this.Label_arena_title = CocoStudio.getComponent(this.view, "Label_arena_title");//Label
		this.Label_arena_NoPosition = CocoStudio.getComponent(this.view, "Label_arena_NoPosition");//Label
		this.Panel_name_bg = CocoStudio.getComponent(this.view, "Panel_name_bg");//Panel
		this.Label_name = CocoStudio.getComponent(this.view, "Label_name");//Label
		this.Image_name_mark = CocoStudio.getComponent(this.view, "Image_name_mark");//ImageView
		this.Image_zhong = CocoStudio.getComponent(this.view, "Image_zhong");//ImageView
		this.Image_xin1 = CocoStudio.getComponent(this.view, "Image_xin1");//ImageView
		this.Image_liang1 = CocoStudio.getComponent(this.view, "Image_liang1");//ImageView
		this.Image_xin2 = CocoStudio.getComponent(this.view, "Image_xin2");//ImageView
		this.Image_liang2 = CocoStudio.getComponent(this.view, "Image_liang2");//ImageView
		this.AtlasLabel_meilizhi = CocoStudio.getComponent(this.view, "AtlasLabel_meilizhi");//LabelAtlas
		this.Image_xin3 = CocoStudio.getComponent(this.view, "Image_xin3");//ImageView
		this.Image_liang3 = CocoStudio.getComponent(this.view, "Image_liang3");//ImageView
		this.Image_xin4 = CocoStudio.getComponent(this.view, "Image_xin4");//ImageView
		this.Image_liang4 = CocoStudio.getComponent(this.view, "Image_liang4");//ImageView
		this.Image_xin5 = CocoStudio.getComponent(this.view, "Image_xin5");//ImageView
		this.Image_liang5 = CocoStudio.getComponent(this.view, "Image_liang5");//ImageView
		this.Image_xia = CocoStudio.getComponent(this.view, "Image_xia");//ImageView
		this.Panel_mofa = CocoStudio.getComponent(this.view, "Panel_mofa");//Panel
		this.Button_hua = CocoStudio.getComponent(this.view, "Button_hua");//Button
		this.Label_huaCoin = CocoStudio.getComponent(this.view, "Label_huaCoin");//Label
		this.Button_xihongshi = CocoStudio.getComponent(this.view, "Button_xihongshi");//Button
		this.Label_xihongshiCoin = CocoStudio.getComponent(this.view, "Label_xihongshiCoin");//Label
		this.Button_zhadan = CocoStudio.getComponent(this.view, "Button_zhadan");//Button
		this.Label_zhadanCoin = CocoStudio.getComponent(this.view, "Label_zhadanCoin");//Label
		this.Label_v6 = CocoStudio.getComponent(this.view, "Label_v6");//Label
		this.Button_zuichun = CocoStudio.getComponent(this.view, "Button_zuichun");//Button
		this.Label_zuichunCoin = CocoStudio.getComponent(this.view, "Label_zuichunCoin");//Label
		this.Button_dabian = CocoStudio.getComponent(this.view, "Button_dabian");//Button
		this.Label_dabianCoin = CocoStudio.getComponent(this.view, "Label_dabianCoin");//Label
		this.Image_viphuanzuan = CocoStudio.getComponent(this.view, "Image_viphuanzuan");//ImageView
		this.Button_gun = CocoStudio.getComponent(this.view, "Button_gun");//Button
		this.Label_gunCoin = CocoStudio.getComponent(this.view, "Label_gunCoin");//Label
		this.Panel_shoudaoliwu = CocoStudio.getComponent(this.view, "Panel_shoudaoliwu");//Panel
		this.Image_liwu1 = CocoStudio.getComponent(this.view, "Image_liwu1");//ImageView
		this.Image_liwu_xin_bg1 = CocoStudio.getComponent(this.view, "Image_liwu_xin_bg1");//ImageView
		this.Label_gift1_addvalue = CocoStudio.getComponent(this.view, "Label_gift1_addvalue");//Label
		this.Image_liwu_jinbi_bg1 = CocoStudio.getComponent(this.view, "Image_liwu_jinbi_bg1");//ImageView
		this.Label_gift1_needCoin = CocoStudio.getComponent(this.view, "Label_gift1_needCoin");//Label
		this.Label_gift1_havevalue = CocoStudio.getComponent(this.view, "Label_gift1_havevalue");//Label
		this.Image_liwu2 = CocoStudio.getComponent(this.view, "Image_liwu2");//ImageView
		this.Image_liwu_xin_bg2 = CocoStudio.getComponent(this.view, "Image_liwu_xin_bg2");//ImageView
		this.Label_gift2_addvalue = CocoStudio.getComponent(this.view, "Label_gift2_addvalue");//Label
		this.Image_liwu_jinbi_bg2 = CocoStudio.getComponent(this.view, "Image_liwu_jinbi_bg2");//ImageView
		this.Label_gift2_needcoin = CocoStudio.getComponent(this.view, "Label_gift2_needcoin");//Label
		this.Label_gift2_havevalue = CocoStudio.getComponent(this.view, "Label_gift2_havevalue");//Label
		this.Image_liwu3 = CocoStudio.getComponent(this.view, "Image_liwu3");//ImageView
		this.Image_liwu_xin_bg3 = CocoStudio.getComponent(this.view, "Image_liwu_xin_bg3");//ImageView
		this.Label_gift3_addvalue = CocoStudio.getComponent(this.view, "Label_gift3_addvalue");//Label
		this.Image_liwu_jinbi_bg3 = CocoStudio.getComponent(this.view, "Image_liwu_jinbi_bg3");//ImageView
		this.Label_gift3_needcoin = CocoStudio.getComponent(this.view, "Label_gift3_needcoin");//Label
		this.Label_gift3_havevalue = CocoStudio.getComponent(this.view, "Label_gift3_havevalue");//Label
		this.Image_liwu4 = CocoStudio.getComponent(this.view, "Image_liwu4");//ImageView
		this.Image_liwu_xin_bg4 = CocoStudio.getComponent(this.view, "Image_liwu_xin_bg4");//ImageView
		this.Label_gift4_addvalue = CocoStudio.getComponent(this.view, "Label_gift4_addvalue");//Label
		this.Image_liwu_jinbi_bg4 = CocoStudio.getComponent(this.view, "Image_liwu_jinbi_bg4");//ImageView
		this.Label_gift4_needcoin = CocoStudio.getComponent(this.view, "Label_gift4_needcoin");//Label
		this.Label_gift4_havevalue = CocoStudio.getComponent(this.view, "Label_gift4_havevalue");//Label
		this.Panel_paiju = CocoStudio.getComponent(this.view, "Panel_paiju");//Panel
		this.Label_jushu = CocoStudio.getComponent(this.view, "Label_jushu");//Label
		this.Label_shenglichang = CocoStudio.getComponent(this.view, "Label_shenglichang");//Label
		this.Label_shenglvshu = CocoStudio.getComponent(this.view, "Label_shenglvshu");//Label
		this.Label_liansheng = CocoStudio.getComponent(this.view, "Label_liansheng");//Label
		this.Label_eachzuigao = CocoStudio.getComponent(this.view, "Label_eachzuigao");//Label
		this.Panel_baoxianxiang = CocoStudio.getComponent(this.view, "Panel_baoxianxiang");//Panel
		this.Image_baoxianxiang = CocoStudio.getComponent(this.view, "Image_baoxianxiang");//ImageView
		this.Image_save = CocoStudio.getComponent(this.view, "Image_save");//ImageView
		this.Image_saveText = CocoStudio.getComponent(this.view, "Image_saveText");//ImageView
		this.Image_draw = CocoStudio.getComponent(this.view, "Image_draw");//ImageView
		this.Image_drawText = CocoStudio.getComponent(this.view, "Image_drawText");//ImageView
		this.Label_haveMoney = CocoStudio.getComponent(this.view, "Label_haveMoney");//Label
		this.Label_changeMoney = CocoStudio.getComponent(this.view, "Label_changeMoney");//Label
		this.Button_add1000w = CocoStudio.getComponent(this.view, "Button_add1000w");//Button
		this.Button_add5000w = CocoStudio.getComponent(this.view, "Button_add5000w");//Button
		this.Button_addMax = CocoStudio.getComponent(this.view, "Button_addMax");//Button
		this.Button_comfirm = CocoStudio.getComponent(this.view, "Button_comfirm");//Button
		this.Button_mofa = CocoStudio.getComponent(this.view, "Button_mofa");//Button
		this.Button_shoudaoliwu = CocoStudio.getComponent(this.view, "Button_shoudaoliwu");//Button
		this.Button_paiju = CocoStudio.getComponent(this.view, "Button_paiju");//Button
		this.Button_safety = CocoStudio.getComponent(this.view, "Button_safety");//Button
		this.Button_close = CocoStudio.getComponent(this.view, "Button_close");//Button
		this.Button_tichupaizhuo = CocoStudio.getComponent(this.view, "Button_tichupaizhuo");//Button
		this.Image_tichupaizhuo1 = CocoStudio.getComponent(this.view, "Image_tichupaizhuo1");//ImageView
		this.Button_zengsongliwu = CocoStudio.getComponent(this.view, "Button_zengsongliwu");//Button
		this.Image_zengsongliwu1 = CocoStudio.getComponent(this.view, "Image_zengsongliwu1");//ImageView
		this.Button_jiaweihaoyou = CocoStudio.getComponent(this.view, "Button_jiaweihaoyou");//Button
		this.Image_jiaweihaoyou1 = CocoStudio.getComponent(this.view, "Image_jiaweihaoyou1");//ImageView
		this.Button_zhuizong = CocoStudio.getComponent(this.view, "Button_zhuizong");//Button
		this.Image_zhuizong = CocoStudio.getComponent(this.view, "Image_zhuizong");//ImageView
	},

    initLayer:function(){
		var gui = GUI_TABLEUSERINFO;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/TableUserInfo.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/TableUserInfo.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/TableUserInfo.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}
	},
    
	callback_Panel_shang:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_touxiangkuang:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_biaoqian:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_name_bg:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_name_mark:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_hua:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_xihongshi:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_zhadan:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_zuichun:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_dabian:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_gun:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_save:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_draw:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_add1000w:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_add5000w:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_addMax:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_comfirm:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_mofa:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_shoudaoliwu:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_paiju:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_safety:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_close:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_TABLEUSERINFO);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_tichupaizhuo:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_zengsongliwu:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_jiaweihaoyou:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_zhuizong:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

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
    	
    },
    //移除信号
    removeSlot:function(){
    	
    },
    
    //释放界面的私有数据
    releaseData:function(){
    
    },
    
    requestMsg:function(){
    
    },
    //初始化界面
    initData:function(){
        ProfileTableUserInfo.setUserInfoTable(Profile_JinHuaOtherUserInfo.getUserInfoTable());
        var userInfoTable= ProfileTableUserInfo.getUserInfoTable();
        ProfileTableUserInfo.setBMySelf((userInfoTable.targetUserId== profile_user.getSelfUserID()));
        //显示对应的按钮信息
        this.showButtonsByUserID();
        //显示对应玩家的账户信息
        this.setUserInfo();
        //更新动画表情
        this.setInteractionInfo();
    },
    //根据UserID,显示不同的按钮
    showButtonsByUserID:function(){
        if(ProfileTableUserInfo.getBMySelf()){//如果为玩家自己
            this.Button_zhuizong.setVisible(false);
            this.Button_zhuizong.setTouchEnabled(false);
            this.Button_safety.setTouchEnabled(true);
            this.Button_safety.setVisible(true);
            this.Button_shoudaoliwu.setTouchEnabled(false);
            this.Button_shoudaoliwu.setVisible(false);
            this.popSelfTableInfo();
        }else{
            this.Button_safety.setTouchEnabled(false);
            this.Button_safety.setVisible(false);
            this.Button_shoudaoliwu.setTouchEnabled(true);
            this.Button_shoudaoliwu.setVisible(true);
        }
    },
    setUserInfo:function(){
        var userInfoTable= ProfileTableUserInfo.getUserInfoTable();
        //设置玩家昵称
        this.Label_name.setString(userInfoTable["nickName"]);
        //[称谓-等级]
        Profile_JinHuaSetting.setUserTitleOnImageView(userInfoTable["Coin"], this.Image_chengwei);
        //加载网络头像
        var resLists= [userInfoTable["PhotoUrl"],"res/ui_hall_yonghu_touxiangdikuang.png"];
        Common.setPortraitByType(resLists, cc.rect(0,0,135,135), this.Image_toux);

        //金币数
        this.AtlasLabel_jinbi.setString(userInfoTable["Coin"]);
        //等级
        this.AtlasLabel_level.setString(":"+ userInfoTable["Level"]);
        //魅力值
        this.AtlasLabel_meilizhi.setString(userInfoTable["Charm"]);

        //从plist中加载性别图片
        switch(userInfoTable["Sex"]){
            case 0://保密
                this.Image_sex_bg.loadTexture("ic_weizhixingbie.png", 1);
                break;
            case 1://男
                this.Image_sex_bg.loadTexture("ic_sex_boy.png", 1);
                break;
            case 2://女
                this.Image_sex_bg.loadTexture("ic_sex_gril.png", 1);
                break;
        }
        //设置魅力值等级
        var userCharmLevel= userInfoTable["CharmLv"];
        if(userCharmLevel>= 5){
            userCharmLevel= 5
        }else if(userCharmLevel< 0){
            userCharmLevel= 0;
        }
        //显示魅力值等级
        for(var i=0; i< userCharmLevel; ++i){
            var image= CocoStudio.getComponent(this.view, "Image_liang"+ (i+ 1));
            image.setVisible(true);
        }
        //当前经验
        this.Label_exp.setString(userInfoTable["LevelExp"] + "/" + userInfoTable["LevelExpMax"]);
        //当前进度
        if(userInfoTable["LevelExp"]== 0||userInfoTable["LevelExpMax"]== 0){
            this.Image_jindu.setScaleX(0);
        }else{
            this.Image_jindu.setScaleX(userInfoTable["LevelExp"]/userInfoTable["LevelExpMax"]);
        }
        //是否真人认证
        if(Common.judgeValueIsEffect(userInfoTable["isCert"])&&(userInfoTable["isCert"]== 1)){
            if(userInfoTable["Sex"]== Profile_JinHuaGameData.MALE){//男
                this.Image_biaoqian.loadTexture("pic_rznan.png",1);
            }else if(userInfoTable["Sex"]== Profile_JinHuaGameData.FEMALE){//女
                this.Image_biaoqian.loadTexture("pic_renvdi.png",1);
            }else{
                this.Image_biaoqian.loadTexture("pic_rengzhengdi.png",1)
            }
        }else{
            this.Image_biaoqian.setVisible(false);
            this.Image_biaoqian.setTouchEnabled(false);
        }

        if(userInfoTable["luckyIcon"]== 1){
            this.Image_lucky_icon.setVisible(true);
        }
        //Vip等级
        var userVipLevel = userInfoTable["VipLevel"];
        if(userVipLevel >= 0){
            var texture = VipElementsUtils.getVipBgFromVipLevel(userVipLevel);
            if(texture != null){
                this.Image_vip_bg.loadTexture(texture,1)
            }else{
                this.Image_vip_bg.loadTexture("ic_vip_0.png",1)
            }

            if(userVipLevel == 0){
                this.AtlasLabel_vip_level.setVisible(false);
                this.Image_vip_highsign.setVisible(false);
                this.Image_vip_lowsignbg.setVisible(false);
                this.AtlasLabel_lowsign.setVisible(false);
            }else if(userVipLevel > 0 && userVipLevel < 10){
                this.AtlasLabel_vip_level.setVisible(true);
                this.Image_vip_highsign.setVisible(false);
                this.Image_vip_lowsignbg.setVisible(true);
                this.AtlasLabel_lowsign.setVisible(true);
                this.AtlasLabel_vip_level.setString(":"+userVipLevel);
                this.AtlasLabel_lowsign.setString(userVipLevel);
            }else if(userVipLevel >= 10){
                this.AtlasLabel_vip_level.setVisible(true);
                this.Image_vip_highsign.setVisible(true);
                this.Image_vip_lowsignbg.setVisible(false);
                this.AtlasLabel_lowsign.setVisible(false);
                this.AtlasLabel_vip_level.setString(":"+userVipLevel);
                var signTexture = VipElementsUtils.getVipHighSignFromVipLevel(userVipLevel);
                if(signTexture == null){
                    this.Image_vip_highsign.setVisible(false);
                }else{
                    this.Image_vip_highsign.loadTexture(signTexture,1);
                }
            }
        }
    },
    popSelfTableInfo:function(){
        this.Button_tichupaizhuo.setTouchEnabled(false);
        this.Button_zengsongliwu.setTouchEnabled(false);
        this.Button_jiaweihaoyou.setTouchEnabled(false);
        this.Button_tichupaizhuo.setVisible(false);
        this.Button_zengsongliwu.setVisible(false);
        this.Button_jiaweihaoyou.setVisible(false);
    },
    //设置互动表情信息
    setInteractionInfo:function(){
        var InteractionList= Profile_JinHuaSetting.getInteractionList();
        if(Common.getTableSize(InteractionList)== 0) return;

    }
};

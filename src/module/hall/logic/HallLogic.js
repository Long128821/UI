var HallLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	panel_bg:null,
	img_bgleft:null,
	panel_down:null,
	Button_lijiyouxi:null,
	btn_setting:null,
	Image_hongdian7:null,
	btn_message:null,
	Image_hongdian3:null,
	btn_rankinglist:null,
	Image_hongdian4:null,
    btn_shop:null,
	Image_hongdian5:null,
	btn_friend:null,
	Image_hongdian6:null,
	Button_task:null,
	Panel_chat:null,
	btn_show_chat:null,
	Image_hongdian2:null,
	hall_black_cover:null,
	Panel_16_0:null,
	Label_NickName:null,
	Panel_jinbi:null,
	Label_Coin:null,
	Button_Coin:null,
	Panel_yuanbao:null,
	Label_YuanBao:null,
	Button_YuanBao:null,
	btn_vip:null,
	AtlasLabel_vip_level:null,
	Image_vip_highsign:null,
	Image_vip_lowsignbg:null,
	AtlasLabel_lowsign:null,
	Image_Portrait:null,
	Image_touxiangkuang:null,
	Image_chengwei:null,
	Image_lucky_icon:null,
	Image_touxiang_default:null,
	Panel_top:null,
	Button_yaoqianshu:null,
	Button_arena:null,
	btn_yueka:null,
	Panel_leftday:null,
	AtlasLabel_leftday:null,
	Image_tian:null,
	btn_chongzhi:null,
	Image_hongdian1:null,
	btn_libao:null,
	btn_huodong:null,
	Button_Return:null,
	ImageView_Notice:null,
	panel_chat:null,
	panel_centernew:null,
	panel_hall_center:null,
	Button_match:null,
	Button_jingdian:null,
	Button_qianwang:null,
	Panel_hall_center_down:null,
	Image_minigame_bg:null,
	Image_vipInfo:null,
	Label_online:null,
	Panel_MiniGame:null,
	Panel_Commend:null,
	Image_light:null,
	Panel_miniChat:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["Hall"]["Layer"]);
        
        this.initView();

        this.initTable();

        this.initMiniGameList();

        this.initActivityLists();
        //发送公共消息
        this.sendGameCommonMessage();
    },
    
	initView:function(){
		this.panel_bg = CocoStudio.getComponent(this.view, "panel_bg");//Panel
		this.img_bgleft = CocoStudio.getComponent(this.view, "img_bgleft");//ImageView
		this.panel_down = CocoStudio.getComponent(this.view, "panel_down");//Panel
		this.Button_lijiyouxi = CocoStudio.getComponent(this.view, "Button_lijiyouxi");//Button
		this.btn_setting = CocoStudio.getComponent(this.view, "btn_setting");//Button
		this.Image_hongdian7 = CocoStudio.getComponent(this.view, "Image_hongdian7");//ImageView
		this.btn_message = CocoStudio.getComponent(this.view, "btn_message");//Button
		this.Image_hongdian3 = CocoStudio.getComponent(this.view, "Image_hongdian3");//ImageView
		this.btn_rankinglist = CocoStudio.getComponent(this.view, "btn_rankinglist");//Button
		this.Image_hongdian4 = CocoStudio.getComponent(this.view, "Image_hongdian4");//ImageView
		this.btn_shop = CocoStudio.getComponent(this.view, "btn_shop");//Button
		this.Image_hongdian5 = CocoStudio.getComponent(this.view, "Image_hongdian5");//ImageView
		this.btn_friend = CocoStudio.getComponent(this.view, "btn_friend");//Button
		this.Image_hongdian6 = CocoStudio.getComponent(this.view, "Image_hongdian6");//ImageView
		this.Button_task = CocoStudio.getComponent(this.view, "Button_task");//Button
		this.Panel_chat = CocoStudio.getComponent(this.view, "Panel_chat");//Panel
		this.btn_show_chat = CocoStudio.getComponent(this.view, "btn_show_chat");//Button
		this.Image_hongdian2 = CocoStudio.getComponent(this.view, "Image_hongdian2");//ImageView
		this.hall_black_cover = CocoStudio.getComponent(this.view, "hall_black_cover");//ImageView
		this.Panel_16_0 = CocoStudio.getComponent(this.view, "Panel_16_0");//Panel
		this.Label_NickName = CocoStudio.getComponent(this.view, "Label_NickName");//Label
		this.Panel_jinbi = CocoStudio.getComponent(this.view, "Panel_jinbi");//Panel
		this.Label_Coin = CocoStudio.getComponent(this.view, "Label_Coin");//Label
		this.Button_Coin = CocoStudio.getComponent(this.view, "Button_Coin");//Button
		this.Panel_yuanbao = CocoStudio.getComponent(this.view, "Panel_yuanbao");//Panel
		this.Label_YuanBao = CocoStudio.getComponent(this.view, "Label_YuanBao");//Label
		this.Button_YuanBao = CocoStudio.getComponent(this.view, "Button_YuanBao");//Button
		this.btn_vip = CocoStudio.getComponent(this.view, "btn_vip");//Button
		this.AtlasLabel_vip_level = CocoStudio.getComponent(this.view, "AtlasLabel_vip_level");//LabelAtlas
		this.Image_vip_highsign = CocoStudio.getComponent(this.view, "Image_vip_highsign");//ImageView
		this.Image_vip_lowsignbg = CocoStudio.getComponent(this.view, "Image_vip_lowsignbg");//ImageView
		this.AtlasLabel_lowsign = CocoStudio.getComponent(this.view, "AtlasLabel_lowsign");//LabelAtlas
		this.Image_Portrait = CocoStudio.getComponent(this.view, "Image_Portrait");//ImageView
		this.Image_touxiangkuang = CocoStudio.getComponent(this.view, "Image_touxiangkuang");//ImageView
		this.Image_chengwei = CocoStudio.getComponent(this.view, "Image_chengwei");//ImageView
		this.Image_lucky_icon = CocoStudio.getComponent(this.view, "Image_lucky_icon");//ImageView
		this.Image_touxiang_default = CocoStudio.getComponent(this.view, "Image_touxiang_default");//ImageView
		this.Panel_top = CocoStudio.getComponent(this.view, "Panel_top");//Panel
		this.Button_yaoqianshu = CocoStudio.getComponent(this.view, "Button_yaoqianshu");//Button
		this.Button_arena = CocoStudio.getComponent(this.view, "Button_arena");//Button
		this.btn_yueka = CocoStudio.getComponent(this.view, "btn_yueka");//Button
		this.Panel_leftday = CocoStudio.getComponent(this.view, "Panel_leftday");//Panel
		this.AtlasLabel_leftday = CocoStudio.getComponent(this.view, "AtlasLabel_leftday");//LabelAtlas
		this.Image_tian = CocoStudio.getComponent(this.view, "Image_tian");//ImageView
		this.btn_chongzhi = CocoStudio.getComponent(this.view, "btn_chongzhi");//Button
		this.Image_hongdian1 = CocoStudio.getComponent(this.view, "Image_hongdian1");//ImageView
		this.btn_libao = CocoStudio.getComponent(this.view, "btn_libao");//Button
		this.btn_huodong = CocoStudio.getComponent(this.view, "btn_huodong");//Button
		this.Button_Return = CocoStudio.getComponent(this.view, "Button_Return");//Button
		this.ImageView_Notice = CocoStudio.getComponent(this.view, "ImageView_Notice");//ImageView
		this.panel_chat = CocoStudio.getComponent(this.view, "panel_chat");//Panel
		this.panel_centernew = CocoStudio.getComponent(this.view, "panel_centernew");//Panel
		this.panel_hall_center = CocoStudio.getComponent(this.view, "panel_hall_center");//Panel
		this.Button_match = CocoStudio.getComponent(this.view, "Button_match");//Button
		this.Button_jingdian = CocoStudio.getComponent(this.view, "Button_jingdian");//Button
		this.Button_qianwang = CocoStudio.getComponent(this.view, "Button_qianwang");//Button
		this.Panel_hall_center_down = CocoStudio.getComponent(this.view, "Panel_hall_center_down");//Panel
		this.Image_minigame_bg = CocoStudio.getComponent(this.view, "Image_minigame_bg");//ImageView
		this.Image_vipInfo = CocoStudio.getComponent(this.view, "Image_vipInfo");//ImageView
		this.Label_online = CocoStudio.getComponent(this.view, "Label_online");//Label
		this.Panel_MiniGame = CocoStudio.getComponent(this.view, "Panel_MiniGame");//Panel
		this.Panel_Commend = CocoStudio.getComponent(this.view, "Panel_Commend");//Panel
		this.Image_light = CocoStudio.getComponent(this.view, "Image_light");//ImageView
		this.Panel_miniChat = CocoStudio.getComponent(this.view, "Panel_miniChat");//Panel
	},

    initLayer:function(){
		var gui = GUI_HALL;
        this.view = CocoStudio.createView("res/Hall.json");
		GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion >= GameConfig.SCREEN_PROPORTION_GREAT){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/Hall.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/Hall.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}else if((GameConfig.RealProportion < GameConfig.SCREEN_PROPORTION_GREAT) && (GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL)){
//			//适配方案 960x640
//			this.view = CocoStudio.createView("res/Hall_960_640.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 960, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}
	},
    
	callback_Button_lijiyouxi:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            console.log("立即游戏");
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_setting:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_SETTING);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_message:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_MESSAGELIST);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_rankinglist:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_shop:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_friend:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_FRIENDLIST);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_task:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_RENWU);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_show_chat:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_Coin:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_YuanBao:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_vip:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_VIPINFO);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_Portrait:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJINHUA_MGR_USER_INFO(profile_user.getSelfUserID());
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_yaoqianshu:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            console.log("摇钱树！");
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_arena:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_yueka:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_MONTHCARD);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_chongzhi:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_libao:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_huodong:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_Return:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_match:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_jingdian:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_qianwang:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_vipInfo:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_VIPINFO);
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
    	Frameworks.addSlot2Signal(BASEID_GET_BASEINFO, ProfileHall.slot_BASEID_GET_BASEINFO);//大厅初始化-获取用户数据
    	Frameworks.addSlot2Signal(JINHUA_MGR_USER_INFO, ProfileHall.slot_JINHUA_MGR_USER_INFO);//添加头像-获取用户数据
        Frameworks.addSlot2Signal(JINHUA_MGR_SETTING, ProfileHall.slot_JINHUA_MGR_SETTING);//在线人数
        Frameworks.addSlot2Signal(JINHUA_MGR_NOTICE, ProfileHall.slot_JINHUA_MGR_NOTICE);//游戏公告
        Frameworks.addSlot2Signal(JINHUA_MGR_DAILY_SALARY, ProfileHall.slot_JINHUA_MGR_DAILY_SALARY);//每日工资面板
    },
    //移除信号
    removeSlot:function(){
        Frameworks.removeSlotFromSignal(BASEID_GET_BASEINFO, ProfileHall.slot_BASEID_GET_BASEINFO);
        Frameworks.removeSlotFromSignal(JINHUA_MGR_USER_INFO, ProfileHall.slot_JINHUA_MGR_USER_INFO);
        Frameworks.removeSlotFromSignal(JINHUA_MGR_SETTING, ProfileHall.slot_JINHUA_MGR_SETTING);
        Frameworks.removeSlotFromSignal(JINHUA_MGR_NOTICE, ProfileHall.slot_JINHUA_MGR_NOTICE);
        Frameworks.removeSlotFromSignal(JINHUA_MGR_DAILY_SALARY, ProfileHall.slot_JINHUA_MGR_DAILY_SALARY);
    },
    
    //释放界面的私有数据
    releaseData:function(){
    
    },
    
    requestMsg:function(){
    
    },
    //发送全局消息
    sendGameCommonMessage:function(){
        if(profile_user.getSelfUserID()!= 0){
            //当前在线时长
            sendJINHUA_MGR_SETTING(Profile_JinHuaSetting.getTimeStamp());
            //公告
            sendJINHUA_MGR_NOTICE(0);
            //获取玩家数据
            sendBASEID_GET_BASEINFO(profile_user.getSelfUserID());
            //每日工资
            sendJINHUA_MGR_DAILY_SALARY();
        }
    },
    //初始化界面(昵称、头像、Vip、称号、元宝数、金币数、按钮)
    initTable:function(){
        //按钮的各种动画
        this.showAnimation();
        //分割线的动画
        this.showLightLineAnimate();
    },
    initHallBaseData:function(){
        this.Label_NickName.setString(profile_user.getSelfNickName());//昵称
        //判断金币数，是否超出
        if(profile_user.getSelfCoin()>= 100000000){
            this.Label_Coin.setString(parseInt(profile_user.getSelfCoin()/100000000)+"亿");//金币数
        }else{
            this.Label_Coin.setString(profile_user.getSelfCoin());//金币数
        }

//        console.log("当前玩家的称谓等级:"+ profile_user.getSelfHonor());
        Common.setUserChengWei(profile_user.getSelfCoin(), this.Image_chengwei);
        //加载网络头像
        Common.setTextureByNet(profile_user.getSelfPhotoUrl(), this.Image_touxiang_default);

        //Vip等级
        var userVipLevel = profile_user.getSelfLevel();
        if(userVipLevel >= 0) {
            var texture = VipElementsUtils.getVipBgFromVipLevel(userVipLevel);
            if (texture != null) {
                this.btn_vip.loadTextures(Common.getResourcePath(texture), Common.getResourcePath(texture),"");
            }else{
                this.btn_vip.loadTexture(Common.getResourcePath("ic_vip_0.png"),Common.getResourcePath("ic_vip_0.png"),"");
            }
        }

        //元宝
        var myYuanBao = profile_user.getSelfYuanBao();
        if(myYuanBao>= 100000000){
            myYuanBao = GamePub.getPreciseDecimal(myYuanBao / 100000000, 2)+"亿"
        }else if(myYuanBao >= 10000) {
            myYuanBao = GamePub.getPreciseDecimal(myYuanBao / 10000, 2)+"万";
        }
        this.Label_YuanBao.setString(myYuanBao);//元宝数


    },
    //执行动画
    showAnimation:function(){
        var self= this;
        //红色按钮标识区域，不显示
        self.Button_yaoqianshu.setOpacity(0);
        self.Button_lijiyouxi.setOpacity(0);

        //礼包按钮的晃动操作
        GamePub.showShakeAnimate(self.btn_libao);

        //摇钱树动画
        Common.createArmature(
            "res/Animation/Yaoqianshu_Action_Enter_Animation.ExportJson",//动画Json路径
            "Yaoqianshu_Action_Enter_Animation",//要执行的动画名
            function(armature){
                armature.getAnimation().playWithIndex(0, 0.1, true);//循环播放
                /*************按钮的锚点为(0,0),摇钱树(0.5, 0.5)在按钮的居中位置*******************/
                var size= self.Button_yaoqianshu.getContentSize();
                armature.setPosition(cc.p(size.width* 0.5, size.height* 0.5- 5));

                self.Button_yaoqianshu.addChild(armature);
            });

        //快速开始动画
        Common.createArmature(
            "res/Animation/Animation_Hall_Quick.ExportJson",//动画Json路径
            "Animation_Hall_Quick",//要执行的动画名
            function(armature){
                armature.getAnimation().playWithIndex(0, 0.1, true);//循环播放
                /*************按钮的锚点为(0,0),摇钱树(0.5, 0.5)在按钮的居中位置*******************/
                var size= self.Button_lijiyouxi.getContentSize();
                armature.setPosition(cc.p(size.width* 0.5, size.height* 0.5));
                self.Button_lijiyouxi.addChild(armature);
            });

        //经典场动画
        Common.createArmature(
            "res/Animation/Animation_Newhall_ClassicRoom.ExportJson",//动画Json路径
            "Animation_Newhall_ClassicRoom",//要执行的动画名
            function(armature){
                armature.getAnimation().playWithIndex(0, 0.1, true);//循环播放
                armature.setAnchorPoint(cc.p(0,0));
                armature.setPosition(0, 10);
                self.Button_jingdian.addChild(armature);
            });

        //千王场动画
        Common.createArmature(
            "res/Animation/Animation_Newhall_CheatKingRoom.ExportJson",//动画Json路径
            "Animation_Newhall_CheatKingRoom",//要执行的动画名
            function(armature){
                armature.getAnimation().playWithIndex(0, 0.1, true);//循环播放
                armature.setAnchorPoint(cc.p(0,0));
                armature.setPosition(0, 10);
                self.Button_qianwang.addChild(armature);
            });

        //比赛场动画
        Common.createArmature(
            "res/Animation/Animation_Newhall_TounamentRoom.ExportJson",//动画Json路径
            "Animation_Newhall_TounamentRoom",//要执行的动画名
            function(armature){
                armature.getAnimation().playWithIndex(0, 0.1, true);//循环播放
                armature.setAnchorPoint(cc.p(0,0));
                armature.setPosition(-16, 10);
                self.Button_match.addChild(armature);
            });
    },
    //设置活动列表和小游戏列表可否使用
    setListenerEnabled:function(bEnabled){
        MiniGameLists.setTouchEnabled(bEnabled);
        ActivityLists.setTouchEnabled(bEnabled);
    },
    //分割线动画
    showLightLineAnimate:function(){
        var self= this;
        self.Image_light.setPosition(cc.p(-76, 259));
        var moveTo= cc.moveTo(1.5, cc.p(1136+ 76, 259));
        var delayTime= cc.delayTime(Math.random()* 10+ 10);
        var seq= cc.sequence(moveTo, delayTime, cc.callFunc(function(pSender){
            self.showLightLineAnimate();
        }));
        self.Image_light.runAction(seq);
    },
    //小游戏列表
    initMiniGameList:function(){
        MiniGameLists.init(this.view, cc.pAdd(cc.p(0, cc.winSize.height* 0.025), this.Panel_MiniGame.getPosition()));
    },
    //活动列表
    initActivityLists:function(){
       ActivityLists.init(this.view, this.Panel_Commend.getPosition());
    },
    //设置当前在线人数
    setOnlinePlayerNumber:function(){
        this.Label_online.setColor(cc.color(255,0,0));
        this.Label_online.setText("当前在线:"+Profile_JinHuaSetting.getOnlinePlayerNumber()+"人");
    },
    //切换首充翻倍动画
    setShouChongFanBei:function(){
        var self= this;
        if(!Profile_JinHuaSetting.getIsRecharged()){
            //首充翻倍
            self.btn_chongzhi.setOpacity(0);
            //首充翻倍
            Common.createArmature(
                "res/Animation/ShouchonganniuAnimation.ExportJson",//动画Json路径
                "ShouchonganniuAnimation",//要执行的动画名
                function(armature){
                    armature.getAnimation().playWithIndex(0, 0.1, true);//循环播放
                    /*************按钮的锚点为(0,0),摇钱树(0.5, 0.5)在按钮的居中位置*******************/
                    var size= self.btn_chongzhi.getContentSize();
                    armature.setAnchorPoint(cc.p(0,0));
                    armature.setPosition(cc.p(0,0));
                    //armature.setPosition(cc.p(size.width* 0.5, size.height* 0.5));

                    self.btn_chongzhi.addChild(armature);
                });
        }
    },
    //系统公告文本
    createSystemNoticeLabel:function(systemNotice,textLenWidth,color){
        var chatPanelSize= this.panel_chat.getContentSize();
        var chatPanelPoint= this.panel_chat.getPosition();
        var ImageNoticeSize= this.ImageView_Notice.getContentSize();

        var labelNotice= cc.LabelTTF.create(systemNotice.toString(), "微软雅黑", 20);
        labelNotice.setAnchorPoint(cc.p(0, 0));
        labelNotice.setPosition(cc.p(chatPanelSize.width + chatPanelPoint.x + ImageNoticeSize.width / 2,0));
        labelNotice.setColor(color);
        this.panel_chat.addChild(labelNotice);

        var moveBy =  cc.MoveBy.create(GameConfig.NOTICE_MOVE_TIME*(labelNotice.width + chatPanelSize.width), cc.p(-chatPanelPoint.x -labelNotice.width -chatPanelSize.width,0));
        var seq = cc.Sequence.create(moveBy);
        labelNotice.runAction(cc.RepeatForever.create(seq));
    }
};

//Todo:公告
//Todo:Vip等级需要联调
//Todo:没有做礼包数据的原因是:没有应用版本号和版本名
//Todo:没有做活动的原因是:GameLoadModuleConfig.getTaskGameConfigList()活动文件列表不知道
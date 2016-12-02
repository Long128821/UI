var HallLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	panel_bg:null,
	img_bgleft:null,
	panel_down:null,
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
	hall_black_cover:null,
	Panel_16_0:null,
	Button_YuanBao:null,
	Label_yuanbao:null,
	AtlasLabel_yuanbaoshu:null,
	Label_Coin:null,
	Button_Coin:null,
	AtlasLabel_jinbishu:null,
	Label_NickName:null,
	Image_yueka:null,
	Label_shengyu:null,
	btn_vip:null,
	Image_Portrait:null,
	Image_touxiangkuang:null,
	Image_chengwei:null,
	Panel_top:null,
	btn_hall_huodong:null,
	btn_yueka:null,
	btn_show_chat:null,
	Image_hongdian2:null,
	btn_chongzhi:null,
	Image_hongdian1:null,
	btn_libao:null,
	btn_huodong:null,
	Button_Return:null,
	ImageView_Notice:null,
	panel_chat:null,
	Image_pochan:null,
	Image_hongdian8:null,
	AtlasLabel_shijian:null,
	panel_centernew:null,
	panel_hall_center:null,
	Button_jingdian:null,
	Button_qianwang:null,
	Button_xiaoyouxi:null,
	Button_lijiyouxi:null,
	panel_jingdianchang:null,
	panel_hall_jingdian:null,
	Button_jingdian_chujichang:null,
	Image_chuji2:null,
	AtlasLabel_jingdian_chuji:null,
	Button_jingdian_zhongjichang:null,
	Image_zhongji2:null,
	AtlasLabel_jingdian_zhongji:null,
	Button_jingdian_gaojichang:null,
	Image_gaoji2:null,
	AtlasLabel_jingdian_gaoji:null,
	Button_jingdian_fanhui:null,
	panel_qianwangchang:null,
	panel_hall_qianwang:null,
	Button_qianwang_chujichang:null,
	Image_qianwangchuji2:null,
	AtlasLabel_qianwang_chuji:null,
	Button_qianwang_gaojichang:null,
	Image_qianwanggaoji2:null,
	AtlasLabel_qianwang_gaoji:null,
	Button_qianwang_chaojichang:null,
	Image_qianwangchaogaoji2:null,
	AtlasLabel_qianwang_chaogaoji:null,
	Button_qianwang_fanhui:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["Hall"]["Layer"]);
        
        this.initView();
    },
    
	initView:function(){
		this.panel_bg = CocoStudio.getComponent(this.view, "panel_bg");//Panel
		this.img_bgleft = CocoStudio.getComponent(this.view, "img_bgleft");//ImageView
		this.panel_down = CocoStudio.getComponent(this.view, "panel_down");//Panel
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
		this.hall_black_cover = CocoStudio.getComponent(this.view, "hall_black_cover");//ImageView
		this.Panel_16_0 = CocoStudio.getComponent(this.view, "Panel_16_0");//Panel
		this.Button_YuanBao = CocoStudio.getComponent(this.view, "Button_YuanBao");//Button
		this.Label_yuanbao = CocoStudio.getComponent(this.view, "Label_yuanbao");//Label
		this.AtlasLabel_yuanbaoshu = CocoStudio.getComponent(this.view, "AtlasLabel_yuanbaoshu");//LabelAtlas
		this.Label_Coin = CocoStudio.getComponent(this.view, "Label_Coin");//Label
		this.Button_Coin = CocoStudio.getComponent(this.view, "Button_Coin");//Button
		this.AtlasLabel_jinbishu = CocoStudio.getComponent(this.view, "AtlasLabel_jinbishu");//LabelAtlas
		this.Label_NickName = CocoStudio.getComponent(this.view, "Label_NickName");//Label
		this.Image_yueka = CocoStudio.getComponent(this.view, "Image_yueka");//ImageView
		this.Label_shengyu = CocoStudio.getComponent(this.view, "Label_shengyu");//Label
		this.btn_vip = CocoStudio.getComponent(this.view, "btn_vip");//Button
		this.Image_Portrait = CocoStudio.getComponent(this.view, "Image_Portrait");//ImageView
		this.Image_touxiangkuang = CocoStudio.getComponent(this.view, "Image_touxiangkuang");//ImageView
		this.Image_chengwei = CocoStudio.getComponent(this.view, "Image_chengwei");//ImageView
		this.Panel_top = CocoStudio.getComponent(this.view, "Panel_top");//Panel
		this.btn_hall_huodong = CocoStudio.getComponent(this.view, "btn_hall_huodong");//Button
		this.btn_yueka = CocoStudio.getComponent(this.view, "btn_yueka");//Button
		this.btn_show_chat = CocoStudio.getComponent(this.view, "btn_show_chat");//Button
		this.Image_hongdian2 = CocoStudio.getComponent(this.view, "Image_hongdian2");//ImageView
		this.btn_chongzhi = CocoStudio.getComponent(this.view, "btn_chongzhi");//Button
		this.Image_hongdian1 = CocoStudio.getComponent(this.view, "Image_hongdian1");//ImageView
		this.btn_libao = CocoStudio.getComponent(this.view, "btn_libao");//Button
		this.btn_huodong = CocoStudio.getComponent(this.view, "btn_huodong");//Button
		this.Button_Return = CocoStudio.getComponent(this.view, "Button_Return");//Button
		this.ImageView_Notice = CocoStudio.getComponent(this.view, "ImageView_Notice");//ImageView
		this.panel_chat = CocoStudio.getComponent(this.view, "panel_chat");//Panel
		this.Image_pochan = CocoStudio.getComponent(this.view, "Image_pochan");//ImageView
		this.Image_hongdian8 = CocoStudio.getComponent(this.view, "Image_hongdian8");//ImageView
		this.AtlasLabel_shijian = CocoStudio.getComponent(this.view, "AtlasLabel_shijian");//Label
		this.panel_centernew = CocoStudio.getComponent(this.view, "panel_centernew");//Panel
		this.panel_hall_center = CocoStudio.getComponent(this.view, "panel_hall_center");//Panel
		this.Button_jingdian = CocoStudio.getComponent(this.view, "Button_jingdian");//Button
		this.Button_qianwang = CocoStudio.getComponent(this.view, "Button_qianwang");//Button
		this.Button_xiaoyouxi = CocoStudio.getComponent(this.view, "Button_xiaoyouxi");//Button
		this.Button_lijiyouxi = CocoStudio.getComponent(this.view, "Button_lijiyouxi");//Button
		this.panel_jingdianchang = CocoStudio.getComponent(this.view, "panel_jingdianchang");//Panel
		this.panel_hall_jingdian = CocoStudio.getComponent(this.view, "panel_hall_jingdian");//Panel
		this.Button_jingdian_chujichang = CocoStudio.getComponent(this.view, "Button_jingdian_chujichang");//Button
		this.Image_chuji2 = CocoStudio.getComponent(this.view, "Image_chuji2");//ImageView
		this.AtlasLabel_jingdian_chuji = CocoStudio.getComponent(this.view, "AtlasLabel_jingdian_chuji");//LabelAtlas
		this.Button_jingdian_zhongjichang = CocoStudio.getComponent(this.view, "Button_jingdian_zhongjichang");//Button
		this.Image_zhongji2 = CocoStudio.getComponent(this.view, "Image_zhongji2");//ImageView
		this.AtlasLabel_jingdian_zhongji = CocoStudio.getComponent(this.view, "AtlasLabel_jingdian_zhongji");//LabelAtlas
		this.Button_jingdian_gaojichang = CocoStudio.getComponent(this.view, "Button_jingdian_gaojichang");//Button
		this.Image_gaoji2 = CocoStudio.getComponent(this.view, "Image_gaoji2");//ImageView
		this.AtlasLabel_jingdian_gaoji = CocoStudio.getComponent(this.view, "AtlasLabel_jingdian_gaoji");//LabelAtlas
		this.Button_jingdian_fanhui = CocoStudio.getComponent(this.view, "Button_jingdian_fanhui");//Button
		this.panel_qianwangchang = CocoStudio.getComponent(this.view, "panel_qianwangchang");//Panel
		this.panel_hall_qianwang = CocoStudio.getComponent(this.view, "panel_hall_qianwang");//Panel
		this.Button_qianwang_chujichang = CocoStudio.getComponent(this.view, "Button_qianwang_chujichang");//Button
		this.Image_qianwangchuji2 = CocoStudio.getComponent(this.view, "Image_qianwangchuji2");//ImageView
		this.AtlasLabel_qianwang_chuji = CocoStudio.getComponent(this.view, "AtlasLabel_qianwang_chuji");//LabelAtlas
		this.Button_qianwang_gaojichang = CocoStudio.getComponent(this.view, "Button_qianwang_gaojichang");//Button
		this.Image_qianwanggaoji2 = CocoStudio.getComponent(this.view, "Image_qianwanggaoji2");//ImageView
		this.AtlasLabel_qianwang_gaoji = CocoStudio.getComponent(this.view, "AtlasLabel_qianwang_gaoji");//LabelAtlas
		this.Button_qianwang_chaojichang = CocoStudio.getComponent(this.view, "Button_qianwang_chaojichang");//Button
		this.Image_qianwangchaogaoji2 = CocoStudio.getComponent(this.view, "Image_qianwangchaogaoji2");//ImageView
		this.AtlasLabel_qianwang_chaogaoji = CocoStudio.getComponent(this.view, "AtlasLabel_qianwang_chaogaoji");//LabelAtlas
		this.Button_qianwang_fanhui = CocoStudio.getComponent(this.view, "Button_qianwang_fanhui");//Button
	},

    initLayer:function(){
		var gui = GUI_HALL; 
		if(GameConfig.RealProportion >= GameConfig.SCREEN_PROPORTION_GREAT){
			//适配方案 1136x640  
			this.view = CocoStudio.createView("res/Hall.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 Pad加黑边  
			this.view = CocoStudio.createView("res/Hall.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
		}else if((GameConfig.RealProportion < GameConfig.SCREEN_PROPORTION_GREAT) && (GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL)){
			//适配方案 960x640  
			this.view = CocoStudio.createView("res/Hall_960_640.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 960, 640, cc.ResolutionPolicy.EXACT_FIT); 
		}
	},
    
	callback_btn_setting:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_message:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

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

	callback_Button_Coin:function(pSender, event){
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

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_Portrait:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_hall_huodong:function(pSender, event){
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

	callback_Image_pochan:function(pSender, event){
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

	callback_Button_xiaoyouxi:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_lijiyouxi:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_jingdian_chujichang:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_jingdian_zhongjichang:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_jingdian_gaojichang:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_jingdian_fanhui:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_qianwang_chujichang:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_qianwang_gaojichang:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_qianwang_chaojichang:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_qianwang_fanhui:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},
    
    onKeypad:function(event){
    	if(event == "backClicked"){//返回键
    		
    	}else if(event == "menuClicked"){//菜单键
    	
    	}
    },
    
    addSlot:function(){
    	
    },
    
    removeSlot:function(){
    	
    },
    
    //释放界面的私有数据
    releaseData:function(){
    
    },
    
    requestMsg:function(){
    
    }
};

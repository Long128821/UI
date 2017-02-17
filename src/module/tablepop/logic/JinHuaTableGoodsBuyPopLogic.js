var JinHuaTableGoodsBuyPopLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_14:null,
	panel_table_goods_buy:null,
	iv_bg:null,
	tv_price:null,
	btn_close:null,
	iv_divider:null,
	tv_intro:null,
	iv_pic:null,
	tv_cnt:null,
	btn_confirm:null,
	Image_intro:null,
	Label_price:null,
	
    createView:function(){
        //是否已经见图集加载内存中
        if(cc.spriteFrameCache.getSpriteFrame("bg_tongyongdi.png")== undefined){
            cc.spriteFrameCache.addSpriteFrames(Common.getJinHuaResourcePath("co_desk.plist"),Common.getJinHuaResourcePath("co_desk.png"))
        }
    	this.initLayer();
        
        this.view.setTag(ModuleTable["JinHuaTableGoodsBuyPop"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_14 = CocoStudio.getComponent(this.view, "Panel_14");//Panel
		this.panel_table_goods_buy = CocoStudio.getComponent(this.view, "panel_table_goods_buy");//Panel
		this.iv_bg = CocoStudio.getComponent(this.view, "iv_bg");//ImageView
		this.tv_price = CocoStudio.getComponent(this.view, "tv_price");//Label
		this.btn_close = CocoStudio.getComponent(this.view, "btn_close");//Button
		this.iv_divider = CocoStudio.getComponent(this.view, "iv_divider");//ImageView
		this.tv_intro = CocoStudio.getComponent(this.view, "tv_intro");//Label
		this.iv_pic = CocoStudio.getComponent(this.view, "iv_pic");//ImageView
		this.tv_cnt = CocoStudio.getComponent(this.view, "tv_cnt");//Label
		this.btn_confirm = CocoStudio.getComponent(this.view, "btn_confirm");//Button
		this.Image_intro = CocoStudio.getComponent(this.view, "Image_intro");//ImageView
		this.Label_price = CocoStudio.getComponent(this.view, "Label_price");//Label
	},

    initLayer:function(){
		var gui = GUI_JINHUATABLEGOODSBUYPOP;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/JinHuaTableGoodsBuyPop.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/JinHuaTableGoodsBuyPop.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/JinHuaTableGoodsBuyPop.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}
	},
    
	callback_Panel_14:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_close:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_JINHUATABLEGOODSBUYPOP);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_confirm:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            Common.showToast("目前该功能还没有开发！", 2);
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

    }
};

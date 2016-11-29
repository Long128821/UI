var MoreLogic= cc.Layer.extend({
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_main:null,
	Panel:null,
	ImageView_Bg:null,
	Img_TopUser:null,
	Img_DeleteTopUser:null,
	Label_TopUserName:null,
	Img_MiddleUser:null,
	Img_DeleteMiddleUser:null,
	Label_MiddleUserName:null,
	Image_BottomUser:null,
	Img_DeleteBottomUser:null,
	Label_BottomUserName:null,
	
    ctor:function(){
        this._super();
    },

    createView:function(){
    	this.initLayer();
        
        //this.view.setTag(getDiffTag());
        
        this.initView();
    },
    
	initView:function(){
		this.Panel_main = CocoStudio.getComponent(this.view, "Panel_main");
		this.Panel = CocoStudio.getComponent(this.view, "Panel");
		this.ImageView_Bg = CocoStudio.getComponent(this.view, "ImageView_Bg");
		this.Img_TopUser = CocoStudio.getComponent(this.view, "Img_TopUser");
		this.Img_DeleteTopUser = CocoStudio.getComponent(this.view, "Img_DeleteTopUser");
		this.Label_TopUserName = CocoStudio.getComponent(this.view, "Label_TopUserName");
		this.Img_MiddleUser = CocoStudio.getComponent(this.view, "Img_MiddleUser");
		this.Img_DeleteMiddleUser = CocoStudio.getComponent(this.view, "Img_DeleteMiddleUser");
		this.Label_MiddleUserName = CocoStudio.getComponent(this.view, "Label_MiddleUserName");
		this.Image_BottomUser = CocoStudio.getComponent(this.view, "Image_BottomUser");
		this.Img_DeleteBottomUser = CocoStudio.getComponent(this.view, "Img_DeleteBottomUser");
		this.Label_BottomUserName = CocoStudio.getComponent(this.view, "Label_BottomUserName");
	},

    initLayer:function(){
		var gui = GUI_MORE;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/More.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion >= GameConfig.SCREEN_PROPORTION_GREAT){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/More.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/More.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}else if((GameConfig.RealProportion < GameConfig.SCREEN_PROPORTION_GREAT) && (GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL)){
//			//适配方案 960x640
//			this.view = CocoStudio.createView("res/More_960_640.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 960, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}
	},
    
	callback_Panel_main:function(type){
		if(type == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(type == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(type == ccui.Widget.TOUCH_CANCELED){
			//取消
		}
	},

	callback_Img_TopUser:function(type){
		if(type == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(type == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(type == ccui.Widget.TOUCH_CANCELED){
			//取消
		}
	},

	callback_Img_DeleteTopUser:function(type){
		if(type == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(type == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(type == ccui.Widget.TOUCH_CANCELED){
			//取消
		}
	},

	callback_Img_MiddleUser:function(type){
		if(type == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(type == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(type == ccui.Widget.TOUCH_CANCELED){
			//取消
		}
	},

	callback_Img_DeleteMiddleUser:function(type){
		if(type == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(type == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(type == ccui.Widget.TOUCH_CANCELED){
			//取消
		}
	},

	callback_Image_BottomUser:function(type){
		if(type == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(type == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(type == ccui.Widget.TOUCH_CANCELED){
			//取消
		}
	},

	callback_Img_DeleteBottomUser:function(type){
		if(type == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(type == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(type == ccui.Widget.TOUCH_CANCELED){
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
});


MoreLogic= new MoreLogic();

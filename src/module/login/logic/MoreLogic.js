var MoreLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	Panel_23:null,
	scroll_sexold:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["More"]["Layer"]);
        
        this.initView();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.Panel_23 = CocoStudio.getComponent(this.view, "Panel_23");//Panel
		this.scroll_sexold = CocoStudio.getComponent(this.view, "scroll_sexold");//ScrollView
	},

    initLayer:function(){
		var gui = GUI_MORE; 
		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 1136x640  
			this.view = CocoStudio.createView("res/More.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT); 
		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 Pad加黑边  
			this.view = CocoStudio.createView("res/More.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL); 
		}
	},
    
	callback_Panel_20:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_23:function(pSender, event){
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

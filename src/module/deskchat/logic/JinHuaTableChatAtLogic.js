var JinHuaTableChatAtLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_main:null,
	Panel:null,
	Img_User4:null,
	Label_User4Name:null,
	Img_User3:null,
	Label_User3Name:null,
	Img_User2:null,
	Label_User2Name:null,
	Img_User1:null,
	Label_User1Name:null,
    ///////////////自定义/////////////////
    m_arrUserName:[],//玩家昵称列表
    m_arrUserNameLable:[],//存放显示名字lable控件
    m_arrUserNameImage:[],//存放名字按钮控件
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["JinHuaTableChatAt"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_main = CocoStudio.getComponent(this.view, "Panel_main");//Panel
		this.Panel = CocoStudio.getComponent(this.view, "Panel");//Panel
		this.Img_User4 = CocoStudio.getComponent(this.view, "Img_User4");//ImageView
		this.Label_User4Name = CocoStudio.getComponent(this.view, "Label_User4Name");//Label
		this.Img_User3 = CocoStudio.getComponent(this.view, "Img_User3");//ImageView
		this.Label_User3Name = CocoStudio.getComponent(this.view, "Label_User3Name");//Label
		this.Img_User2 = CocoStudio.getComponent(this.view, "Img_User2");//ImageView
		this.Label_User2Name = CocoStudio.getComponent(this.view, "Label_User2Name");//Label
		this.Img_User1 = CocoStudio.getComponent(this.view, "Img_User1");//ImageView
		this.Label_User1Name = CocoStudio.getComponent(this.view, "Label_User1Name");//Label
	},

    initLayer:function(){
		var gui = GUI_JINHUATABLECHATAT;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/JinHuaTableChatAt.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion >= GameConfig.SCREEN_PROPORTION_GREAT){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/JinHuaTableChatAt.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/JinHuaTableChatAt.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}else if((GameConfig.RealProportion < GameConfig.SCREEN_PROPORTION_GREAT) && (GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL)){
//			//适配方案 960x640
//			this.view = CocoStudio.createView("res/JinHuaTableChatAt_960_640.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 960, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}
	},
    
	callback_Panel_main:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableChatAtLogic.close();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Img_User4:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableChatAtLogic.onNickName(3);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Img_User3:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableChatAtLogic.onNickName(2);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Img_User2:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableChatAtLogic.onNickName(1);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Img_User1:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableChatAtLogic.onNickName(0);
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
        this.clearData();//清空数据
        this.initUserTable();//初始化牌桌table
        this.initUserNameArray();//初始化牌桌玩家数组
        this.initUserNameList();//初始化牌桌玩家列表
    },
    //清空数据
    clearData:function(){
        this.m_arrUserName= [];
        this.m_arrUserNameImage= [];
        this.m_arrUserNameLable= [];
    },
    //初始化牌桌table
    initUserTable:function(){
        this.m_arrUserNameLable.push(this.Label_User1Name);
        this.m_arrUserNameLable.push(this.Label_User2Name);
        this.m_arrUserNameLable.push(this.Label_User3Name);
        this.m_arrUserNameLable.push(this.Label_User4Name);

        this.m_arrUserNameImage.push(this.Img_User1);
        this.m_arrUserNameImage.push(this.Img_User2);
        this.m_arrUserNameImage.push(this.Img_User3);
        this.m_arrUserNameImage.push(this.Img_User4);
    },
    //初始化牌桌玩家数组
    initUserNameArray:function(){
        var players= Profile_JinHuaGameData.getPlayers();
        for(var CSID= 1; CSID<=4; ++CSID){
            var player= players[CSID];
            if(!Common.judgeValueIsEffect(player)) continue;
            this.m_arrUserName.push(player.nickName);
        }
    },
    //初始化牌桌玩家列表、
    initUserNameList:function(){
        for(var i=0; i< 4; ++i){
            if(i< this.m_arrUserName.length){
                this.m_arrUserNameLable[i].setString(this.m_arrUserName[i]);
            }else{
                this.m_arrUserNameImage[i].setVisible(false);
                this.m_arrUserNameImage[i].setTouchEnabled(false);
            }
        }
    },
    //点击玩家昵称
    onNickName:function(tag){
        var strValue= this.m_arrUserNameLable[tag].getString();
        if(Common.judgeValueIsEffect(strValue)){
            JinHuaChatPopLogic.setAtNickname(strValue);
        }
        this.close();
    },
    //关闭
    close:function(){
        MvcEngine.destroyModule(GUI_JINHUATABLECHATAT);
    }
};

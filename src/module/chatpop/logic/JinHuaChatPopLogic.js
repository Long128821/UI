//聊天列表中，左边通用聊天列表（男性）
var g_tableMaleChatCommonText= [
    "快点吧！花儿谢了都又开了",
    "有种别看牌！",
    "投降输一半，赶紧弃牌吧",
    "搏一搏，单车变摩托",
    "不要迷恋哥，哥会让你吐血",
    "你牌技这么好，地球人知道么",
    "人靓牌亮，不服就上",
    "小手一抖，锅底拿走",
    "看你存钱不容易，先放你一马",
    "唉，手气太差了！",
    "男人要有钱，和谁都有缘",
    "看见美女就头晕，牌没看清我就跟"
];
//聊天列表中，左边通用聊天列表（女性）
var g_tableFeMaleChatCommonText= [
    "快点吧！花儿谢了都又开了",
    "有种别看牌！",
    "投降输一半，赶紧弃牌吧",
    "搏一搏，单车变摩托",
    "不要迷恋姐，姐会让你吐血",
    "你牌技这么好，地球人知道么",
    "人靓牌亮，不服就上",
    "小手一抖，锅底拿走",
    "看你存钱不容易，先放你一马",
    "唉，手气太差了！",
    "女人要有钱，和谁都有缘",
    "看见帅哥就头晕，牌没看清我就跟"
];

//
var g_tableQuickChatCommonText= [
    "各位好啊！",
    "我来收钱咯！",
    "寡人来了，众爱卿请平身~",
    "牌太差了！",
    "算你狠！",
    "先放你一马~",
    "谢谢！",
    "祝你下局好运！",
    "都服了么？",
    "运气太差了~",
    "打得不错哦！",
    "你咋不上天呢？"
];

var JinHuaChatPopLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	Panel_chatlog:null,
	panel_common:null,
	ImageView_chat_edit:null,
	et_msg_log:null,
	Label_msg_log:null,
	panel:null,
	Panel_265:null,
	panel_biaoqing:null,
	panel_biaoqing_common:null,
	btn_bq_common1:null,
	btn_bq_common2:null,
	btn_bq_common3:null,
	btn_bq_common4:null,
	btn_bq_common5:null,
	btn_bq_common6:null,
	btn_bq_common7:null,
	btn_bq_common8:null,
	btn_bq_common9:null,
	btn_bq_common10:null,
	btn_bq_common11:null,
	btn_bq_common12:null,
	btn_bq_common13:null,
	btn_bq_common14:null,
	panel_log:null,
	btn_sendmsg_log:null,
	Button_bugle:null,
	Button_At:null,
	btn_close:null,

    m_curChatCommonTextTable:{},//当前聊天Table
    m_curCommonTextTableView:null,//普通列表TableView
    m_curTextLogTableView:null,//聊天信息列表TableView
    //清空数据
    clear:function(){
        this.m_curChatCommonTextTable= {};
        Common.judgeValueIsEffect(this.m_curCommonTextTableView)&&this.m_curCommonTextTableView.removeFromParent(true);
        this.m_curCommonTextTableView= null;

        Common.judgeValueIsEffect(this.m_curTextLogTableView)&&this.m_curTextLogTableView.removeFromParent(true);
        this.m_curTextLogTableView= null;
    },
    createView:function(){
        this.clear();//清空数据
        //是否已经见图集加载内存中
        if(cc.spriteFrameCache.getSpriteFrame("bg_tongyongdi.png")== undefined){
            cc.spriteFrameCache.addSpriteFrames(Common.getJinHuaResourcePath("co_desk.plist"),Common.getJinHuaResourcePath("co_desk.png"))
        }
        if(cc.spriteFrameCache.getSpriteFrame("ordinary_face_02.png")== undefined){
            cc.spriteFrameCache.addSpriteFrames(Common.getJinHuaResourcePath("chat_popup.plist"),Common.getJinHuaResourcePath("chat_popup.png"))
        }
    	this.initLayer();
        
        this.view.setTag(ModuleTable["JinHuaChatPop"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.Panel_chatlog = CocoStudio.getComponent(this.view, "Panel_chatlog");//Panel
		this.panel_common = CocoStudio.getComponent(this.view, "panel_common");//Panel
		this.ImageView_chat_edit = CocoStudio.getComponent(this.view, "ImageView_chat_edit");//ImageView
		this.et_msg_log = CocoStudio.getComponent(this.view, "et_msg_log");//TextField
		this.Label_msg_log = CocoStudio.getComponent(this.view, "Label_msg_log");//Label
		this.panel = CocoStudio.getComponent(this.view, "panel");//Panel
		this.Panel_265 = CocoStudio.getComponent(this.view, "Panel_265");//Panel
		this.panel_biaoqing = CocoStudio.getComponent(this.view, "panel_biaoqing");//Panel
		this.panel_biaoqing_common = CocoStudio.getComponent(this.view, "panel_biaoqing_common");//Panel
		this.btn_bq_common1 = CocoStudio.getComponent(this.view, "btn_bq_common1");//Button
		this.btn_bq_common2 = CocoStudio.getComponent(this.view, "btn_bq_common2");//Button
		this.btn_bq_common3 = CocoStudio.getComponent(this.view, "btn_bq_common3");//Button
		this.btn_bq_common4 = CocoStudio.getComponent(this.view, "btn_bq_common4");//Button
		this.btn_bq_common5 = CocoStudio.getComponent(this.view, "btn_bq_common5");//Button
		this.btn_bq_common6 = CocoStudio.getComponent(this.view, "btn_bq_common6");//Button
		this.btn_bq_common7 = CocoStudio.getComponent(this.view, "btn_bq_common7");//Button
		this.btn_bq_common8 = CocoStudio.getComponent(this.view, "btn_bq_common8");//Button
		this.btn_bq_common9 = CocoStudio.getComponent(this.view, "btn_bq_common9");//Button
		this.btn_bq_common10 = CocoStudio.getComponent(this.view, "btn_bq_common10");//Button
		this.btn_bq_common11 = CocoStudio.getComponent(this.view, "btn_bq_common11");//Button
		this.btn_bq_common12 = CocoStudio.getComponent(this.view, "btn_bq_common12");//Button
		this.btn_bq_common13 = CocoStudio.getComponent(this.view, "btn_bq_common13");//Button
		this.btn_bq_common14 = CocoStudio.getComponent(this.view, "btn_bq_common14");//Button
		this.panel_log = CocoStudio.getComponent(this.view, "panel_log");//Panel
		this.btn_sendmsg_log = CocoStudio.getComponent(this.view, "btn_sendmsg_log");//Button
		this.Button_bugle = CocoStudio.getComponent(this.view, "Button_bugle");//Button
		this.Button_At = CocoStudio.getComponent(this.view, "Button_At");//Button
		this.btn_close = CocoStudio.getComponent(this.view, "btn_close");//Button
	},

    initLayer:function(){
		var gui = GUI_JINHUACHATPOP; 
//		if(GameConfig.RealProportion >= GameConfig.SCREEN_PROPORTION_GREAT){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/JinHuaChatPop.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/JinHuaChatPop.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}else if((GameConfig.RealProportion < GameConfig.SCREEN_PROPORTION_GREAT) && (GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL)){
//			//适配方案 960x640
//			this.view = CocoStudio.createView("res/JinHuaChatPop_960_640.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 960, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/JinHuaChatPop.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
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

	callback_Panel_chatlog:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_bq_common1:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaChatPopLogic.onSendEmotion(1);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_bq_common2:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaChatPopLogic.onSendEmotion(2);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_bq_common3:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaChatPopLogic.onSendEmotion(3);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_bq_common4:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaChatPopLogic.onSendEmotion(4);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_bq_common5:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaChatPopLogic.onSendEmotion(5);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_bq_common6:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaChatPopLogic.onSendEmotion(6);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_bq_common7:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaChatPopLogic.onSendEmotion(7);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_bq_common8:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaChatPopLogic.onSendEmotion(8);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_bq_common9:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaChatPopLogic.onSendEmotion(9);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_bq_common10:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaChatPopLogic.onSendEmotion(10);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_bq_common11:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaChatPopLogic.onSendEmotion(11);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_bq_common12:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaChatPopLogic.onSendEmotion(12);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_bq_common13:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaChatPopLogic.onSendEmotion(13);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_bq_common14:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaChatPopLogic.onSendEmotion(14);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_sendmsg_log:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaChatPopLogic.onSendMsg();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_bugle:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaChatPopLogic.onBugle();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_At:function(pSender, event){
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
            MvcEngine.destroyModule(GUI_JINHUACHATPOP);
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
        //根据性别，获取当前活动的通用消息列表
        if(profile_user.getSelfSex()!= null&&profile_user.getSelfSex()== Profile_JinHuaGameData.MALE){
            this.m_curChatCommonTextTable= g_tableMaleChatCommonText;
        }else{
            this.m_curChatCommonTextTable= g_tableFeMaleChatCommonText;
        }
        if(Common.getTableSize(this.m_curChatCommonTextTable)== 0) return;
        //初始化常用聊天列表
        CommonTextTableView.initCommonTextTableView();
        //历史信息列表
        TextLogTableView.initTextLogTableView();
    },
    //发送聊天表情
    onSendEmotion:function(tag){
        sendJHID_CHAT_REQ(TYPE_CHAT_COMMON_V2, tag.toString());
        this.close();
    },
    //发送文案
    onSendText:function(msg){
        sendJHID_CHAT_REQ(TYPE_CHAT_TEXT, msg.toString());
        this.close();
    },
    //关闭当前界面
    close:function(){
        MvcEngine.destroyModule(GUI_JINHUACHATPOP)
    },
    onSendMsg:function(){
        var msg= this.et_msg_log.getString();
        msg= msg.trim();
        if(msg.length>0){
            this.onSendText(msg);
        }else{
            Common.showToast("请输入内容",1);
        }
    },
    onBugle:function(){
        var msg= this.et_msg_log.getString();
        msg= msg.trim();
        if(msg.length>0){
            sendOPERID_MGR_SEND_BUGLE(msg);
            this.close();
        }else{
            Common.showToast("请输入内容",1);
        }
    }
};

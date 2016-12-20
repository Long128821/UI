var FriendListLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	Panel_MyFriend:null,
	Image_Server:null,
	Button_haoyoushangxian:null,
	Image_limit:null,
	Button_yiwen1:null,
	Label_haoyoushangxian:null,
	Button_wodehaoyou:null,
	Button_zhuizongliebiao:null,
	Button_linshihaoyou:null,
	Button_close:null,
	Button_shuaxin:null,
	Button_leftArrow:null,
	Button_rightArrow:null,
	Label_fanye:null,
	Panel_haoyoushangxian:null,
	Panel_155:null,
	Label_haoyoushangxian:null,
	Button_closeShangxian:null,
	Panel_TableView:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["FriendList"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.Panel_MyFriend = CocoStudio.getComponent(this.view, "Panel_MyFriend");//Panel
		this.Image_Server = CocoStudio.getComponent(this.view, "Image_Server");//Panel
		this.Button_haoyoushangxian = CocoStudio.getComponent(this.view, "Button_haoyoushangxian");//Button
		this.Image_limit = CocoStudio.getComponent(this.view, "Image_limit");//ImageView
		this.Button_yiwen1 = CocoStudio.getComponent(this.view, "Button_yiwen1");//Button
		this.Label_haoyoushangxian = CocoStudio.getComponent(this.view, "Label_haoyoushangxian");//Label
		this.Button_wodehaoyou = CocoStudio.getComponent(this.view, "Button_wodehaoyou");//Button
		this.Button_zhuizongliebiao = CocoStudio.getComponent(this.view, "Button_zhuizongliebiao");//Button
		this.Button_linshihaoyou = CocoStudio.getComponent(this.view, "Button_linshihaoyou");//Button
		this.Button_close = CocoStudio.getComponent(this.view, "Button_close");//Button
		this.Button_shuaxin = CocoStudio.getComponent(this.view, "Button_shuaxin");//Button
		this.Button_leftArrow = CocoStudio.getComponent(this.view, "Button_leftArrow");//Button
		this.Button_rightArrow = CocoStudio.getComponent(this.view, "Button_rightArrow");//Button
		this.Label_fanye = CocoStudio.getComponent(this.view, "Label_fanye");//Label
		this.Panel_haoyoushangxian = CocoStudio.getComponent(this.view, "Panel_haoyoushangxian");//Panel
		this.Panel_155 = CocoStudio.getComponent(this.view, "Panel_155");//Panel
		this.Label_haoyoushangxian = CocoStudio.getComponent(this.view, "Label_haoyoushangxian");//Label
		this.Button_closeShangxian = CocoStudio.getComponent(this.view, "Button_closeShangxian");//Button
		this.Panel_TableView = CocoStudio.getComponent(this.view, "Panel_TableView");//Panel
	},

    initLayer:function(){
		var gui = GUI_FRIENDLIST;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/FriendList.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion >= GameConfig.SCREEN_PROPORTION_GREAT){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/FriendList.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/FriendList.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}else if((GameConfig.RealProportion < GameConfig.SCREEN_PROPORTION_GREAT) && (GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL)){
//			//适配方案 960x640
//			this.view = CocoStudio.createView("res/FriendList_960_640.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 960, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}
	},
    
	callback_Button_haoyoushangxian:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_yiwen1:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_wodehaoyou:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_zhuizongliebiao:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_linshihaoyou:function(pSender, event){
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
            MvcEngine.destroyModule(GUI_FRIENDLIST);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_shuaxin:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_leftArrow:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_rightArrow:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_haoyoushangxian:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_155:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_closeShangxian:function(pSender, event){
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
    	Frameworks.addSlot2Signal(JINHUA_MGR_FRIEND_LIST, ProfileFriendList.slot_JINHUA_MGR_FRIEND_LIST);//好友列表
    	Frameworks.addSlot2Signal(JINHUA_MGR_STRANGER_LIST, ProfileFriendList.slot_JINHUA_MGR_STRANGER_LIST);//陌生人列表
    	Frameworks.addSlot2Signal(JINHUA_MGR_TRACE_LIST, ProfileFriendList.slot_JINHUA_MGR_TRACE_LIST);//追踪列表
    },
    //移除信号
    removeSlot:function(){
    	Frameworks.removeSlotFromSignal(JINHUA_MGR_FRIEND_LIST, ProfileFriendList.slot_JINHUA_MGR_FRIEND_LIST);
    	Frameworks.removeSlotFromSignal(JINHUA_MGR_STRANGER_LIST, ProfileFriendList.slot_JINHUA_MGR_STRANGER_LIST);
    	Frameworks.removeSlotFromSignal(JINHUA_MGR_TRACE_LIST, ProfileFriendList.slot_JINHUA_MGR_TRACE_LIST);
    },
    
    //释放界面的私有数据
    releaseData:function(){
    
    },
    
    requestMsg:function(){
    
    },
    //初始化界面
    initData:function(){
        sendJINHUA_MGR_FRIEND_LIST();//好友列表
        sendJINHUA_MGR_STRANGER_LIST();//陌生人列表
        sendJINHUA_MGR_TRACE_LIST();//追踪列表
    },
    //创建视图
    createTableView:function(){
        //避免打开之后，重新添加一些相同的元素
        if(this.m_tableView!= null){
            this.m_tableView.removeFromParent(true);
        }
        var friendListTable= ProfileFriendList.m_friendListTable;
        this.Label_haoyoushangxian.setString(friendListTable["Maxfriendcnt"]);
        this.Button_shuaxin.setVisible(false);
        this.showPanel();

        var self= this;
        var tableSize= this.Panel_TableView.getContentSize();
        //左下角位置
        var leftBottomPos= this.Panel_TableView.getPosition();
        console.log(this.Panel_TableView.getAnchorPoint());
        //预加载资源
        var arrPath= [
            Common.getResourcePath("btn_xuanzhong_l.png"),
            Common.getResourcePath("btn_weixuanzhong_l.png"),
            Common.getResourcePath("btn_zhuizongliebiao_mweixuanzhong.png"),
            Common.getResourcePath("btn_zhuizongliebiao_mxuanzhong.png"),
            Common.getResourcePath("btn_xuanzhong_r.png"),
            Common.getResourcePath("ui_xinxiaoxidi.png"),
            Common.getResourcePath("ui_yiduxiaoxidi.png"),
            Common.getResourcePath("btn_weixuanzhong_r.png"),
        ];

        //代码先执行，但是精灵尺寸为空,不能正确显示
        Load.LoadJsonOrPic(arrPath,function(){
            //加载成功的回调函数
            var tableView = new cc.TableView(self, tableSize);
            tableView.setDirection(cc.SCROLLVIEW_DIRECTION_VERTICAL);//竖直滑动
            tableView.setTouchEnabled(true);
            tableView.setPosition(leftBottomPos);

            self.m_tableView= tableView;
            //在view中，添加节点，zOrder为2
            self.view.addChild(self.m_tableView, self.Panel_TableView.getLocalZOrder());
        });

    },
    showPanel:function(){
        var pageID= ProfileFriendList.m_curPageID;

        if(pageID== 0){//好友列表
            this.Button_wodehaoyou.loadTextures(Common.getResourcePath("btn_xuanzhong_l.png"),Common.getResourcePath("btn_xuanzhong_l.png"),"");
            this.Button_zhuizongliebiao.loadTextures(Common.getResourcePath("btn_zhuizongliebiao_mweixuanzhong.png"),Common.getResourcePath("btn_zhuizongliebiao_mweixuanzhong.png"),"");
            this.Button_linshihaoyou.loadTextures(Common.getResourcePath("btn_weixuanzhong_r.png"),Common.getResourcePath("btn_weixuanzhong_r.png"),"");
        }else if(pageID== 1){//追踪列表
            this.Button_wodehaoyou.loadTextures(Common.getResourcePath("btn_weixuanzhong_l.png"),Common.getResourcePath("btn_weixuanzhong_l.png"),"")
            this.Button_zhuizongliebiao.loadTextures(Common.getResourcePath("btn_zhuizongliebiao_mxuanzhong.png"),Common.getResourcePath("btn_zhuizongliebiao_mxuanzhong.png"),"")
            this.Button_linshihaoyou.loadTextures(Common.getResourcePath("btn_weixuanzhong_r.png"),Common.getResourcePath("btn_weixuanzhong_r.png"),"")
        }else{//临时好友列表
            this.Button_wodehaoyou.loadTextures(Common.getResourcePath("btn_weixuanzhong_l.png"),Common.getResourcePath("btn_weixuanzhong_l.png"),"")
            this.Button_zhuizongliebiao.loadTextures(Common.getResourcePath("btn_zhuizongliebiao_mweixuanzhong.png"),Common.getResourcePath("btn_zhuizongliebiao_mweixuanzhong.png"),"")
            this.Button_linshihaoyou.loadTextures(Common.getResourcePath("btn_xuanzhong_r.png"),Common.getResourcePath("btn_xuanzhong_r.png"),"")
        }
    },
    //重写TableView的tableCellSizeForIndex函数
    tableCellSizeForIndex:function (table, idx) {
        return cc.size(990, 115);
    },
    //重写TableView的tableCellAtIndex函数
    tableCellAtIndex:function (table, idx) {
        var cell = table.dequeueCell();
        cell = new cc.TableViewCell();
        return this.createItem(cell, idx);
    },
    //创建某一个右邮件项
    createItem:function(cell, idx){
        var tableSize= this.Panel_TableView.getContentSize();
        var ListTable= ProfileFriendList.m_friendListTable;
        var TaskListLoop= ListTable["FriendList"];
        //未读的消息数量
        var unreadCnt = TaskListLoop[idx].unreadCnt;

        var itemParentNode= cc.Node.create();
        cell.addChild(itemParentNode);

        //背景
        var bgUrl= unreadCnt> 0?"ui_xinxiaoxidi.png":"ui_yiduxiaoxidi.png";
        var sprite= GamePub.createPointNineSpriteForPlist(Common.getResourcePath(bgUrl), 25, 25, tableSize.width- 30,115- 6);
        //操作
        var menu = cc.Menu.create();
        menu.setPosition(cc.p(0,0));
        itemParentNode.addChild(menu);

        var button= cc.MenuItemSprite.create(
            sprite,
            null, this.onClick, this);
        button.setAnchorPoint(0,0);
        button.setTag(idx);
        menu.addChild(button);

        //点九图的尺寸
        var spriteSize= sprite.getContentSize();
        //等级
        var labelVip = cc.LabelTTF.create("Lv."+ TaskListLoop[idx]["level"], "Arial", 20);
        labelVip.setAnchorPoint(0.5, 0.5);
        labelVip.setPosition(cc.p(spriteSize.width* 0.18, spriteSize.height* 0.75));
        itemParentNode.addChild(labelVip);

        //玩家名
        var labelTitle = cc.LabelTTF.create(TaskListLoop[idx]["name"], "Arial", 18);
        labelTitle.setAnchorPoint(0.5, 0.5);
        labelTitle.setPosition(cc.p(spriteSize.width* 0.28, spriteSize.height* 0.75));
        itemParentNode.addChild(labelTitle);

        Common.addSpriteByNet(TaskListLoop[idx]["photoUrl"], function(sprite){
            sprite.setPosition(spriteSize.width* 0.08, spriteSize.height* 0.5);
            sprite.setScale(0.85);
            itemParentNode.addChild(sprite);
        });
//
//        var strContent= TaskListLoop[idx]["Desc"];
//        if(strContent.length> 20){
//            strContent= strContent.substring(0, 20)+"......";
//        }
//
//        //内容
//        var LabelContent = cc.LabelTTF.create("("+ strContent+")", "Arial", 20);
//        LabelContent.setPosition(cc.p(spriteSize.width* 0.12, spriteSize.height* 0.25));
//        LabelContent.setColor(cc.color(0x6f,0x5e,0x6c));
//        sprite.addChild(LabelContent);
//
//        //任务进度
//        var DB_progress = cc.Sprite.create(Common.getResourcePath("ui_renwujinduheidi.png"));
//        DB_progress.setPosition(spriteSize.width* 0.375, spriteSize.height* 0.5);
//        sprite.addChild(DB_progress);
//
//        var progress = cc.ProgressTimer.create(cc.Sprite.create(Common.getResourcePath("ui_renwujindutiao.png")));
//        progress.setBarChangeRate(cc.p(1,0));//设置进度条的长度和高度开始变化的大小
//        progress.setType(cc.ProgressTimer.TYPE_BAR);
//        progress.setMidpoint(cc.p(0,0));//设置中心点
//        progress.setPosition(cc.p(DB_progress.getContentSize().width* 0.5, DB_progress.getContentSize().height* 0.5));
//        progress.setPercentage(TaskListLoop[idx]["Progress"]);
//        DB_progress.addChild(progress);
//
//        //文本-任务进度
//        var labelProgress = cc.LabelTTF.create(TaskListLoop[idx]["Process"], "Arial", 16);
//        labelProgress.setPosition(cc.p(DB_progress.getContentSize().width* 0.5, DB_progress.getContentSize().height* 0.5));
//        progress.addChild(labelProgress);
//
//        //奖励
//        var PrizeName = cc.LabelTTF.create(TaskListLoop[idx]["PrizeName"], "Arial", 20);
//        PrizeName.setPosition(cc.p(spriteSize.width* 0.625, spriteSize.height* 0.5));
//        sprite.addChild(PrizeName);
//


//        var wordSprite= cc.Sprite.create(Common.getResourcePath(buttonWord));
//        wordSprite.setPosition(bgSprite.getContentSize().width* 0.5, bgSprite.getContentSize().height* 0.6);
//        button.addChild(wordSprite);

        return cell;
    },
    //单元数量-重写TableView的tableCellAtIndex函数
    numberOfCellsInTableView:function (table){
        return ProfileFriendList.m_friendListTable["FriendListCnt"];
    },
    //按钮的回调哈数，利用Tag来区分是列表中的第几个
    onClick:function(pSender){
        console.log("Test");
//        var taskListTable= ProfileFriendList.m_friendListTable["TaskListLoop"];
//        var taskID= taskListTable[pSender.getTag()]["ID"];
//        sendCOMMONS_GET_DAILYTASK_PRIZE(taskID);
    }
};

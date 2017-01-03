var JinHuaTablePlayer= {
    //玩家状态Icon类型
    TYPE_ICON_FOLD : 1,
    TYPE_ICON_CHECK : 2,
    TYPE_ICON_FAILED : 3,
    TYPE_ICON_WIN : 4,
    //玩家Layer
    JinHuaTablePlayerLayer:null,
    //桌上玩家状态icon
    iconArray:{},
    //实体玩家
    tablePlayerEntitys:{},
    //庄家
    dealer:null,
    //倒计时数字背景
    myTimerBg:null,
    otherTimerBg:null,
    //主视角倒计时框
    myTimer:null,
    myTimer2:null,
    //其他玩家押注倒计时框
    otherTimer:null,
    otherTimer2:null,
    // 看牌计时器
    lookCardTimer:null,
    //请求个人信息UserId
    reqUserId:null,
    //是否是点中了玩家头像
    isHeadTouchBegin:false,
    //当前出牌用户座位号
    currentCSID:-10,
    // 看牌前换牌
    changeCardWhenNotSee:false,
    //牌桌上的金币列表
    iconTable:{},
    //存放牌桌上展示的牌
    CardBatchNode:null,
    clearData:function(){
        this.JinHuaTablePlayerLayer= null;
        //Todo:关闭定时器
        this.otherTimer= null;
        this.iconArray= {};
        this.tablePlayerEntitys= {};
        this.dealer= null;
        this.myTimer= null;
        this.myTimer2= null;
        this.otherTimer= null;
        this.otherTimer2= null;
        this.lookCardTimer= null;
        this.reqUserId= null;
        this.isHeadTouchBegin= false;
        this.currentCSID= -10;
        this.changeCardWhenNotSee= false;
        this.iconTable= {};
        this.CardBatchNode= null;
    },
    //设置玩家状态icon
    addPlayerStateIcon:function(iconType, pos){
        var iconPath= "";
        switch (iconType){
            case this.TYPE_ICON_CHECK:
                path = "desk_icon_check.png";
                break;
            case this.TYPE_ICON_FAILED:
                path = "desk_icon_failed.png";
                break;
            case this.TYPE_ICON_FOLD:
                iconPath= "desk_icon_fold.png";
                break;
            case this.TYPE_ICON_WIN:
                path = "desk_icon_win.png";
                break;
        }

        if(this.iconTable[pos]!= null){
            this.JinHuaTablePlayerLayer.removeChild(this.iconTable[pos], true);
        }

        var iconSprite= cc.Sprite.createWithSpriteFrameName(path);
        this.iconTable[pos]= iconSprite;
//        if(this.tablePlayerEntitys[pos]!= null&&  parseInt(this.tablePlayerEntitys[pos].userId)!= profile_user.getSelfUserID()){
//            iconSprite.setSprite(Profile_JinHuaTableConfig.spri);
//        }
    },
    //牌桌玩家
    create:function(){
        if(this.JinHuaTablePlayerLayer== null){
            this.JinHuaTablePlayerLayer= cc.Layer.create();
            this.JinHuaTablePlayerLayer.setZOrder(3);
        }

        if(this.CardBatchNode== null){
            this.CardBatchNode= cc.SpriteBatchNode.create(Common.getResourcePath("poker_cards.png"));
            this.CardBatchNode.setZOrder(1);
            this.JinHuaTablePlayerLayer.addChild(this.CardBatchNode);
        }
        //初始化牌桌上的玩家，没有数据的话，以默认显示
        this.initPlayerSprites(true);
        //Todo:如果我在牌桌上并且有牌，更新我的操作按钮
//        if JinHuaLoadProfile.JinHuaGameData.isMePlayingThisRound() then
//        JinHuaTableMyOperation.updateMyOperationBtns(tablePlayerEntitys[0])
//        end
        //添加定时器
        this.addTimerSprite();
        //添加庄家图标
        this.setDealer();
        var GameData= Profile_JinHuaGameData.getGameData();
        console.log(GameData);
        if(GameData.status== STATUS_PLAYER_PLAYING && GameData.currentPlayer){
            this.refreshCurrentPlayer(GameData.currentPlayer);
        }
        return this.JinHuaTablePlayerLayer;
    },
    //初始化用户信息显示界面
    initPlayerSprites:function(isShowAnim){
        var GameData= Profile_JinHuaGameData.getGameData();
        var tablePlayersData= Profile_JinHuaGameData.getPlayers();
        //隐藏UI工程的底部面板
        JinHuaTableLogic.setBotPanelVisible(false);
        console.log("初始化用户信息");
        //绘制人物
        this.tablePlayerEntitys = {};
        if(tablePlayersData== null) return;

        //是否为玩家自身
        var isMe= false;
        console.log(tablePlayersData);
        for(var i=0; i< Profile_JinHuaTableConfig.playerCnt; ++i){
            if(tablePlayersData.hasOwnProperty(i) && tablePlayersData[i]!= null){
                console.log(tablePlayersData[i]);
                //添加头像框
                var tablePlayerEntity = JinHuaTablePlayerEntity.create(tablePlayersData[i]);
                JinHuaTablePlayerEntity.addPlayerElementToLayer(this.JinHuaTablePlayerLayer);
                if(GameData.enterRoomEffectMinVipLevel!= null
                    &&tablePlayerEntity.vipLevel>= GameData.enterRoomEffectMinVipLevel
                    &&isShowAnim== true){
                    tablePlayerEntity.mPlayerSprite.setVisible(false);
                    //Todo:显示VIP用户坐下前
                    //JinHuaInteractionAnim.showVipPlayerSitDownBefore(i,tablePlayerEntity)
                }

                //显示玩家状态
                this.showPlayerStatus(tablePlayerEntity);
                //初始化三张牌
                tablePlayerEntity.createCard();
                //显示禁比动画
                tablePlayerEntity.showJinbiAnim();
                //显示玩家金币数
                tablePlayerEntity.setCoin();
                //设置玩家的头像
                this.setPlayerPhoto(tablePlayerEntity);

                //判断是否为玩家自身
                if(tablePlayerEntity.isMe()== true){
                    isMe= true;
                }

                this.tablePlayerEntitys[i]= {};
                this.tablePlayerEntitys[i]= tablePlayerEntity;

                //Todo:真人认证模块
                //JinHuaTableRealFace.createRealFace(tablePlayerEntity)

            }else if((tablePlayersData[i]== null&&tablePlayersData[i]==undefined)&&GameData.mySSID!= null){
                if(Profile_JinHuaGameData.getIsMatch()!= null && Profile_JinHuaGameData.getIsMatch()== true){
                    //Todo:
                    //JinHuaTableOccupyHead.createOccupyHead(i)
                }
            }else if(GameData.mySSID == null){//没有玩家，并且自己并没有坐下
                if(Profile_JinHuaGameData.getIsMatch()== null || Profile_JinHuaGameData.getIsMatch()== false){
                    JinHuaTableLogic.showSitButton(i);
                    JinHuaTableTips.createSitTips(i)
                }
            }
        }
        if(isMe== true && Profile_JinHuaGameData.isMePlayingThisRound()){
            //在座位上並且并且在打牌
            JinHuaTableLogic.setBotPanelVisible(true);
            JinHuaTableLogic.hideAllQuickChatButton();
        }else if(isMe== true &&(!Profile_JinHuaGameData.isMePlayingThisRound())){
            //在座位上並且并且在打牌
            JinHuaTableLogic.setBotPanelVisible(true);
            JinHuaTableLogic.showQuickChatButton(STATUS_QUICK_CHAT_WAITING);
        }else{

            JinHuaTableLogic.setBotPanelVisible(false);
            JinHuaTableLogic.hideAllQuickChatButton();
        }
    },
    getJinHuaTablePlayerLayer:function(){
        if(this.JinHuaTablePlayerLayer== null){
            this.JinHuaTablePlayerLayer= cc.Layer.create();
            this.JinHuaTablePlayerLayer.setZOrder(3);
        }
        return this.JinHuaTablePlayerLayer;
    },
    //绘制玩家状态
    showPlayerStatus:function(tablePlayerEntity){
        if(tablePlayerEntity&&tablePlayerEntity.status){
            switch (tablePlayerEntity.status){
                case STATUS_PLAYER_READY://坐下
                    tablePlayerEntity.showReadyIcon();
                    break;
                case STATUS_PLAYER_PK_FAILURE://比牌
                    this.addPlayerStateIcon(this.TYPE_ICON_FAILED, tablePlayerEntity.SSID);
                    tablePlayerEntity.setPlayerDarkCoverVisible();
                    break;
                case STATUS_PLAYER_DISCARD://
                    this.addPlayerStateIcon(this.TYPE_ICON_FOLD, tablePlayerEntity.SSID);
                    tablePlayerEntity.setPlayerDarkCoverVisible();
                    break;
                case STATUS_PLAYER_PLAYING://
                    break;
                case STATUS_PLAYER_LOOKCARD://看牌
                    this.addPlayerStateIcon(this.TYPE_ICON_CHECK, tablePlayerEntity.SSID);
                    break;
                default :
                    tablePlayerEntity.setPlayerDarkCoverVisible();
            }
        }
    },
    //设置玩家头像
    setPlayerPhoto:function(tablePlayerEntity){
        if(tablePlayerEntity!=null
            &&tablePlayerEntity.player.photoUrl!= ""
            &&tablePlayerEntity.player.photoUrl){
            //更新图标
            tablePlayerEntity.setPortrait(tablePlayerEntity.player.photoUrl);
        }else{
            tablePlayerEntity.setPortrait();
        }
    },
    //更新用户头像
    updatePlayerPortrait:function(path){
        var photoPath = null;
        var id = null;
        //if()
    },
    //添加计时器
    addTimerSprite:function(){
        var mySpriteTimer = cc.Sprite.create("#desk_player_cover_mine.png");
        this.myTimerBg = cc.ProgressTimer.create(mySpriteTimer);
        this.myTimerBg.setType(cc.ProgressTimer.TYPE_RADIAL);
        this.myTimerBg.setPosition(Profile_JinHuaTableConfig.mySelfLocX + 88, Profile_JinHuaTableConfig.mySelfLocY + 87);
        this.myTimerBg.setZOrder(12);
        this.JinHuaTablePlayerLayer.addChild(this.myTimerBg);
        var otherSpriteTimer = cc.Sprite.create("#desk_player_cover.png");
        this.otherTimerBg = cc.ProgressTimer.create(otherSpriteTimer);
        this.otherTimerBg.setType(cc.ProgressTimer.TYPE_RADIAL);
        this.otherTimerBg.setZOrder(12);
        this.JinHuaTablePlayerLayer.addChild(this.otherTimerBg);

        this.myTimer = cc.LabelAtlas.create("0", Common.getResourcePath("ui_daojishi0-9.png"), 24, 40, "0");
        this.myTimer.setPosition(403, 150);
        this.myTimer.setZOrder(2);
        this.myTimer.setVisible(false);
        this.JinHuaTablePlayerLayer.addChild(this.myTimer);
        this.myTimer2 = cc.LabelAtlas.create("0", Common.getResourcePath("ui_daojishi0-3.png"), 25, 40, "0");
        this.myTimer2.setPosition(403, 150);
        this.myTimer2.setZOrder(2);
        this.myTimer2.setVisible(false);
        this.JinHuaTablePlayerLayer.addChild(this.myTimer2);

        this.otherTimer = cc.LabelAtlas.create("0", Common.getResourcePath("ui_daojishi0-9.png"), 24, 40, "0");
        this.otherTimer.setZOrder(2);
        this.otherTimer.setVisible(false);
        this.JinHuaTablePlayerLayer.addChild(this.otherTimer);

        this.otherTimer2 = cc.LabelAtlas.create("0", Common.getResourcePath("ui_daojishi0-3.png"), 25, 40, "0");
        this.otherTimer2.setZOrder(2);
        this.otherTimer2.setVisible(false);
        this.JinHuaTablePlayerLayer.addChild(this.otherTimer2);
    },
    //设置庄家图标
    setDealer:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        var SSID= GameData.dealerSSID;
        if(this.dealer== null){
            this.dealer= cc.Sprite.create("#desk_icon_dealer.png");

            this.JinHuaTablePlayerLayer.addChild(this.dealer);
        }
        this.dealer.setZOrder(30);
        if(this.tablePlayerEntitys[SSID]!= null
            &&this.tablePlayerEntitys[SSID]!= undefined
            &&this.tablePlayerEntitys[SSID].mPlayerSprite!= null){
            this.dealer.setPosition(Profile_JinHuaTableConfig.spritePlayers[SSID].locX + this.tablePlayerEntitys[SSID].mPlayerSprite.getContentSize().width / 15, Profile_JinHuaTableConfig.spritePlayers[SSID].locY + this.tablePlayerEntitys[SSID].mPlayerSprite.getContentSize().height * 6 / 8);
        }else{
            this.dealer.setVisible(false);
        }
    },
    //更新当前可操作玩家
    refreshCurrentPlayer:function(currentPlayer){
        //说明已经结束 清除计时器
        if(currentPlayer== undefined){
            //关闭所有定时器
            this.clearAllTimer();
            return;
        }
        currentPlayer.CSID= Profile_JinHuaGameData.getUserCSID(currentPlayer.SSID);

        //还是当前用户，返回
        if(this.currentCSID== currentPlayer.CSID) return;
        this.currentCSID= currentPlayer.CSID;

        //可能乱牌桌，此处没人 保底方案
        if(this.tablePlayerEntitys[currentPlayer.CSID]== null||this.tablePlayerEntitys[currentPlayer.CSID]== undefined) return;
        //Todo:更新是否可以换牌提示
        //JinHuaTableMyOperation.updateIsCanChangeCardState();
        //Todo:更新玩家的按钮并启动计时
        //updateMyOperationBtnsAndStartTimer(currentPlayer);
    },
    //关闭-我的定时器
    closeMyTimer:function(){
        this.myTimerBg.clear();
        this.myTimerBg.setPercentage(0);

        this.myTimer.stopAllActions();
        this.myTimer.setString("0");
        this.myTimer.setVisible(false);
        this.myTimer2.stopAllActions();
        this.myTimer2.setString("0");
        this.myTimer2.setVisible(false);
    },
    //关闭-别的玩家的定时器
    closeOtherTimer:function(){
        this.otherTimerBg.clear();
        this.otherTimerBg.setPercentage(0);

        this.otherTimer.stopAllActions();
        this.otherTimer.setString("0");
        this.otherTimer.setVisible(false);
        this.otherTimer2.stopAllActions();
        this.otherTimer2.setString("0");
        this.otherTimer2.setVisible(false);
    },
    //清除所有计时器
    clearAllTimer:function(){
        this.closeMyTimer();
        this.closeOtherTimer();
        this.currentCSID= -10;
    },
    //玩家准备消息回来后更新界面
    updateTableAfterPlayerReadyServerBack:function(readyData){
        console.log(readyData);
        var GameData= Profile_JinHuaGameData.getGameData();
        //本人准备失败之后再发一次准备
        if(readyData.SSID== 1
            && GameData.mySSID
            &&this.tablePlayerEntitys[0]
            &&this.tablePlayerEntitys[0].status!= STATUS_PLAYER_READY
            &&readyData.status!= 0){
            var seq= cc.sequence(cc.delayTime(2.0), cc.CallFunc(function(pSender){
                JinHuaTableLogic.onReady();
            }));
            this.JinHuaTablePlayerLayer.runAction(seq);
        }
        for(var key in this.tablePlayerEntitys){
            if(this.tablePlayerEntitys[key]
                &&this.tablePlayerEntitys[key].player.status
                &&this.tablePlayerEntitys[key].player.status== STATUS_PLAYER_READY){
                //显示准备图标
                this.tablePlayerEntitys[key].showReadyIcon();
                //取消遮蔽
                this.tablePlayerEntitys[key].setPlayerDarkCoveredDone();
            }
        }
    }
};
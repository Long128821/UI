var JinHuaTablePlayer= {
    //玩家状态Icon类型
    TYPE_ICON_FOLD : 1,
    TYPE_ICON_CHECK : 2,
    TYPE_ICON_FAILED : 3,
    TYPE_ICON_WIN : 4,
    JinHuaTablePlayerLayer:null,//玩家Layer
    iconArray:{},//桌上玩家状态icon
    tablePlayerEntitys:{},//实体玩家
    dealer:null,//庄家
    myTimerBg:null,//倒计时数字背景
    otherTimerBg:null,
    myTimer:null,//主视角倒计时框
    myTimer2:null,
    otherTimer:null,//其他玩家押注倒计时框
    otherTimer2:null,
    lookCardTimer:null,// 看牌计时器
    reqUserId:null,//请求个人信息UserId
    isHeadTouchBegin:false,//是否是点中了玩家头像
    currentCSID:-10,//当前出牌用户座位号
    changeCardWhenNotSee:false,// 看牌前换牌
    iconTable:{},//牌桌上的金币列表
    CardBatchNode:null,//存放牌桌上展示的牌
    clear:function(){
        this.JinHuaTablePlayerLayer= null;
        this.closeMyTimer();
        this.closeOtherTimer();
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
                iconPath = "desk_icon_check.png";
                break;
            case this.TYPE_ICON_FAILED:
                iconPath = "desk_icon_failed.png";
                break;
            case this.TYPE_ICON_FOLD:
                iconPath= "desk_icon_fold.png";
                break;
            case this.TYPE_ICON_WIN:
                iconPath = "desk_icon_win.png";
                break;
        }

        if(this.iconTable[pos]!= null){
            this.JinHuaTablePlayerLayer.removeChild(this.iconTable[pos], true);
        }

        var iconSprite= cc.Sprite.createWithSpriteFrameName(iconPath);
        this.iconTable[pos]= iconSprite;
    },
    //牌桌玩家
    create:function(){
        this.JinHuaTablePlayerLayer= this.getJinHuaTablePlayerLayer();
        //纸牌BatchNode
        if(this.CardBatchNode== null){
            this.CardBatchNode= cc.SpriteBatchNode.create(Common.getResourcePath("poker_cards.png"));
            this.CardBatchNode.setZOrder(1);
            this.CardBatchNode.setVisible(false);
            this.JinHuaTablePlayerLayer.addChild(this.CardBatchNode);
        }

        //初始化牌桌上的玩家，没有数据的话，以默认显示
        this.initPlayerSprites(true);

        //如果我在牌桌上并且有牌，更新我的操作按钮
        if(Profile_JinHuaGameData.isMePlayingThisRound()){
            JinHuaTableLogic.updateMyOperationBtns(this.tablePlayerEntitys[0]);
        }

        //添加定时器
        this.addTimerSprite();

        //添加庄家图标
        this.setDealer();

        var GameData= Profile_JinHuaGameData.getGameData();
        //游戏中
        console.log(GameData);
        console.log(GameData.currentPlayer);
        if(GameData.status== STATUS_PLAYER_PLAYING && GameData.currentPlayer){
            //更新当前玩家
            this.refreshCurrentPlayer(GameData.currentPlayer);
        }
        return this.JinHuaTablePlayerLayer;
    },
    //初始化用户信息显示界面
    initPlayerSprites:function(isShowAnim){
        var GameData= Profile_JinHuaGameData.getGameData();
        //获取牌桌上的所有玩家
        var tablePlayersData= Profile_JinHuaGameData.getPlayers();
        //隐藏UI工程的底部面板
        JinHuaTableLogic.setBotPanelVisible(false);
        //绘制人物
        this.tablePlayerEntitys = {};
        if(tablePlayersData== null) return;

        //是否为玩家自身
        var isMe= false;
        for(var i=0; i< Profile_JinHuaTableConfig.playerCnt; ++i){
            //该座位是否有玩家
            var bHasPlayer= tablePlayersData.hasOwnProperty(i) && tablePlayersData[i]!= null;
            //创建实体玩家
            if(bHasPlayer){
                //将头像添加到玩家层
                var tablePlayerEntity = new JinHuaTablePlayerEntity(tablePlayersData[i]);
                tablePlayerEntity.addPlayerElementToLayer(this.JinHuaTablePlayerLayer);
                //进入房间 显示头像
                if(GameData.enterRoomEffectMinVipLevel!= null
                    &&tablePlayerEntity.vipLevel>= GameData.enterRoomEffectMinVipLevel
                    &&isShowAnim== true){
                    tablePlayerEntity.mPlayerSprite.setVisible(false);
                    //Todo:显示VIP用户坐下前动画
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
            }else{//等待玩家坐下
                if(!Profile_JinHuaGameData.getIsMatch()){
                    JinHuaTableLogic.showSitButton(i);
                    JinHuaTableTips.createSitTips(i);
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
    //玩家层
    getJinHuaTablePlayerLayer:function(){
        if(this.JinHuaTablePlayerLayer== null){
            this.JinHuaTablePlayerLayer= cc.Layer.create();
            this.JinHuaTablePlayerLayer.setZOrder(3);
        }
        return this.JinHuaTablePlayerLayer;
    },
    //绘制玩家状态
    showPlayerStatus:function(tablePlayerEntity){
        if(tablePlayerEntity&&tablePlayerEntity.player.status){
            switch (tablePlayerEntity.player.status){
                case STATUS_PLAYER_READY://准备
                    tablePlayerEntity.showReadyIcon();//显示准备按钮
                    break;
                case STATUS_PLAYER_PK_FAILURE://比牌
                    this.addPlayerStateIcon(this.TYPE_ICON_FAILED, tablePlayerEntity.player.CSID);
                    tablePlayerEntity.setPlayerDarkCoverVisible();
                    break;
                case STATUS_PLAYER_DISCARD://弃牌
                    this.addPlayerStateIcon(this.TYPE_ICON_FOLD, tablePlayerEntity.player.CSID);
                    tablePlayerEntity.setPlayerDarkCoverVisible();
                    break;
                case STATUS_PLAYER_PLAYING://游戏中
                    break;
                case STATUS_PLAYER_LOOKCARD://看牌
                    this.addPlayerStateIcon(this.TYPE_ICON_CHECK, tablePlayerEntity.player.CSID);
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
            //更新头像
            tablePlayerEntity.setPortrait(tablePlayerEntity.player.photoUrl);
        }else{
            tablePlayerEntity.setPortrait();
        }
    },
    //倒计时[文案、遮蔽层]
    addTimerSprite:function(){
        //圆形遮蔽层
        var mySpriteTimer = cc.Sprite.create("#desk_player_cover_mine.png");
        this.myTimerBg = cc.ProgressTimer.create(mySpriteTimer);
        this.myTimerBg.setType(cc.ProgressTimer.TYPE_RADIAL);
        this.myTimerBg.setPosition(Profile_JinHuaTableConfig.mySelfLocX + 88, Profile_JinHuaTableConfig.mySelfLocY + 87);
        this.myTimerBg.setZOrder(12);
        this.JinHuaTablePlayerLayer.addChild(this.myTimerBg);
        //圆形遮蔽层
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
        var CSID= GameData.dealerCSID;
        if(this.dealer== null){
            this.dealer= cc.Sprite.create("#desk_icon_dealer.png");
            this.JinHuaTablePlayerLayer.addChild(this.dealer);
        }
        this.dealer.setZOrder(30);

        if(this.tablePlayerEntitys[CSID]!= null
            &&this.tablePlayerEntitys[CSID]!= undefined
            &&this.tablePlayerEntitys[CSID].mPlayerSprite!= null){
            var players= Profile_JinHuaTableConfig.spritePlayers;
            this.dealer.setPosition(players[CSID].locX + this.tablePlayerEntitys[CSID].mPlayerSprite.getContentSize().width / 15, players[CSID].locY + this.tablePlayerEntitys[CSID].mPlayerSprite.getContentSize().height * 6 / 8);
        }else{
            this.dealer.setVisible(false);
        }
    },
    //更新当前可操作玩家
    refreshCurrentPlayer:function(currentPlayer){
        console.log("更新当前可操作玩家");
        console.log(currentPlayer);
        //说明已经结束 清除计时器
        if(currentPlayer== undefined||currentPlayer== null){
            //关闭所有定时器
            this.clearAllTimer();
            return;
        }
        currentPlayer.CSID= Profile_JinHuaGameData.getUserCSID(currentPlayer.SSID);
        console.log("客户端座位号:"+ currentPlayer.CSID+"\r\n当前操作玩家的ID:"+ this.currentCSID);
        //还是当前用户，返回
        if(this.currentCSID== currentPlayer.CSID) return;
        this.currentCSID= currentPlayer.CSID;

        //可能乱牌桌，此处没人 保底方案
        if(this.tablePlayerEntitys[currentPlayer.CSID]== null||this.tablePlayerEntitys[currentPlayer.CSID]== undefined) return;
        //Todo:更新是否可以换牌提示
        //JinHuaTableMyOperation.updateIsCanChangeCardState();
        //更新玩家的按钮并启动计时
        this.updateMyOperationBtnsAndStartTimer(currentPlayer);
    },
    //关闭-我的定时器
    closeMyTimer:function(){
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
    //玩家<准备>消息回来后更新界面
    updateTableAfterPlayerReadyServerBack:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        var readyData= Profile_JinHuaGameData.getReadyData();
        //本人准备失败之后再发一次准备
        if(readyData.CSID== 0
            && GameData.mySSID
            &&this.tablePlayerEntitys[0]
            &&this.tablePlayerEntitys[0].status!= STATUS_PLAYER_READY
            &&readyData.status!= 0){
            var seq= cc.sequence(cc.delayTime(2.0), cc.callFunc(function(pSender){
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

                if(this.tablePlayerEntitys[key].isMe()){
                    //如果是玩家本身,此时已经坐下,移除所有的坐下Tips
                    JinHuaTableTips.removeAllSitTips();
                    //设置不可点击(不可换桌)
                    JinHuaTableLogic.setSitButtonEnabled(false);
                }
            }
        }
    },
    //玩家<聊天>消息返回后更新界面
    updateTableAfterPlayerChatServerBack:function(chatMsg){
        if(chatMsg.result == 0){
            Common.showToast(chatMsg.message, 2);
            return;
        }
        if(this.tablePlayerEntitys[chatMsg.CSID]){
            this.tablePlayerEntitys[chatMsg.CSID].remainCoins = chatMsg.remainCoins;
            this.tablePlayerEntitys[chatMsg.CSID].setCoin();
        }
        //Todo:JinHuaTableChat
        switch (chatMsg.type){
            case TYPE_CHAT_TEXT:
                console.log(chatMsg.msg);
//                JinHuaTableChat.checkAndPlayerChatSound(chatMsg.CSID, chatMsg.msg)
//                JinHuaTableChat.showChatText(chatMsg.CSID, chatMsg.msg)
                break;
            case TYPE_CHAT_COMMON_V2:
                console.log(chatMsg.msg);
//                JinHuaTableChat.playChatCommonEmotion(chatMsg.CSID, chatMsg.msg)
//                JinHuaTableChat.checkAndPlayCommonSound(chatMsg.msg)
                break;
        }
    },
    //更新所有的人等级
    updateAllPlayersLevel:function(){
        for(var i in this.tablePlayerEntitys){
            if(this.tablePlayerEntitys[i]== null||this.tablePlayerEntitys[i]== undefined) continue;
            this.tablePlayerEntitys[i].updatePlayerTips();
        }
    },
    //收到服务器站起
    updateTableAfterStandUpByServer:function(){
        var standUpData= Profile_JinHuaGameData.getStandUpData();
        var  mySelf = Profile_JinHuaGameData.getMySelf();
        if(standUpData.result == 1){
            if(mySelf.SSID!= null&& mySelf.SSID == standUpData.SSID){//自己站起
                //更新自身的属性
                sendDBID_USER_INFO(mySelf.userId);
                this.updateTableAfterStandUpMe(standUpData.CSID);
                mySelf.SSID= null;
            }else{//别人站起
                if(standUpData.CSID!= null){
                    this.updateTableAfterStandUpOther(standUpData.CSID);
                }
            }
        }
    },
    //自己站起
    updateTableAfterStandUpMe:function(CSID){
        //清空发牌
//Todo:        JinHuaTableCard.dismissSendCardSprite();
//        clearTableAfterSitAndStand();
        //自己站起后，更新当前人(如果之前可操作玩家是 自己)
        //var timerCSID = updateCurrentPlayerAfterStandUpMe();
        //JinHuaTableMyOperation.clearAllTableBtns()
        //隐藏底部控件
        JinHuaTableLogic.setBotPanelVisible(false);
        //隐藏在线奖励
        JinHuaTableLogic.setOnLineBonusVisible(false);
        //隐藏玩家头像
        this.tablePlayerEntitys[CSID].mPlayerSprite.setVisible(false);
        //移除准备Icon
        this.tablePlayerEntitys[CSID].readyIcon.setVisible(false);
        //更新数据-庄家、剩余玩家的位置
        Profile_JinHuaGameData.updatePlayerInfo_SelfStand();

        if(CSID!= null&&CSID!= undefined&&this.tablePlayerEntitys[CSID]!= null){
            this.tablePlayerEntitys[CSID].clearData();
            this.tablePlayerEntitys[CSID]= null;
        }
        //视图更新-庄家
        this.setDealer();
        //视图更新-重新初始化玩家
        this.initPlayerSprites(false);
        //Todo:自己站起，轮到别的玩家操作，更新定时器
//        if timerCSID and tablePlayerEntitys[timerCSID] then
//        Common.log("updateTableAfterStandUpMe 1111111111 timerCSID is " .. timerCSID)
//        --		otherTimer:setPosition(tablePlayerEntitys[timerCSID]:getCenterX(), tablePlayerEntitys[timerCSID]:getCenterY())
//        --		otherTimer2:setPosition(tablePlayerEntitys[timerCSID]:getCenterX(), tablePlayerEntitys[timerCSID]:getCenterY())
//        otherTimer:setPosition(JinHuaTableConfig.spritePlayers[timerCSID].timerX,JinHuaTableConfig.spritePlayers[timerCSID].timerY)
//        otherTimer2:setPosition(JinHuaTableConfig.spritePlayers[timerCSID].timerX,JinHuaTableConfig.spritePlayers[timerCSID].timerY)
//        otherTimerBg:setPosition(JinHuaTableConfig.spritePlayers[timerCSID].locX + 77,JinHuaTableConfig.spritePlayers[timerCSID].locY + 77)
//        --		otherTimerBg:setPosition(tablePlayerEntitys[timerCSID]:getPositionX() + tablePlayerEntitys[timerCSID]:getContentSize().width / 2, tablePlayerEntitys[timerCSID]:getPositionY() + tablePlayerEntitys[timerCSID]:getContentSize().height / 2)
//        --		otherTimerBg:setPosition(JinHuaTableConfig.spritePlayers[timerCSID].locX+tablePlayerEntitys[timerCSID]:getContentSize().width/2, JinHuaTableConfig.spritePlayers[timerCSID].locY+tablePlayerEntitys[timerCSID]:getContentSize().height/2)
//        currentCSID = timerCSID
//        end
        this.reAddToLayer(this.myTimerBg);
        this.reAddToLayer(this.myTimer);
        this.reAddToLayer(this.myTimer2);
        this.reAddToLayer(this.otherTimerBg);
        this.reAddToLayer(this.otherTimer);
        this.reAddToLayer(this.otherTimer2);

        //Todo:站起时金币不足，弹出充值引导
        //checkAndShowPayGuideAfterStand()
    },
    //自己站起后，更新当前人(如果之前可操作玩家是 自己)
    updateCurrentPlayerAfterStandUpMe:function(){

    },
    //别人站起
    updateTableAfterStandUpOther:function(CSID){
        var GameData= Profile_JinHuaGameData.getGameData();
        //清除牌桌站起玩家
        if(this.tablePlayerEntitys[CSID]){
            this.tablePlayerEntitys[CSID].removePlayerElementFromLayer(this.JinHuaTablePlayerLayer);
            //Todo:JinHuaTableRealFace.removeRealFaceIcon(tablePlayerEntitys[CSID]);
            //Todo:JinHuaTableOccupyHead.createOccupyHead(CSID);
            this.tablePlayerEntitys[CSID].dismissJinbiIcon();
            //清除手牌
            if(this.tablePlayerEntitys[CSID].cardSprites[0]){
                this.tablePlayerEntitys[CSID].removeCard(this.CardBatchNode);
            }
            this.tablePlayerEntitys[CSID]= null;
        }
        //显示坐下按钮
        if(!GameData.mySSID){
            JinHuaTableLogic.showSitButton(CSID);
            JinHuaTableTips.createSitTips(CSID);
        }
    },
    //自己站起
    selfStandUp:function(){
        //发起站起
        sendJHID_STAND_UP();
    },
    //重新加入层中，以便于能显示在上面
    reAddToLayer:function(node){
        node.retain();
        this.getJinHuaTablePlayerLayer().removeChild(node, false);
        this.getJinHuaTablePlayerLayer().addChild(node);
    },
    //自己坐下
    sitDownMe:function(CSID){
        var GameData= Profile_JinHuaGameData.getGameData();
        sendJHID_SIT_DOWN(GameData.roomId, GameData.tableId, CSID);
    },
    //收到服务器传来的<坐下>消息
    updateTableSitDownByServer:function(){
        var sitDownData= Profile_JinHuaGameData.getSitDownData();
        //坐下失败
        if(sitDownData.result== 0){
            this.sitDownFail(sitDownData);
            return;
        }
        //坐下成功
        if(sitDownData.playerInfo&&sitDownData.playerInfo.userId){
            if(sitDownData.playerInfo.userId== profile_user.getSelfUserID()){//玩家本身
                this.selfSitDownByServer();
            }else{//别人坐下
                this.sitDownOther(sitDownData);
            }
        }

    },
    //坐下失败
    sitDownFail:function(sitDownData){
        var GameData= Profile_JinHuaGameData.getGameData();
        //玩家本身
        if(GameData.mySSID){
            this.updateTableAfterStandUpMe();
            var mySelf= Profile_JinHuaGameData.getMySelf();
            mySelf.SSID= null;
        }
        //显示toast
        Common.showToast(sitDownData.message, 2);
        //获取对应房间信息
        var roomInfo= Profile_JinHuaRoomData.getRoomByID(GameData.roomId);
        //剩余金币数
        var self_coinnum= parseInt(Profile_JinHuaGameData.getMySelf().remainCoins);
        if(roomInfo&&roomInfo.minCoin> self_coinnum){
            //还缺少多少钱
            var coinCnt= roomInfo.minCoin- self_coinnum;
            //Todo:充值引导
        }
    },
    //自己坐下-服务器应答处理
    selfSitDownByServer:function(){
        console.log(this.tablePlayerEntitys[0]);
        if(this.tablePlayerEntitys[0]){//1号位有人
            this.tablePlayerEntitys[0].setCoin();
            JinHuaTableTips.showEnterTableTips()
        }
    },
    //其他人坐下
    sitDownOther:function(sitDownData){
        var GameData= Profile_JinHuaGameData.getGameData();
        var CSID= sitDownData.playerInfo.CSID;
        //他人坐下-创建实例(头像)
        //Todo:创建实例-封装为同一个函数
        this.tablePlayerEntitys[CSID] = new JinHuaTablePlayerEntity(sitDownData.playerInfo);
        this.showPlayerStatus(this.tablePlayerEntitys[CSID]);
        this.setPlayerPhoto(this.tablePlayerEntitys[CSID]);
        this.tablePlayerEntitys[CSID].createCard();
        this.tablePlayerEntitys[CSID].addPlayerElementToLayer(this.getJinHuaTablePlayerLayer());
        this.tablePlayerEntitys[CSID].setCoin();

        if(GameData.enterRoomEffectMinVipLevel!= null&& this.tablePlayerEntitys[CSID].vipLevel >= GameData.enterRoomEffectMinVipLevel){
            this.tablePlayerEntitys[CSID].mPlayerSprite.setVisible(false);
            //头像坐下动画JinHuaInteractionAnim.showVipPlayerSitDownBefore(CSID,tablePlayerEntitys[CSID]);
        }

        //真人认证
//        JinHuaTableRealFace.createRealFace(tablePlayerEntitys[i])
//        JinHuaTableOccupyHead.removeAllOccupyHeadSprite()
        //绘制占位标记
//        for i = 1, JinHuaTableConfig.playerCnt do
//            if tablePlayerEntitys[i] == nil and GameData.mySSID ~= nil then
//        JinHuaTableOccupyHead.createOccupyHead(i)
//        end
//        end
        this.reAddToLayer(this.myTimerBg);
        this.reAddToLayer(this.myTimer);
        this.reAddToLayer(this.myTimer2);
        this.reAddToLayer(this.otherTimerBg);
        this.reAddToLayer(this.otherTimer);
        this.reAddToLayer(this.otherTimer2);

        //隐藏该作为标记
        JinHuaTableLogic.hideSit(CSID);
    },
    //服务器返回的下注应答
    updateTableAfterBetCoinByServer:function(){
        var betChipData= Profile_JinHuaGameData.getBetChipData();

        console.log("收到服务器下注应答");
        console.log("要下注的客户端ID:"+ betChipData.CSID);
        console.log("下注类型:"+ betChipData.type);
        console.log(betChipData);
        //下注失败
        if(betChipData.result== 0) return;
        //下注- 玩家本身 且 不是下底注 且 不是比牌
        if(this.tablePlayerEntitys[betChipData.CSID]
            &&this.tablePlayerEntitys[betChipData.CSID].isMe()//玩家本身
            &&betChipData.type!=TYPE_BET_ANTE//不是下底注
            &&betChipData.type!=TYPE_BET_PK ){//不是比牌
            //更新当前可操作玩家
            this.refreshCurrentPlayer(betChipData["currentPlayer"]);
            //设置玩家的已押注金额
            this.tablePlayerEntitys[betChipData.CSID].setCoin();
            //更新(轮数、总押注金额、单注)
            JinHuaTableLogic.updateTableTitle();
        }else if(this.tablePlayerEntitys[betChipData.CSID]&&
            this.tablePlayerEntitys[betChipData.CSID].mPlayerSprite){//别人下注或下底注或比牌操作
            console.log("要操作的玩家的客户端座位号:"+ betChipData.CSID);
            console.log("别人下注或下底注或比牌操作");
            //清空其他玩家的定时器
            //Todo:?
            this.closeOtherTimer();
            //Todo:下注筹码
            JinHuaTableCoin.betCoinAnim(betChipData, false)
        }
    },
    //获取玩家table
    getPlayers:function(){
        return this.tablePlayerEntitys;
    },
    getCardBatchNode:function(){
        return this.CardBatchNode;
    },
    //更新玩家的按钮并启动计时
    updateMyOperationBtnsAndStartTimer:function(currentPlayer){
        var time= Profile_JinHuaTableConfig.ROUND_TIME;
        var progressBar= cc.progressTo(time+ 1, 100);

        this.closeMyTimer();
        this.closeOtherTimer();

        console.log("当前玩家");
        console.log(currentPlayer);
        if(this.tablePlayerEntitys[currentPlayer.CSID]== null) return;

        if(this.tablePlayerEntitys[currentPlayer.CSID].isMe()){
            var self= this;
            function timeStep(){
                if(time<= 3){
                    self.myTimer.setVisible(false);
                    self.myTimer2.setVisible(true);
                    self.myTimer2.setString(time);
                }else{
                    self.myTimer.setString(time);
                }
                time--;
            }
            var arr= [];

            for(var i=0; i< Profile_JinHuaTableConfig.ROUND_TIME; ++i){
                arr.push(cc.callFunc(timeStep));
                arr.push(cc.delayTime(1.0));
            }
            //更新我的可操作按钮
            JinHuaTableLogic.updateMyOperationBtns(currentPlayer);
            //是否需要启动我的计时器(超时放弃)
            var bNeedStartTimer= JinHuaTableLogic.setMyTurnToOperate_ReturnIfNeedMyTimer(this.tablePlayerEntitys[currentPlayer.CSID]);
            this.myTimer.stopAllActions();
            this.myTimer2.stopAllActions();

            var seq= cc.sequence(arr);
            //this.
        }else{
            JinHuaTableLogic.updateMyBetBtnsOnOthersTurn();
        }
    }
};
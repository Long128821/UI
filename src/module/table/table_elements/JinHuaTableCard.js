/**
 *Func:纸牌
 */
var JinHuaTableCard= {
    sendCardSprite:null,//Todo:删除-叠加牌(发牌时，纸牌初始位置)
    CardTypeName:["235", "散牌", "对子", "顺子", "金花", "同花顺", "豹子"],//手牌类型
    OpenCardAnimTime:0.6,//翻牌时间
    /**
     * Func:发牌动画结束
     * @param pSender 一般为别人的第三张手牌
     * 注意:在回调函数中,不能使用this,使用JinHuaTableCard替换
     */
    sendCardAnimEnd:function(pSender){
        //Todo:重置套接字
        //牌桌上的玩家
        var players = JinHuaTablePlayer.getPlayers();
        //显示看牌动画
        JinHuaTableCheckButton.setCheckVisible(true);
        //隐藏叠加牌
        JinHuaTableCard.sendCardSprite.setVisible(false);
        //获取发牌数据
        var initCardData= Profile_JinHuaGameData.getInitCardData();
        //金花游戏
        if(GameConfig.GAME_ID== GameConfig.JINHUA_GAME_ID){
            //Todo:?显示下排列表(隐藏) 作用
            if(players[0]&&players[0].isMe()&&players[0].status== STATUS_PLAYER_PLAYING){
                JinHuaTableLogic.showBotButton(STATUS_BUTTON_OTHERTURN);
            }
        }
        //发牌结束，更新出牌人
        JinHuaTablePlayer.refreshCurrentPlayer(initCardData.currentPlayer);
    },
    /**
     * Func:服务器<发牌>消息后,更新界面
     */
    updateTableAfterSendCardByServer:function(){
        //获取游戏数据
        var GameData= Profile_JinHuaGameData.getGameData();
        //牌桌上的玩家层(view)
        var parentLayer= JinHuaTablePlayer.getJinHuaTablePlayerLayer();
        //牌桌上的玩家
        var players= JinHuaTablePlayer.getPlayers();
        //Todo:更新发牌数据
        JinHuaTableLogic.updateDataSendCard();
        //游戏中
        GameData.status = STATUS_TABLE_PLAYING;
        //遍历牌桌上的玩家，隐藏<准备>按钮，创建三张手牌(默认隐藏)
        for(var key in players){
            if(players[key]&&players[key].player.status== STATUS_PLAYER_READY){
                players[key].player.status = STATUS_PLAYER_PLAYING;
                players[key].cardValues = {};
                players[key].hideReadyIcon();
                players[key].createCard();
            }
        }
        //发牌动画(手牌添加到玩家层)
        this.sendCardAnim(parentLayer, players);
        //更新是否可以换牌提示
        JinHuaTableLogic.updateIsCanChangeCardState();
        //初始化牌桌数据(底注、单注)
        JinHuaTableLogic.updateTableTitle();
        //显示-庄家图标
        JinHuaTablePlayer.setDealer();
    },
    //发牌动画
    sendCardAnim:function(parentLayer, players){
        //发牌结束以后，隐藏所有的快速聊天按钮列表(进入牌桌、失败、等待、弃牌后、赢了)
        JinHuaTableLogic.hideAllQuickChatButton();
        //Todo:可以删除
        if(this.sendCardSprite== null){
            this.sendCardSprite = cc.Sprite.create("#desk_pokerback.png");
            this.sendCardSprite.setAnchorPoint(cc.p(0.5,1));
            this.sendCardSprite.setPosition(Profile_JinHuaTableConfig.sendCardsSpritePositionX, Profile_JinHuaTableConfig.sendCardsSpritePositionY)
            this.sendCardSprite.setScale(Profile_JinHuaTableConfig.cardScale);
            //添加到子节点中
            JinHuaTablePlayer.getCardBatchNode().addChild(this.sendCardSprite);
            //显示batchNode
            //JinHuaTablePlayer.getCardBatchNode().setVisible(true);
        }
        //遍历牌桌上的所有玩家，并且有了手牌数据,创建三张纸牌，实现发牌动画
        for(var key in players){
            if(players[key]== null||players== undefined) continue;//此玩家无效,遍历下一个Table
            //有手牌
            if(Common.getTableSize(players[key].cardSprites)> 0&&players[key].cardSprites[0]){
                //Todo:利用for循环和Tag,重写以下代码
                //获取每张手牌的最终位置，移动过去
                var spriteCard1 = players[key].cardSprites[0].getCardSprite();
                var endX1 = spriteCard1.getPositionX();
                var endY1 = spriteCard1.getPositionY();

                var spriteCard2 = players[key].cardSprites[1].getCardSprite();
                var endX2 = spriteCard2.getPositionX();
                var endY2 = spriteCard2.getPositionY();
                var spriteCard3 = players[key].cardSprites[2].getCardSprite();
                var endX3 = spriteCard3.getPositionX();
                var endY3 = spriteCard3.getPositionY();

                ////发牌的时候初始化牌 的缩放，旋转角度，位置
                this.sendCardInitCardState(players[key]);

                var move1 = cc.moveTo(0.5, cc.p(endX1, endY1));
                var move2 = cc.moveTo(0.5, cc.p(endX2, endY2));
                var move3 = cc.moveTo(0.5, cc.p(endX3, endY3));

                //为了避免移动后，没有达到预想的位置，每一张手牌运动后，设置位置、旋转角度、缩放尺寸
                if(players[key].isMe()){//玩家自己
                    var  seq1= cc.sequence(move1, cc.callFunc(this.sendMyCard1End));
                    spriteCard1.runAction(seq1);

                    var seq2= cc.sequence(cc.delayTime(0.5), move2, cc.callFunc(this.sendMyCard2End));
                    spriteCard2.runAction(seq2);

                    var seq3= cc.sequence(cc.delayTime(1.0), move3, cc.callFunc(this.sendMyCard3End));
                    spriteCard3.runAction(seq3);
                }else{//别的玩家
                    spriteCard1.runAction(move1);

                    var seq4= cc.sequence(cc.delayTime(0.5), move2);
                    spriteCard2.runAction(seq4);

                    //别的玩家 发牌动画结束
                    var seq5= cc.sequence(cc.delayTime(1.0), move3,cc.callFunc(this.sendCardAnimEnd));
                    spriteCard3.runAction(seq5);
                }
            }
        }
    },
    //发牌的时候初始化牌 的缩放，旋转角度，位置(叠加牌的效果)
    sendCardInitCardState:function(player){
        for(var key in player.cardSprites){
            if(player.cardSprites[key]== null||player.cardSprites[key]== undefined) continue;
            //修改Bug:要旋转、缩放仅仅只是纸牌精灵，而不是Node
            var cardSprite= player.cardSprites[key].getCardSprite();

            if(cardSprite== null||cardSprite== undefined) continue;
            //屏幕中间、偏高位置(发牌)
            cardSprite.setPosition(Profile_JinHuaTableConfig.cardsSpriteStartPositionX, Profile_JinHuaTableConfig.cardsSpriteStartPositionY);
            //初始大小
            cardSprite.setScale(Profile_JinHuaTableConfig.cardScale);
            //不旋转
            cardSprite.setRotation(0);
        }
    },
    //设置我的牌的大小和位置
    //修改Bug:要旋转、缩放仅仅只是纸牌精灵，而不是Node
    setMyCardScaleAndRotation:function(card1, card2, card3){
        this.sendMyCard1End(card1.getCardSprite());
        this.sendMyCard2End(card2.getCardSprite());
        this.sendMyCard3End(card3.getCardSprite());
    },
    //我的手牌-左边
    sendMyCard1End:function(sender){
        sender.setScale(1.5);
        sender.setRotation(Profile_JinHuaTableConfig.myCard1Rotation);
    },
    //我的手牌-中间
    sendMyCard2End:function(sender){
        sender.setScale(1.5);
        sender.setRotation(Profile_JinHuaTableConfig.myCard2Rotation);
    },
    //我的手牌-右边
    sendMyCard3End:function(sender){
        sender.setScale(1.5);
        sender.setRotation(Profile_JinHuaTableConfig.myCard3Rotation);
    },
    //弃牌动画-手牌丢弃之后,显示遮蔽层
    startFoldCardAnim:function(player){
        if(player&&player.cardSprites[0]){
            for(var key in player.cardSprites){
                if(player.cardSprites[key]== null||player.cardSprites[key]== undefined) continue;
                player.cardSprites[key].showCover();//显示遮蔽层
                player.cardSprites[key].setNeedCover(true);//更新标记
            }
        }
    },
    /**
     * Func:显示牌桌结果
     *      倒计时，1s后，如果需要，则亮牌
     */
    startResultShow:function(){
        JinHuaTablePlayer.getJinHuaTablePlayerLayer().runAction(cc.sequence(cc.delayTime(1.0), cc.callFunc(this.showHandCard)));
    },
    //亮牌
    showHandCard:function(){
        JinHuaTablePlayer.clearPlayerStateIcons();
        var  players = JinHuaTablePlayer.getPlayers();

        //是否需要翻牌
        var  turnCard = true;
//        for(var i in players){
//            if(this.isNeedShowHandCard(i)){
//                turnCard = true;
//
////                this.setCardScaleAndRotation(i);
////                this.setCardPositionAndOpenCard(i);
//                this.showCardType(players[i], players[i].cardType);
//            }
//        }
        //如果要翻牌，则延时0.3秒播胜利动画
        if(turnCard){
            //修改Bug:弃牌后,立刻执行播放胜利动画
            JinHuaTablePlayer.getJinHuaTablePlayerLayer().runAction(cc.sequence(cc.delayTime(0.3), cc.callFunc(JinHuaTableCard.startWinAnim)));
        }else{
            JinHuaTableCard.startWinAnim();
        }
    },
    //胜利动画
    //飞金币之后,删除移除所有的下注筹码、牌数据
    startWinAnim:function(){
        var gameResultData = Profile_JinHuaGameData.getGameResultData();
        if(JinHuaTablePlayer.getPlayers()[gameResultData.CSID]){
            if(gameResultData.CSID == 0&& Profile_JinHuaGameData.getGameData().mySSID== 0){//如果是否玩家本身
                //显示<赢了>快速聊天按钮列表
                JinHuaTableLogic.showQuickChatButton(STATUS_QUICK_CHAT_WIN);
            }
            JinHuaPKAnim.startScatterFlower(cc.p(JinHuaTablePlayer.getPlayers()[gameResultData.CSID].getCenterX(),JinHuaTablePlayer.getPlayers()[gameResultData.CSID].getCenterY()));
            JinHuaTablePlayer.getJinHuaTablePlayerLayer().runAction(cc.sequence(cc.delayTime(2.0), cc.callFunc(JinHuaTableCoin.flyCoinsAnim)));
        }else{
            //赢家飞金币
            JinHuaTableCoin.flyCoinsAnim();
        }
    },
    //Todo:清空所有玩家的手牌
    clearCards:function(){
        for(var key in JinHuaTablePlayer.getPlayers()){
            if(JinHuaTablePlayer.getPlayers()[key]== null||JinHuaTablePlayer.getPlayers()[key]== undefined) continue;
            JinHuaTablePlayer.getPlayers()[key].cardSprites[0].clear();
            JinHuaTablePlayer.getPlayers()[key].cardSprites[1].clear();
            JinHuaTablePlayer.getPlayers()[key].cardSprites[2].clear();
            //是否为玩家本身,隐藏牌型提示
            if(JinHuaTablePlayer.getPlayers()[key].isMe()){
                JinHuaTableCard.hideCardType(JinHuaTablePlayer.getPlayers()[key]);
            }
        }
    },
    //看牌动画
    lookCardAnim:function(players, checkCardData){
        //要看牌的人手上没有牌...
        if(players[checkCardData.CSID].cardSprites[0]==null||players[checkCardData.CSID].cardSprites[0]==undefined){
            return;
        }
        //玩家自己看牌
        if(players[checkCardData.CSID].isMe()){
            //设置牌值，开牌
            for(var key in players[checkCardData.CSID].cardSprites){
                players[checkCardData.CSID].cardSprites[key].setValue(checkCardData["cardValues"][key]);
                this.openCard(players[checkCardData.CSID].cardSprites[key]);
            }
            //显示牌型
            this.showCardType(players[checkCardData.CSID], checkCardData["cardType"]);
            //更新我的按钮
            JinHuaTableLogic.updateMyOperationBtns(checkCardData.currentPlayer);
        }else{//别人看牌
            var player= Profile_JinHuaTableConfig.spritePlayers[checkCardData.CSID];
            this.rotateCard(player.cards[1].locX,player.cards[1].locY,players[checkCardData.CSID].cardSprites[0].getCardSprite(),-32);
            this.rotateCard(player.cards[1].locX,player.cards[1].locY,players[checkCardData.CSID].cardSprites[1].getCardSprite(),0);
            this.rotateCard(player.cards[1].locX,player.cards[1].locY,players[checkCardData.CSID].cardSprites[2].getCardSprite(),23);
        }
    },
    //翻开牌
    openCard:function(cardSprite){
        //Todo:是否有问题
        var bgCardSprite= cardSprite.getCardSprite();
        var seq= cc.sequence(
            cc.scaleTo(this.OpenCardAnimTime/2,0,bgCardSprite.getScaleY()),
            cc.callFunc(function(pSender){
                cardSprite.showFront();
            }),
            cc.scaleTo(this.OpenCardAnimTime/2,bgCardSprite.getScaleX(),bgCardSprite.getScaleY())
        );
        bgCardSprite.runAction(seq);
    },
    //看牌旋转牌
    rotateCard:function(endX,endY,cardSprite,angle){
        if(cardSprite== null||cardSprite== undefined) return;
        cardSprite.runAction(cc.sequence(cc.moveTo(0.3, cc.p(endX, endY)), cc.rotateTo(0.5, angle)));
    },
    /**
     * Func:显示牌型
     * @param player 玩家
     * @param cardType 牌型
     */
    showCardType:function(player, cardType){
        if(cardType!=null && cardType!= undefined){
            player.cardTypeSprite.setVisible(true);
            player.cardTypeLabel.setString(this.CardTypeName[parseInt(cardType)- 1]);
        }
    },
    /**
     * Func:隐藏牌型
     */
    hideCardType:function(player){
        if(player== undefined||player== null) return;
        player.cardTypeSprite.setVisible(false);
    }
};
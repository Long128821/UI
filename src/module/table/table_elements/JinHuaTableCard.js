var JinHuaTableCard= {
    //叠加牌
    sendCardSprite:null,
    //换牌成功动画
    CardTypeName:["235", "散牌", "对子", "顺子", "金花", "同花顺", "豹子"],
    //翻牌时间
    OpenCardAnimTime:0.6,
    //发牌动画结束
    sendCardAnimEnd:function(pSender){
        //Todo:重置套接字
        var players = JinHuaTablePlayer.getPlayers();
        JinHuaTableCard.sendCardSprite.setVisible(false);
        //获取发牌数据
        var initCardData= Profile_JinHuaGameData.getInitCardData();
        //如果是金花游戏
        if(GameConfig.GAME_ID== GameConfig.JINHUA_GAME_ID){
            //TODO:新手引导
            if(players[0]&&players[0].isMe()&&players[0].status== STATUS_PLAYER_PLAYING){
                JinHuaTableLogic.showBotButton(STATUS_BUTTON_OTHERTURN);
                //Todo:跟到底CheckBox
                //JinHuaTableLogic.setButtonCheckIsShow(true);
            }
        }
//        console.log("发牌结束!更新出牌人信息");
//        console.log(initCardData);
        //发牌结束，更新出牌人
        JinHuaTablePlayer.refreshCurrentPlayer(initCardData.currentPlayer);
    },
    //服务器发牌消息后更新界面
    updateTableAfterSendCardByServer:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        var parentLayer= JinHuaTablePlayer.getJinHuaTablePlayerLayer();
        var players= JinHuaTablePlayer.getPlayers();

        JinHuaTableLogic.updateDataSendCard();
        GameData.status = STATUS_TABLE_PLAYING;

        for(var key in players){
            if(players[key]&&players[key].player.status== STATUS_PLAYER_READY){
                players[key].player.status = STATUS_PLAYER_PLAYING;
                players[key].cardValues = {};
                players[key].hideReadyIcon();
                players[key].createCard();
            }
        }
        //发牌动画
        this.sendCardAnim(parentLayer, players);
        //更新是否可以看牌提示
        JinHuaTableLogic.updateIsCanChangeCardState();
        JinHuaTableLogic.updateTableTitle();
        JinHuaTablePlayer.setDealer(parentLayer);
    },
    //发牌动画
    sendCardAnim:function(parentLayer, players){
        JinHuaTableLogic.hideAllQuickChatButton();
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
        for(var key in players){
            if(players[key]== null||players== undefined){ continue;}
            if(Common.getTableSize(players[key].cardSprites)> 0&&players[key].cardSprites[0]){
                var spriteCard1 = players[key].cardSprites[0].getCardSprite();
                var endX1 = spriteCard1.getPositionX();
                var endY1 = spriteCard1.getPositionY();

                var spriteCard2 = players[key].cardSprites[1].getCardSprite();
                var endX2 = spriteCard2.getPositionX();
                var endY2 = spriteCard2.getPositionY();
                var spriteCard3 = players[key].cardSprites[2].getCardSprite();
                var endX3 = spriteCard3.getPositionX();
                var endY3 = spriteCard3.getPositionY();

                this.sendCardInitCardState(players[key]);

                var move1 = cc.moveTo(0.5, cc.p(endX1, endY1));
                var move2 = cc.moveTo(0.5, cc.p(endX2, endY2));
                var move3 = cc.moveTo(0.5, cc.p(endX3, endY3));
                spriteCard1.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* 0.8));
                spriteCard2.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* 0.8));
                spriteCard3.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* 0.8));
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
    //发牌的时候初始化牌 的缩放，旋转角度，位置
    sendCardInitCardState:function(player){
        for(var key in player.cardSprites){
            if(player.cardSprites[key]== null||player.cardSprites[key]) continue;
            player.cardSprites[key].setPosition(Profile_JinHuaTableConfig.cardsSpriteStartPositionX, Profile_JinHuaTableConfig.cardsSpriteStartPositionY);
            player.cardSprites[key].setScale(Profile_JinHuaTableConfig.cardScale);
            player.cardSprites[key].setRotation(0);
        }
    },
    //设置我的牌的大小和位置
    setMyCardScaleAndRotation:function(card1, card2, card3){
        this.sendMyCard1End(card1);
        this.sendMyCard2End(card2);
        this.sendMyCard3End(card3);
    },
    sendMyCard1End:function(sender){
        sender.setScale(1.5);
        sender.setRotation(Profile_JinHuaTableConfig.myCard1Rotation);
    },
    sendMyCard2End:function(sender){
        sender.setScale(1.5);
        sender.setRotation(Profile_JinHuaTableConfig.myCard2Rotation);
    },
    sendMyCard3End:function(sender){
        sender.setScale(1.5);
        sender.setRotation(Profile_JinHuaTableConfig.myCard3Rotation);
    },
    //弃牌动画
    startFoldCardAnim:function(player){
        if(player&&player.cardSprites[0]){
            for(var key in player.cardSprites){
                player.cardSprites[key].showCover();
                player.cardSprites[key].setNeedCover(true);
            }
        }
    },
    //显示牌桌结果
    startResultShow:function(){

    }
};
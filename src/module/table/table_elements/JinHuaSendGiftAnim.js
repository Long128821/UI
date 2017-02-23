/**
 * Func:接受、发送互动表情
 */
var JinHuaSendGiftAnim= {
    m_sendGiftLayer:null,
    m_curItemId:0,//当前礼物ID
    m_targetPlayer:null,//目标人物
    SendGiftType:{
        SEND_GIFT_TYPE_FLOWER:1,
        SEND_GIFT_TYPE_CAR:2,
        SEND_GIFT_TYPE_HOUSE:3,
        SEND_GIFT_TYPE_YACHT:4
    },
    getSendGiftLayer:function(){
        if(!Common.judgeValueIsEffect(this.m_sendGiftLayer)){
            this.m_sendGiftLayer= cc.Layer.create();
            this.m_sendGiftLayer.setLocalZOrder(5);
        }
        this.loadArmatureData();
        return this.m_sendGiftLayer;
    },
    loadArmatureData:function(){
        ccs.armatureDataManager.addArmatureFileInfo(Common.getJinHuaResourcePath("sendgift0.png"), Common.getJinHuaResourcePath("sendgift0.plist"), Common.getJinHuaResourcePath("sendgift.ExportJson"));
    },
    clear:function(){
        if(Common.judgeValueIsEffect(this.m_sendGiftLayer)){
            this.m_sendGiftLayer.removeFromParent(true);
        }
        this.m_sendGiftLayer= null;
    },
    //显示牌桌飞表情动画
    showSendGiftAnimation:function(){
        //获取牌桌飞表情数据
        var flyGiftTable= Profile_JinHuaFlyGift.getFlyGiftTable();
        if(Common.getTableSize(flyGiftTable)>= 1){//不为空
            var TypeId = flyGiftTable["TypeId"];
            var SourceUserId = flyGiftTable["SourceUserId"];
            var TargetUserId = flyGiftTable["TargetUserId"];
            var fromPlayer= this.findPlayerByUserID(SourceUserId);
            var toPlayer= this.findPlayerByUserID(TargetUserId);
            var ItemId = flyGiftTable["ItemId"]; //礼物编号
            var SourceCoin = flyGiftTable["sourceUserCoin"];
            if((!Common.judgeValueIsEffect(fromPlayer))||(!Common.judgeValueIsEffect(toPlayer))) return;
            var fromCSID= Profile_JinHuaGameData.getUserCSID(fromPlayer.player.SSID);
            var toCSID= Profile_JinHuaGameData.getUserCSID(toPlayer.player.SSID);
            if((!Common.judgeValueIsEffect(fromCSID))||(!Common.judgeValueIsEffect(toCSID))) return;
            switch(TypeId){
                case Profile_JinHuaFlyGift.SEND_GIFT://送礼物
                    this.showSend_GiftAnimation(ItemId, fromPlayer, toPlayer, SourceCoin);
                    break;
                case Profile_JinHuaFlyGift.INTERACTION://互动表情
                    this.showInteractionAnimation(ItemId, fromPlayer, toPlayer, SourceCoin);
                    break;
                case Profile_JinHuaFlyGift.KICK_OUT://踢人
                    break;
            }
        }
    },
    //查找牌桌上的指定的userID
    findPlayerByUserID:function(userID){
        var players= JinHuaTablePlayer.getPlayers();
        for(var key in players){
            if(!(Common.judgeValueIsEffect(players)&&Common.judgeValueIsEffect(players[key]))) continue;
            var player= players[key];
            if(player.player.userId== userID) return player;
        }
        return null;
    },
    //显示牌桌互动动画
    showInteractionAnimation:function(ItemId, fromPlayer, toPlayer, fromCoin){
        var isMoveRight= (fromPlayer.getCenterPos().x< toPlayer.getCenterPos().x);
        //如果送礼是自己
        if(fromPlayer.userId== profile_user.getSelfUserID()&&window.localStorage){
            window.localStorage.setItem("interaction", new Date().getTime());
        }
        //更新玩家的金币数
        fromPlayer.changeCoinNumOnView(fromCoin);
        //显示牌桌互动动画
        JinHuaInteractionAnim.showInteractionAnimStart(ItemId,fromPlayer.getCenterPos(),toPlayer.getCenterPos(),isMoveRight);
    },
    //显示牌桌送礼物
    showSend_GiftAnimation:function(ItemID, fromPlayer, toPlayer, fromCoin){
        var sendPicSprite= null;
        this.m_curItemId= ItemID;
        this.m_targetPlayer= toPlayer;
        switch (ItemID){
            case this.SendGiftType.SEND_GIFT_TYPE_CAR://汽车
                sendPicSprite= cc.Sprite.create("#ui_haoyouxitong_daoju4.png");
                break;
            case this.SendGiftType.SEND_GIFT_TYPE_FLOWER://鲜花
                sendPicSprite= cc.Sprite.create("#ui_haoyouxitong_daoju2.png");
                break;
            case this.SendGiftType.SEND_GIFT_TYPE_HOUSE://房子
                sendPicSprite= cc.Sprite.create("#ui_haoyouxitong_daoju5.png");
                break;
            case this.SendGiftType.SEND_GIFT_TYPE_YACHT://游艇
                sendPicSprite= cc.Sprite.create("#ui_haoyouxitong_daoju6.png");
                break;
        }
        sendPicSprite.setPosition(fromPlayer.getCenterPos());
        JinHuaSendGiftAnim.getSendGiftLayer().addChild(sendPicSprite);

        //更新玩家的金币数
        fromPlayer.changeCoinNumOnView(fromCoin);

        var moveTo= cc.moveTo(1, toPlayer.getCenterPos());
        var seq= cc.sequence(moveTo, cc.callFunc(this.showGiftAnimation));
        sendPicSprite.runAction(seq.repeatForever());
    },
    showGiftAnimation:function(pSender){
        pSender.removeFromParent(true);
        JinHuaSendGiftAnim.showSendGiftAmin();
    },
    //到达目标位置后,播放动画
    showSendGiftAmin:function(){
        var armature= ccs.Armature.create("sendgift");
        JinHuaSendGiftAnim.getSendGiftLayer().addChild(armature);
        armature.setVisible(true);
        armature.setPosition(this.m_targetPlayer.getCenterPos());
        this.m_sendGiftLayer.setVisible(true);

        var animation= armature.getAnimation();
        switch (this.m_curItemId){
            case this.SendGiftType.SEND_GIFT_TYPE_FLOWER:
                animation.play("flower");
                break;
            case this.SendGiftType.SEND_GIFT_TYPE_CAR:
                animation.play("car");
                break;
            case this.SendGiftType.SEND_GIFT_TYPE_HOUSE:
                animation.play("house");
                break;
            case this.SendGiftType.SEND_GIFT_TYPE_YACHT:
                animation.play("yacht");
                break;
        }
    }
};
/**
 * Func:接受、发送互动表情
 */
var JinHuaSendGiftAnim= {
    m_sendGiftLayer:null,
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
    }
};
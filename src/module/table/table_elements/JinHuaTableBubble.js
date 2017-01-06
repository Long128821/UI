//气泡类型
//看牌
BUBBLE_TYPE_LOOKCARD = 1;
//跟注
BUBBLE_TYPE_CALL = 2;
//加注
BUBBLE_TYPE_RAISE = 3;
//押满
BUBBLE_TYPE_ALLIN = 4;
//弃牌
BUBBLE_TYPE_DISCARD = 5;
//换牌
BUBBLE_TYPE_CHANGECARD = 6;
//禁比
BUBBLE_TYPE_NO_PK = 7;

var JinHuaTableBubble= {
    //对应气泡纹理
    bubblePicTable:{
        BUBBLE_TYPE_LOOKCARD:"desk_action_msg_view.png",
        BUBBLE_TYPE_CALL:"desk_action_msg_follow.png",
        BUBBLE_TYPE_RAISE:"desk_action_msg_raise.png",
        BUBBLE_TYPE_ALLIN:"desk_action_msg_follow.png",
        BUBBLE_TYPE_DISCARD:"desk_action_msg_giveup.png",
        BUBBLE_TYPE_CHANGECARD:"desk_action_msg_changecard.png",
        BUBBLE_TYPE_NO_PK:"desk_action_msg_jinbi.png"
    },
    //显示气泡结束
    showBubbleEnd:function(pSender){
        JinHuaTablePlayer.getJinHuaTablePlayerLayer().removeChild(pSender, true);
    },
    //显示气泡
    showJinHuaTableBubble:function(pos, bubbleType){
        if(this.bubblePicTable[bubbleType]== null) return;

        var bubbleSprite= cc.Sprite.create("#"+ this.bubblePicTable[bubbleType]);
        //Todo:getPlayers();
        var playerSprites= JinHuaTablePlayer.getPlayers();
        if(playerSprites[pos]&& playerSprites[pos].mPlayerSprite){
            bubbleSprite.setPosition(playerSprites[pos].getCenterX(),playerSprites[pos].getCenterY());
            bubbleSprite.setZOrder(31);

            var seq= cc.sequence(
                cc.moveBy(0.5, cc.p(0, Profile_JinHuaTableConfig.bubbleSpriteMoveDistance)),
                cc.delayTime(2.0),
                cc.callFunc(this.showBubbleEnd)
            );
            bubbleSprite.runAction(seq);
            JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(bubbleSprite);
        }
    }
};
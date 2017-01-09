//气泡类型
BUBBLE_TYPE_LOOKCARD = 1;//看牌
BUBBLE_TYPE_CALL = 2;//跟注
BUBBLE_TYPE_RAISE = 3;//加注
BUBBLE_TYPE_ALLIN = 4;//押满
BUBBLE_TYPE_DISCARD = 5;//弃牌
BUBBLE_TYPE_CHANGECARD = 6;//换牌
BUBBLE_TYPE_NO_PK = 7;//禁比
/**
 * Func:头像上的气泡(玩家操作类型)
 *      在PlayerLayer层上面添加元素。
 */
var JinHuaTableBubble= {
    bubblePicTable:{//对应气泡纹理
        BUBBLE_TYPE_LOOKCARD:"desk_action_msg_view.png",//看牌
        BUBBLE_TYPE_CALL:"desk_action_msg_follow.png",//跟注
        BUBBLE_TYPE_RAISE:"desk_action_msg_raise.png",//加注
        BUBBLE_TYPE_ALLIN:"desk_action_msg_follow.png",//押满(All In)
        BUBBLE_TYPE_DISCARD:"desk_action_msg_giveup.png",//弃牌
        BUBBLE_TYPE_CHANGECARD:"desk_action_msg_changecard.png",//换牌
        BUBBLE_TYPE_NO_PK:"desk_action_msg_jinbi.png"//禁比
    },
    /**
     * Func:结束-显示气泡
     * @param pSender  要移除的气泡
     */
    showBubbleEnd:function(pSender){
        //在PlayerLayer上面,移除对应的气泡
        JinHuaTablePlayer.getJinHuaTablePlayerLayer().removeChild(pSender, true);
    },
    //显示气泡
    showJinHuaTableBubble:function(CSID, bubbleType){
        //非有效气泡类型
        if(this.bubblePicTable[bubbleType]== null||this.bubblePicTable[bubbleType]== undefined) return;
        //在图片集缓存(在JinHuaTableLogic.js加载)中,创建精灵
        var bubbleSprite= cc.Sprite.create("#"+ this.bubblePicTable[bubbleType]);
        //获取牌桌上的所有玩家信息
        var players= JinHuaTablePlayer.getPlayers();
        //牌桌上有玩家 && 在牌桌上,有对应ID的玩家 && 玩家头像不为空
        if(players&&players[CSID]&& players[CSID].mPlayerSprite){
            //获取玩家头像的中心点
            bubbleSprite.setPosition(players[CSID].getCenterX(),players[CSID].getCenterY());
            bubbleSprite.setZOrder(31);
            //移动气泡,暂停2s后,移除
            var seq= cc.sequence(
                cc.moveBy(0.5, cc.p(0, Profile_JinHuaTableConfig.bubbleSpriteMoveDistance)),
                cc.delayTime(2.0),
                cc.callFunc(this.showBubbleEnd)
            );
            bubbleSprite.runAction(seq);
            //向PlayerLayer添加气泡元素
            JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(bubbleSprite);
        }
    }
};
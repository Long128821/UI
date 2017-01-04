//牌桌提示标记
var JinHuaTableTips= {
    //显示pkTip
    isShowTipPK:true,
    //显示开牌tip
    isShowTipOpenCard:true,
    //坐下提示tip
    sitTipSprites:{},
    //提示层
    JinHuaTableTipsLayer:null,
    clear:function(){
        this.isShowTipPK= true;
        this.isShowTipOpenCard= true;
        this.sitTipSprites= {};
        (this.JinHuaTableTipsLayer!=null&&this.JinHuaTableTipsLayer.removeFromParent(true));
        delete this.JinHuaTableTipsLayer;
    },
    //获取提示层
    getTableTipsLayer:function(){
        if(this.JinHuaTableTipsLayer==null||this.JinHuaTableTipsLayer==undefined){
            this.JinHuaTableTipsLayer= cc.Layer.create();
            this.JinHuaTableTipsLayer.setZOrder(4);
        }
        return this.JinHuaTableTipsLayer;
    },
    //坐下Tips
    createSitTips:function(SSID){
        if(this.sitTipSprites[SSID]){
            this.sitTipSprites[SSID].setVisible(true);
        }else if(Profile_JinHuaTableConfig.spritePlayers[SSID]!= null){
            var tipSprite;
            if(SSID>= 3){
                tipSprite= cc.Sprite.create("#desk_sit_tip_left.png");
                tipSprite.setAnchorPoint(cc.p(1, 0));
                tipSprite.setPosition(Profile_JinHuaTableConfig.spritePlayers[SSID].locX, Profile_JinHuaTableConfig.spritePlayers[SSID].locY);
            }else{
                tipSprite= cc.Sprite.create("#desk_sit_tip_right.png");
                tipSprite.setAnchorPoint(cc.p(0, 0));
                tipSprite.setPosition(Profile_JinHuaTableConfig.spritePlayers[SSID].locX+ tipSprite.getContentSize().width * 2, Profile_JinHuaTableConfig.spritePlayers[SSID].locY);
                if(SSID== 0){
                    tipSprite.setPosition(Profile_JinHuaTableConfig.spritePlayers[SSID].locX+ 70+ Profile_JinHuaTableConfig.playerBGWidth, Profile_JinHuaTableConfig.spritePlayers[SSID].locY+70+ Profile_JinHuaTableConfig.playerBGHeight);
                }
            }
            //做动画
            if(tipSprite){
                var seq= cc.sequence(cc.delayTime(2), cc.scaleTo(0.3, 0), cc.scaleTo(0.3, 1.2), cc.scaleTo(0.05, 1));
                tipSprite.runAction(seq.repeatForever());

                this.sitTipSprites[SSID]= tipSprite;
                tipSprite.setZOrder(4);

                this.getTableTipsLayer().addChild(tipSprite);
            }
        }
    },
    //移除所有的Tips
    removeAllSitTips:function(){
        for(var i in this.sitTipSprites){
            this.sitTipSprites[i].stopAllActions();
            this.sitTipSprites[i].removeFromParent(true);
        }
    }
};
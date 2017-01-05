/**
 * Func:牌桌提示标记
 * @type {{isShowTipPK: boolean, isShowTipOpenCard: boolean, sitTipSprites: {}, JinHuaTableTipsLayer: null, clear: JinHuaTableTips.clear, getTableTipsLayer: JinHuaTableTips.getTableTipsLayer, createSitTips: JinHuaTableTips.createSitTips, removeAllSitTips: JinHuaTableTips.removeAllSitTips}}
 */
var JinHuaTableTips= {
    isShowTipPK:true,//显示pkTips
    isShowTipOpenCard:true,//显示开牌tip
    sitTipSprites:{},//坐下提示tip
    JinHuaTableTipsLayer:null,//提示层(父节点)
    //清空数据
    clear:function(){
        this.isShowTipPK= true;
        this.isShowTipOpenCard= true;
        this.sitTipSprites= {};
        //因为提示标记,添加到该父节点上,所以移除父节点,就是移除了子节点
        (this.JinHuaTableTipsLayer!=null&&this.JinHuaTableTipsLayer.removeFromParent(true));
        this.JinHuaTableTipsLayer= null;
    },
    //获取提示层(父节点[cc.Layer])
    getTableTipsLayer:function(){
        if(this.JinHuaTableTipsLayer==null||this.JinHuaTableTipsLayer==undefined){
            this.JinHuaTableTipsLayer= cc.Layer.create();
            this.JinHuaTableTipsLayer.setZOrder(4);
        }
        return this.JinHuaTableTipsLayer;
    },
    /**
     * Func:坐下Tips
     * @param CSID 客户端上的座位ID,玩家本身的ID为0,逆时针增加
     */
    createSitTips:function(CSID){
        //有效性判断
        if(this.sitTipSprites== null||this.sitTipSprites== undefined) return;
        //如果已经创建完该座位上的坐下提示,直接显示即可。
        //否则,判断该座位上,是否有玩家,如果没有玩家,再创建坐下提示

        var spritePlayers= Profile_JinHuaTableConfig.getSpritePlayers();
        if(this.sitTipSprites[CSID]){
            this.sitTipSprites[CSID].setVisible(true);
        }else if(spritePlayers[CSID]!= null){
            var sitTipSprite;//坐下提示标识
            if(CSID>= 3){//右边的两个玩家(此版 炸金花一共5个座位,玩家本身的CSID一定为0)
                sitTipSprite= cc.Sprite.create("#desk_sit_tip_left.png");
                sitTipSprite.setAnchorPoint(cc.p(1, 0));
                sitTipSprite.setPosition(spritePlayers[CSID].locX, spritePlayers[CSID].locY);
            }else{
                sitTipSprite= cc.Sprite.create("#desk_sit_tip_right.png");
                sitTipSprite.setAnchorPoint(cc.p(0, 0));
                //自身玩家,位置比较特殊
                if(CSID== 0){
                    sitTipSprite.setPosition(spritePlayers[CSID].locX+ 70+ Profile_JinHuaTableConfig.playerBGWidth, spritePlayers[CSID].locY+70+ Profile_JinHuaTableConfig.playerBGHeight);
                }else{
                    sitTipSprite.setPosition(spritePlayers[CSID].locX+ sitTipSprite.getContentSize().width * 2, spritePlayers[CSID].locY);
                }
            }
            //提示标识动作(暂停2s-缩小-放大-还原 循环播放)
            if(sitTipSprite){
                var seq= cc.sequence(cc.delayTime(2), cc.scaleTo(0.3, 0), cc.scaleTo(0.3, 1.2), cc.scaleTo(0.05, 1));
                sitTipSprite.runAction(seq.repeatForever());
                //添加到Table中去,便于统一管理(显示、隐藏、释放)
                this.sitTipSprites[CSID]= sitTipSprite;
                sitTipSprite.setZOrder(4);
                //添加到view中,显示
                //使用getTableTipsLayer(),而不使用this.JinHuaTableTipsLayer的原因是:
                //this.JinHuaTableTipsLayer没有初始化,不是cc.Layer类型。
                this.getTableTipsLayer().addChild(sitTipSprite);
            }
        }
    },
    //移除所有的坐下Tips
    removeAllSitTips:function(){
        for(var key in this.sitTipSprites){
            if(this.sitTipSprites[key]== null || this.sitTipSprites[key]== undefined) continue;
            this.sitTipSprites[key].stopAllActions();//停止所有动作
            this.sitTipSprites[key].removeFromParent(true);//从父节点上删除
        }
        this.sitTipSprites= {};
    },
    //进入牌桌提示
    showEnterTableTips:function(){
        //永远在最上层
        var enterTablePrompt = cc.Sprite.create("#ui_desk_qipao.png");
        enterTablePrompt.setAnchorPoint(cc.p(0, 0.5));
        enterTablePrompt.setPosition(Profile_JinHuaTableConfig.enterTablePromptX, Profile_JinHuaTableConfig.enterTablePromptY);
        enterTablePrompt.setZOrder(4);
        this.getTableTipsLayer().addChild(enterTablePrompt);

        //延时取消
        var self= this;
        var seq= cc.sequence(cc.delayTime(3), cc.callFunc(self.dismissEnterTablePrompt));
        enterTablePrompt.runAction(seq);
    },
    //隐藏进入牌桌提示
    dismissEnterTablePrompt:function(pSender){
        pSender.removeFromParent(true);
    },
    //移除坐下Tips
    removeSitTip:function(CSID){
        console.log("移除Tips:"+ CSID);
        if(this.sitTipSprites[CSID]){
            this.sitTipSprites[CSID].setVisible(false);
        }
    }
};
var JinHuaTableCoin= {
    chipFlashBgArray:{},//下注金币的闪烁动画
    coinArray:{},//桌上筹码
    flyOneCoinEndAddCoinNum:0,//飞完一个金币需要加的金币数
    currentPlayerBetChipCount:0,//当前玩家下注的数目
    isSelfBet:false,//是否是自己下注
    JinHuaTableCoinLayer:null,//金币layer
    CoinBatchNode:null,//存放牌桌上的筹码
    getJinHuaTableCoinLayer:function(){
        if(this.JinHuaTableCoinLayer== null||this.JinHuaTableCoinLayer== undefined){
            this.JinHuaTableCoinLayer= cc.Layer.create();
            this.JinHuaTableCoinLayer.setZOrder(2);
        }
        if(this.CoinBatchNode== null|| this.JinHuaTableCoinLayer== undefined){
            this.CoinBatchNode= cc.SpriteBatchNode.create(Common.getResourcePath("table_chips.png"));
            this.CoinBatchNode.setZOrder(1);
            this.JinHuaTableCoinLayer.addChild(this.CoinBatchNode);
        }
        return this.JinHuaTableCoinLayer;
    },
    //移除动画
    hideAnim:function(sender){
        this.getJinHuaTableCoinLayer().removeChild(sender, true);
    },
    //清除上一局的金币动画
    removeAllChipFlashBgSprites:function(){
        for(var key in this.chipFlashBgArray){
            if(this.chipFlashBgArray[key]== null) continue;
            this.getJinHuaTableCoinLayer().removeChild(this.chipFlashBgArray[key], true);
        }
    },
    //押注回调
    betCoinEnd:function(sender){
        var GameData= Profile_JinHuaGameData.getGameData();
        if(this.isSelfBet){
            this.isSelfBet= false;
        }
    },
    /**
     * Func:创建金币,并扔到牌桌上
     * @param pos 扔金币玩家位置
     * @param thisTimeBetCoins 下注金币数
     */
    creatAllInBetCoins:function(pos, thisTimeBetCoins){
        var startX, startY, endX, endY;
        var players= JinHuaTablePlayer.getPlayers();
        if(players[pos]== null||players[pos]== undefined) return;//牌桌上没有玩家
        startX = players[pos].getPositionX() + players[pos].getContentSize().width / 2;
        startY = players[pos].getPositionY() + players[pos].getContentSize().height / 2;
        players[pos].setCoin();

        //Todo:getAllInChipArray
        var coinTable = JinHuaTableFunctions.getAllInChipArray(thisTimeBetCoins);
        //读取table 绘制金币
        //Todo:CoinBatchNode
    },
    createNormalBetCoins:function(pos,thisTimeBetCoins){
        var startX, startY, endX, endY;
        var players= JinHuaTablePlayer.getPlayers();
        if(players[pos]== null||players[pos]== undefined) return;//牌桌上没有玩家
        startX = players[pos].getPositionX() + players[pos].getContentSize().width / 2;
        startY = players[pos].getPositionY() + players[pos].getContentSize().height / 2;
        players[pos].setCoin();

        //Todo:getAllInChipArray
        var coinTable = JinHuaTableFunctions.getChipArray(thisTimeBetCoins);
    },
    getCoinBatchNode:function(){
        return this.CoinBatchNode;
    },
    clear:function(){
        this.coinArray= {};
        this.isSelfBet= false;
        if(this.CoinBatchNode!= null){
            this.CoinBatchNode.removeAllChildrenWithCleanup(true);
            this.CoinBatchNode= null;
        }
        if(this.JinHuaTableCoinLayer!= null){
            this.JinHuaTableCoinLayer.removeAllChildrenWithCleanup(true);
            this.JinHuaTableCoinLayer= null;
        }
    },
    //牌桌筹码显示
    createTableCoins:function(coinData){
        if(coinData){
            var coins= {};
            for(var key in coinData){
                coins= JinHuaTableFunctions.getChipArray(coinData[i].coins);
                //创建筹码
                for(var i in coins){
                    var spriteChips= JinHuaTableCoinEntity.createTableCoinEntity(coins[i], i),;
                    for(var j in spriteChips){
                        this.CoinBatchNode.addChild(spriteChips[j]);
                        this.coinArray.push(spriteChips[j]);
                    }
                }
            }
        }
    },
    //通过飞金币增加赢家的金币数
    addWinPlayerCoinNumByFlyCoin:function(){
        //Todo:
        var playerPos= JinHuaTablePlayer.getWinPlayerPos();
        if(JinHuaTablePlayer.getPlayers()[playerPos]&&JinHuaTablePlayer.getPlayers()[playerPos]!= null){
            JinHuaTablePlayer.getPlayers()[playerPos].addPlayerCoin(flyOneCoinEndAddCoinNum);
        }
    },
    //清除桌上金币
    clearCoins:function(){
        this.coinArray= {};
    },
    //赢家飞金币结束回调
    coinsMoveEnd:function(sender){
        this.CoinBatchNode.removeChild(sender, true);
        this.addWinPlayerCoinNumByFlyCoin();
        //Todo:resetData()
        //JinHuaTableLogic.resetData();
    },
    /**
     * Func:收到服务器押注后，下注动画
     * betChipData 下注回应数据
     * isSelfClickToBet 自己跟注、加注、全压为true, Pk、下底注为false、别人下注等为false
     */
    betCoinAnim:function(betChipData, isSelfClickToBet){
        console.log("下注类型:"+ betChipData.type);
        var players = JinHuaTablePlayer.getPlayers();
        //下注类型
        switch(betChipData.type){
            case TYPE_BET_ANTE://下底注
                console.log();
                JinHuaTablePlayer.setDealer();
                break;
            case TYPE_BET_CALL://跟注
                console.log("玩家ID:"+ betChipData.CSID+ "跟注!");
                break;
            case TYPE_BET_RAISE://加注
                console.log("玩家ID:"+ betChipData.CSID+ "加注!");
                break;
            case TYPE_BET_ALLIN://All In
                console.log("玩家ID:"+ betChipData.CSID+ "All In!");
                break;
            case TYPE_BET_PK://比牌
                break;
        }

        if(betChipData.type== TYPE_BET_ALLIN){//All In
            //creatAllInBetCoins(betChipData.CSID,betChipData.thisTimeBetCoins)
        }else{
            //createNormalBetCoins(betChipData.CSID,betChipData.thisTimeBetCoins)
        }
        if(!isSelfClickToBet){//Pk、下底注、别人下注
            console.log("更新当前可操作玩家");
            console.log(betChipData["currentPlayer"]);
            //Todo:是否有用,此处数据为空。
            JinHuaTablePlayer.refreshCurrentPlayer(betChipData["currentPlayer"]);
            //更新牌桌基本信息
            JinHuaTableLogic.updateTableTitle();
        }else{
            this.isSelfBet= true;
        }
    }
};

//Todo:this.createNormalBetCoins
//Todo:下注筹码
//Todo:显示正确的更新按钮;
//Todo:按钮的响应事件;
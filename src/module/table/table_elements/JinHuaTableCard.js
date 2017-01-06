var JinHuaTableCard= {
    //叠加牌
    sendCardSprite:null,
    //换牌成功动画
    CardTypeName:["235", "散牌", "对子", "顺子", "金花", "同花顺", "豹子"],
    //翻牌时间
    OpenCardAnimTime:0.6,
    //发牌动画结束
    sendCardAnimEnd:function(){
        //Todo:重置套接字
        var players = JinHuaTablePlayer.getPlayers();
    },
    //服务器发牌消息后更新界面
    updateTableAfterSendCardByServer:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        var parentLayer= JinHuaTablePlayer.getJinHuaTablePlayerLayer();
        var players= JinHuaTablePlayer.getPlayers();

        JinHuaTableLogic.updateDataSendCard();
        GameData.status = STATUS_TABLE_PLAYING;

        for(var key in players){
            console.log(players[key]);
            console.log(players[key].player.status);
            console.log(STATUS_PLAYER_READY);
            if(players[key]&&players[key].player.status== STATUS_PLAYER_READY){
                players[key].player.status = STATUS_PLAYER_PLAYING;
                players[key].cardValues = {};
                players[key].hideReadyIcon();
                players[key].createCard();
            }
        }
        //更新是否可以看牌提示
        JinHuaTableLogic.updateIsCanChangeCardState();
        JinHuaTableLogic.updateTableTitle();
        JinHuaTablePlayer.setDealer(parentLayer);
    }
};
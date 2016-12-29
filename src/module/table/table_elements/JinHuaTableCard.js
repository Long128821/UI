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
        var players = JinHuaTablePlayer.getPlayers()
    }
};


//Todo:在profile文件中，添加要加载的文件列表
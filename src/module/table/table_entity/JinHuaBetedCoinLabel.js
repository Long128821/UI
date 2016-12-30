var JinHuaBetedCoinLabel= {
    m_sprite:null,
    coinBg:null,
    coinImg:null,
    coinLabel:null,
    bg:null,
    create:function(x, y){
        var coinBg = cc.Sprite.create("#ui_paizhuo_gerenxiazhudi.png");
        coinBg.setPosition(35,20);
        coinImg = cc.Sprite.create("#ic_gerenxiachoumatubiao.png");
        coinBg.addChild(coinImg)
        coinImg.setPosition(coinBg.getContentSize().width / 10,coinBg.getContentSize().height / 2);
        coinLabel = cc.LabelTTF.create("", "Arial", 24);
        coinLabel.setColor(cc.color(255, 255, 255))
        coinLabel.setPosition(coinBg.getContentSize().width * 6 / 10,coinBg.getContentSize().height / 2);
        coinBg.addChild(coinLabel);
        this.addChild(coinBg);
        this.setAnchorPoint(cc.p(0, 0));
        this.setPosition(x, y);
        this.setZOrder(30);
        return this;
    }
};

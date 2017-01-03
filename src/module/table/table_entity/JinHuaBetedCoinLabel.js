/**
 * Func:金花加注文本、背景
 * @type {{m_sprite: null, coinBg: null, coinImg: null, coinLabel: null, bg: null, create: create, setBetCoin: setBetCoin}}
 */
var JinHuaBetedCoinLabel= cc.Node.extend({
    coinBg:null,//加注背景
    coinImg:null,
    coinLabel:null,
    bg:null,
    ctor:function(x,y){
        this._super();
        this.init(x, y);
    },
    init:function(x, y){
        this.coinBg = cc.Sprite.create("#ui_paizhuo_gerenxiazhudi.png");
        this.coinBg.setPosition(35,20);

        this.coinImg = cc.Sprite.create("#ic_gerenxiachoumatubiao.png");
        this.coinImg.setPosition(this.coinBg.getContentSize().width / 10,this.coinBg.getContentSize().height / 2);
        this.coinBg.addChild(this.coinImg);

        this.coinLabel = cc.LabelTTF.create("", "Arial", 24);
        this.coinLabel.setColor(cc.color(255, 255, 255));
        this.coinLabel.setPosition(this.coinBg.getContentSize().width * 6 / 10,this.coinBg.getContentSize().height / 2);
        this.coinBg.addChild(this.coinLabel);

        this.addChild(this.coinBg);

        this.setAnchorPoint(cc.p(0, 0));
        this.setPosition(x, y);
        this.setZOrder(30);
    },
    setBetCoin:function(value){
        if(value== undefined||value== null||value< 0){
            this.coinLabel.setString(value);
            this.betCoins= value;
            this.setVisible(true);
        }else{
            this.setVisible(false);
        }
    }
});

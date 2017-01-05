/**
 * Func:牌桌上的每个玩家头像旁边的下注金额(背景、金币图标、金币数量)
 * 继承cc.Node
 */
var JinHuaBetedCoinLabel= cc.Node.extend({
    coinBg:null,//加注背景
    coinIcon:null,//金币图标
    coinLabel:null,//已加注金额文本
    /**
     * Func:构造函数(缺省)
     * @param pos 坐标X或者坐标cc.p
     * @param y 坐标Y
     */
    ctor:function(pos,y){
        this._super();
        (y!= undefined)&&(pos= cc.p(pos, y));
        this.init(pos);
    },
    /**
     * Func:初始化函数-加注金币模块(背景、金币图标、金币数量)
     * @param pos cc.Node的位置坐标
     */
    init:function(pos){
        //加注模块背景
        this.coinBg = cc.Sprite.create("#ui_paizhuo_gerenxiazhudi.png");
        this.coinBg.setPosition(35,20);
        this.addChild(this.coinBg);

        //背景尺寸
        var bgSize= this.coinBg.getContentSize();

        //金币图标
        this.coinIcon = cc.Sprite.create("#ic_gerenxiachoumatubiao.png");
        this.coinIcon.setPosition(bgSize.width / 10,bgSize.height / 2);
        this.coinBg.addChild(this.coinIcon);

        //金币数量
        this.coinLabel = cc.LabelTTF.create("", "Arial", 24);
        this.coinLabel.setColor(cc.color(255, 255, 255));//白色
        this.coinLabel.setPosition(bgSize.width * 6 / 10,bgSize.height / 2);
        this.coinBg.addChild(this.coinLabel);

        this.setAnchorPoint(cc.p(0, 0));//锚点-左下角
        this.setPosition(pos);
        this.setZOrder(30);
    },
    /**
     * Func:设置下注金额,如果参数不是有效的,隐藏该节点。
     * @param value 下注金额
     */
    setBetCoin:function(value){
        if(value== undefined||value== null||value< 0){
            this.coinLabel.setString(value);
            this.betCoins= value;
            this.setVisible(true);
        }else{
            this.setVisible(false);
        }
    },
    //释放-重载基类的release函数
    release:function(){
        this.coinLabel.removeFromParent(true);
        this.coinIcon.removeFromParent(true);
        this.coinBg.removeFromParent(true);
        this.coinIcon= null;
        this.coinLabel= null;
        this.coinBg= null;
    }
});

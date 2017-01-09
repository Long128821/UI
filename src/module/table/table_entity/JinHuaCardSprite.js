/**
 * Func:纸牌精灵
 *      牌值:
 *          [1-13]:方块
 *          [14-26]:梅花
 *          [27-39]:红桃
 *          [40-52]:黑桃
 *
 *          2,3,4,5,6,7,8,9,10,J,Q,K,A === 1,2,3,4,
 */
var CardSprite= cc.Node.extend({
    ctor:function(){
        this._super();
        //清理数据
        this.clear();
        //调用初始化函数
        this.init();
    },
    getCardSprite:function(){
        return this.cardSprite;
    }
});
/**
 * Func:清理数据
 */
CardSprite.prototype.clear= function(){
    ((this.cardSprite!= null&&this.cardSprite!= undefined)&&this.cardSprite.removeFromParent(true));
    ((this.front!= null&&this.front!= undefined)&&this.front.removeFromParent(true));
    ((this.back!= null&&this.back!= undefined)&&this.back.removeFromParent(true));
    ((this.valueSprite!= null&&this.valueSprite!= undefined)&&this.valueSprite.removeFromParent(true));
    ((this.cardTypeBigSprite!= null&&this.cardTypeBigSprite!= undefined)&&this.cardTypeBigSprite.removeFromParent(true));
    ((this.cardTypeSmallSprite!= null&&this.cardTypeSmallSprite!= undefined)&&this.cardTypeSmallSprite.removeFromParent(true));

    this.cardSprite= null;//精灵本身
    this.front= null;//正面背景(白板)
    this.back= null;//反面背景(默认显示反面,因为纸牌一般都是默认扣上)
    this.valueSprite= null;//左上角的牌值
    this.cardTypeBigSprite= null;//大牌花
    this.cardTypeSmallSprite= null;//小牌花
    this.needCover= false;//是否显示遮蔽层
};
/**
 * Func:初始化函数,相当于构造函数
 * @returns 纸牌精灵(cc.Sprite)
 */
CardSprite.prototype.init= function(){
    //创建纸牌反面背景精灵
    this.cardSprite= cc.Sprite.create("#desk_cardbg.png");
    this.cardSprite.setZOrder(2);
    //设置纸牌的高度和宽度尺寸
    this.cardSprite.setContentSize(cc.size(Profile_JinHuaTableConfig.cardWidth, Profile_JinHuaTableConfig.cardHeight));

    //反面背景(默认显示反面,因为纸牌一般都是默认扣上)
    this.back= cc.Sprite.create("#desk_pokerback.png");
    this.back.setPosition(this.back.getContentSize().width* 0.5, this.back.getContentSize().height* 0.5);
    this.cardSprite.addChild(this.back);

    //正面背景(白板)
    this.front= cc.Sprite.create("#desk_cardbg.png");
    this.front.setPosition(this.front.getContentSize().width* 0.5, this.front.getContentSize().height* 0.5);
    this.front.setVisible(false);
    this.cardSprite.addChild(this.front);
};
/**
 * Func:设置牌值
 * @param value 牌值(1-52 方块 梅花 红桃 黑桃)
 */
CardSprite.prototype.setValue= function(value){
    if(value== null||value== undefined) return;
    //移除所有子节点
    this.front.removeAllChildrenWithCleanup(true);
    //设置牌值
    this.cardSprite.value= value;
    //typeIndex == 1(方块)\2(梅花)\3(红桃)\4(黑桃)
    var typeIndex= Math.floor(value/ 13)+ 1;
    //valueIndex == 在数组{2,3,4,5,6,7,8,9,10,J,Q,K,A}中取
    var valueIndex= value % 13;

    //方块或者红桃 一致
    var valuePath= (typeIndex== 1||typeIndex== 3)?"#desk_card_redvalue_"+valueIndex+".png":"#desk_card_blackvalue_"+valueIndex+".png";
    //牌值(左上角)
    this.valueSprite= cc.Sprite.create(valuePath);
    this.valueSprite.setAnchorPoint(cc.p(0, 1));
    this.valueSprite.setPosition(7, this.front.getContentSize().height- 3);

    //大花色(整个牌面)
    this.cardTypeBigSprite= cc.Sprite.create("#desk_card_type"+ typeIndex+".png");
    this.cardTypeBigSprite.setAnchorPoint(cc.p(1,0));
    this.cardTypeBigSprite.setPosition(this.front.getContentSize().width- 5, 7);

    //小花色(左上角)
    this.cardTypeSmallSprite= cc.Sprite.create("#desk_card_type"+ typeIndex+".png");
    this.cardTypeSmallSprite.setAnchorPoint(cc.p(1, 0));
    this.cardTypeSmallSprite.setScale(0.4);
    this.cardTypeSmallSprite.setPosition(this.valueSprite.getPositionX()+ 7, this.valueSprite.getPositionY()- valueSprite.getContentSize().height);

    this.front.addChild(this.valueSprite);//牌值
    this.front.addChild(this.cardTypeBigSprite);//大花色
    this.front.addChild(this.cardTypeSmallSprite);//小花色
};

//获取牌值
CardSprite.prototype.getValue= function(){
    return this.cardSprite.value;
};

/**
 * Func:显示的背面的同时,隐藏正面
 */
CardSprite.prototype.showBack= function(){
    this.back.setVisible(true);
    (this.front!=null)&&(this.front.setVisible(false));
};
/**
 * Func:显示正面的同时,隐藏背面
 */
CardSprite.prototype.showFront= function(){
    if(this.front== null&&this.back== null)  return;
    this.front.setVisible(true);
    this.back.setVisible(false);
    //是否需要遮蔽
    if(this.needCover== true){
        this.showCover();//显示遮蔽层
        this.needCover= false;
    }
};
/**
 * Func:显示遮蔽层
 */
CardSprite.prototype.showCover= function(){
    if(this.front!= null) this.front.setColor(cc.color(125, 125, 125));
    if(this.back!= null) this.back.setColor(cc.color(125, 125, 125));
    if(this.cardTypeBigSprite) this.cardTypeBigSprite.setColor(cc.color(125, 125, 125));
    if(this.cardTypeSmallSprite) this.cardTypeSmallSprite.setColor(cc.color(125, 125, 125));
    if(this.valueSprite) this.valueSprite.setColor(cc.color(125, 125, 125));
};
/**
 * Func:设置是否显示遮蔽层
 * @param isNeed 是否显示
 */
CardSprite.prototype.setNeedCover= function(isNeed){
    this.needCover= isNeed== undefined?false:isNeed;
};

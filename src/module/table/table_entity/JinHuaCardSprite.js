//纸牌精灵
function CardSprite(){
    var self= null;//精灵本身
    var front= null,back= null;
    var valueSprite= null;
    var cardTypeBigSprite= null;
    var cardTypeSmallSprite= null;
    var needCover= false;
    //初始化函数
    function init(){
        self= cc.Sprite.create("#desk_cardbg.png");
        self.setZOrder(2);
        //设置尺寸
        self.setContentSize(cc.size(Profile_JinHuaTableConfig.cardWidth, Profile_JinHuaTableConfig.cardHeight));

        back= cc.Sprite.create("#desk_pokerback.png");
        back.setPosition(back.getContentSize().width* 0.5, back.getContentSize().height* 0.5);
        self.addChild(back);

        front= cc.Sprite.create("#desk_cardbg.png");
        front.setPosition(front.getContentSize().width* 0.5, front.getContentSize().height* 0.5);
<<<<<<< HEAD
        front.setVisible(false);
        self.addChild(front);
        return self;
=======
        self.addChild(front);
>>>>>>> origin/master
    }

    //设置牌值
    function setValue(value){
        if(value== null||value== undefined) return;
        //移除
        front.removeAllChildrenWithCleanup(true);
        self.value= value;
        //typeIndex == 1(方块)\2(梅花)\3(红桃)\4(黑桃)
        var typeIndex= Math.floor(value/ 13)+ 1;
        //valueIndex == 在数组{2,3,4,5,6,7,8,9,10,J,Q,K,A}中取
        var valueIndex= value % 13;

        //绘制牌桌
        var valueWidth= 416/13; //一个数字的宽
        var valueHeight= 32;//一个数字的高

        var cardValueTexture;

        if(typeIndex== 1||typeIndex== 3){
            valueSprite= cc.Sprite.create("#desk_card_redvalue_"+valueIndex+".png");
        }else{
            valueSprite= cc.Sprite.create("#ddesk_card_blackvalue_"+valueIndex+".png");
        }

        valueSprite.setAnchorPoint(cc.p(0, 1));
        valueSprite.setPosition(7, front.getContentSize().height- 3);
        //大花色
        cardTypeBigSprite= cc.Sprite.create("#desk_card_type"+ typeIndex+".png");
        cardTypeBigSprite.setAnchorPoint(cc.p(1,0));
        cardTypeBigSprite.setPosition(front.getContentSize().width- 5, 7);
        //小花色
        cardTypeSmallSprite= cc.Sprite.create("#desk_card_type"+ typeIndex+".png");
        cardTypeSmallSprite.setAnchorPoint(cc.p(1, 0));
        cardTypeSmallSprite.setScale(0.4);
        cardTypeSmallSprite.setPosition(valueSprite.getPositionX()+ 7, valueSprite.getPositionY()- valueSprite.getContentSize().height);

        front.addChild(valueSprite);
        front.addChild(cardTypeBigSprite);
        front.addChild(cardTypeSmallSprite);
    }
    //获取牌值
    function getValue(){
        return self.value;
    }
    //
    function showBack(){
        back.setVisible(true);
        (front!=null)&&(front.setVisible(false));
    }
    //
    function showFront(){
        if(front== null)  return;
        front.setVisible(true);
        back.setVisible(false);
        if(needCover== true){
            showCover();
            needCover= false;
        }
    }

    //
    function showCover(){
        if(front!= null) front.setColor(cc.color(125, 125, 125));
        if(back!= null) back.setColor(cc.color(125, 125, 125));
        if(cardTypeBigSprite) cardTypeBigSprite.setColor(cc.color(125, 125, 125));
        if(cardTypeSmallSprite) cardTypeSmallSprite.setColor(cc.color(125, 125, 125));
        if(valueSprite) valueSprite.setColor(cc.color(125, 125, 125));
    }

    function setNeedCover(isNeed){
        needCover= isNeed== undefined?false:isNeed;
    }

    //调用初始化函数
<<<<<<< HEAD
    return init();
}
=======
    init();
    return self;
}
>>>>>>> origin/master

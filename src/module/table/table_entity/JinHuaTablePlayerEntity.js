//玩家实体
var JinHuaTablePlayerEntity= {
    player:null,
    mPlayerSprite: null, // 玩家精灵
    spritePic:null, // 头像
    labelNameBg:null, // 名字
    levelPic:null, // 等级图标
    atlasLevelNum:null, // 等级数
    labelName:null, // 名字
    labelCoin:null, // 金币
    playerDarkCover:null, //蒙黑
    jinbiSprite:null, // 禁比精灵
    betedCoinLabel:null, // 下的金币数
    readyIcon:null, // 准备
    cardTypeSprite:null, // 玩家牌型背景
    cardTypeLabel:null, // 玩家牌型label
    goldSpriteBg:null, //金币底
    goldSprite:null, //金币
    tipsBg:null,//称谓背景图
    tips:null,//等级和称谓
    luckyTip:null,//幸运点成就图标
    vipLevelPic:null, //vip等级图片
    luckyBg:null,//幸运点低
    LuckyIcon:null,//幸运点图标
    luckyLable:null,//幸运点label
    luckyValue:null,//幸运点数  用来在牌桌结算时 计算转换幸运点的差值
    cardSprites:{},// 牌精灵
    clearData:function(){
        delete this;
    },
    create:function(player){
        this.player= player;

        this.createPlayerView();
        return this;
    },
    createPlayerView:function(){
        this.createPlayerSprite();
        //初始化头像
        this.createPlayerPhoto();
        //遮蔽层
        this.createPlayerDarkCover();
        //昵称
        this.createPlayerLabelName();
        //自己拥有的金币数label
        this.createPlayerLabelCoin();
        //Vip等级图
        this.createPlayerVipPic();
        var isMatch= Profile_JinHuaGameData.getIsMatch();
        if(isMatch== null||isMatch== undefined || isMatch== false){
            //等级
            this.createPlayerTips();
        }
        //创建禁比图标
        this.createJinbiSprite();
        //Todo:创建已压金币数label, 没有加到mPlayerSprite,直接加到了layer上面
        this.createBetedCoinLabel();
        //创建准备图标k
        this.createReadyIcon();
        //创建幸运点
        this.createPlayerluckyTips();
        //创建幸运值
        this.createPlayerLabelLucky(this)
    },
    //等级
    createPlayerTips:function(){
        if(this.mPlayerSprite== null) return;

        var sizeBg = this.mPlayerSprite.getContentSize();
        var coin = this.remainCoins;
        var tipLevel = Profile_JinHuaSetting.getUserTitle(coin);
        var url =  "";
        switch (tipLevel){
            case 1:
                url = "ui_xiaoqigai.png";
                break;
            case 2:
                url = "ui_pingmin.png";
                break;
            case 3:
                url = "ui_xiaokang.png";
                break;
            case 4:
                url = "ui_caizhu.png";
                break;
            case 5:
                url = "ui_tuhao.png";
                break;
            case 6:
                url = "ui_yidaijujia.png";
                break;
            case 7:
                url = "ui_fujiatianxia.png";
                break;
            case 8:
                url = "ui_fukediguo.png";
                break;
            case 9:
                url = "ui_guominlaogong.png";
                break;
            default :
                url= "ui_xiaoqigai.png";
        }

        this.tips = cc.Sprite.create("#" + url);
        this.tips.setColor(cc.color(255, 255, 255));

        this.tips.setPosition(sizeBg.width / 6, this.goldSpriteBg.getPositionY() + this.goldSpriteBg.getContentSize().height / 4);
        this.mPlayerSprite.addChild(this.tips);
    },
    //玩家精灵
    createPlayerSprite:function(){
        if(this.player.userId!= profile_user.getSelfUserID){
            this.mPlayerSprite= cc.Sprite.create("#table_kuang.png");
        }else{
            this.mPlayerSprite= cc.Sprite.create("#table_mine_kuang.png");
        }
        this.mPlayerSprite.setAnchorPoint(cc.p(0, 0));
        this.mPlayerSprite.setZOrder(11);
        if(this.player.userId!= profile_user.getSelfUserID()){
            this.mPlayerSprite.setPosition(Profile_JinHuaTableConfig.spritePlayers[this.player.SSID].locX, Profile_JinHuaTableConfig.spritePlayers[this.player.SSID].locY);
        }else{
            this.mPlayerSprite.setPosition(Profile_JinHuaTableConfig.mySelfLocX, Profile_JinHuaTableConfig.mySelfLocY)
        }
    },
    //头像
    createPlayerPhoto:function(){
        if(this.mPlayerSprite== null) return;

        var bgSize= this.mPlayerSprite.getContentSize();
        //头像
        if(this.player.userId!= profile_user.getSelfUserID()){
            this.spritePic= cc.Sprite.create(Common.getResourcePath("desk_playerhead.png"));
        }else{
            this.spritePic= cc.Sprite.create(Common.getResourcePath("desk_playerhead_mine.png"));
        }
        //Todo:测试为什么(0.75, 0.25 就是居中)
        this.spritePic.setPosition(bgSize.width* 0.75, bgSize.height * 0.25);
        this.mPlayerSprite.addChild(this.spritePic);
    },
    //蒙灰遮挡
    createPlayerDarkCover:function(){
        if(this.mPlayerSprite== null) return;

        var bgSize= this.mPlayerSprite.getContentSize();
        //头像
        if(this.player.userId!= profile_user.getSelfUserID()){
            this.playerDarkCover= cc.Sprite.create("#desk_player_cover.png");
        }else{
            this.playerDarkCover= cc.Sprite.create("#desk_player_cover_mine.png");
        }
        this.playerDarkCover.setPosition(bgSize.width / 2, bgSize.height / 2);
        this.playerDarkCover.setVisible(false);
        this.mPlayerSprite.addChild(this.playerDarkCover);
    },
    //玩家昵称
    createPlayerLabelName:function(){
        if(this.mPlayerSprite== null) return;

        var sizeBg= this.mPlayerSprite.getContentSize();
        var nickName= this.nickName;

        this.labelNameBg = cc.Sprite.create("#ui_paizhuo_xingmingkuang.png");
        this.mPlayerSprite.addChild(this.labelNameBg);
        this.labelNameBg.setPosition(sizeBg.width / 2,sizeBg.height);

        //名字的最大长度（超出最大长度截取+..）
        this.labelName = cc.LabelTTF.create(nickName, "Arial", 17);
        this.labelName.setColor(cc.color(240, 229, 232));
        var nameMaxWidth = this.labelNameBg.getContentSize().width * 3 / 4;
        //截取固定长度的字符串
        while (this.labelName.width> nameMaxWidth){
            nickName= nickName.substring(0, nickName- 2);
            this.labelName.setString(nickName+"..");
        }

        this.labelName.setPosition(sizeBg.width / 2 + this.labelNameBg.getContentSize().width / 10, sizeBg.height);

        this.mPlayerSprite.addChild(this.labelName);

        if(this.player.userId== profile_user.getSelfUserID()){
            this.labelNameBg.setVisible(false);
            this.labelName.setVisible(false);
        }
    },
    //自己拥有的金币数label
    createPlayerLabelCoin:function(){
        if(this.mPlayerSprite== null) return;

        var sizeBg = this.mPlayerSprite.getContentSize();
        //金币条背景
        this.goldSpriteBg = cc.Sprite.create("#ui_paizhuo_yonghuxinxidikuang.png");
        if(this.player.userId != profile_user.getSelfUserID()) {
            this.goldSpriteBg.setPosition(sizeBg.width / 2, 13);
        }else {
            this.goldSpriteBg.setPosition(sizeBg.width / 2, 33);
        }
        this.mPlayerSprite.addChild(this.goldSpriteBg);
        //金币图标
        if(Profile_JinHuaGameData.getIsMatch() == true) {
            this.goldSprite = cc.Sprite.create("#ic_jinbi_fenshu.png");
        }else {
            this.goldSprite = cc.Sprite.create("#desk_coin_logo.png");
        }
        if(this.player.userId != profile_user.getSelfUserID()) {
            this.goldSprite.setPosition(sizeBg.width / 2 - 59, 0);
        }else {
            this.goldSprite.setPosition(sizeBg.width / 2 - 59, 19);
        }
        this.mPlayerSprite.addChild(this.goldSprite);
        //金币数
        this.labelCoin = cc.LabelAtlas.create("0", Common.getResourcePath("pic_jinbishu.png"), 13, 20, "0");
        this.labelCoin.setPosition(this.goldSpriteBg.getPositionX() + this.goldSprite.getContentSize().width / 2, this.goldSpriteBg.getPositionY() - this.goldSpriteBg.getContentSize().height / 5);
        this.labelCoin.setAnchorPoint(cc.p(0.5,0.5));
        this.mPlayerSprite.addChild(this.labelCoin)
    },
    //vip等级图
    createPlayerVipPic:function(){
        if(this.mPlayerSprite== null) return;

        //vip等级图
        var vipLevel = this.player.vipLevel;
        var vipBgTexture = VipElementsUtils.getVipBgFromVipLevel(parseInt(vipLevel));
        var self= this;
        if(vipBgTexture !=null){
            Common.addSpriteByNet(Common.getResourcePath(vipBgTexture), function(sprite){
                self.vipLevelPic= sprite;
                self.setVipInfo(vipLevel);
            });
        }else {
            this.vipLevelPic = cc.Sprite.create("#ic_vip_0.png");
            this.setVipInfo(vipLevel);
        }
    },
    setVipInfo:function(vipLevel){
        var sizeBg = this.mPlayerSprite.getContentSize();

        if(vipLevel != null) {
            if (vipLevel > 0 && vipLevel < 10) {
                var AtlasLabel_vip_level = cc.LabelAtlas.create("0", Common.getResourcePath("ui_vip_lvshuzi_gaoji.png"), 14, 20, "0");
                AtlasLabel_vip_level.setString("." + vipLevel);
                AtlasLabel_vip_level.setAnchorPoint(cc.p(0.5, 0.5));
                AtlasLabel_vip_level.setPosition(this.vipLevelPic.getContentSize().width / 2, this.vipLevelPic.getContentSize().height / 2);
                this.vipLevelPic.addChild(AtlasLabel_vip_level);

                var Image_vip_lowsignbg = cc.Sprite.create("#ic_vip_jiaobiao_shuzichendi.png");
                Image_vip_lowsignbg.setAnchorPoint(cc.p(0.5, 0.5));
                Image_vip_lowsignbg.setPosition(this.vipLevelPic.getContentSize().width, this.vipLevelPic.getContentSize().height);
                this.vipLevelPic.addChild(Image_vip_lowsignbg);

                var AtlasLabel_lowsign = cc.LabelAtlas.create("0", Common.getResourcePath("ui_vip_jiaobiaoshuzi.png"), 12, 14, "0");
                AtlasLabel_lowsign.setString(vipLevel);
                AtlasLabel_lowsign.setAnchorPoint(cc.p(0.5, 0.5));
                AtlasLabel_lowsign.setPosition(this.vipLevelPic.getContentSize().width, this.vipLevelPic.getContentSize().height);
                this.vipLevelPic.addChild(AtlasLabel_lowsign);
            }else if (vipLevel >= 10) {
                var AtlasLabel_vip_level = cc.LabelAtlas.create("0", Common.getResourcePath("ui_vip_lvshuzi_gaoji.png"), 14, 20, "0");
                AtlasLabel_vip_level.setString("."+ vipLevel);
                AtlasLabel_vip_level.setAnchorPoint(cc.p(0.5, 0.5));
                console.log(this.vipLevelPic.getContentSize());
                AtlasLabel_vip_level.setPosition(this.vipLevelPic.getContentSize().width / 2, this.vipLevelPic.getContentSize().height / 2);
                this.vipLevelPic.addChild(AtlasLabel_vip_level);

                var highSignTexture = VipElementsUtils.getVipHighSignFromVipLevel(vipLevel);
                var Image_vip_highsign = null;
                if (highSignTexture != null) {
                    Image_vip_highsign = cc.Sprite.create("#" + highSignTexture);
                    Image_vip_highsign.setAnchorPoint(cc.p(0.5, 0.5));
                    Image_vip_highsign.setPosition(this.vipLevelPic.getContentSize().width, this.vipLevelPic.getContentSize().height);
                    this.vipLevelPic.addChild(Image_vip_highsign)
                }
            }
        }

        if(this.player.userId != profile_user.getSelfUserID()) {
            this.vipLevelPic.setScale(0.9)
        }
        this.vipLevelPic.setPosition(sizeBg.width * 5 / 6, this.goldSpriteBg.getPositionY() + this.goldSpriteBg.getContentSize().height / 4);
        this.mPlayerSprite.addChild(this.vipLevelPic);
    },
    //创建禁比图标
    createJinbiSprite:function(){
        if(this.mPlayerSprite== null) return;

        this.jinbiSprite = cc.Sprite.create("#jinbi_icon.png");
        this.jinbiSprite.setAnchorPoint(cc.p(0.5,0));
        var jinbiSize = this.jinbiSprite.getContentSize();
        if(this.player.userId != profile_user.getSelfUserID()) {
            this.jinbiSprite.setPosition(Profile_JinHuaTableConfig.spritePlayers[this.player.SSID].cards[2].locX, Profile_JinHuaTableConfig.spritePlayers[this.player.SSID].cards[2].locY + 30)
        }else{
            this.jinbiSprite.setPosition(558 + 26 * 2, 130 + jinbiSize.height / 2);
        }
        this.jinbiSprite.setZOrder(12);
        this.jinbiSprite.setScale(0.5);
        this.dismissJinbiIcon();
        JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(this.jinbiSprite)
    },
    //隐藏禁比
    dismissJinbiIcon:function(){
        if(this.jinbiSprite.isVisible()){
            this.jinbiSprite.setVisible(false);
            this.jinbiSprite.setScale(0.5);
        }
    },
    //添加玩家实体元素到层
    addPlayerElementToLayer:function(layer){
        layer.addChild(this.mPlayerSprite);
        //添加已加注文本
        layer.addChild(this.betedCoinLabel);
        layer.addChild(this.readyIcon);
    },
    //移除玩家实体元素
    removePlayerElementFromLayer:function(layer){
        layer.removeChild(this.mPlayerSprite, true);
        layer.removeChild(this.betedCoinLabel, true);
        layer.removeChild(this.readyIcon, true);
        delete this.mPlayerSprite;
        delete this.betedCoinLabel;
        delete this.readyIcon;
    },
    //创建已压金币数label, 没有加到mPlayerSprite,直接加到了layer上面
    createBetedCoinLabel:function(){
        if(this.player.userId!= profile_user.getSelfUserID()){
            this.betedCoinLabel= new JinHuaBetedCoinLabel(Profile_JinHuaTableConfig.spritePlayers[this.player.SSID].betCoinX, Profile_JinHuaTableConfig.spritePlayers[this.player.SSID].betCoinY);
        }else{
           this.betedCoinLabel= new JinHuaBetedCoinLabel(392, 90);
        }
    },
    //创建准备图标k
    createReadyIcon:function(){
        this.readyIcon = cc.Sprite.create("#desk_icon_ready.png");
        this.readyIcon.setZOrder(12);
        this.readyIcon.setPosition(Profile_JinHuaTableConfig.spritePlayers[this.player.SSID].pkX, Profile_JinHuaTableConfig.spritePlayers[this.player.SSID].pkY)
        this.readyIcon.setVisible(false);
    },
    //等级
    createPlayerluckyTips:function(){
        var Clover= this.player.Clover;
        if(Clover== null && Clover==  1){
            var sizeBg= this.mPlayerSprite.getContentSize();
            this.luckyTip= cc.Sprite.create("#dianjizhe.png");
            this.luckyTip.setPosition(sizeBg.width / 5 * 4,sizeBg.height / 5 * 4);
            this.mPlayerSprite.addChild(this.luckyTip);
        }
    },
    //自己拥有的幸运点label
    createPlayerLabelLucky:function(){
        this.luckyValue= Profile_JinHuaGameData.getGameData()["luckyPoint"];
        //比赛时，不显示幸运点
        var matchInstanceId= Profile_JinHuaGameData.getGameData()["matchInstanceId"];
        if(matchInstanceId!= null &&matchInstanceId!= null) return;

        if(this.player.userId== profile_user.getSelfUserID()&&this.luckyValue> 0){
            var sizeBg = this.mPlayerSprite.getContentSize();

            //金币条背景
            this.luckyBg = cc.Sprite.create("#ui_paizhuo_gerenxiazhudi.png");
            this.luckyBg.setPosition(sizeBg.width + 135,sizeBg.height/2);
            var coinBgSize = this.luckyBg.getContentSize();
            //金币图标
            this.LuckyIcon = cc.Sprite.create("#luckyicon.png");
            this.luckyBg.addChild(this.LuckyIcon);
            this.LuckyIcon.setPosition(coinBgSize.width / 10,coinBgSize.height / 2);
            //金币数

            this.luckyLable = cc.LabelTTF.create(this.luckyValue , "Arial", 24);
            this.luckyLable.setAnchorPoint(cc.p(0,0.5));
            this.luckyLable.setColor(cc.color(255, 255, 255));
            this.luckyLable.setPosition(coinBgSize.width / 10 + 15,coinBgSize.height / 2)
            this.luckyBg.addChild(this.luckyLable);

            this.mPlayerSprite.addChild(this.luckyBg);
        }
    },
    //设置已压金币数
    setBetCoin:function(){
        this.betedCoinLabel.setBetCoin(this.player.betCoins);
    },
    //显示准备Icon
    showReadyIcon:function(){
        this.readyIcon.setVisible(true);
    },
    hideReadyIcon:function(){
        this.readyIcon.setVisible(false);
    },
    //遮盖头像
    setPlayerDarkCoverVisible:function(){
        this.playerDarkCover.setVisible(true);
    },
    //取消遮盖头像
    setPlayerDarkCoveredDone:function(){
        this.playerDarkCover.setVisible(false);
    },
    //生成三张牌并添加到层
    createCard:function(){
        if(this.player.status== STATUS_PLAYER_PLAYING){
            this.createNotBeLookedCard();
        }else if(this.player.status== STATUS_PLAYER_LOOKCARD){
            //Todo:看牌
            this.createNotBeLookedCard();
            //Todo:设置牌被看了
            this.setCardsLooked();
        }
    },
    //创建没有被看的牌
    createNotBeLookedCard:function(){
        //一定要有，不然会去直接操作元表， 修改的都是同一数据
        this.cardSprites = {};
        //Todo:CardSprite
//        for(var i= 0; i< 3; ++i){
//
//        }
//        for i=1, 3 do
//            this.cardSprites[i] = CardSprite()
//            this.cardSprites[i].setAnchorPoint(cc.p(0.5, 0))
//        if this.userId ~= profile.User.getSelfUserID() then
//        this.cardSprites[i].setPosition(JinHuaTableConfig.spritePlayers[this.CSID].cards[i].locX, JinHuaTableConfig.spritePlayers[this.CSID].cards[i].locY)
//        else
//        this.cardSprites[i].setPosition(558 + 26 * i, 125)
//        end
//        this.cardSprites[i].setScale(JinHuaTableConfig.cardScale)
//        end
//
//        var cardTypePosX, cardTypePosY
//        if this.isMe then
//        cardTypePosX = 740
//        cardTypePosY = 110
//        // 自己的牌的话有角度和大小特殊显示
//        JinHuaTableCard.setMyCardScaleAndRotation(this.cardSprites[1], this.cardSprites[2], this.cardSprites[3])
//        else
//        if this.CSID <= 3 then
//        cardTypePosX = JinHuaTableConfig.spritePlayers[this.CSID].cards[2].locX+this.cardSprites[1].getContentSize().width/4
//        else
//        cardTypePosX = JinHuaTableConfig.spritePlayers[this.CSID].cards[2].locX-this.cardSprites[1].getContentSize().width/4
//        end
//        cardTypePosY = JinHuaTableConfig.spritePlayers[this.CSID].cards[2].locY-10*JinHuaTableConfig.TableScaleY
//        end
//        this.cardTypeSprite = CCSprite.createWithSpriteFrameName("bg_desk_paixing.png");
//        this.cardTypeSprite.setAnchorPoint(ccp(0.5, 0.5))
//        this.cardTypeSprite.setPosition(cardTypePosX, cardTypePosY)
//        this.cardTypeSprite.setVisible(false)
//
//        this.cardTypeLabel = CCLabelTTF.create("散牌", "Arial", 24)
//        this.cardTypeLabel.setColor(ccc3(255, 255, 255))
//        this.cardTypeLabel.setAnchorPoint(ccp(0.5, 0.5))
//        this.cardTypeLabel.setPosition(this.cardTypeSprite.getContentSize().width/2, this.cardTypeSprite.getContentSize().height/2)
//        this.cardTypeSprite.addChild(this.cardTypeLabel)
//        Common.log("createNotBeLookedCard name is " .. this.labelName.getString())
//
//        for i=1, #this.cardSprites do
//            this.cardSprites[i].setZOrder(9)
//        //		JinHuaTableLogic.getTableParentLayer().addChild(this.cardSprites[i])
//        JinHuaTablePlayer.getCardBatchNode().addChild(this.cardSprites[i])
//        end
//        this.cardTypeSprite.setZOrder(9)
//        JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(this.cardTypeSprite)
    },
    //设置牌被看了
    setCardsLooked:function(){

    },
    //显示禁比动画
    showJinbiAnim:function(){
        if(!this.noPK) return;
        this.jinbiSprite.setVisible(true);
        this.jinbiSprite.runAction(cc.scaleTo(0.25, 0.5));
    },
    //金币变更 设置金币
    setCoin:function(){
        this.changeCoinNumOnView(this.player.remainCoins)
    },
    //改变界面上的金币
    changeCoinNumOnView:function(coinNum){
        if(this.mPlayerSprite!= null&&this.mPlayerSprite!= undefined){
            this.labelCoin.setString(coinNum);
            this.setBetCoin();
            this.labelCoin.setPosition(this.goldSpriteBg.getPositionX() + this.goldSprite.getContentSize().width / 2, this.goldSpriteBg.getPositionY() - this.goldSpriteBg.getContentSize().height / 5);
        }
    },
    //根据性别获取默认的头像图片
    getHeadPhotoTextureBySex:function(){
        if(this.player.userId!= profile_user.getSelfUserID()){
            return cc.textureCache.addImage(Common.getResourcePath("desk_playerhead.png"));
        }else{
            return cc.textureCache.addImage(Common.getResourcePath("desk_playerhead_mine.png"));
        }
    },
    //设置玩家头像
    setPortrait:function(path){
        var texture;
        if(path== null||path== undefined){
            texture= this.getHeadPhotoTextureBySex();
        }else{
            texture= cc.textureCache.addImage(path);
            if(texture== null){
                texture= this.getHeadPhotoTextureBySex();
            }
        }
        if(this.mPlayerSprite!=null&&texture!=null&&this.spritePic!= null){
            this.spritePic.setTexture(texture);
        }
    },
    isMe:function(){
        return this.player.userId== profile_user.getSelfUserID();
    }
};

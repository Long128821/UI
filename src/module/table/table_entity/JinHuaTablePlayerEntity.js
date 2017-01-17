/**
 * Func:玩家实例(每个人就是一个实例)
 *      仅存储玩家的数据
 * @param player 玩家数据(后台传递过来的)
 */
function JinHuaTablePlayerEntity(player){
    this.player= player== undefined?null:player;//玩家属性数据(昵称、性别、头像url、客户端座位号、服务器端座位号)
    this.mPlayerSprite = null;//玩家头像框-精灵
    this.spritePic = null;//玩家头像
    this.labelNameBg = null;//昵称背景
    this.levelPic = null;//等级图标
    this.atlasLevelNum = null;//等级数
    this.labelName = null;//玩家昵称
    this.labelCoin = null;//玩家所拥有的金币数
    this.playerDarkCover = null;//头像上的遮蔽层(蒙黑)
    this.jinbiSprite = null;//禁比精灵
    this.betedCoinLabel = null;//下的金币数
    this.readyIcon = null;//准备Icon
    this.cardTypeSprite = null;//玩家牌型背景
    this.cardTypeLabel = null;//玩家牌型label
    this.goldSpriteBg = null;//玩家金币背景
    this.goldSprite = null;//玩家金币Icon
    this.tipsBg = null;//称谓背景图
    this.tips = null;//等级和称谓
    this.luckyTip = null;//幸运点成就图标
    this.vipLevelPic = null;//vip等级图片
    this.luckyBg = null;//幸运点低
    this.LuckyIcon = null;//幸运点图标
    this.luckyLable = null;//幸运点label
    this.luckyValue = null;//幸运点数  用来在牌桌结算时 计算转换幸运点的差值
    this.cardSprites = {};// 牌精灵
    //相当于默认构造函数
    this.createPlayerView();
}

//清理数据
JinHuaTablePlayerEntity.prototype.clear= function(){
    (this.playerDarkCover!= null)&&this.playerDarkCover.removeFromParent(true);
    (this.spritePic!= null)&&this.spritePic.removeFromParent(true);
    (this.labelName!= null)&&this.labelName.removeFromParent(true);
    (this.labelNameBg!= null)&&this.labelNameBg.removeFromParent(true);
    (this.goldSprite!= null)&&this.goldSprite.removeFromParent(true);
    (this.goldSpriteBg!= null)&&this.goldSpriteBg.removeFromParent(true);
    (this.labelCoin!= null)&&this.labelCoin.removeFromParent(true);
    (this.mPlayerSprite!= null)&&this.mPlayerSprite.removeFromParent(true);

    this.player= null;
    this.playerDarkCover= null;
    this.spritePic= null;
    this.labelName= null;
    this.labelNameBg= null;
    this.goldSprite= null;
    this.goldSpriteBg=null;
    this.labelCoin= null;
    this.mPlayerSprite= null;
};

//玩家的等级和称谓
JinHuaTablePlayerEntity.prototype.createPlayerTips= function(){
    if(this.mPlayerSprite== null) return;

    this.tips = cc.Sprite.create(null);
    this.tips.setColor(cc.color(255, 255, 255));
    this.tips.setPosition(0, this.goldSpriteBg.getPositionY() + this.goldSpriteBg.getContentSize().height / 5);
    this.mPlayerSprite.addChild(this.tips, 2);
    //更新玩家等级和称谓
    this.updatePlayerTips();
};

//移除牌
JinHuaTablePlayerEntity.prototype.removeCard= function(layer){
    if(this.cardSprites){
        for(var key in this.cardSprites){
            layer.removeChild(this.cardSprites[key], true);
            delete this.cardSprites[key];
        }
    }
    this.cardSprites= {};

    if(this.cardTypeSprite) {
        JinHuaTablePlayer.getJinHuaTablePlayerLayer().removeChild(this.cardTypeSprite, true);
        this.cardTypeSprite = null;
    }
};

//是否为玩家本身
JinHuaTablePlayerEntity.prototype.isMe= function(){
    return ((this.player)&&(this.player.userId== profile_user.getSelfUserID()));
};

//设置玩家头像
JinHuaTablePlayerEntity.prototype.setPortrait= function(path){
    var texture;
    var self= this;
    if(path== null||path== undefined){
        //根据性别,获取纹理(cc.texture)
        texture= this.getHeadPhotoTextureBySex();
        //玩家头像框不为空&&纹理不为空&&玩家头像不为空
        if(this.mPlayerSprite!=null&&texture!=null&&this.spritePic!= null){
            this.spritePic.setTexture(texture);
        }
    }else{
        //头像可能会加载失败(头像删除)
        cc.loader.loadImg(path, function(){}, function(err){
            if(err== null){//加载成功
                texture= cc.textureCache.addImage(path);
            }else{
                texture= self.getHeadPhotoTextureBySex();
            }
            if(self.mPlayerSprite!=null&&texture!=null&&self.spritePic!= null){
                self.spritePic.setTexture(texture);
            }
        });
    }
};

//根据性别获取默认的头像图片
JinHuaTablePlayerEntity.prototype.getHeadPhotoTextureBySex= function(){
    var imagePath= this.isMe()?"desk_playerhead.png":"desk_playerhead_mine.png";
    return cc.textureCache.addImage(Common.getResourcePath(imagePath));
};

//根据性别获取默认的头像图片
JinHuaTablePlayerEntity.prototype.getHeadPhotoSpriteBySex= function(){
    var imagePath= this.isMe()?"desk_playerhead.png":"desk_playerhead_mine.png";
    return cc.Sprite.create(Common.getResourcePath(imagePath));
};

//改变界面上的金币(玩家的金币数、已压金币数)
JinHuaTablePlayerEntity.prototype.changeCoinNumOnView= function(coinNum){
    //头像框不为空
    if(this.mPlayerSprite!= null&&this.mPlayerSprite!= undefined){
        //设置玩家的金币数
        this.labelCoin.setString(coinNum);
        this.labelCoin.setPosition(this.goldSpriteBg.getPositionX() + this.goldSprite.getContentSize().width / 2, this.goldSpriteBg.getPositionY() - this.goldSpriteBg.getContentSize().height / 5);
        //设置已压金币数
        this.setBetCoin();
    }
};
//创建玩家实例(头像框、头像、昵称、蒙黑遮蔽层、头像框背景、昵称、金币数、称谓、VIP等级)
JinHuaTablePlayerEntity.prototype.createPlayerView= function(){
    //创建-玩家头像框-精灵
    this.createPlayerSprite();
    //创建头像,添加到头像框上
    this.createPlayerPhoto();
    //创建-头像上的蒙灰遮蔽层(默认不显示,进入牌桌时显示,准备后,移除)
    this.createPlayerDarkCover();
    //创建-玩家背景、昵称(截取)
    this.createPlayerLabelName();
    //创建-自己拥有的金币数、背景、图标
    this.createPlayerLabelCoin();
    //Vip等级图
    this.createPlayerVipPic();
    //如果是非比赛,则隐藏屏幕下方的经验、等级
    var isMatch= Profile_JinHuaGameData.getIsMatch();
    if(isMatch== null||isMatch== undefined || isMatch== false){
        //等级
        this.createPlayerTips();
    }
    //创建禁比图标
    this.createJinbiSprite();
    //已压金币数
    this.createBetedCoinLabel();
    //创建准备图标
    this.createReadyIcon();
    //创建幸运点
    this.createPlayerLuckyTips();
    //创建幸运值
    this.createPlayerLabelLucky();
};
//更新玩家的称谓(小乞丐、富可敌国),在图集缓存中
JinHuaTablePlayerEntity.prototype.updatePlayerTips= function(){
    //玩家剩余金币
    var coin = this.player.remainCoins;
    //根据玩家的剩余金币数,获取玩家的称谓等级
    var tipLevel = Profile_JinHuaSetting.getUserTitle(coin);
    var url;
    switch (tipLevel[1]){
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
    //称谓-在图集列表中,更新纹理
    this.tips.setSpriteFrame(url);
};

/**
 * Func:创建-玩家头像框-精灵
 *      根据CSID,设置玩家的头像框的位置
 */
JinHuaTablePlayerEntity.prototype.createPlayerSprite= function(){
    if(this.isMe()){//是否为玩家本身
        this.mPlayerSprite= cc.Sprite.create("#table_kuang.png");
        this.mPlayerSprite.setPosition(Profile_JinHuaTableConfig.mySelfLocX, Profile_JinHuaTableConfig.mySelfLocY)
    }else{
        this.mPlayerSprite= cc.Sprite.create("#table_mine_kuang.png");
        //客户端中对应ID的玩家的位置
        var player= Profile_JinHuaTableConfig.getSpritePlayers()[this.player.CSID];
        this.mPlayerSprite.setPosition(player.locX, player.locY);
    }
    this.mPlayerSprite.setAnchorPoint(cc.p(0, 0));
    this.mPlayerSprite.setZOrder(11);
};

/**
 * Func:初始化头像,添加到头像框上(居中)
 * Todo：裁切节点-圆形
 */
JinHuaTablePlayerEntity.prototype.createPlayerPhoto= function(){
    //头像框不能为空
    if(this.mPlayerSprite== null) return;
    //获取头像框的尺寸
    var bgSize= this.mPlayerSprite.getContentSize();
    //初始化头像
    var self= this;
    Common.addSpriteByNet(self.player.photoUrl, function(sprite){
        self.spritePic= ((sprite== "ERROR")?self.getHeadPhotoSpriteBySex():sprite);
        self.spritePic.setPosition(bgSize.width* 0.5, bgSize.height* 0.5);//居中
        self.mPlayerSprite.addChild(self.spritePic, 1);
        if(sprite!= "ERROR"){//网络图片放大
            self.spritePic.setScale(1.2);
        }
    });
};

/**
 * Func:创建-头像上的蒙灰遮蔽层(默认不显示,进入牌桌时显示,准备后,移除)
 *      头像框居中
 */
JinHuaTablePlayerEntity.prototype.createPlayerDarkCover= function(){
    //头像框不能为空
    if(this.mPlayerSprite== null) return;
    //获取头像框的尺寸
    var bgSize= this.mPlayerSprite.getContentSize();
    //在plist中
    var darkCoverPath= this.isMe()?"#desk_player_cover_mine.png":"#desk_player_cover.png";
    //头像上的蒙灰遮蔽层
    this.playerDarkCover= cc.Sprite.create(darkCoverPath);
    this.playerDarkCover.setPosition(bgSize.width / 2, bgSize.height / 2);
    this.playerDarkCover.setVisible(false);//默认不显示
    this.mPlayerSprite.addChild(this.playerDarkCover, 3);
};

/**
 * Func:创建-玩家背景、昵称(截取)
 */
JinHuaTablePlayerEntity.prototype.createPlayerLabelName= function(){
    //头像框不能为空
    if(this.mPlayerSprite== null) return;
    //获取头像框的尺寸
    var sizeBg= this.mPlayerSprite.getContentSize();
    //玩家昵称
    var nickName= this.player.nickName;
    //昵称背景
    this.labelNameBg = cc.Sprite.create("#ui_paizhuo_xingmingkuang.png");
    this.labelNameBg.setPosition(sizeBg.width / 2,sizeBg.height);
    this.mPlayerSprite.addChild(this.labelNameBg, 2);

    //名字的最大长度（超出最大长度截取+..）
    this.labelName = cc.LabelTTF.create(nickName, "Arial", 17);
    this.labelName.setColor(cc.color(240, 229, 232));
    this.labelName.setPosition(sizeBg.width / 2 + this.labelNameBg.getContentSize().width / 10, sizeBg.height);
    this.mPlayerSprite.addChild(this.labelName, 2);

    //玩家自身 隐藏昵称、昵称背景
    if(this.isMe()){
        this.labelNameBg.setVisible(false);
        this.labelName.setVisible(false);
    }

    //玩家的昵称= 昵称背景*0.75的文本+ (超出部分使用'..'代替）
    var nameMaxWidth = this.labelNameBg.getContentSize().width * 3 / 4;
    //截取固定长度的字符串
    while (this.labelName.width> nameMaxWidth){
        nickName= nickName.substring(0, nickName.length- 2);
        this.labelName.setString(nickName+"..");
    }
};
/**
 * Func:创建-自己拥有的金币数、背景、图标
 */
JinHuaTablePlayerEntity.prototype.createPlayerLabelCoin= function(){
    //头像框不能为空
    if(this.mPlayerSprite== null) return;
    //获取头像框的尺寸
    var sizeBg= this.mPlayerSprite.getContentSize();

    //金币条背景
    this.goldSpriteBg = cc.Sprite.create("#ui_paizhuo_yonghuxinxidikuang.png");
    var goldBgPos= this.isMe()?cc.p(sizeBg.width / 2, 33):cc.p(sizeBg.width / 2, 13);
    this.goldSpriteBg.setPosition(goldBgPos);
    this.mPlayerSprite.addChild(this.goldSpriteBg, 2);

    //金币图标
    var goldIconPath= Profile_JinHuaGameData.getIsMatch()?"#ic_jinbi_fenshu.png":"#desk_coin_logo.png";
    this.goldSprite = cc.Sprite.create(goldIconPath);
    var goldPos= this.isMe()?cc.p(sizeBg.width / 2 - 59, 19):cc.p(sizeBg.width / 2 - 59, 0);
    this.goldSprite.setPosition(goldPos);
    this.mPlayerSprite.addChild(this.goldSprite, 2);

    //金币背景的尺寸
    var goldBgSize= this.goldSpriteBg.getContentSize();
    //金币数
    this.labelCoin = cc.LabelAtlas.create("0", Common.getResourcePath("pic_jinbishu.png"), 13, 20, "0");
    this.labelCoin.setPosition(goldBgPos.x + goldBgSize.width / 2, goldBgPos.y - goldBgSize.height / 5);
    this.labelCoin.setAnchorPoint(cc.p(0.5,0.5));
    this.mPlayerSprite.addChild(this.labelCoin, 2);
};

//vip等级图
JinHuaTablePlayerEntity.prototype.createPlayerVipPic= function(){
    if(this.mPlayerSprite== null) return;

    //vip等级图
    var vipLevel = this.player.vipLevel;
    //根据对应的vip等级,获取对应的vip等级背景图
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
};

//设置VIP信息
JinHuaTablePlayerEntity.prototype.setVipInfo= function (vipLevel){
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

    if(this.isMe()) {
        this.vipLevelPic.setScale(0.9)
    }
    this.vipLevelPic.setPosition(sizeBg.width * 5 / 6, this.goldSpriteBg.getPositionY() + this.goldSpriteBg.getContentSize().height / 4);
    this.mPlayerSprite.addChild(this.vipLevelPic, 2);
};

//创建禁比图标
JinHuaTablePlayerEntity.prototype.createJinbiSprite= function(){
    if(this.mPlayerSprite== null) return;

    this.jinbiSprite = cc.Sprite.create("#jinbi_icon.png");
    this.jinbiSprite.setAnchorPoint(cc.p(0.5,0));
    var jinbiSize = this.jinbiSprite.getContentSize();

    var players= Profile_JinHuaTableConfig.getSpritePlayers();
    if(this.isMe()) {
        this.jinbiSprite.setPosition(players[this.player.CSID].cards[1].locX, players[this.player.CSID].cards[1].locY + 30)
    }else{
        this.jinbiSprite.setPosition(558 + 26 * 2, 130 + jinbiSize.height / 2);
    }

    this.jinbiSprite.setZOrder(12);
    this.jinbiSprite.setScale(0.5);
    //隐藏禁比
    this.dismissJinbiIcon();

    JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(this.jinbiSprite)
};
//隐藏禁比
JinHuaTablePlayerEntity.prototype.dismissJinbiIcon= function(){
    if(this.jinbiSprite.isVisible()){
        this.jinbiSprite.setVisible(false);
        this.jinbiSprite.setScale(0.5);
    }
};
//添加玩家实体元素到层
//玩家对应的元素(昵称、头像、Vip等级)-->头像框-->JinHuaPlayerLayer层中
//玩家已经加注的金币数(头像旁)-->JinHuaPlayerLayer层中
//玩家头像旁边的准备标记-->JinHuaPlayerLayer层中
JinHuaTablePlayerEntity.prototype.addPlayerElementToLayer= function (layer){
    layer.addChild(this.mPlayerSprite);//头像框
    layer.addChild(this.betedCoinLabel);//添加已加注文本
    layer.addChild(this.readyIcon);//准备
};
//移除玩家实体元素
JinHuaTablePlayerEntity.prototype.removePlayerElementFromLayer= function (layer){
    this.mPlayerSprite!= null&&this.mPlayerSprite.removeFromParent(true);
    this.betedCoinLabel!= null&&this.betedCoinLabel.removeFromParent(true);
    this.readyIcon!= null&&this.readyIcon.removeFromParent(true);
    this.mPlayerSprite= null;
    this.betedCoinLabel= null;
    this.readyIcon= null;
};
//创建已压金币数label, 没有加到mPlayerSprite,直接加到了layer上面
JinHuaTablePlayerEntity.prototype.createBetedCoinLabel= function(){
    if(!this.isMe()){
        var players= Profile_JinHuaTableConfig.getSpritePlayers();
        this.betedCoinLabel= new JinHuaBetedCoinLabel(players[this.player.CSID].betCoinX, players[this.player.CSID].betCoinY);
    }else{
        this.betedCoinLabel= new JinHuaBetedCoinLabel(392, 90);
    }
};

//创建<准备>图标(默认隐藏,准备之后,显示)
JinHuaTablePlayerEntity.prototype.createReadyIcon= function(){
    this.readyIcon = cc.Sprite.create("#desk_icon_ready.png");
    this.readyIcon.setZOrder(12);
    var players= Profile_JinHuaTableConfig.getSpritePlayers();
    var player= players[this.player.CSID];
    this.readyIcon.setPosition(player.pkX, player.pkY);
    this.readyIcon.setVisible(false);
};
//TODO:?幸运值等级
JinHuaTablePlayerEntity.prototype.createPlayerLuckyTips= function(){
    var Clover= this.player.Clover;
    if(Clover== null && Clover==  1){
        var sizeBg= this.mPlayerSprite.getContentSize();
        this.luckyTip= cc.Sprite.create("#dianjizhe.png");
        this.luckyTip.setPosition(sizeBg.width / 5 * 4,sizeBg.height / 5 * 4);
        this.mPlayerSprite.addChild(this.luckyTip);
    }
};
//自己拥有的幸运点label
JinHuaTablePlayerEntity.prototype.createPlayerLabelLucky= function(){
    var GameData= Profile_JinHuaGameData.getGameData();
    //玩家的幸运点
    this.luckyValue= parseInt(GameData["luckyPoint"]);
    //比赛时，不显示幸运点
    var matchInstanceId= GameData["matchInstanceId"];
    if(matchInstanceId!= null &&matchInstanceId!= undefined) return;

    if(this.isMe()&&this.luckyValue> 0){
        var sizeBg = this.mPlayerSprite.getContentSize();

        //金币条背景
        this.luckyBg = cc.Sprite.create("#ui_paizhuo_gerenxiazhudi.png");
        this.luckyBg.setPosition(sizeBg.width + 135,sizeBg.height/2);
        var coinBgSize = this.luckyBg.getContentSize();
        //金币图标
        this.LuckyIcon = cc.Sprite.create("#luckyicon.png");
        this.LuckyIcon.setPosition(coinBgSize.width / 10,coinBgSize.height / 2);
        this.luckyBg.addChild(this.LuckyIcon);

        //金币数
        this.luckyLable = cc.LabelTTF.create(this.luckyValue , "Arial", 24);
        this.luckyLable.setAnchorPoint(cc.p(0,0.5));
        this.luckyLable.setColor(cc.color(255, 255, 255));
        this.luckyLable.setPosition(coinBgSize.width / 10 + 15,coinBgSize.height / 2);
        this.luckyBg.addChild(this.luckyLable);

        this.mPlayerSprite.addChild(this.luckyBg);
    }
};
//设置已压金币数
JinHuaTablePlayerEntity.prototype.setBetCoin= function(){
    this.betedCoinLabel.setBetCoin(parseInt(this.player.betCoins));
};
//显示准备Icon
JinHuaTablePlayerEntity.prototype.showReadyIcon= function(){
    this.readyIcon.setVisible(true);
};
JinHuaTablePlayerEntity.prototype.hideReadyIcon= function(){
    this.readyIcon.setVisible(false);
};
//遮盖头像
JinHuaTablePlayerEntity.prototype.setPlayerDarkCoverVisible= function(){
    this.playerDarkCover.setVisible(true);
};
//取消遮盖头像
JinHuaTablePlayerEntity.prototype.setPlayerDarkCoveredDone= function(){
    this.playerDarkCover.setVisible(false);
};
//生成三张牌并添加到层
JinHuaTablePlayerEntity.prototype.createCard= function(){
    if(this.player.status== STATUS_PLAYER_PLAYING){//玩牌中
        //创建头像左上角的牌的类型提示和三张牌,默认三张牌显示在牌桌中央位置
        this.createNotBeLookedCard();
    }else if(this.player.status== STATUS_PLAYER_LOOKCARD) {//看牌
        //创建头像左上角的牌的类型提示和三张牌,默认三张牌显示在牌桌中央位置
        this.createNotBeLookedCard();
        //Todo:看牌
        //Todo:设置牌被看了
        this.setCardsLooked();
    }
};
//创建头像左上角的牌的类型提示和三张牌,默认三张牌显示在牌桌中央位置
JinHuaTablePlayerEntity.prototype.createNotBeLookedCard= function(){
    //一定要有，不然会去直接操作元表， 修改的都是同一数据
    this.cardSprites = {};

    //发的牌 初始无论是谁，都放在屏幕中间位置
    for(var i= 0; i< 3; ++i){
        this.cardSprites[i]= new CardSprite();
        //获取纸牌精灵
        var cardSprite= this.cardSprites[i].getCardSprite();
        cardSprite.setAnchorPoint(cc.p(0.5, 0));
        if(!this.isMe()){
            var player= Profile_JinHuaTableConfig.getSpritePlayers()[this.player.CSID];
            cardSprite.setPosition(player.cards[i].locX, player.cards[i].locY);
        }else{
            cardSprite.setPosition(558 + 26 * i, 125);
        }
        cardSprite.setScale(Profile_JinHuaTableConfig.cardScale);
    }
    var cardTypePosX, cardTypePosY;
    if(this.isMe()){//Todo:使用CSID== 0代替
        cardTypePosX = 740;
        cardTypePosY = 110;
        //自己的牌的话有角度和大小特殊显示
        JinHuaTableCard.setMyCardScaleAndRotation(this.cardSprites[0], this.cardSprites[1], this.cardSprites[2]);
    }else{
        var player= Profile_JinHuaTableConfig.getSpritePlayers()[this.player.CSID];
        if(player.CSID< 3){//屏幕右边
            cardTypePosX = player.cards[1].locX+this.cardSprites[0].getCardSprite().getContentSize().width/4;
        }else{
            cardTypePosX = player.cards[1].locX-this.cardSprites[0].getCardSprite().getContentSize().width/4;
        }
        cardTypePosY = player.cards[1].locY- 10* Profile_JinHuaTableConfig.TableScaleY;
    }
    //牌型背景
    //设置纸牌终点的位置的原因是(发牌动画)
    this.cardTypeSprite = cc.Sprite.create("#bg_desk_paixing.png");
    this.cardTypeSprite.setAnchorPoint(cc.p(0.5, 0.5));
    this.cardTypeSprite.setPosition(cardTypePosX, cardTypePosY);
    this.cardTypeSprite.setVisible(false);
    //牌型(头像旁边)
    this.cardTypeLabel = cc.LabelTTF.create("散牌", "Arial", 24);
    this.cardTypeLabel.setColor(cc.color(255, 255, 255));
    this.cardTypeLabel.setAnchorPoint(cc.p(0.5, 0.5));
    this.cardTypeLabel.setPosition(this.cardTypeSprite.getContentSize().width/2, this.cardTypeSprite.getContentSize().height/2);
    this.cardTypeSprite.addChild(this.cardTypeLabel);
    //将手牌显示出来(将纸牌添加到视图中)
    for(var key in this.cardSprites){
        if(this.cardSprites[key]== null||this.cardSprites[key]== undefined) continue;
        JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(this.cardSprites[key].getCardSprite());
    }
    //将牌型，添加到JinHuaTablePlayerLayer，但是先不显示
    this.cardTypeSprite.setZOrder(9);
    JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(this.cardTypeSprite);
};
//设置牌被看了
JinHuaTablePlayerEntity.prototype.setCardsLooked= function(){

};
//显示禁比动画
JinHuaTablePlayerEntity.prototype.showJinbiAnim= function(){
    if(!this.player.noPK) return;
    this.jinbiSprite.setVisible(true);
    this.jinbiSprite.runAction(cc.scaleTo(0.25, 0.5));
};
//金币变更 设置金币
JinHuaTablePlayerEntity.prototype.setCoin= function(){
    //更新玩家的金币数、已下注金币数
    this.changeCoinNumOnView(this.player.remainCoins)
};

//获取头像框的中心点X坐标
JinHuaTablePlayerEntity.prototype.getCenterX= function(){
    if(this.mPlayerSprite== undefined||this.mPlayerSprite== null) return 0;
    return this.mPlayerSprite.getPositionX()+ this.mPlayerSprite.getContentSize().width* 0.5;
};

//获取头像框的中心点Y坐标
JinHuaTablePlayerEntity.prototype.getCenterY= function(){
    if(this.mPlayerSprite== undefined||this.mPlayerSprite== null) return 0;
    return this.mPlayerSprite.getPositionY()+ this.mPlayerSprite.getContentSize().height* 0.5;
};

//获取头像框的中心点坐标
JinHuaTablePlayerEntity.prototype.getCenterPos= function(){
    if(this.mPlayerSprite== undefined||this.mPlayerSprite== null) return cc.p(0,0);
    return cc.p(this.mPlayerSprite.getPositionX()+ this.mPlayerSprite.getContentSize().width* 0.5,this.mPlayerSprite.getPositionY()+ this.mPlayerSprite.getContentSize().height* 0.5);;
};

//获取玩家当前显示的金币数
JinHuaTablePlayerEntity.prototype.getCurrentShowingCoinNum= function(){
    return parseInt(this.labelCoin.getString());
};

//金花PK动画
var JinHuaPKAnim= {
    mLeftSprite:null,
    mRightSprite:null,
    pkData:null,//PK数据
    PKLayer:null,
    bgSprite:null,//大背景，小背景，vs字，左边头像，右边头像，左边昵称，右边昵称，左边胜利ICON，右边胜利ICON
    bg1Sprite:null,
    vsTextSprite:null,
    photoLeft:null,
    photoRight:null,
    nameLeft:null,
    nameRight:null,
    iconLeftWin:null,
    iconRightWin:null,
    iconLeftLoss:null,
    iconRightLoss:null,
    lightingSprite:null,
    //左边头像X坐标，右边X坐标，头像Y坐标，名字Y坐标, 胜利ICON的Y坐标
    photoLeftX:null,
    photoRightX:null,
    photoY:null,
    nameY:null,
    iconY:null,
    //左右各三张牌
    cardLeft1:null,
    cardLeft2:null,
    cardLeft3:null,
    cardRight1:null,
    cardRight2:null,
    cardRight3:null,
    //左边位置上人的客户端座位号，右边位置上人的客户端座位号
    leftCSID:null,
    rightCSID:null,
    //撒星动画
    armature:null,
    init:function(){
        JinHuaPKAnim.bgSprite = cc.Sprite.create(Common.getResourcePath("hei_2.png"));
        JinHuaPKAnim.bgSprite.setPosition(GameConfig.ScreenWidth * Profile_JinHuaTableConfig.TableScaleX / 2 ,GameConfig.ScreenHeight * Profile_JinHuaTableConfig.TableScaleY / 2);
        JinHuaPKAnim.photoLeftX = GameConfig.ScreenWidth * Profile_JinHuaTableConfig.TableScaleX / 8;
        JinHuaPKAnim.photoRightX = GameConfig.ScreenWidth * Profile_JinHuaTableConfig.TableScaleX * 0.875;

        var bgSize = JinHuaPKAnim.bgSprite.getContentSize();
        JinHuaPKAnim.vsTextSprite = cc.Sprite.create("#desk_pk_text.png");
        JinHuaPKAnim.vsTextSprite.setPosition(GameConfig.ScreenWidth * Profile_JinHuaTableConfig.TableScaleX / 2,GameConfig.ScreenHeight * Profile_JinHuaTableConfig.TableScaleY / 2);

        JinHuaPKAnim.photoLeft = cc.Sprite.create(Common.getResourcePath("desk_playerhead.png"));
        JinHuaPKAnim.photoRight = cc.Sprite.create(Common.getResourcePath("desk_playerhead.png"));

        JinHuaPKAnim.photoY = GameConfig.ScreenHeight * Profile_JinHuaTableConfig.TableScaleY / 2;
        JinHuaPKAnim.photoLeft.setPosition(JinHuaPKAnim.photoLeftX,JinHuaPKAnim.photoY);
        JinHuaPKAnim.photoRight.setPosition(JinHuaPKAnim.photoRightX,JinHuaPKAnim.photoY);

        JinHuaPKAnim.nameLeft = cc.LabelTTF.create("playerLeft", "Arial", 24);
        JinHuaPKAnim.nameRight = cc.LabelTTF.create("playerRight", "Arial", 24);
        JinHuaPKAnim.nameY = JinHuaPKAnim.photoLeft.getPositionY()+JinHuaPKAnim.photoLeft.getContentSize().height/2+5 * Profile_JinHuaTableConfig.TableScaleY+JinHuaPKAnim.nameLeft.getContentSize().height/2;
        JinHuaPKAnim.nameLeft.setPosition(JinHuaPKAnim.photoLeftX,JinHuaPKAnim.nameY);
        JinHuaPKAnim.nameRight.setPosition(JinHuaPKAnim.photoRightX,JinHuaPKAnim.nameY);

        JinHuaPKAnim.iconLeftWin = cc.Sprite.create("#desk_icon_win_big.png");
        JinHuaPKAnim.iconRightWin = cc.Sprite.create("#desk_icon_win_big.png");
        JinHuaPKAnim.iconLeftLoss = cc.Sprite.create("#desk_icon_failed_big.png");
        JinHuaPKAnim.iconRightLoss = cc.Sprite.create("#desk_icon_failed_big.png");
        JinHuaPKAnim.iconY = JinHuaPKAnim.photoLeft.getPositionY() - JinHuaPKAnim.photoLeft.getContentSize().height / 2 - 2 * JinHuaPKAnim.iconLeftWin.getContentSize().height / 2;
        JinHuaPKAnim.iconLeftWin.setPosition(JinHuaPKAnim.photoLeftX, JinHuaPKAnim.iconY);
        JinHuaPKAnim.iconLeftLoss.setPosition(JinHuaPKAnim.photoLeftX, JinHuaPKAnim.iconY);
        JinHuaPKAnim.iconRightWin.setPosition(JinHuaPKAnim.photoRightX,JinHuaPKAnim.iconY);
        JinHuaPKAnim.iconRightLoss.setPosition(JinHuaPKAnim.photoRightX,JinHuaPKAnim.iconY);

//        var frameWidth = 700;
//        var frameHeight = 215;
//        var lightFrameTexture = cc.textureCache.addImage(Common.getResourcePath("desk_result_lighting_frame_1.png"));
//        var rect = cc.rect(0,0,frameWidth,frameHeight);
//        var frame1 = cc.SpriteFrame.createWithTexture(lightFrameTexture,rect);

        JinHuaPKAnim.lightingSprite = cc.Sprite.create(Common.getResourcePath("desk_result_lighting_frame_1.png"));
        JinHuaPKAnim.lightingSprite.setScaleX(GameConfig.ScreenWidth * Profile_JinHuaTableConfig.TableScaleX / JinHuaPKAnim.lightingSprite.getContentSize().width);
        JinHuaPKAnim.lightingSprite.setPosition(GameConfig.ScreenWidth * Profile_JinHuaTableConfig.TableScaleX / 2, JinHuaPKAnim.photoY);
        JinHuaPKAnim.lightingSprite.setVisible(false);

        //左右各三张牌
        JinHuaPKAnim.cardLeft1 = cc.Sprite.create("#desk_pokerback.png");
        var size = JinHuaPKAnim.cardLeft1.getContentSize();
        var cardY = GameConfig.ScreenHeight * Profile_JinHuaTableConfig.TableScaleY / 2;
        JinHuaPKAnim.cardLeft1.setPosition(JinHuaPKAnim.photoLeftX + JinHuaPKAnim.photoLeft.getContentSize().width + 10 * Profile_JinHuaTableConfig.TableScaleX,cardY);
        JinHuaPKAnim.cardLeft2 = cc.Sprite.create("#desk_pokerback.png");
        JinHuaPKAnim.cardLeft2.setPosition(JinHuaPKAnim.cardLeft1.getPositionX()+size.width+5*Profile_JinHuaTableConfig.TableScaleX,cardY);
        JinHuaPKAnim.cardLeft3 = cc.Sprite.create("#desk_pokerback.png");
        JinHuaPKAnim.cardLeft3.setPosition(JinHuaPKAnim.cardLeft2.getPositionX()+size.width+5*Profile_JinHuaTableConfig.TableScaleX,cardY);
        JinHuaPKAnim.cardRight1 = cc.Sprite.create("#desk_pokerback.png");
        
        JinHuaPKAnim.cardRight1.setPosition(JinHuaPKAnim.photoRightX + bgSize.width/2 - JinHuaPKAnim.photoRight.getContentSize().width -10*Profile_JinHuaTableConfig.TableScaleX,cardY);
        JinHuaPKAnim.cardRight2 = cc.Sprite.create("#desk_pokerback.png");
        JinHuaPKAnim.cardRight2.setPosition(JinHuaPKAnim.cardRight1.getPositionX()-size.width-5*Profile_JinHuaTableConfig.TableScaleX,cardY);
        JinHuaPKAnim.cardRight3 = cc.Sprite.create("#desk_pokerback.png");
        JinHuaPKAnim.cardRight3.setPosition(JinHuaPKAnim.cardRight2.getPositionX()-size.width-5*Profile_JinHuaTableConfig.TableScaleX,cardY);
        JinHuaPKAnim.cardLeft1.setVisible(false);
        JinHuaPKAnim.cardLeft2.setVisible(false);
        JinHuaPKAnim.cardLeft3.setVisible(false);
        JinHuaPKAnim.cardRight1.setVisible(false);
        JinHuaPKAnim.cardRight2.setVisible(false);
        JinHuaPKAnim.cardRight3.setVisible(false);

        JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.bgSprite);
        JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.lightingSprite);

        JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.vsTextSprite);
        JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.photoLeft);
        JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.photoRight);
        JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.nameLeft);
        JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.nameRight);
        JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.iconLeftWin);
        JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.iconLeftLoss);
        JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.iconRightWin);
        JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.iconRightLoss);

        JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.cardLeft1);
        JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.cardLeft2);
        JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.cardLeft3);
        JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.cardRight1);
        JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.cardRight2);
        JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.cardRight3);

        Common.createArmature(Common.getResourcePath("Animation/bipaiwin.ExportJson"), "bipaiwin", function(armature){
            JinHuaPKAnim.armature = armature;
            JinHuaPKAnim.armature.setVisible(false);
            JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.armature);
            JinHuaPKAnim.PKLayer.setVisible(false);
        });
    },
    resetPos:function(){
        JinHuaPKAnim.PKLayer.removeChild(JinHuaPKAnim.photoLeft,true);
        JinHuaPKAnim.PKLayer.removeChild(JinHuaPKAnim.photoRight,true);
        JinHuaPKAnim.bgSprite.setScaleX(GameConfig.ScreenWidth * Profile_JinHuaTableConfig.TableScaleX / JinHuaPKAnim.bgSprite.getContentSize().width);
        JinHuaPKAnim.bgSprite.setScaleY(GameConfig.ScreenHeight * Profile_JinHuaTableConfig.TableScaleY / JinHuaPKAnim.bgSprite.getContentSize().height);
        JinHuaPKAnim.bgSprite.setVisible(true);
        JinHuaPKAnim.vsTextSprite.setScale(0);
        JinHuaPKAnim.nameLeft.setVisible(false);
        JinHuaPKAnim.nameRight.setVisible(false);
        JinHuaPKAnim.iconLeftWin.setVisible(false);
        JinHuaPKAnim.iconLeftLoss.setVisible(false);
        JinHuaPKAnim.iconRightWin.setVisible(false);
        JinHuaPKAnim.iconRightLoss.setVisible(false);
        JinHuaPKAnim.lightingSprite.setVisible(false);
        JinHuaPKAnim.cardLeft1.setVisible(false);
        JinHuaPKAnim.cardLeft2.setVisible(false);
        JinHuaPKAnim.cardLeft3.setVisible(false);
        JinHuaPKAnim.cardRight1.setVisible(false);
        JinHuaPKAnim.cardRight2.setVisible(false);
        JinHuaPKAnim.cardRight3.setVisible(false);
        JinHuaPKAnim.vsTextSprite.setVisible(false);
        JinHuaPKAnim.PKLayer.setVisible(true);
    },
    photoLeftMoveEnd:function(){
        JinHuaPKAnim.nameLeft.setVisible(true);
    },
    //PK结束
    pkOver:function(){
        JinHuaPKAnim.armature.setVisible(false);
        JinHuaPKAnim.PKLayer.setVisible(false);
        JinHuaTablePlayer.addPlayerStateIcon(JinHuaTablePlayer.TYPE_ICON_WIN, JinHuaPKAnim.pkData.winCSID);
        JinHuaTablePlayer.addPlayerStateIcon(JinHuaTablePlayer.TYPE_ICON_FAILED, JinHuaPKAnim.pkData.lossCSID);

        var GameData= Profile_JinHuaGameData.getGameData();
        if(JinHuaPKAnim.pkData.lossCSID== Profile_JinHuaGameData.getUserCSID(GameData.mySSID)){//玩家本身失败
            JinHuaTableLogic.showBotButton(STATUS_BUTTON_WAIT);
        }

        //刷新下一个玩家
        JinHuaTablePlayer.refreshCurrentPlayer(JinHuaPKAnim.pkData.nextPlayer);
    },
    startWinIconScale:function(){
        JinHuaPKAnim.lightingSprite.setVisible(false);
        if(JinHuaPKAnim.leftCSID== JinHuaPKAnim.pkData.winCSID){
            JinHuaPKAnim.armature.setPosition(cc.p(JinHuaPKAnim.photoLeftX,JinHuaPKAnim.photoY));
            JinHuaPKAnim.iconLeftWin.setScale(0);
            JinHuaPKAnim.iconLeftWin.setVisible(true);
            JinHuaPKAnim.iconLeftWin.runAction(cc.scaleTo(0.3,1.0));
            JinHuaPKAnim.iconRightLoss.setScale(0);
            JinHuaPKAnim.iconRightLoss.setVisible(true);
            JinHuaPKAnim.iconRightLoss.runAction(cc.scaleTo(0.3,1.0));
        }else{
            JinHuaPKAnim.armature.setPosition(cc.p(JinHuaPKAnim.photoRightX,JinHuaPKAnim.photoY));
            JinHuaPKAnim.iconLeftLoss.setScale(0);
            JinHuaPKAnim.iconLeftLoss.setVisible(true);
            JinHuaPKAnim.iconLeftLoss.runAction(cc.scaleTo(0.3,1.0));
            JinHuaPKAnim.iconRightWin.setScale(0);
            JinHuaPKAnim.iconRightWin.setVisible(true);
            JinHuaPKAnim.iconRightWin.runAction(cc.scaleTo(0.3,1.0));
        }
        //撒花动画
        JinHuaPKAnim.armature.setVisible(true);
        JinHuaPKAnim.armature.getAnimation().playByIndex(0);
        JinHuaPKAnim.PKLayer.runAction(cc.sequence(cc.delayTime(2.0),cc.callFunc(JinHuaPKAnim.pkOver)));
    },
    //闪电
    startLighting:function(){
        var animation=new cc.Animation();
        //遍历将图片添加到动画中[图片名：dance_1.png、dance_2.png…]
        for(var i=1;i<= 3;++i){
            var frameName = "desk_result_lighting_frame_" + i + ".png";
            animation.addSpriteFrameWithFile(Common.getResourcePath(frameName));
        }
        // And display 60 frames per second
        animation.setDelayPerUnit(0.05);
        animation.setRestoreOriginalFrame(true);
        //动画动作
        var animate = cc.animate(animation);
        var lightingAnim = cc.Repeat.create(animate,12);
        JinHuaPKAnim.lightingSprite.setVisible(true);
        JinHuaPKAnim.lightingSprite.runAction(cc.sequence(lightingAnim,cc.callFunc(JinHuaPKAnim.startWinIconScale)));
    },
    //
    photoRightMoveEnd:function(){
        JinHuaPKAnim.nameRight.setVisible(true);
        //背景放大
        //显示牌
        JinHuaPKAnim.cardLeft1.setVisible(true);
        JinHuaPKAnim.cardLeft2.setVisible(true);
        JinHuaPKAnim.cardLeft3.setVisible(true);
        JinHuaPKAnim.cardRight1.setVisible(true);
        JinHuaPKAnim.cardRight2.setVisible(true);
        JinHuaPKAnim.cardRight3.setVisible(true);
        JinHuaPKAnim.vsTextSprite.setVisible(true);
        //vs放大
        var array = [];
        array.push(cc.delayTime(0.3));
        array.push(cc.scaleTo(0.3,1.0));
        array.push(cc.callFunc(JinHuaPKAnim.startLighting));
        JinHuaPKAnim.vsTextSprite.runAction(cc.sequence(array));
    },
    //开始飞头像动画
    startFlyPhotoAnim:function(sender){
        JinHuaPKAnim.PKLayer.removeChild(sender, true);
        if(JinHuaPKAnim.mLeftSprite.player.sex == Profile_JinHuaGameData.MALE){
            JinHuaPKAnim.photoLeft = cc.Sprite.createWithTexture(Common.getResourcePath("desk_playerhead.png"));
        }else{
            JinHuaPKAnim.photoLeft = cc.Sprite.createWithTexture(Common.getResourcePath("desk_playerhead.png"));
        }
        JinHuaPKAnim.photoLeft.setPosition(JinHuaPKAnim.mLeftSprite.getCenterX(),JinHuaPKAnim.mLeftSprite.getCenterY());
        if(JinHuaPKAnim.mRightSprite.sex == Profile_JinHuaGameData.MALE){
            JinHuaPKAnim.photoRight = cc.Sprite.createWithTexture(Common.getResourcePath("desk_playerhead.png"));
        }else{
            JinHuaPKAnim.photoRight = cc.Sprite.createWithTexture(Common.getResourcePath("desk_playerhead.png"));
        }
        JinHuaPKAnim.photoRight.setPosition(JinHuaPKAnim.mRightSprite.getCenterX(),JinHuaPKAnim.mRightSprite.getCenterY());
        //设置头像图片
        if(JinHuaPKAnim.mLeftSprite.player.photoUrl){
            JinHuaPKAnim.photoLeft.setTexture(JinHuaPKAnim.mLeftSprite.player.photoUrl);
        }
        if(JinHuaPKAnim.mRightSprite.player.photoUrl){
            JinHuaPKAnim.photoRight.setTexture(JinHuaPKAnim.mRightSprite.player.photoUrl)
        }
        JinHuaPKAnim.nameLeft.setString(JinHuaPKAnim.mLeftSprite.player.nickName);
        JinHuaPKAnim.nameRight.setString(JinHuaPKAnim.mRightSprite.player.nickName);
        JinHuaPKAnim.leftCSID = JinHuaPKAnim.mLeftSprite.player.CSID;
        JinHuaPKAnim.rightCSID = JinHuaPKAnim.mRightSprite.player.CSID;
        JinHuaPKAnim.photoLeft.runAction(cc.sequence(cc.moveTo(0.3,cc.p(JinHuaPKAnim.photoLeftX,JinHuaPKAnim.photoY)),cc.callFunc(JinHuaPKAnim.photoLeftMoveEnd)));
        JinHuaPKAnim.photoRight.runAction(cc.sequence(cc.moveTo(0.3,cc.p(JinHuaPKAnim.photoRightX,JinHuaPKAnim.photoY)),cc.callFunc(JinHuaPKAnim.photoRightMoveEnd)));
        JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.photoLeft);
        JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.photoRight);
        //amarture放上面
        JinHuaPKAnim.armature.retain();
        JinHuaPKAnim.PKLayer.removeChild(JinHuaPKAnim.armature,false);
        JinHuaPKAnim.PKLayer.addChild(JinHuaPKAnim.armature);
        JinHuaPKAnim.armature.release();
        //闪电动画放上面
        JinHuaPKAnim.lightingSprite.retain();
        JinHuaPKAnim.lightingSprite.release();
    },
    startAimAnim:function(){
        var players = JinHuaTablePlayer.getPlayers();

        var aimSprite = cc.Sprite.create("#table_pk_collimation.png");
        if(players[this.pkData.launchCSID].player.userId != profile_user.getSelfUserID()){
            aimSprite.setPosition(Profile_JinHuaTableConfig.spritePlayers[this.pkData.launchCSID].locX, Profile_JinHuaTableConfig.spritePlayers[this.pkData.launchCSID].locY + this.mLeftSprite.mPlayerSprite.getContentSize().height)
        }else{
            aimSprite.setPosition(Profile_JinHuaTableConfig.mySelfLocX + 90, Profile_JinHuaTableConfig.mySelfLocY + 90)
        }

        var array = [];
        if(players[this.pkData.aimCSID].player.userId != profile_user.getSelfUserID()){
            array.push(cc.MoveTo.create(0.5, cc.p(Profile_JinHuaTableConfig.spritePlayers[this.pkData.aimCSID].locX + this.mRightSprite.mPlayerSprite.getContentSize().width / 2, Profile_JinHuaTableConfig.spritePlayers[this.pkData.aimCSID].locY + this.mRightSprite.mPlayerSprite.getContentSize().height / 2)))
        }else{
            array.push(cc.MoveTo.create(0.5, cc.p(Profile_JinHuaTableConfig.mySelfLocX + 90, Profile_JinHuaTableConfig.mySelfLocY + 90)))
        }
        array.push(cc.scaleTo(0.5,1.5));
        array.push(cc.scaleTo(0.5,1));
        array.push(cc.callFunc(this.startFlyPhotoAnim));
        array.push(cc.delayTime(0.5));
        aimSprite.runAction(cc.sequence(array));
        this.PKLayer.addChild(aimSprite)
    },
    startPK:function(PKData){
        //获取牌桌上的数据
        var players = JinHuaTablePlayer.getPlayers();
        //人已经走了
        if(!players[PKData.lossCSID]
            ||!players[PKData.winCSID]
            ||!players[PKData.lossCSID].mPlayerSprite
            ||!players[PKData.winCSID].mPlayerSprite){
            return;
        }
        //修改玩家的状态
        players[PKData.lossCSID].player.status = STATUS_PLAYER_PK_FAILURE;
        if(PKData.winCSID< PKData.lossCSID){
            JinHuaPKAnim.showJinHuaPKAnim(players[PKData.winCSID],players[PKData.lossCSID],PKData);
        }else{
            JinHuaPKAnim.showJinHuaPKAnim(players[PKData.lossCSID],players[PKData.winCSID],PKData);
        }

        if(players[PKData.launchCSID]){
            players[PKData.launchCSID].setCoin();
        }
    },
    //开始PK动画(左边playerSprite,右边playerSprite,PK信息)
    showJinHuaPKAnim:function(leftSprite,rightSprite,data){
        JinHuaPKAnim.mLeftSprite = leftSprite;
        JinHuaPKAnim.mRightSprite = rightSprite;
        JinHuaPKAnim.resetPos();
        JinHuaPKAnim.pkData = data;
        JinHuaPKAnim.startAimAnim()
    },
    //PK结束
    scatterFlowerOver:function(){
        JinHuaPKAnim.armature.setVisible(false);
        JinHuaPKAnim.PKLayer.setVisible(false);
    },
    //开始获胜动画：撒花
    startScatterFlower:function(position){
        this.resetPos();
        this.bgSprite.setVisible(false);
        this.armature.setPosition(position);
        //撒花动画
        this.armature.setVisible(true);
        this.armature.getAnimation().playByIndex(0);
        this.PKLayer.runAction(cc.sequence(cc.delayTime(2.0),cc.callFunc(this.scatterFlowerOver)));
        var players = JinHuaTablePlayer.getPlayers();
        if(this.pkData != null && players[this.pkData.lossCSID] && players[this.pkData.lossCSID].isMe()){
            JinHuaTableLogic.showQuickChatButton(STATUS_QUICK_CHAT_LOSE);
        }
    },
    //是否在显示中
    isPKLayerShowing:function(){
        return this.PKLayer.isVisible();
    },
    //
    createPKLayer:function(){
        if(this.PKLayer == null){
            this.PKLayer= cc.Layer.create();
            this.PKLayer.setZOrder(6);
        }
        this.init();
        return this.PKLayer;
    },
    clear:function(){
        if(this.PKLayer != null){
            this.PKLayer.removeFromParent(true);
            this.PKLayer= null;
        }
    },
    getJinHuaPkLayer:function(){
        if(this.PKLayer== null){
            this.init();
        }
        return this.PKLayer;
    }
};

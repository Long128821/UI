var JinHuaTableChat= {
    //显示聊天气泡
    showChatText:function(CSID, msg){
        var  players = JinHuaTablePlayer.getPlayers();
        //此玩家不存在
        if(!Common.judgeValueIsEffect(players[CSID])) return;

        var parentAnchorPoint;
        var locX,locY;
        var arrowsDir;
        if(CSID>= 3){//右边的两位
            parentAnchorPoint = cc.p(1,0.5);
            locX = Profile_JinHuaTableConfig.spritePlayers[CSID].locX;
            locY = Profile_JinHuaTableConfig.spritePlayers[CSID].locY + Profile_JinHuaTableConfig.playerBGHeight/2;
            arrowsDir = 2;//右边
        }else{
            parentAnchorPoint = cc.p(0,0.5);
            locX = Profile_JinHuaTableConfig.spritePlayers[CSID].locX+ Profile_JinHuaTableConfig.playerBGWidth;
            locY = Profile_JinHuaTableConfig.spritePlayers[CSID].locY + Profile_JinHuaTableConfig.playerBGHeight/2;
            arrowsDir = 1;//左边
        }
        //消息
        var labelText= cc.LabelTTF.create(msg, "Arial", 25, cc.size(GameConfig.ScreenWidth / 8 * Profile_JinHuaTableConfig.TableScaleX,0));

        var parent= cc.Scale9Sprite.createWithSpriteFrameName("table_bubble_bg.png");
        var size = cc.size(labelText.getContentSize().width+20 * Profile_JinHuaTableConfig.TableScaleX,labelText.getContentSize().height+20 * Profile_JinHuaTableConfig.TableScaleY)
        //更新点九图的大小尺寸
        parent.setPreferredSize(size);
        parent.setAnchorPoint(parentAnchorPoint);
        parent.setPosition(locX, locY);
        JinHuaTableTips.getTableTipsLayer().addChild(parent);

        //将消息添加到点九图上
        labelText.setPosition(size.width* 0.5, size.height* 0.5);
        parent.addChild(labelText);
        //创建箭头
        this.createArrow(arrowsDir, size, parent);

        //暂停4秒以后，移除
        parent.runAction(cc.sequence(cc.delayTime(4), cc.removeSelf(true)));
    },
    //创建箭头
    createArrow:function(arrowsDir, size, parent){
        //消息箭头
        var arrow= null;
        switch (arrowsDir){
            case 1:
                arrow= cc.Sprite.create("#table_bubble_arrows_left.png");
                arrow.setAnchorPoint(cc.p(1, 0.5));
                arrow.setPosition(3, size.height* 0.5);
                break;
            case 2:
                arrow= cc.Sprite.create("#table_bubble_arrows_right.png");
                arrow.setAnchorPoint(cc.p(0, 0.5));
                arrow.setPosition(size.width-3,size.height* 0.5);
                break;
        }
        parent.addChild(arrow);
    },
    //播放普通表情
    playChatCommonEmotion:function(CSID, emotionIndex){
        var players= JinHuaTablePlayer.getPlayers();
        if(!Common.judgeValueIsEffect(players[CSID])) return;
        //然后创建armature类，并将进行初始化
        Common.createArmature(
            "res/Animation/putongbiaoqing.ExportJson",//动画Json路径
            "putongbiaoqing",//要执行的动画名
            function(armature){
                armature.getAnimation().playWithIndex(emotionIndex - 1);
                if(players[CSID] && players[CSID].isMe()){
                    armature.setPosition(players[CSID].getCenterPos());
                }else{
                    var commonEmotionPosX = 0;
                    if(CSID>= 3){
                        commonEmotionPosX = players[CSID].mPlayerSprite.getPositionX() - armature.getContentSize().width/2;
                    }else{
                        commonEmotionPosX = players[CSID].mPlayerSprite.getPositionX() + players[CSID].mPlayerSprite.getContentSize().width + armature.getContentSize().width/2;
                    }
                    armature.setPosition(cc.p(commonEmotionPosX, players[CSID].getCenterPos().y));
                }
                //暂停4秒以后，移除
                armature.runAction(cc.sequence(cc.delayTime(5), cc.removeSelf(true)));

                JinHuaTableTips.getTableTipsLayer().addChild(armature);
            });
    }
};

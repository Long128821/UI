var JinHuaTablePlayer= {
    //玩家状态Icon类型
    TYPE_ICON_FOLD : 1,
    TYPE_ICON_CHECK : 2,
    TYPE_ICON_FAILED : 3,
    TYPE_ICON_WIN : 4,
    //玩家Layer
    JinHuaTablePlayerLayer:null,
    //桌上玩家状态icon
    iconArray:{},
    //实体玩家
    tablePlayerEntitys:{},
    //庄家
    dealer:null,
    //主视角倒计时框
    myTimer:null,
    myTimer2:null,
    //其他玩家押注倒计时框
    otherTimer:null,
    otherTimer2:null,
    // 看牌计时器
    lookCardTimer:null,
    //请求个人信息UserId
    reqUserId:null,
    //是否是点中了玩家头像
    isHeadTouchBegin:false,
    //当前出牌用户座位号
    currentCSID:-10,
    // 看牌前换牌
    changeCardWhenNotSee:false,
    //牌桌上的金币列表
    iconTable:{},
    //存放牌桌上展示的牌
    CardBatchNode:null,
    clearData:function(){
        this.JinHuaTablePlayerLayer= null;
        //Todo:关闭定时器
        this.otherTimer= null;
        this.iconArray= {};
        this.tablePlayerEntitys= {};
        this.dealer= null;
        this.myTimer= null;
        this.myTimer2= null;
        this.otherTimer= null;
        this.otherTimer2= null;
        this.lookCardTimer= null;
        this.reqUserId= null;
        this.isHeadTouchBegin= false;
        this.currentCSID= -10;
        this.changeCardWhenNotSee= false;
        this.iconTable= {};
        this.CardBatchNode= null;
    },
    //设置玩家状态icon
    addPlayerStateIcon:function(iconType, pos){
        var iconPath= "";
        switch (iconType){
            case this.TYPE_ICON_CHECK:
                path = "desk_icon_check.png";
                break;
            case this.TYPE_ICON_FAILED:
                path = "desk_icon_failed.png";
                break;
            case this.TYPE_ICON_FOLD:
                iconPath= "desk_icon_fold.png";
                break;
            case this.TYPE_ICON_WIN:
                path = "desk_icon_win.png";
                break;
        }

        if(this.iconTable[pos]!= null){
            this.JinHuaTablePlayerLayer.removeChild(this.iconTable[pos], true);
        }

        var iconSprite= cc.Sprite.createWithSpriteFrameName(path);
        this.iconTable[pos]= iconSprite;
//        if(this.tablePlayerEntitys[pos]!= null&&  parseInt(this.tablePlayerEntitys[pos].userId)!= profile_user.getSelfUserID()){
//            iconSprite.setSprite(Profile_JinHuaTableConfig.spri);
//        }
    },
    //牌桌玩家
    create:function(){
        if(this.JinHuaTablePlayerLayer== null){
            this.JinHuaTablePlayerLayer= cc.Layer.create();
            this.JinHuaTablePlayerLayer.setZOrder(3);
        }

        if(this.CardBatchNode== null){
            this.CardBatchNode= cc.SpriteBatchNode.create(Common.getResourcePath("poker_cards.png"));
            this.CardBatchNode.setZOrder(2);
            this.JinHuaTablePlayerLayer.addChild(this.CardBatchNode);
        }

        //初始化
        //如果我在牌桌上并且有牌，更新我的操作按钮
        //addTimerSprite();
        return this.JinHuaTablePlayerLayer;
    },
    //初始化用户信息显示界面
    initPlayerSprites:function(isShowAnim){
        var GameData= Profile_JinHuaGameData.getGameData();
        var tablePlayersData= Profile_JinHuaGameData.getPlayers();
        //隐藏UI工程的底部面板
        JinHuaTableLogic.setBotPanelVisible(false);

        //绘制人物
        this.tablePlayerEntitys = {};
        if(tablePlayersData== null) return;
        console.log(tablePlayersData);
        //是否为玩家自身
        var isMe= false;
        for(var i=0; i< Profile_JinHuaTableConfig.playerCnt; ++i){
            if(tablePlayersData.hasOwnProperty(i) && tablePlayersData[i]!= null){


                if(tablePlayersData.isMe== true){
                    isMe= true;
                }

            }
        }

        if(isMe== true && Profile_JinHuaGameData.get){

        }
    }
};
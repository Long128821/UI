//数据图标集
var ProfileJinHuaTable= {
    JinHuaTablePlayer:null,//金花实例化玩家
    //解析背包商品数量(禁比卡、换牌卡、高级表情)
    slot_DBID_BACKPACK_GOODS_COUNT:function(dataTable){
        Profile_JinHuaGameData.readDBID_BACKPACK_GOODS_COUNT(dataTable);
        JinHuaTableLogic.updateDBID_BACKPACK_GOODS_COUNT();//更新背包物品
    },
    //退出房间
    slot_JHID_QUIT_TABLE_V4:function(dataTable){
        Profile_JinHuaGameData.readJHID_QUIT_TABLE(dataTable);
    },
    //更新系统公告
    slot_JINHUA_MGR_NOTICE:function(dataTable){
        Profile_JinHuaNotice.readJINHUA_MGR_NOTICE(dataTable);
        //显示牌桌公告
        JinHuaTableLogic.showNotice();
    },
    //站起(超时站起、旁观)
    slot_JHID_STAND_UP_V4:function(dataTable){
        Profile_JinHuaGameData.readJHID_STAND_UP(dataTable);
        //更新<站起>操作
        JinHuaTableLogic.updateJHID_STAND_UP();
    },
    //坐下
    slot_JHID_SIT_DOWN:function(dataTable){
        Profile_JinHuaGameData.readJHID_SIT_DOWN(dataTable);
        JinHuaTableLogic.updateJHID_SIT_DOWN();
    },
    //准备(玩家进入牌桌时、别人准备时)
    slot_JHID_READY_V4:function(dataTable){
        Profile_JinHuaGameData.readJHID_READY(dataTable);
        //服务器收到准备消息,更新牌桌
        JinHuaTableLogic.updateJHID_READY();
    },
    //请求牌桌在线奖励
    slot_JHID_GET_BAOHE_STEP_INFO:function(dataTable){
        Profile_JinHuaOnlineReward.readJHID_GET_BAOHE_STEP_INFO(dataTable);
        //请求牌桌在线奖励,显示牌桌上的左上角的领取礼包
        JinHuaTableLogic.updateJHID_GET_BAOHE_STEP_INFO();
    },
    //领取在线时长奖励
    slot_JHID_GET_ONLINE_REWARD:function(dataTable){
        Profile_JinHuaOnlineReward.readJHID_GET_ONLINE_REWARD(dataTable);
        //领取在线时长奖励(领取成功与否)
        JinHuaTableLogic.updateJHID_GET_ONLINE_REWARD();
    },
    //加注(JHID_BET)
    slot_JHID_BET:function(dataTable){
        Profile_JinHuaGameData.readJHID_BET(dataTable);
        //金花下注应答
        JinHuaTableLogic.updateJHID_BET();
    },
    //聊天(初始化的快速聊天、)
    slot_JHID_CHAT:function(dataTable){
        Profile_JinHuaGameData.readJHID_CHAT(dataTable);
        //更新牌桌上的快速聊天信息
        JinHuaTableLogic.updateJHID_CHAT();
    },
    //获取金花游戏数据(vip等级界限)
    slot_JINHUA_MGR_SETTING:function(dataTable){
        Profile_JinHuaSetting.readJINHUA_MGR_SETTING(dataTable);
        //更新牌桌上的所有玩家的等级(目的是:登录成功之后,立即游戏,此时还没有vip等级界限)
        JinHuaTablePlayer.updateAllPlayersLevel();
    },
    //更新玩家数据
    slot_DBID_USER_INFO:function(dataTable){
        profile_user.readDBID_USER_INFO(dataTable);
    },
    //金花发牌
    slot_JHID_INIT_CARDS:function(dataTable){
        Profile_JinHuaGameData.readJHID_INIT_CARDS(dataTable);
        JinHuaTableLogic.updateJHID_INIT_CARDS();
    },
    //弃牌
    slot_JHID_DISCARD:function(dataTable){
        Profile_JinHuaGameData.readJHID_DISCARD(dataTable);
        JinHuaTableLogic.updateJHID_DISCARD();
    },
    //本局结算
    slot_JHID_GAME_RESULT:function(dataTable){
        Profile_JinHuaGameData.readJHID_GAME_RESULT(dataTable);
        JinHuaTableLogic.updateJHID_GAME_RESULT();
    },
    //比牌
    slot_JHID_PK:function(dataTable){
        Profile_JinHuaGameData.readJHID_PK(dataTable);
        JinHuaTableLogic.updateJHID_PK();
    },
    //看牌
    slot_JHID_LOOK_CARDS:function(dataTable){
        Profile_JinHuaGameData.readJHID_LOOK_CARDS(dataTable);
        JinHuaTableLogic.updateJHID_LOOK_CARDS();
    },
    //展示牌
    slot_JHID_SHOW_CARDS:function(dataTable){
        Profile_JinHuaGameData.readJHID_SHOW_CARDS(dataTable);
        JinHuaTableLogic.updateJHID_SHOW_CARDS();
    },
    //换桌
    slot_JHID_CHANGE_TABLE_V4:function(dataTable){
        Profile_JinHuaGameData.readJHID_CHANGE_TABLE(dataTable);
        JinHuaTableLogic.updateJHID_CHANGE_TABLE();
    },
    //禁比
    slot_JHID_NO_COMPARE_V4:function(dataTable){
        Profile_JinHuaGameData.readJHID_NO_COMPARE(dataTable);
        JinHuaTableLogic.updateJHID_NO_COMPARE();
    },
    //使用大喇叭
    slot_OPERID_MGR_SEND_BUGLE:function(dataTable){
        Profile_GameCommon.readOPERID_MGR_SEND_BUGLE(dataTable);
        JinHuaTableLogic.updateOPERID_MGR_SEND_BUGLE();
    },
    //接受大喇叭信息
    slot_OPERID_SEND_ALL_BUGLE:function(dataTable){
        Profile_GameCommon.readOPERID_SEND_ALL_BUGLE(dataTable);
        JinHuaTableLogic.updateOPERID_SEND_ALL_BUGLE();
    },
    //获取玩家本身数据
    slot_JINHUA_MGR_USER_INFO:function(dataTable){
        Profile_JinHuaOtherUserInfo.readJINHUA_MGR_USER_INFO(dataTable);
        MvcEngine.createModule(GUI_TABLEUSERINFO);
    },
    //牌桌飞礼物
    slot_JHID_FLY_GIFT:function(dataTable){
        Profile_JinHuaFlyGift.readJHID_FLY_GIFT(dataTable);
        JinHuaTableLogic.updateJHID_FLY_GIFT();
    }
};

//数据图标集
var ProfileJinHuaTable= {
    JinHuaTablePlayer:null,//金花实例化玩家
    //解析背包商品数量(禁比卡、换牌卡、高级表情)
    slot_DBID_BACKPACK_GOODS_COUNT:function(dataTable){
        Profile_JinHuaGameData.readDBID_BACKPACK_GOODS_COUNT(dataTable);
        //更新背包物品
        JinHuaTableLogic.updateDBID_BACKPACK_GOODS_COUNT();
    },
    //退出房间
    slot_JHID_QUIT_TABLE:function(dataTable){
        Profile_JinHuaGameData.readJHID_QUIT_TABLE(dataTable);
        //Todo:需要联调-没有下行
    },
    //更新系统公告
    slot_JINHUA_MGR_NOTICE:function(dataTable){
        Profile_JinHuaNotice.readJINHUA_MGR_NOTICE(dataTable);
        //显示牌桌公告
        JinHuaTableLogic.showNotice();
    },
    //站起(超时站起、旁观)
    slot_JHID_STAND_UP:function(dataTable){
        Profile_JinHuaGameData.readJHID_STAND_UP(dataTable);
        //更新<站起>操作
        JinHuaTableLogic.updateJHID_STAND_UP();
    },
    //坐下
    slot_JHID_SIT_DOWN:function(dataTable){
        console.log("坐下");
        console.log(dataTable);
        Profile_JinHuaGameData.readJHID_SIT_DOWN(dataTable);
        JinHuaTableLogic.updateJHID_SIT_DOWN();
    },
    //准备(玩家进入牌桌时、别人准备时)
    slot_JHID_READY:function(dataTable){
        Profile_JinHuaGameData.readJHID_READY(dataTable);
        //服务器收到准备消息,更新牌桌
        JinHuaTablePlayer.updateTableAfterPlayerReadyServerBack();
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
        console.log("加注");
        Profile_JinHuaGameData.readJHID_BET(dataTable);
        JinHuaTablePlayer.updateTableAfterBetCoinByServer();
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
        console.log("更新玩家数据");
        console.log(dataTable);
        profile_user.readDBID_USER_INFO(dataTable);
    }
};

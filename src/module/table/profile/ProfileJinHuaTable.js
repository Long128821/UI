//数据图标集
var ProfileJinHuaTable= {
    //剩余换牌道具个数
    //解析背包商品数量
    slot_DBID_BACKPACK_GOODS_COUNT:function(dataTable){
        Profile_JinHuaGameData.readDBID_BACKPACK_GOODS_COUNT(dataTable);
        JinHuaTableLogic.initBackpackGoods();
    },
    //退出房间
    slot_JHID_QUIT_TABLE:function(dataTable){
        Profile_JinHuaGameData.readJHID_QUIT_TABLE(dataTable);
        console.log("退出房间！");
        console.log(dataTable);
    },
    //更新系统公告
    slot_JINHUA_MGR_NOTICE:function(dataTable){
        //牌桌公告
        Profile_JinHuaNotice.readJINHUA_MGR_NOTICE(dataTable);
        JinHuaTableLogic.showNotice();
    },
    //站起
    slot_JHID_STAND_UP:function(dataTable){

    },
    //坐下
    slot_JHID_SIT_DOWN:function(dataTable){

    },
    //准备
    slot_JHID_READY:function(dataTable){
        //tODO:GameData中，读取数据
        //设置准备
        JinHuaTablePlayer.updateTableAfterPlayerReadyServerBack(dataTable);
    },
    //牌桌在线奖励
    slot_JHID_GET_BAOHE_STEP_INFO:function(dataTable){
        console.log("牌桌在线奖励");
        console.log(dataTable);
        //Todo:BaoheStepInfoTable = JinHuaLoadProfile.JinHuaOnlineReward.getBaoheStepInfoTable()
        JinHuaTableLogic.updateJHID_GET_BAOHE_STEP_INFO(dataTable);
    }
};

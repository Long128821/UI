//数据图标集
var ProfileHall= {
    //
    onlinePlayerNumber:0,//当前在线人数
    getUserInfo:function(dataTable){
        profile_user.setSelfNickName(dataTable.get("nickName"));
        profile_user.setSelfCoin(dataTable.get("Coin"));
        profile_user.setSelfLevel(dataTable.get("Level"));
        profile_user.setSelfSex(dataTable.get("Sex"));
        profile_user.setSelfCharm(dataTable.get("Charm"));
        profile_user.setSelfCharmLevel(dataTable.get("CharmLv"));
        profile_user.setSelfInnings(dataTable.get("Innings"));
        profile_user.setSelfWinPer(dataTable.get("winPer"));
        profile_user.setSelfLevelExpMax(dataTable.get("LevelExpMax"));
        profile_user.setSelfLevelExp(dataTable.get("LevelExp"));

        MvcEngine.createModule(GUI_OTHERUSERINFO);
    },
    //在线时长
    slotJINHUA_MGR_SETTING:function(dataTable){
        ProfileHall.onlinePlayerNumber= dataTable["onLineCnt"];
        HallLogic.setOnlinePlayerNumber();
    },
    //游戏公告
    slotJINHUA_MGR_NOTICE:function(dataTable){
        HallLogic.createSystemNoticeLabel(dataTable["RecordList"][0].content,0, cc.color(dataTable["RecordList"][0].colorR, dataTable["RecordList"][0].colorG, dataTable["RecordList"][0].colorB));
    }
};
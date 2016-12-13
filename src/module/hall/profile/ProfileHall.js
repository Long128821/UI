//数据图标集
var ProfileHall= {
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
    test:function(){
        console.log("接受用户基本信息");
    },
    test1:function(){
        console.log("公告");
    }
};
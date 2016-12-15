//数据图标集
var ProfileHall= {
    //获取玩家本身数据
    getUserInfo:function(dataTable){
        //获取玩家本身数据
        Profile_JinHuaOtherUserInfo.readJINHUA_MGR_USER_INFO(dataTable);
        profile_user.readJINHUA_MGR_USER_INFO(dataTable);

        MvcEngine.createModule(GUI_OTHERUSERINFO);
    },
    //在线时长
    slotJINHUA_MGR_SETTING:function(dataTable){
        //设置金花数据
        Profile_JinHuaSetting.readJINHUA_MGR_SETTING(dataTable);
        //设置同时在线人数
        HallLogic.setOnlinePlayerNumber();
        //设置是否显示首充翻倍
        HallLogic.setShouChongFanBei();
    },
    //游戏公告
    slotJINHUA_MGR_NOTICE:function(dataTable){
        HallLogic.createSystemNoticeLabel(dataTable["RecordList"][0].content,0, cc.color(dataTable["RecordList"][0].colorR, dataTable["RecordList"][0].colorG, dataTable["RecordList"][0].colorB));
    }
};
//数据图标集
var ProfileHall= {
//    //大厅初始化-获取玩家数据
//    slot_BASEID_GET_BASEINFO:function(dataTable){
//        profile_user.readBASEID_GET_BASEINFO(dataTable);
//        //更新大厅数据
//        HallLogic.updateHallData();
//    },
    //获取玩家本身数据
    slot_JINHUA_MGR_USER_INFO:function(dataTable){
        //获取玩家本身数据
        Profile_JinHuaOtherUserInfo.readJINHUA_MGR_USER_INFO(dataTable);
        profile_user.readJINHUA_MGR_USER_INFO(dataTable);

        MvcEngine.createModule(GUI_OTHERUSERINFO);
    },
    //DBID_USER_INFO, ProfileHall.slot_DBID_USER_INFO
    //更新玩家用户信息
    slot_DBID_USER_INFO:function(dataTable){
        profile_user.readDBID_USER_INFO(dataTable);
        //更新大厅数据
        HallLogic.updateHallData();
    },
    //在线时长
    slot_JINHUA_MGR_SETTING:function(dataTable){
        //设置金花数据
        Profile_JinHuaSetting.readJINHUA_MGR_SETTING(dataTable);
        //设置同时在线人数
        HallLogic.setOnlinePlayerNumber();
        //设置是否显示首充翻倍
        HallLogic.setShouChongFanBei();
    },
    //游戏公告
    slot_JINHUA_MGR_NOTICE:function(dataTable){
        HallLogic.createSystemNoticeLabel(dataTable["RecordList"][0].content,0, cc.color(dataTable["RecordList"][0].colorR, dataTable["RecordList"][0].colorG, dataTable["RecordList"][0].colorB));
    },
    //金花每日工资
    slot_JINHUA_MGR_DAILY_SALARY:function(dataTable){
        if(!Common.judgeValueIsEffect(dataTable)) return;
        Profile_DailySalary.setDailySalaryInfoTable(dataTable);
        //可否领取今日工资
        if(dataTable["CanReceive"]== 1){
            MvcEngine.createModule(GUI_DAILYSALARY);
        }
    }
};
//数据图标集
var ProfileRenWu= {
    m_curPageID:0,//当前页面ID 0-每日任务 1-成就任务
    //获取当前活动页面
    getCurPageID:function(){
        return this.m_curPageID;
    },
    //获取当前活动的任务列表
    getActiveTaskListTable:function(){
        return this.m_curPageID== 0?Profile_Task.getEveryDayTask():Profile_Task.getAchievementTask();
    },
    //每日任务列表
    slot_COMMONS_DAILYTASK:function(dataTable){
        Profile_Task.readCOMMONS_DAILYTASK(dataTable);
        RenWuLogic.createTableView();//创建TableView列表
    },
    //成就任务列表
    slot_COMMONS_LIFETIME_TASKLIST:function(dataTable){
        Profile_Task.readCOMMONS_LIFETIME_TASKLIST(dataTable);
        RenWuLogic.createTableView();//创建TableView列表
    },
    //每日任务
    slot_COMMONS_GET_DAILYTASK_PRIZE:function(dataTable){
        Profile_Task.readCOMMONS_GET_DAILYTASK_PRIZE(dataTable);
        RenWuLogic.updateCOMMONS_GET_DAILYTASK_PRIZE();
    },
    //领取成就任务奖励
    slot_COMMONS_GET_LIFETIME_TASKPRIZE:function(dataTable){
        Profile_Task.readCOMMONS_GET_LIFETIME_TASKPRIZE(dataTable);
        RenWuLogic.updateCOMMONS_GET_LIFETIME_TASKPRIZE();
    }
};
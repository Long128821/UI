var Profile_Task= {
    COMMONS_LIFETIME_TASKLISTTable:{},//成就任务列表
    COMMONS_GET_LIFETIME_TASKPRIZETable:{},//领取成就任务奖励
    AchievementTaskTimeStamp:0,//领取成就任务时间戳
    COMMONS_DAILYTASKTable:{},//每日任务列表
    COMMONS_GET_DAILYTASK_PRIZETable:{},//领取每日任务奖励
    getAchievementTask:function(){
        return this.COMMONS_LIFETIME_TASKLISTTable;
    },
    getAchievementTaskList:function(){
        return this.COMMONS_GET_LIFETIME_TASKPRIZETable;
    },
    //
    getEveryDayTask:function(){
        return this.COMMONS_DAILYTASKTable;
    },
    getGetEveryDayPrize:function(){
        return this.COMMONS_GET_DAILYTASK_PRIZETable;
    },
    //发送领取成就任务奖励
    sendGetAchievementAward:function(taskId){
        if(window.localStorage){
            this.AchievementTaskTimeStamp = window.localStorage.getItem("AchievementTaskTimeStamp");
        }else{
            this.AchievementTaskTimeStamp= 0;
        }
        sendCOMMONS_GET_LIFETIME_TASKPRIZE(parseInt(this.AchievementTaskTimeStamp), taskId);
    },
    //3.16.31 领取成就任务奖励（COMMONS_GET_LIFETIME_TASKPRIZE）
    readCOMMONS_GET_LIFETIME_TASKPRIZE:function(dataTable){
        this.COMMONS_GET_LIFETIME_TASKPRIZETable = dataTable;
        //将时间戳保存在本地
        this.AchievementTaskTimeStamp = this.COMMONS_GET_LIFETIME_TASKPRIZETable["TimeStamp"];

        if(window.localStorage){
            window.localStorage.setItem("AchievementTaskTimeStamp", this.AchievementTaskTimeStamp);
        }
    },
    //3.16.32 每日任务列表（COMMONS_DAILYTASK）
    readCOMMONS_DAILYTASK:function(dataTable){
        this.COMMONS_DAILYTASKTable = dataTable;
    },
    //3.16.33 领取每日任务奖励（COMMONS_GET_DAILYTASK_PRIZE）
    readCOMMONS_GET_DAILYTASK_PRIZE:function(dataTable){
        this.COMMONS_GET_DAILYTASK_PRIZETable = dataTable;
    },
    //3.16.30 成就任务列表（COMMONS_LIFETIME_TASKLIST）
    readCOMMONS_LIFETIME_TASKLIST:function(dataTable){
        this.COMMONS_LIFETIME_TASKLISTTable = dataTable;
    }
};

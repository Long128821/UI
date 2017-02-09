//数据图标集
var ProfileDailySalary= {
    //领取每日工资
    slot_JINHUA_MGR_GET_SALARY:function(dataTable){
        Profile_DailySalary.setGetDailySalaryTable(dataTable);
        DailySalaryLogic.acceptResult();
    }
};

//数据图标集
var ProfileDailySalary= {
    slot_JINHUA_MGR_GET_SALARY:function(dataTable){
        console.log("JINHUA_MGR_GET_SALARY");
        console.log(dataTable);
        Profile_DailySalary.setGetDailySalaryTable(dataTable);
        DailySalaryLogic.acceptResult();
    }
};

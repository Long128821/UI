/**
 * Created by Administrator on 2016/12/22.
 */
var Profile_ServerMsg= {
    ServerMsgTable:{},
    ServerTime:{},
    getServerMsgTable:function(){
        return this.ServerMsgTable;
    },
    getTimeDifference:function(){
        if(this.ServerTime== null){
            return 0;
        }else{
            return this.ServerTime["TimeDifference"];
        }
    },
    //接收服务器通知
    readGAMEID_SERVER_MSG:function(dataTable){
        // Type Byte 类型 1:充值弹窗 2:飘字 3:比赛播报 4.系统公告 5.强制退出 6.Toast,7.冲榜飘字,8.普通弹框
        Profile_ServerMsg.ServerMsgTable["nType"] = dataTable["nType"];
        // Msg text 比赛状态的客户端提示语
        Profile_ServerMsg.ServerMsgTable["sMsg"] = dataTable["sMsg"];
        // 充值是否成功（充值特有）1成功，0失败
        Profile_ServerMsg.ServerMsgTable["isSucceed"] = dataTable["isSucceed"];
        // Second	Int	Toast飘字秒数	仅toast读取
        Profile_ServerMsg.ServerMsgTable["toastSecond"] = dataTable["toastSecond"];
        console.log("Todo:接收服务器通知！");
        console.log(dataTable);
    },
    //同步服务器时间
    readBASEID_TIMESTAMP_SYNC:function(dataTable){
        var serverTime = dataTable["TimeStamp"];
        Profile_ServerMsg.ServerTime["TimeDifference"] = parseInt(Profile_JinHuaSetting.getTimeStamp()) - parseInt(serverTime);
        console.log("Todo:与服务器同步时间");
        console.log(dataTable);
    }
};

//接收服务器通知
Frameworks.addSlot2Signal(GAMEID_SERVER_MSG, Profile_ServerMsg.readGAMEID_SERVER_MSG);
//同步服务器时间
Frameworks.addSlot2Signal(BASEID_TIMESTAMP_SYNC, Profile_ServerMsg.readBASEID_TIMESTAMP_SYNC);

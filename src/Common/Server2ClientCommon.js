/**
 * Func:服务器-->客户端的消息
 */
//心跳消息
function read80000000(nmBaseMessage){
    var dataTable= new Map();
    //存放消息类型和消息名
    dataTable.put("messageType", MSG_IDLE);
    dataTable.put("messageName", "MSG_IDLE");

    return dataTable;
}

//读取微信注册(ACK+ BASEID_RESGISTER)
function read80010001(nmBaseMessage){
    var dataTable= new Map();
    //存放消息类型和消息名
    dataTable.put("messageType", ACK + BASEID_REGISTER);
    dataTable.put("messageName", "BASEID_REGISTER");

    //Result byte 注册结果
    dataTable.put("Result", nmBaseMessage.readByte());
    //ResultTxt UTF16 提示语内容
    dataTable.put("ResultTxt", nmBaseMessage.readUTF16());
    //UserID  Int 用户ID
    dataTable.put("UserID", nmBaseMessage.readInt());
    //NickName  昵称
    dataTable.put("NickName", nmBaseMessage.readUTF16());
    //Password  密码
    dataTable.put("Password", nmBaseMessage.readUTF16());
    //yuanbao Int 元宝
    dataTable.put("Yuanbao", nmBaseMessage.readInt());
    //Coin Long 金币数
    dataTable.put("Coin", nmBaseMessage.readLong());
    //honor  荣誉值
    dataTable.put("honor", nmBaseMessage.readInt());
    //PhotoUrl UTF16 头像URL
    dataTable.put("PhotoUrl", nmBaseMessage.readUTF16());
    //SessionID Long 当前Socket连接的SessionID
    dataTable.put("SessionID", nmBaseMessage.readLong());
    return dataTable;
}

//读取微信登录(ACK+ BASEID_LOGIN)
function read80010002(nmBaseMessage){
    var dataTable= new Map();
    //存放消息类型和消息名
    dataTable.put("messageType", ACK + BASEID_LOGIN);
    dataTable.put("messageName", "BASEID_LOGIN");

    //UserID  Int 用户ID
    dataTable.put("UserID", nmBaseMessage.readInt());
    //result Byte 是否成功
    dataTable.put("result", nmBaseMessage.readByte());
    //ResultTxt UTF16 提示语内容
    dataTable.put("ResultTxt", nmBaseMessage.readUTF16());
    //InitLoginInfoChanged Byte 是否修改过原始登录消息
    dataTable.put("InitLoginInfoChanged", nmBaseMessage.readByte());
    //NickName UTF16 昵称
    dataTable.put("NickName", nmBaseMessage.readUTF16());
    //PhotoUrl UTF16 头像URL
    dataTable.put("PhotoUrl", nmBaseMessage.readUTF16());
    //Coin Long 金币数
    dataTable.put("Coin", nmBaseMessage.readLong());
    //UnreadMsgCnt  Int 未读消息数量
    dataTable.put("UnreadMsgCnt", nmBaseMessage.readInt());
    //SessionID Long 当前Socket连接的SessionID
    dataTable.put("SessionID", nmBaseMessage.readLong());
    //VipLevel Int VIP等级
    dataTable.put("VipLevel", nmBaseMessage.readInt());
    //yuanbao Int 元宝
    dataTable.put("yuanbao", nmBaseMessage.readInt());

    return dataTable;
}

//读取用户属性变更(ACK+ GAMEID_USER_ATTR)
function read80040006(nmBaseMessage){
    var dataTable= new Map();
    //存放消息类型和消息名
    dataTable.put("messageType", ACK + GAMEID_USER_ATTR);
    dataTable.put("messageName", "GAMEID_USER_ATTR");

    /**********Loop循环-[用户属性变化列表]*****************/
    //长度
    var UserAttrCN =  nmBaseMessage.readByte();
    var table= {};
    if(UserAttrCN> 0){
        for(var i=0; i< UserAttrCN; ++i){
            table[i]= {};
            var name= nmBaseMessage.readUTF16();
            var value= nmBaseMessage.readUTF16();
            console.log(name+" "+value);
            //name Text 属性名
            //金币：coin元宝：yuanbao荣誉值：honor兑奖券：duijiang VIP等级：viplevel
            table[i]["name"] = name;
            //value Text 属性值
            table[i]["value"] = value;
        }
        //属性Table
        dataTable.put("UserAttr", table);
    }
    return dataTable;
}

//请求送金DBID_V2_REQUEST_COIN
function read8006002d(nmBaseMessage){
    var dataTable= new Map();
    //存放消息类型和消息名
    dataTable.put("messageType", ACK + DBID_V2_REQUEST_COIN);
    dataTable.put("messageName", "BASEID_REGISTER");

    dataTable.put("Coin", nmBaseMessage.readInt());//金币数
    dataTable.put("ResultMsg", nmBaseMessage.readUTF16());//提示语
    dataTable.put("PopupWindowsNum", nmBaseMessage.readByte());//弹出框编号
    return dataTable
}

//获取站内信
function read80670006(nmBaseMessage){
    var dataTable= new Map();
    //存放消息类型和消息名
    dataTable.put("messageType", ACK + MAIL_UNREAD_SEND);
    dataTable.put("messageName", "MAIL_UNREAD_SEND");

    dataTable.put("Type", nmBaseMessage.readByte());//未读消息类型:1系统消息，2个人消息
    console.log("未读消息类型:"+ dataTable.get("Type"));
    return dataTable;
}
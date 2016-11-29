/**
 * Func:服务器-->客户端的消息
 */
//心跳消息
function read80000000(nmBaseMessage){
    var dataMap= new Map();
    //存放消息类型和消息名
    dataMap.put("messageType", MSG_IDLE);
    dataMap.put("messageName", "MSG_IDLE");
    return dataMap;
}

//读取微信注册(ACK+ BASEID_RESGISTER)
function read80010001(nmBaseMessage){
    var dataMap= new Map();
    //存放消息类型和消息名
    dataMap.put("messageType", ACK + BASEID_REGISTER);
    dataMap.put("messageName", "BASEID_REGISTER");

    //Result byte 注册结果
    dataMap.put("Result", nmBaseMessage.readByte());
    //ResultTxt UTF16 提示语内容
    dataMap.put("ResultTxt", nmBaseMessage.readUTF16());
    //UserID  Int 用户ID
    dataMap.put("UserID", nmBaseMessage.readInt());
    //NickName  昵称
    dataMap.put("NickName", nmBaseMessage.readUTF16());
    //Password  密码
    dataMap.put("Password", nmBaseMessage.readUTF16());
    //yuanbao Int 元宝
    dataMap.put("Yuanbao", nmBaseMessage.readInt());
    //Coin Long 金币数
    dataMap.put("Coin", nmBaseMessage.readLong());
    //honor  荣誉值
    dataMap.put("honor", nmBaseMessage.readInt());
    //PhotoUrl UTF16 头像URL
    dataMap.put("PhotoUrl", nmBaseMessage.readUTF16());
    //SessionID Long 当前Socket连接的SessionID
    dataMap.put("SessionID", nmBaseMessage.readLong());
    return dataMap;
}

//读取微信登录(ACK+ BASEID_LOGIN)
function read80010002(nmBaseMessage){
    var dataMap= new Map();
    //存放消息类型和消息名
    dataMap.put("messageType", ACK + BASEID_LOGIN);
    dataMap.put("messageName", "BASEID_LOGIN");

    //UserID  Int 用户ID
    dataMap.put("UserID", nmBaseMessage.readInt());
    //result Byte 是否成功
    dataMap.put("result", nmBaseMessage.readByte());
    //ResultTxt UTF16 提示语内容
    dataMap.put("ResultTxt", nmBaseMessage.readUTF16());
    //InitLoginInfoChanged Byte 是否修改过原始登录消息
    dataMap.put("InitLoginInfoChanged", nmBaseMessage.readByte());
    //NickName UTF16 昵称
    dataMap.put("NickName", nmBaseMessage.readUTF16());
    //PhotoUrl UTF16 头像URL
    dataMap.put("PhotoUrl", nmBaseMessage.readUTF16());
    //Coin Long 金币数
    dataMap.put("Coin", nmBaseMessage.readLong());
    //UnreadMsgCnt  Int 未读消息数量
    dataMap.put("UnreadMsgCnt", nmBaseMessage.readInt());
    //SessionID Long 当前Socket连接的SessionID
    dataMap.put("SessionID", nmBaseMessage.readLong());
    //VipLevel Int VIP等级
    dataMap.put("VipLevel", nmBaseMessage.readInt());
    //yuanbao Int 元宝
    dataMap.put("yuanbao", nmBaseMessage.readInt());

    return dataMap;
}
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
//    console.log(dataTable.get("UserID"));
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

//    console.log(dataTable.get("Coin"));

    return dataTable;
}

//读取基本信息(BASEID_GET_BASEINFO)
function read80010003(nmBaseMessage){
//    console.log("获取基本信息");
    var dataTable= new Map();
    //存放消息类型和消息名
    dataTable.put("messageType", ACK + BASEID_GET_BASEINFO);
    dataTable.put("messageName", "BASEID_GET_BASEINFO");

    //UserID  Int 用户ID
    dataTable.put("UserID", nmBaseMessage.readInt());
//    console.log(dataTable.get("UserID"));
    //NickName UTF16 昵称
    dataTable.put("NickName", nmBaseMessage.readUTF16());
    //Sex	byte	性别	1男   2女
    dataTable.put("Sex", nmBaseMessage.readByte());
    //Age	byte	年龄
    dataTable.put("Age", nmBaseMessage.readByte());
    //City	text	城市	如 :北京-海淀
    dataTable.put("City", nmBaseMessage.readUTF16());
    //PhotoUrl UTF16 头像URL
    dataTable.put("PhotoUrl", nmBaseMessage.readUTF16());
    //sign	text	个性签名
    dataTable.put("PhotoUrl", nmBaseMessage.readUTF16());
    //Coin Long 金币数
    dataTable.put("Coin", nmBaseMessage.readLong());
    //yuanbao Int 元宝
    dataTable.put("yuanbao", nmBaseMessage.readInt());

//    console.log(dataTable);

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
            nmBaseMessage.startReadLoop();
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

    //未读消息类型:1系统消息，2个人消息
    dataTable.put("Type", nmBaseMessage.readByte());
    console.log("未读消息类型:"+ dataTable.get("Type"));
    return dataTable;
}

//获取当前手机用户登录列表信息
function read8007009d(nmBaseMessage){
    var dataTable= new Map();
    //存放消息类型和消息名
    dataTable.put("messageType", ACK + MANAGERID_USERLIST_FROM_IMIE);
    dataTable.put("messageName", "MANAGERID_USERLIST_FROM_IMIE");

    //NickCnt	int	昵称数量	loop
    var nickCnt= nmBaseMessage.readInt();
    console.log("当前手机用户登录列表数量:"+ nickCnt);
    var table= {};
    if(nickCnt> 0){
        for(var i=0; i< nickCnt; ++i){
            //开始读取Loop类型的头部
            nmBaseMessage.startReadLoop();
            //NickName	text	登陆过此手机的昵称
            table[i]["NickName"]= nmBaseMessage.readUTF16();
            //IsBindWeChat	byte	此账号是否绑定微信	0：没有；1：有
            table[i]["IsBindWeChat"]= nmBaseMessage.readByte();
        }
        //isHint	byte	是否需要提示用户绑定微信
        dataTable.put("NickLists", table);
    }
    return dataTable;
}

//获取用户绑定微信信息(MANAGERID_HINT_BIND_WECHAT)
function read8007009e(nmBaseMessage){
    console.log("读取用户信息");
    var dataTable= new Map();
    //存放消息类型和消息名
    dataTable.put("messageType", ACK + MANAGERID_HINT_BIND_WECHAT);
    dataTable.put("messageName", "MANAGERID_HINT_BIND_WECHAT");

    //isHint	byte	是否需要提示用户绑定微信
    dataTable.put("isHint", nmBaseMessage.readByte());
    //AwardCoin	text	绑定微信提示信息
    dataTable.put("AwardCoin", nmBaseMessage.getString());
    console.log("是否需要提示用户绑定微信:"+ dataTable.get("Type"));
    return dataTable;
}

//找回密码(DBID_FIND_PASSWORD)
function read8006000c(nmBaseMessage){
    var dataTable= new Map();

    dataTable.put("messageType", ACK + DBID_FIND_PASSWORD);
    dataTable.put("messageName", "DBID_FIND_PASSWORD");

    //Result	Byte	是否成功	0 否 1 是
    dataTable.put("Result", nmBaseMessage.readByte());
    //ResultTxt	Text	结果提示语
    dataTable.put("ResultTxt", nmBaseMessage.readUTF16());
    //NewPassword	Text	新密码
    dataTable.put("NewPassword", nmBaseMessage.readUTF16());

    console.log("找回密码:"+ dataTable);
    return dataTable;
}

//游戏公告(BASEID_GET_NOTICE)
function read8001000a(nmBaseMessage){
    var dataTable= new Map();

    dataTable.put("messageType", ACK + BASEID_GET_NOTICE);
    dataTable.put("messageName", "BASEID_GET_NOTICE");

    //NoticeCnt	Byte	公告数量
    dataTable.put("Result", nmBaseMessage.readByte());

    console.log("游戏公告:"+ dataTable.get("Result"));
    return dataTable;
}
/**
 * Func:客户端-->服务器的消息
 */

//心跳消息
function sendIdleMsg(){
    var nmBaseMessage= new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ);//消息ID
    nmBaseMessage.setMsgVer(0);//设置消息版本

    nmBaseMessage.writeStart();

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//一键注册
//Todo:拿不到的数据有:IMEI 手机号  推荐人的ID 手机型号 是否为模拟器
function sendBASEID_RESGISTER(IMEI){
    var nmBaseMessage= new NMBaseMessage();
    //现在仅仅只是测试，不需要设置消息ID
    nmBaseMessage.setMessageType(REQ + BASEID_REGISTER);
    nmBaseMessage.writeStart();//准备写消息

    nmBaseMessage.writeString("html5_"+ IMEI);//IMEI
    nmBaseMessage.writeString("");//昵称
    nmBaseMessage.writeString("");//密码

    nmBaseMessage.writeInt(Common.getVersion());//AppVersionCode	Int	平台或者游戏版本号

    nmBaseMessage.writeString("ZhaJinHua");//平台版本
    nmBaseMessage.writeString("ChangeID");//注册渠道号
    //RobotModel	Byte	机器人型号	0普通用户  1,2,3 机器人等级
    nmBaseMessage.writeByte(0);
    //mobile	Text	手机号码	自动获取的
    nmBaseMessage.writeString("");

    //PlatformCode	byte	客户端类型
    //	public static final int OSID_ANDROID = 1;
    //	public static final int OSID_HTML5 = 2;
    //	public static final int OSID_IPHONE = 3;
    //	public static final int OSID_LUA_ANDROID = 4;
    //	public static final int OSID_LUA_IOS = 5;
    nmBaseMessage.writeByte(2);//客户端类型

    nmBaseMessage.writeByte(GameConfig.GAME_ID);//发起注册的游戏ID

    //IntroducerUserID	int	推荐人的ID	从apk包中解析出来的ID
    nmBaseMessage.writeInt("");

    nmBaseMessage.writeInt(1);//Enctype int 字符串编码类型 0 : Unicode1 : Utf-8

    nmBaseMessage.writeInt("");//PhoneType	String	手机型号

    //isEmulator byte 是否是模拟器 0：不是；1：是
    nmBaseMessage.writeByte(0);

    nmBaseMessage.writeOver();//写完

    //写结束，同时设置对应的回调函数(如果需要处理的话)
    Network.getInstance().sendMessage(nmBaseMessage);

    //清空数据
    delete nmBaseMessage;
}

//发送登录请求，获取AppID
//@callback 登陆成功之后的回调函数
//Todo:拿不到的数据有  IMEI 手机型号
function sendBASEID_LOGIN(nickName, password){
    var nmBaseMessage= new NMBaseMessage();
    //现在仅仅只是测试，不需要设置消息ID
    nmBaseMessage.setMessageType(REQ + BASEID_LOGIN);
    nmBaseMessage.writeStart();//准备写消息

    nmBaseMessage.writeString("html5_"+ "357523056663693");//IMEI
    nmBaseMessage.writeString(nickName);//昵称
    nmBaseMessage.writeString(password);//密码

    nmBaseMessage.writeInt(Common.getVersion());//版本号

    nmBaseMessage.writeString("ChangeID");//注册渠道号

    nmBaseMessage.writeByte(2);//客户端类型

    nmBaseMessage.writeByte(GameConfig.GAME_ID);//发起注册的游戏ID

    nmBaseMessage.writeString("Sun");//手机型号

    nmBaseMessage.writeInt(profile_user.getSelfUserID());//用户ID

    nmBaseMessage.writeOver();//写完

    //写结束，同时设置对应的回调函数(如果需要处理的话)
    Network.getInstance().sendMessage(nmBaseMessage);

    //清空数据
    delete nmBaseMessage;
}

function sendMANAGERID_USERLIST_FROM_IMIE(){
    var nmBaseMessage= new NMBaseMessage();
    //现在仅仅只是测试，不需要设置消息ID
    nmBaseMessage.setMessageType(REQ + MANAGERID_USERLIST_FROM_IMIE);
    nmBaseMessage.writeStart();//准备写消息

    //IMIE	text	IMIE号和MAC	以html5/android/ios +’_’开头IMIE_MAC
    nmBaseMessage.writeString("html5_"+ "357523056663693");//IMEI

    //VersionCode	Int	游戏版本号+渠道号
    nmBaseMessage.writeInt(Common.getVersion()+ Common.getChangeID());

    nmBaseMessage.writeByte(GameConfig.GAME_ID);//发起注册的游戏ID

    nmBaseMessage.writeOver();//写完

    //写结束，同时设置对应的回调函数(如果需要处理的话)
    Network.getInstance().sendMessage(nmBaseMessage);

    //清空数据
    delete nmBaseMessage;
}

//重置密码
function sendDBID_FIND_PASSWORD(dataTable){
    var nmBaseMessage= new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ+ DBID_FIND_PASSWORD);

    nmBaseMessage.writeStart();

    //NickName	Text	用户昵称
    nmBaseMessage.writeString(dataTable["NickName"]);
    //Tel	text	手机
    nmBaseMessage.writeString(dataTable["Phone"]);
    //IMEI	Text	imei
    nmBaseMessage.writeString(dataTable["IMEI"]);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//得到短信通道号码
function sendDBID_GET_SMS_NUMBER(dataTable){
    var nmBaseMessage= new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + DBID_GET_SMS_NUMBER);

    nmBaseMessage.writeStart();

    //NickName	Text	用户昵称
    nmBaseMessage.writeString(dataTable["NickName"]);
    //Tel	text	手机
    nmBaseMessage.writeString(dataTable["Phone"]);
    //IMEI	Text	imei
    nmBaseMessage.writeString(dataTable["IMEI"]);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//请求修改基本信息
function sendBASEID_EDIT_BASEINFO(dataTable){
    var nmBaseMessage= new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + BASEID_EDIT_BASEINFO);

    nmBaseMessage.writeStart();

    var editCnt = dataTable["editCnt"];
    nmBaseMessage.writeInt(dataTable["userID"]);
    nmBaseMessage.writeByte(editCnt);

    for(var i=0; i< editCnt;++i){
        nmBaseMessage.writeByte(dataTable["editContent"][i].attID);
        nmBaseMessage.writeString(dataTable["editContent"][i].attVal);
    }

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//获取基本信息BASEID_GET_BASEINFO
function sendBASEID_GET_BASEINFO(userID){
    var nmBaseMessage= new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + BASEID_GET_BASEINFO);

    nmBaseMessage.writeStart();

    nmBaseMessage.writeInt(userID);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

function sendGIFTBAGID_GIFTBAG_LIST_SIMPLE(){
    var nmBaseMessage= new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + GIFTBAGID_GIFTBAG_LIST_SIMPLE);
    nmBaseMessage.setMsgVer(1);//消息版本号

    nmBaseMessage.writeStart();

    //GameID  游戏ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);
    //客户端版本号
    nmBaseMessage.writeInt();

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}
//请求站内信消息列表
function sendMAIL_SYSTEM_MESSGE_LIST(LastMessageId,Count){
    var nmBaseMessage= new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + MAIL_SYSTEM_MESSGE_LIST);
    nmBaseMessage.setMsgVer(1);//消息版本号

    nmBaseMessage.writeStart();

    //GameID  游戏ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);
    //上条消息id
    nmBaseMessage.writeInt(LastMessageId);
    //列表数量
    nmBaseMessage.writeInt(Count);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//阅读站内信消息
function sendMAIL_SYSTEM_MESSAGE_READ(MessageId){
    var nmBaseMessage= new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + MAIL_SYSTEM_MESSAGE_READ);

    nmBaseMessage.writeStart();

    //GameID  游戏ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);
    //上条消息id
    nmBaseMessage.writeInt(MessageId);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}


//请求每日任务列表(COMMONS_DAILYTASK)
function sendCOMMONS_DAILYTASK(){
    var nmBaseMessage= new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + COMMONS_DAILYTASK);

    nmBaseMessage.writeStart();

    //GameID  游戏ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);
    //版本
    nmBaseMessage.writeInt(Common.getVersion());

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//请求成就任务列表(COMMONS_LIFETIME_TASKLIST)
function sendCOMMONS_LIFETIME_TASKLIST(){
    var nmBaseMessage= new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + COMMONS_LIFETIME_TASKLIST);

    nmBaseMessage.writeStart();

    //GameID  游戏ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);
    //版本
    nmBaseMessage.writeInt(Common.getVersion());

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//领取任务奖励
function sendCOMMONS_GET_DAILYTASK_PRIZE(taskId){
    var nmBaseMessage= new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + COMMONS_GET_DAILYTASK_PRIZE);

    nmBaseMessage.writeStart();

    //GameID  游戏ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);
    //版本
    nmBaseMessage.writeInt(Common.getVersion());
    //任务ID
    nmBaseMessage.writeInt(taskId);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}
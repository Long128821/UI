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

    nmBaseMessage.writeUTF16("html5_"+ IMEI);//IMEI
    nmBaseMessage.writeUTF16("");//昵称
    nmBaseMessage.writeUTF16("");//密码

    nmBaseMessage.writeInt(Common.getVersion());//AppVersionCode	Int	平台或者游戏版本号

    nmBaseMessage.writeUTF16("ZhaJinHua");//平台版本
    nmBaseMessage.writeUTF16("ChangeID");//注册渠道号
    //RobotModel	Byte	机器人型号	0普通用户  1,2,3 机器人等级
    nmBaseMessage.writeByte(0);
    //mobile	Text	手机号码	自动获取的
    nmBaseMessage.writeUTF16("");

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

    nmBaseMessage.writeUTF16("html5_"+ "357523056663693");//IMEI
    nmBaseMessage.writeUTF16(nickName);//昵称
    nmBaseMessage.writeUTF16(password);//密码

    nmBaseMessage.writeInt(Common.getVersion());//版本号

    nmBaseMessage.writeUTF16("ChangeID");//注册渠道号

    nmBaseMessage.writeByte(2);//客户端类型

    nmBaseMessage.writeByte(GameConfig.GAME_ID);//发起注册的游戏ID

    nmBaseMessage.writeUTF16("Sun");//手机型号

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
    nmBaseMessage.writeUTF16("html5_"+ "357523056663693");//IMEI

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
    nmBaseMessage.setMessageType(ACK+ DBID_FIND_PASSWORD);

    nmBaseMessage.writeStart();

    //NickName	Text	用户昵称
    nmBaseMessage.writeUTF16(dataTable["NickName"]);
    //Tel	text	手机
    nmBaseMessage.writeUTF16(dataTable["Phone"]);
    //IMEI	Text	imei
    nmBaseMessage.writeUTF16(dataTable["IMEI"]);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//获取
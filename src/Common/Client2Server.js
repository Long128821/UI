/**金花**/
function sendJINHUA_MGR_USER_INFO(userID)
{
    var nmBaseMessage= new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ+ JINHUA_MGR_USER_INFO);

    nmBaseMessage.writeStart();

    //GameID	byte	游戏ID
    nmBaseMessage.writeByte(GAME_ID);
    //userID	Int	查看的玩家id
    nmBaseMessage.writeInt(userID);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//金花VIP等级信息 (JINHUA_MGR_VIP_INFO)
function sendJINHUA_MGR_VIP_INFO(){
    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_VIP_INFO);
    nmBaseMessage.writeStart();

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//金花在线人数 (JINHUA_MGR_SETTING)
function sendJINHUA_MGR_SETTING(Timestamp){
    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_SETTING);
    nmBaseMessage.writeStart();
    //GameID	byte	ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);
    //Timestamp	Long	时间戳
    nmBaseMessage.writeLong(Timestamp);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//获取游戏公告JINHUA_MGR_NOTICE
function sendJINHUA_MGR_NOTICE(Timestamp){
    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_NOTICE);
    nmBaseMessage.writeStart();
    //GameID	byte	ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);
    //Timestamp	Long	时间戳
    nmBaseMessage.writeLong(Timestamp);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//3.46金花背包V2(JINHUA_MGR_BACKPACK_ITEMS_V2）
function sendJINHUA_MGR_BACKPACK_ITEMS_V2(){
    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_BACKPACK_ITEMS_V2);
    nmBaseMessage.writeStart();

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//保险箱info (JHID_STRONG_BOX_INFO)
function sendJHID_STRONG_BOX_INFO(){
    console.log("保险箱");
    var nmBaseMessage = new NMBaseMessage();
    console.log(JHID_STRONG_BOX_INFO);
    nmBaseMessage.setMessageType(REQ + JHID_STRONG_BOX_INFO);
    nmBaseMessage.writeStart();

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//保险箱存钱(JHID_SAVE_TAKE_STRONG_BOX_COIN)
function sendJHID_SAVE_TAKE_STRONG_BOX_COIN(Coin,Type){
    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JHID_SAVE_TAKE_STRONG_BOX_COIN);
    nmBaseMessage.writeStart();

    nmBaseMessage.writeStart();
    //Coin	Long	单次不能存取太多金币
    nmBaseMessage.writeLong(Coin);
    //Type	Byte	操作类型	1存钱2取钱
    nmBaseMessage.writeByte(Type);
    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}


//扎金花工资面板 (JINHUA_MGR_DAILY_SALARY）
function sendJINHUA_MGR_DAILY_SALARY(){
    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_DAILY_SALARY);
    nmBaseMessage.writeStart();

    nmBaseMessage.writeStart();
    //游戏ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}
//获取每日工资
function sendJINHUA_MGR_GET_SALARY(){
    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_GET_SALARY);
    nmBaseMessage.writeStart();

    nmBaseMessage.writeStart();
    //游戏ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//获取好友列表
function sendJINHUA_MGR_FRIEND_LIST(){
    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_FRIEND_LIST);
    nmBaseMessage.writeStart();

    nmBaseMessage.writeStart();
    //游戏ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//获取追踪列表(JINHUA_MGR_TRACE_LIST)
function sendJINHUA_MGR_TRACE_LIST(){
    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_TRACE_LIST);
    nmBaseMessage.writeStart();

    nmBaseMessage.writeStart();
    //游戏ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//获取陌生人列表(JINHUA_MGR_STRANGER_LIST)
function sendJINHUA_MGR_STRANGER_LIST(){
    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_STRANGER_LIST);
    nmBaseMessage.writeStart();

    nmBaseMessage.writeStart();
    //游戏ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}
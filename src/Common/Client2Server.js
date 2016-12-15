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



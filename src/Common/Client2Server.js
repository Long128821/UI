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

/**
 * Func:服务器-->客户端的消息
 */
//获取用户列表(JINHUA_MGR_USER_INFO)
function read8068000a(nmBaseMessage){
    var dataTable= new Map();
    //存放消息类型和消息名
    dataTable.put("messageType", ACK + JINHUA_MGR_USER_INFO);
    dataTable.put("messageName", "JINHUA_MGR_USER_INFO");

    //isFriend	Byte	是否是好友	1是，0不是
    dataTable.put("isFriend", nmBaseMessage.readByte());
    //nickName	String	昵称
    dataTable.put("nickName", nmBaseMessage.readUTF16());
    //Coin	Long	玩家金币
    dataTable.put("Coin", nmBaseMessage.readInt());
    console.log(dataTable.get("Coin"));
    //Level	Int	玩家等级
    dataTable.put("Level", nmBaseMessage.readInt());
    //Sex	Byte	性别
    dataTable.put("Sex", nmBaseMessage.readByte());
    //PhotoUrl	String	头像
    dataTable.put("PhotoUrl", nmBaseMessage.readUTF16());
    //SignAward	Int	加好友签到金币加成
    dataTable.put("SignAward", nmBaseMessage.readInt());
    //Area	String	地区
    dataTable.put("Area", nmBaseMessage.readUTF16());
    //Innings	Int	局数
    dataTable.put("Innings", nmBaseMessage.readInt());
    //winPer	Int	胜率
    dataTable.put("winPer", nmBaseMessage.readInt());
    //Sign	String	签名
    dataTable.put("Sign", nmBaseMessage.readUTF16());
    //GiftCoin	Long	收到的礼物总价值
    dataTable.put("GiftCoin", nmBaseMessage.readLong());
    var giftCnt= nmBaseMessage.readInt();
    /************Loop类型*******************/
    var table= {};
    if(giftCnt> 0){
        for(var i=0; i< giftCnt; ++i){
            nmBaseMessage.readShort();
            //设置
            nmBaseMessage.m_binaryStream.readPos-= 2;
            table[i]= {};
            //name	String	礼物名称
            table[i]["name"] = nmBaseMessage.readUnicode();
            //cnt	Int	收到的礼物数量
            table[i]["cnt"] = nmBaseMessage.readInt();
        }
        //属性Table
        dataTable.put("Gifts", table);
    }
    //LevelExpMax	Int	玩家当前等级最大经验值
    dataTable.put("LevelExpMax", nmBaseMessage.readInt());
    //LevelExp	Int 	玩家当前等级所拥有的经验值
    dataTable.put("LevelExp", nmBaseMessage.readInt());
    //Charm	Int	魅力值
    dataTable.put("Charm", nmBaseMessage.readInt());
    //CharmLv	Int	魅力等级	决定客户端显示爱心样子
    dataTable.put("CharmLv", nmBaseMessage.readInt());
    //VipLevel	Int	VIP等级
    dataTable.put("VipLevel", nmBaseMessage.readInt());
    //isCert	Byte	是否真人认证	1已认证0未认证
    dataTable.put("isCert", nmBaseMessage.readByte());
    //winMaxCoins	Long	单局最多赢金币数
    dataTable.put("winMaxCoins", nmBaseMessage.readLong());
    //winInnings	Int	    胜场数
    dataTable.put("winInnings", nmBaseMessage.readInt());
    //winningStreak	 Int	连胜
    dataTable.put("winningStreak", nmBaseMessage.readInt());
    //targetUserId	 Int
    dataTable.put("targetUserId", nmBaseMessage.readInt());
    //isTrack	byte	是否追踪了该用户	1:已追踪 0:未追踪
    dataTable.put("isTrack", nmBaseMessage.readByte());
    //luckyIcon	Byte	是否有分享称谓	1有0无
    dataTable.put("luckyIcon", nmBaseMessage.readByte());
    //isBindTel	Byte	是否绑定手机号	1绑定0未绑定
    dataTable.put("isBindTel", nmBaseMessage.readByte());
    //isBindWeiXin	Byte	是否绑定微信	1绑定0未绑定
    dataTable.put("isBindWeiXin", nmBaseMessage.readByte());

    console.log(dataTable);
    return dataTable;
}
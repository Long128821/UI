/**
 * Func:服务器-->客户端的消息
 */
//获取用户列表(JINHUA_MGR_USER_INFO)
function read8268000a(nmBaseMessage){
    var dataTable= {};
    //存放消息类型和消息名
    dataTable["messageType"]=ACK + JINHUA_MGR_USER_INFO;
    dataTable["messageName"]="JINHUA_MGR_USER_INFO";

    //isFriend	Byte	是否是好友	1是，0不是
    dataTable["isFriend"]=nmBaseMessage.readByte();
    //nickName	String	昵称
    dataTable["nickName"]=nmBaseMessage.readUTF16();
    //Coin	Long	玩家金币
    dataTable["Coin"]=nmBaseMessage.readLong();
    //Level	Int	玩家等级
    dataTable["Level"]=nmBaseMessage.readInt();
    //Sex	Byte	性别
    dataTable["Sex"]=nmBaseMessage.readByte();
    //PhotoUrl	String	头像
    dataTable["PhotoUrl"]=nmBaseMessage.readUTF16();
    //SignAward	Int	加好友签到金币加成
    dataTable["SignAward"]=nmBaseMessage.readInt();
    //Area	String	地区
    dataTable["Area"]=nmBaseMessage.readUTF16();
    //Innings	Int	局数
    dataTable["Innings"]=nmBaseMessage.readInt();
    //winPer	Int	胜率
    dataTable["winPer"]=nmBaseMessage.readInt();
    //Sign	String	签名
    dataTable["Sign"]=nmBaseMessage.readUTF16();
    //GiftCoin	Long	收到的礼物总价值
    dataTable["GiftCoin"]=nmBaseMessage.readLong();

    var giftCnt= nmBaseMessage.readInt();
    dataTable["giftCnt"]= giftCnt;
    /************Loop类型*******************/
    dataTable["Gifts"]= {};
    if(giftCnt> 0){
        for(var i=0; i< giftCnt; ++i){
            nmBaseMessage.startReadLoop();
            dataTable["Gifts"][i]= {};
            //name	String	礼物名称
            dataTable["Gifts"][i].name = nmBaseMessage.readUnicode();
            //cnt	Int	收到的礼物数量
            dataTable["Gifts"][i].cnt = nmBaseMessage.readInt();
        }
    }
    //LevelExpMax	Int	玩家当前等级最大经验值
    dataTable["LevelExpMax"]=nmBaseMessage.readInt();
    //LevelExp	Int 	玩家当前等级所拥有的经验值
    dataTable["LevelExp"]=nmBaseMessage.readInt();
    //Charm	Int	魅力值
    dataTable["Charm"]=nmBaseMessage.readInt();
    //CharmLv	Int	魅力等级	决定客户端显示爱心样子
    dataTable["CharmLv"]=nmBaseMessage.readInt();
    //VipLevel	Int	VIP等级
    dataTable["VipLevel"]=nmBaseMessage.readInt();
    //isCert	Byte	是否真人认证	1已认证0未认证
    dataTable["isCert"]=nmBaseMessage.readByte();
    //winMaxCoins	Long	单局最多赢金币数
    dataTable["winMaxCoins"]=nmBaseMessage.readLong();
    //winInnings	Int	    胜场数
    dataTable["winInnings"]=nmBaseMessage.readInt();
    //winningStreak	 Int	连胜
    dataTable["winningStreak"]=nmBaseMessage.readInt();
    //targetUserId	 Int
    dataTable["targetUserId"]=nmBaseMessage.readInt();
    //isTrack	byte	是否追踪了该用户	1:已追踪 0:未追踪
    dataTable["isTrack"]=nmBaseMessage.readByte();
    //luckyIcon	Byte	是否有分享称谓	1有0无
    dataTable["luckyIcon"]=nmBaseMessage.readByte();
    //isBindTel	Byte	是否绑定手机号	1绑定0未绑定
    dataTable["isBindTel"]=nmBaseMessage.readByte();
    //isBindWeiXin	Byte	是否绑定微信	1绑定0未绑定
    dataTable["isBindWeiXin"]=nmBaseMessage.readByte();

    return dataTable;
}
//3.12金花VIP等级信息 (JINHUA_MGR_VIP_INFO）
function read8068000c(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_VIP_INFO;
    dataTable["messageName"] = "JINHUA_MGR_VIP_INFO";
    //VipLevel	Int	当前vip等级
    dataTable["VipLevel"] = nmBaseMessage.readInt();
    //Recharge amount	Int	当前充值金额
    dataTable["Recharge"] = nmBaseMessage.readInt();
    //VipLoop		Loop
    dataTable["Vips"] = {};
    var VipsCnt = nmBaseMessage.readInt();
    dataTable["VipsCnt"]= VipsCnt;
    for(var i=0; i< VipsCnt; ++i){
        dataTable["Vips"][i] = {};
        nmBaseMessage.startReadLoop();
        //…Level	Int	级别
        dataTable["Vips"][i].Level = nmBaseMessage.readInt();
        //…fri} limit	Int	好友数量
        dataTable["Vips"][i].Friend = nmBaseMessage.readInt();
        //…exp	Int	经验加成
        dataTable["Vips"][i].Exp = nmBaseMessage.readInt();
        //…lock room	Byte	是否锁定房间	1 是 0 否
        dataTable["Vips"][i].Lock = nmBaseMessage.readByte();
        //…recharge	Int	需要充值金额
        dataTable["Vips"][i].NeedRecharge = nmBaseMessage.readInt();
    }
    //BuyCoin	Int	购买VIP1需要金币数
    dataTable["BuyCoin"] = nmBaseMessage.readInt();
    //nextVipLevel	Int	下一级VIP等级
    dataTable["nextVipLevel"] = nmBaseMessage.readInt();
    //nextRecharge	Int	下一级充值金额
    dataTable["nextRecharge"] = nmBaseMessage.readInt();
    //vipInfoLoop		Loop
    var vipInfoCnt = nmBaseMessage.readInt();
    dataTable["vipInfoCnt"]= vipInfoCnt;
    dataTable["VipsInfo"] = {};
    for(var i = 0; i< vipInfoCnt;++i){
        dataTable["VipsInfo"][i] = {};
        nmBaseMessage.startReadLoop();
        //...vipInfoURL	Text	Vip详情路径
        dataTable["VipsInfo"][i].vipInfoURL = nmBaseMessage.readUnicode();
    }
    //vipInfoIndex	Int	当前显示的VIP详情路径
    dataTable["vipInfoIndex"] = nmBaseMessage.readInt();
    return dataTable;
}
//3.05扎金花相关配置请求(JINHUA_MGR_SETTING）
function read82680005(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_SETTING;
    dataTable["messageName"] = "JINHUA_MGR_SETTING";

    //Timestamp	Long	时间
    dataTable["Timestamp"] = nmBaseMessage.readLong();
    //IsRecharged	Byte	是否充值过	1充值过，0未充值
    dataTable["IsRecharged"] = nmBaseMessage.readByte();
    //hasMonthCard	Byte	是否是月卡用户	1是，0否
    dataTable["hasMonthCard"] = nmBaseMessage.readByte();
    //TitleList	LoopMsg		称谓配置
    dataTable["TitleList"] = {};
    var TitleListCnt = nmBaseMessage.readInt();
    dataTable["TitleListCnt"]= TitleListCnt;
    for(var i = 0;i< TitleListCnt; ++i){
        dataTable["TitleList"][i] = {};
        nmBaseMessage.startReadLoop();
        //…mincoin	Int
        dataTable["TitleList"][i].mincoin = nmBaseMessage.readLong();
        //…maxcoin	Int
        dataTable["TitleList"][i].maxcoin = nmBaseMessage.readLong();
        //…name	String	称谓名称
        dataTable["TitleList"][i].name = nmBaseMessage.readUnicode();
    }
    //IosDownUrl	Text	苹果下载地址
    dataTable["IosDownUrl"] = nmBaseMessage.readUTF16();
    //AndroidDownUrl	Text	安卓下载地址
    dataTable["AndroidDownUrl"] = nmBaseMessage.readUTF16();
    //shareToFri}Url	Text	好友分享下载链接
    dataTable["shareToFri}Url"] = nmBaseMessage.readUTF16();
    //MonthCardRemaining	Text	金花月卡剩余时间
    dataTable["MonthCardRemaining"] = nmBaseMessage.readUTF16();
    //enterRoomEffectMinVipLevel	Int	进场特效最低VIP等级
    dataTable["enterRoomEffectMinVipLevel"] = nmBaseMessage.readInt();
    //monthDay	Int	月卡剩余时间	天数，没有月卡返回0
    dataTable["monthDay"] = nmBaseMessage.readInt();
    //onLineCnt	Int	当前在线人数
    dataTable["onLineCnt"] = nmBaseMessage.readInt();
    //MonthCardPrice	Int	月卡金额	元
    dataTable["MonthCardPrice"] = nmBaseMessage.readInt();
    //MonthCardGetCoinNow	Long	购买月卡立即获得金币数
    dataTable["MonthCardGetCoinNow"] = nmBaseMessage.readLong();
    //MonthCardGetAllCoin	Long	购买月卡一共将会获得金币数
    dataTable["MonthCardGetAllCoin"] = nmBaseMessage.readLong();
    //MonthCardUnderCoin	Long	月卡用户触发奖励金币的金币条件
    dataTable["MonthCardUnderCoin"] = nmBaseMessage.readLong();
    //MonthCardUnderGetCoin	Long	月卡用户出发奖励获得金币数
    dataTable["MonthCardUnderGetCoin"] = nmBaseMessage.readLong();
    //InteractionList	Loop	互动表情数据loop
    dataTable["InteractionList"] = {};
    var InteractionListCnt = nmBaseMessage.readInt();
    dataTable["InteractionListCnt"]= InteractionListCnt;
    for(var i = 0;i< InteractionListCnt;i++) {
        dataTable["InteractionList"][i] = {};
        nmBaseMessage.startReadLoop();
        //…type	Int	互动表情类型	1.鲜花2.西红柿3.嘴唇4.炸弹5.大便6.机枪
        dataTable["InteractionList"][i].type = nmBaseMessage.readInt();
        //…coin	Long	花费金币	发送表情消耗金币数
        dataTable["InteractionList"][i].coin = nmBaseMessage.readLong();
        //…meili	Long	对方的魅力值变化	有正有负
        dataTable["InteractionList"][i].meili = nmBaseMessage.readLong();
    }
    return dataTable;
}

//扎金花公告记录 (JINHUA_MGR_NOTICE)
function read80680003(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_NOTICE;
    dataTable["messageName"] = "JINHUA_MGR_NOTICE";

    //Timestamp	Long	时间
    dataTable["Timestamp"] = nmBaseMessage.readLong();
    //TitleList	LoopMsg		称谓配置
    dataTable["RecordList"] = {};
    var RecordListCnt = nmBaseMessage.readInt();
    dataTable["RecordListCnt"]= RecordListCnt;
    for(var i = 0;i< RecordListCnt; ++i){
        dataTable["RecordList"][i] = {};
        nmBaseMessage.startReadLoop();
        //…content	Text	提示
        dataTable["RecordList"][i].content = nmBaseMessage.readUnicode();
        //…actionId	Int	actionId（小游戏id）	如果为0，则是普通公告
        dataTable["RecordList"][i].actionId = nmBaseMessage.readInt();
        //…status	Int	小游戏状态	1能进去，2加锁，3是金币不足
        dataTable["RecordList"][i].status = nmBaseMessage.readInt();
        //…colorR	Int	字体色值R
        dataTable["RecordList"][i].colorR = nmBaseMessage.readInt();
        //…colorG	Int	字体色值G
        dataTable["RecordList"][i].colorG = nmBaseMessage.readInt();
        //…colorB	Int	字体色值B
        dataTable["RecordList"][i].colorB = nmBaseMessage.readInt();
    }
    return dataTable;
}

//3.46金花背包V2(JINHUA_MGR_BACKPACK_ITEMS_V2）
function read8068002e(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_BACKPACK_ITEMS_V2;
    dataTable["messageName"] = "JINHUA_MGR_BACKPACK_ITEMS_V2";

    //backpackList	LoopMsg	背包列表
    dataTable["BackpackList"] = {};
    var BackpackListCnt = nmBaseMessage.readInt();
    dataTable["BackpackListCnt"]= BackpackListCnt;
    for(var i=0; i< BackpackListCnt; ++i){
        nmBaseMessage.startReadLoop();
        dataTable["BackpackList"][i] = {};
        //…itemId	Int	Id
        dataTable["BackpackList"][i].itemId = nmBaseMessage.readInt();
        //…title	Text	标题
        dataTable["BackpackList"][i].title = nmBaseMessage.readUnicode();
        //…picUrl	Text	图片路径
        dataTable["BackpackList"][i].picUrl = nmBaseMessage.readUnicode();
        //…desc	Text	描述文字
        dataTable["BackpackList"][i].desc = nmBaseMessage.readUnicode();
        //…count	Int	用户拥有数量
        dataTable["BackpackList"][i].count = nmBaseMessage.readInt();
        //...isuse	Byte	是否可以使用	0不可使用1可以使用
        dataTable["BackpackList"][i].isuse = nmBaseMessage.readByte();
    }
    return dataTable;
}
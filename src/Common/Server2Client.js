/**
 * Func:服务器//>客户端的消息
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
    dataTable["nickName"]=nmBaseMessage.readString();
    //Coin	Long	玩家金币
    dataTable["Coin"]=nmBaseMessage.readLong();
    //Level	Int	玩家等级
    dataTable["Level"]=nmBaseMessage.readInt();
    //Sex	Byte	性别
    dataTable["Sex"]=nmBaseMessage.readByte();
    //PhotoUrl	String	头像
    dataTable["PhotoUrl"]=nmBaseMessage.readString();
    //SignAward	Int	加好友签到金币加成
    dataTable["SignAward"]=nmBaseMessage.readInt();
    //Area	String	地区
    dataTable["Area"]=nmBaseMessage.readString();
    //Innings	Int	局数
    dataTable["Innings"]=nmBaseMessage.readInt();
    //winPer	Int	胜率
    dataTable["winPer"]=nmBaseMessage.readInt();
    //Sign	String	签名
    dataTable["Sign"]=nmBaseMessage.readString();
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
            dataTable["Gifts"][i].name = nmBaseMessage.readString();
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
        dataTable["VipsInfo"][i].vipInfoURL = nmBaseMessage.readString();
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
        dataTable["TitleList"][i].name = nmBaseMessage.readString();
    }
    //IosDownUrl	Text	苹果下载地址
    dataTable["IosDownUrl"] = nmBaseMessage.readString();
    //AndroidDownUrl	Text	安卓下载地址
    dataTable["AndroidDownUrl"] = nmBaseMessage.readString();
    //shareToFri}Url	Text	好友分享下载链接
    dataTable["shareToFri}Url"] = nmBaseMessage.readString();
    //MonthCardRemaining	Text	金花月卡剩余时间
    dataTable["MonthCardRemaining"] = nmBaseMessage.readString();
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
        dataTable["RecordList"][i].content = nmBaseMessage.readString();
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
        dataTable["BackpackList"][i].title = nmBaseMessage.readString();
        //…picUrl	Text	图片路径
        dataTable["BackpackList"][i].picUrl = nmBaseMessage.readString();
        //…desc	Text	描述文字
        dataTable["BackpackList"][i].desc = nmBaseMessage.readString();
        //…count	Int	用户拥有数量
        dataTable["BackpackList"][i].count = nmBaseMessage.readInt();
        //...isuse	Byte	是否可以使用	0不可使用1可以使用
        dataTable["BackpackList"][i].isuse = nmBaseMessage.readByte();
    }
    return dataTable;
}

//保险箱(JHID_STRONG_BOX_INFO）
function read8020002d(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JHID_STRONG_BOX_INFO;
    dataTable["messageName"] = "JHID_STRONG_BOX_INFO";
    //strongBoxCoin	Long	保险箱中的金币
    dataTable["strongBoxCoin"] = nmBaseMessage.readLong();
    //charmRate	int	存钱扣魅力的千分比	存钱扣魅力费率，向下取整
    dataTable["charmRate"] = nmBaseMessage.readInt();
    return dataTable;
}

//扎金花每日领工资面板信息 (JINHUA_MGR_DAILY_SALARY）
function read8268001a(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_DAILY_SALARY;
    dataTable["messageName"] = "JINHUA_MGR_DAILY_SALARY";

    //CanReceive	Byte	是否可以领取奖励	1:可领取 0不可领取
    dataTable["CanReceive"] = nmBaseMessage.readByte();
    //Coin	Int	用户金币数
    dataTable["Coin"] = nmBaseMessage.readLong();
    //MaxDay	Int	最大连续天数
    dataTable["MaxDay"] = nmBaseMessage.readInt();
    //CountDay	Int	当前连续天数
    dataTable["CountDay"] = nmBaseMessage.readInt();
    //TomorrowReward	Int	明日登陆可领工资数
    dataTable["TomorrowReward"] = nmBaseMessage.readInt();
    //MaxReward	Int	达到最大连续天数可领工资数
    dataTable["MaxReward"] = nmBaseMessage.readInt();
    //BaseReward	Int	基础奖励
    dataTable["BaseReward"] = nmBaseMessage.readInt();
    //LevelReward	Int	等级奖励
    dataTable["LevelReward"] = nmBaseMessage.readInt();
    //VipReward	Int	VIP等级奖励
    dataTable["VipReward"] = nmBaseMessage.readInt();
    //VipLevel	Int	用户VIP等级
    dataTable["VipLevel"] = nmBaseMessage.readInt();
    //Level	Int	用户等级
    dataTable["Level"] = nmBaseMessage.readInt();
    //PhotoUrl	String	头像地址
    dataTable["PhotoUrl"] = nmBaseMessage.readString();
    return dataTable;
}

//扎金花每日领工资面板信息 (JINHUA_MGR_DAILY_SALARY）
function read8068001b(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_GET_SALARY;
    dataTable["messageName"] = "JINHUA_MGR_GET_SALARY";

    //Success	Byte	是否领取成功	1:成功 0不成功
    dataTable["Success"] = nmBaseMessage.readByte();
    //Msg	String	提示信息
    dataTable["Msg"] = nmBaseMessage.readString();
    return dataTable;
}

//3.46扎金花好友列表 (JINHUA_MGR_FRIEND_LIST）
function read82680008(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_FRIEND_LIST;
    dataTable["messageName"] = "JINHUA_MGR_FRIEND_LIST";

    //FriendList	LoopMsg		游戏内加好友列表
    dataTable["FriendList"] = {};
    var FriendListCnt = nmBaseMessage.readInt();
    dataTable["FriendListCnt"]= FriendListCnt;
    for(var i=0; i< FriendListCnt; ++i){
        nmBaseMessage.startReadLoop();
        dataTable["FriendList"][i] = {};
        //…userID	Int
        dataTable["FriendList"][i].userID = nmBaseMessage.readInt();
        //…name	String	昵称
        dataTable["FriendList"][i].name = nmBaseMessage.readString();
        //…coin	Int	用户金币
        dataTable["FriendList"][i].coin = nmBaseMessage.readLong();
        //…level	Int	好友等级
        dataTable["FriendList"][i].level = nmBaseMessage.readInt();
        //…signAward	Int	签到加成
        dataTable["FriendList"][i].signAward = nmBaseMessage.readInt();
        //…photoUrl	String	头像
        dataTable["FriendList"][i].photoUrl = nmBaseMessage.readString();
        //vipLevel 用户vip等级
        dataTable["FriendList"][i].vipLevel = nmBaseMessage.readInt();
        //visibility 是否可领取签到奖励
        dataTable["FriendList"][i].visibility = nmBaseMessage.readByte();
        //conversationID int 会话ID
        dataTable["FriendList"][i].conversationID = nmBaseMessage.readInt();
        //unreadCnt int 会话中未读邮件数量
        dataTable["FriendList"][i].unreadCnt = nmBaseMessage.readInt();
    }

    //邀请的好友列表
    //InvintFriendList	LoopMsg		游戏内加好友列表
    dataTable["InvintFriendList"] = {};
    var InvintFriendListCnt = nmBaseMessage.readInt();
    dataTable["InvintFriendListCnt"]= InvintFriendListCnt;
    for(var i=0; i< InvintFriendListCnt; ++i){
        nmBaseMessage.startReadLoop();
        dataTable["InvintFriendList"][i] = {};
        //…userID	Int
        dataTable["InvintFriendList"][i].userID = nmBaseMessage.readInt();
        //…name	String	昵称
        dataTable["InvintFriendList"][i].name = nmBaseMessage.readString();
        //…coin	Int	用户金币
        dataTable["InvintFriendList"][i].coin = tonumber(nmBaseMessage.readLong());
        //…level	Int	好友等级
        dataTable["InvintFriendList"][i].level = nmBaseMessage.readInt();
        //…signAward	Int	签到加成
        dataTable["InvintFriendList"][i].signAward = nmBaseMessage.readInt();
        //…photoUrl	String	头像
        dataTable["InvintFriendList"][i].photoUrl = nmBaseMessage.readString();
        //…lastDays	Int	多久没有登陆过
        dataTable["InvintFriendList"][i].lastDays = nmBaseMessage.readInt();
        //vipLevel 用户vip等级
        dataTable["InvintFriendList"][i].vipLevel = nmBaseMessage.readInt();
        //visibility 是否可领取签到奖励
        dataTable["InvintFriendList"][i].visibility = nmBaseMessage.readByte();
        //conversationID int 会话ID
        dataTable["InvintFriendList"][i].conversationID = nmBaseMessage.readInt();
        //unreadCnt int 会话中未读邮件数量
        dataTable["InvintFriendList"][i].unreadCnt = nmBaseMessage.readInt();
    }
    //Maxfriendcnt	Int	好友上限数
    dataTable["Maxfriendcnt"] = nmBaseMessage.readInt();
    //SignAward	Int	签到总奖励
    dataTable["SignAward"] = nmBaseMessage.readInt();
    return dataTable;
}

//3.46扎金花陌生人列表 (JINHUA_MGR_STRANGER_LIST）
function read82680019(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_STRANGER_LIST;
    dataTable["messageName"] = "JINHUA_MGR_STRANGER_LIST";

    //FriendList	LoopMsg		游戏内加好友列表
    dataTable["FriendList"] = {};
    var BackpackListCnt = nmBaseMessage.readInt();
    dataTable["FriendListCnt"]= BackpackListCnt;
    for(var i=0; i< BackpackListCnt; ++i){
        nmBaseMessage.startReadLoop();
        dataTable["FriendList"][i] = {};
        //…userID Int
        dataTable["FriendList"][i].userID = nmBaseMessage.readInt();
        //…name String  昵称
        dataTable["FriendList"][i].name = nmBaseMessage.readString();
        //…coin Int 用户金币
        dataTable["FriendList"][i].coin = nmBaseMessage.readLong();
        //…level  Int 好友等级
        dataTable["FriendList"][i].level = nmBaseMessage.readInt();
        //…photoUrl String  头像
        dataTable["FriendList"][i].photoUrl = nmBaseMessage.readString();
        //vipLevel 用户vip等级
        dataTable["FriendList"][i].vipLevel = nmBaseMessage.readInt();
        //conversationID int 会话ID
        dataTable["FriendList"][i].conversationID = nmBaseMessage.readInt();
        //unreadCnt int 会话中未读邮件数量
        dataTable["FriendList"][i].unreadCnt = nmBaseMessage.readInt();
    }
    return dataTable;
}


//3.46扎金花追踪列表 (JINHUA_MGR_TRACE_LIST）
function read82680020(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_TRACE_LIST;
    dataTable["messageName"] = "JINHUA_MGR_TRACE_LIST";

    //FriendList	LoopMsg		游戏内加好友列表
    dataTable["TraceList"] = {};
    var BackpackListCnt = nmBaseMessage.readInt();
    dataTable["TraceListCnt"]= BackpackListCnt;
    for(var i=0; i< BackpackListCnt; ++i){
        nmBaseMessage.startReadLoop();
        dataTable["TraceList"][i] = {};
        //…userID	Int
        dataTable["TraceList"][i].userID = nmBaseMessage.readInt();
        //…name	Text	昵称
        dataTable["TraceList"][i].name = nmBaseMessage.readString();
        //…coin	Int	用户金币
        dataTable["TraceList"][i].coin = tonumber(nmBaseMessage.readLong());
        //…level	Int	好友等级
        dataTable["TraceList"][i].level = nmBaseMessage.readInt();
        //…photoUrl	Text	头像
        dataTable["TraceList"][i].photoUrl = nmBaseMessage.readString();
        //...vipLevel	Int	用户VIP等级
        dataTable["TraceList"][i].vipLevel = nmBaseMessage.readInt();
        //...loginState	Text	登录状态	在线，离线N小时，离线N天等
        dataTable["TraceList"][i].loginState = nmBaseMessage.readString();
        //...stateColor	Text	颜色	RGB字符串
        dataTable["TraceList"][i].stateColor = nmBaseMessage.readString();
        //...location	Text	位置，如果在线，显示在哪个场次
        dataTable["TraceList"][i].location = nmBaseMessage.readString();
        //...isTrace	Byte	是否可以追踪	1可以0不可以
        dataTable["TraceList"][i].isTrace = nmBaseMessage.readByte();
    }
    //TraceMax	Int	追踪列表上限
    dataTable["TraceMax"] = nmBaseMessage.readInt();
    return dataTable;
}

//3.46金花领取好友签到奖励 (JINHUA_MGR_SIGN_FRIEND_REWARD
function read80680013(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_SIGN_FRIEND_REWARD;
    dataTable["messageName"] = "JINHUA_MGR_SIGN_FRIEND_REWARD";
    //Result	Byte	结果	1成功2不成功
    dataTable["Result"] = nmBaseMessage.readByte();
    //Flag 好友列表中的ID
    dataTable["Flag"] = nmBaseMessage.readInt();
    
    return dataTable;
}

//金花请求破产送金信息(JINHUA_MGR_REVIVE_INFO)
function read80680001(nMBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_REVIVE_INFO;
    dataTable["messageName"] = "JINHUA_MGR_REVIVE_INFO";

    //hasRelive	Byte	是否有破产礼包
    dataTable["hasRelive"] = nMBaseMessage.readByte();
    //Time	Long	礼包领取剩余时间	如果为0则可以马上领取
    dataTable["Time"] = parseInt(nMBaseMessage.readLong());
    return dataTable
}

//金花请求破产送金信息(JINHUA_MGR_REVIVE)
function read80680002(nMBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_REVIVE;
    dataTable["messageName"] = "JINHUA_MGR_REVIVE";

    //Coin	int	破产金
    dataTable["Coin"] = nMBaseMessage.readInt();
    return dataTable
}
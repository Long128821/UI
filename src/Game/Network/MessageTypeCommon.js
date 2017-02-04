// 请求
REQ = 0x00000000;
// 应答
ACK = 0x80000000;

//基础消息头
BASEID = 0x00010000;
// 游戏消息头
GAME_ID = 0x00040000;
//聊天消息头
IM_ID = 0x00050000;
//数据库消息头
DB_ID = 0x00060000;
//manager消息头
MANAGER_ID = 0x00070000;
//统计平台消息头
STA_ID = 0x00080000;
//礼包模块消息
GIFTBAG_ID = 0x00510000;
//公用消息块头
COMMONS_ID = 0x00650000;
//运营活动模块头
OPER_ID = 0x00610000;
//财神头
FORTUNE_ID = 0x00630000;
//站内信消息
MAILID = 0x00670000;

//消息版本号
CHANNEL_ID= 165;

MSG_IDLE = 0;//心跳
NETERR_CONN_FAILED = 1001;//建立连接失败(每连续出现三次，则弹出网络异常对话框)
NETERR_NET_BROKEN = 1002;//网络断开(开始重连)
NETERR_CONN_SUCC = 1003;//重连成功(如果是没有出现连接失败的成功，则不是重连)
NETERR_CONN_HOST_FAILED = 1004; //获取host失败
GAME_ENTER_BACKGROUND = 1005; //切出游戏
GAME_ENTER_FOREGROUND = 1006; //进入游戏

VIP_GIFT_AND_BIND_PHONE_NUMBER = 2001;//礼包或者绑定手机号通知

//[[//////////////////////-基础消息BASEID 消息//////////////////////]]

//注册
BASEID_REGISTER = BASEID + 1;
//登录
BASEID_LOGIN = BASEID + 2;
//微信登录
BASEID_WEBCHAT_LOGIN_APPID = BASEID + 7;
//取出基本信息
BASEID_GET_BASEINFO = BASEID + 3;
//修改基本信息
BASEID_EDIT_BASEINFO = BASEID + 4;
//获取游戏列表
BASEID_GAMELIST = BASEID + 5;
//兑奖信息
BASEID_GET_AWARD = BASEID + 6;
//当前手机绑定的账户列表
BASEID_GET_IMEIUSERS = BASEID + 8;
//游戏公告
BASEID_GET_NOTICE = BASEID + 10;
//版本检测
BASEID_PLAT_VERSION = BASEID + 12;
//同步客户端时间
BASEID_TIMESTAMP_SYNC = BASEID + 13;
//获取弹出公告消息
BASEID_V2_GET_POP_NOTICE = BASEID + 17;
//请求建立第二个连接，并替换原有连接
BASEID_CONNECT = BASEID + 18;
//服务器繁忙通知
BASEID_SERVER_BUSY = BASEID + 19;
//Http代理
BASEID_HTTP_PROXY = BASEID + 21;
//3.1.24 比赛开赛前广播 (BASEID_MATCH_START_PRENOTICE)
BASEID_MATCH_START_PRENOTICE = BASEID + 24;

//3.1.32 第三方渠道登录
BASEID_THIRD_PART_PLAT_LOGIN = BASEID + 32;

//[[//////////////////////-游戏GAME_ID 消息//////////////////////]]
// 游戏桌子变更0x40001
GAMEID_TABLE_CHANGED = GAME_ID + 1;
// 比赛提示消息0x40002
GAMEID_SERVER_MSG = GAME_ID + 2;
// 游戏结果0x40003
GAMEID_GAMERESULT = GAME_ID + 3;
// 断线续玩桌子同步0x40004
GAMEID_TABLE_SYNC = GAME_ID + 4;
// 3.4.6用户属性变更(GAMEID_USER_ATTR)0x40006
GAMEID_USER_ATTR = GAME_ID + 6;
// 3.4.7比赛报名(GAMEID_REG_MATCH)0x40007
GAMEID_REG_MATCH = GAME_ID + 7;
// 3.4.8图文Toast(GAMEID_IMAGE_TOAST)
GAMEID_IMAGE_TOAST = GAME_ID + 8;

//[[//////////////////////-聊天室IM_ID 消息//////////////////////]]
//进入聊天室
IMID_ENTER_CHAT_ROOM = IM_ID + 1;
//退出聊天室
IMID_QUIT_CHAT_ROOM = IM_ID + 2;
//聊天室发言
IMID_CHAT_ROOM_SPEAK = IM_ID + 3;
//聊天室晒奖状
IMID_CHAT_ROOM_SHOW_COMMENDATION = IM_ID + 4;
//显示聊天室当前最新消息
IMID_GET_LAST_CHAT_ROOM_SPEAK = IM_ID + 5;
//3.5.7 屏蔽举报某玩家聊天 (IMID_OPERATE_CHAT_USER_TYPE)
IMID_OPERATE_CHAT_USER_TYPE = IM_ID + 7;
//系统发送打赏V3消息
IMID_CHAT_ROOM_SEND_REWARD_V3 = IM_ID + 15;

//[[//////////////////////-数据库DB_ID 消息//////////////////////]]

//获取用户列表
DBID_USER_LIST = DB_ID + 1;
//获取用户平台及游戏信息
DBID_USER_INFO = DB_ID + 2;
//用户游戏信息
DBID_PLAYER_GAME_INFO = DB_ID + 3;
DBID_GET_ADVERTISEMENT_LIST = DB_ID + 4;
DBID_GET_MAIL_LIST = DB_ID + 5;
DBID_DELETE_MAIL = DB_ID + 6;
DBID_GET_PRIZE_LIST = DB_ID + 7;
DBID_GET_PRIZE = DB_ID + 8;
DBID_GET_UNREAD_MAILCNT = DB_ID + 9;
DBID_UPDATE_MAIL_READFLAG = DB_ID + 10;
//创建站内信
DBID_CREATE_MAIL = DB_ID + 11;
//找回密码
DBID_FIND_PASSWORD = DB_ID + 12;
//查看卡密类奖品
DBID_VIEW_PRIZE = DB_ID + 14;
//获取奖品列表
DBID_V2_GET_PRIZE_LIST = DB_ID + 15;
//领奖
DBID_V2_GET_PRIZE_DETAIL = DB_ID + 16;
//会话列表
DBID_V2_GET_CONVERSATION_LIST = DB_ID + 17;
//反馈内容
DBID_V2_GET_CONVERSATION = DB_ID + 18;
//清空会话消息
DBID_V2_EMPTY_CONVERSITION = DB_ID + 19;
//删除会话
DBID_V2_DELETE_CONVERSATION = DB_ID + 20;
//发送反馈
DBID_V2_SEND_MESSAGE = DB_ID + 21;
//消息推送
DBID_V2_REICIVE_MESSAGE = DB_ID + 22;
//通过昵称发送消息
DBID_V2_SEND_MSG_NICKNAME = DB_ID + 23;
//保存奖状
DBID_V2_SAVE_COMMENDATION = DB_ID + 25;
//未读消息数和未处理兑奖数
DBID_V2_UNHANDL_MSG_PRIZE = DB_ID + 35;
//收藏
DBID_V2_SAVE_FAVORITES = DB_ID + 36;
//打招呼
DBID_V2_SAY_HELLO = DB_ID + 37;
//取消收藏
DBID_V2_CANCLE_FAVORITES = DB_ID + 38;
//同步比赛是否收藏
DBID_V2_ROOM_MATCH_FAVOR = DB_ID + 44;
//请求送金
DBID_V2_REQUEST_COIN = DB_ID + 45;
//同步游戏激战人数
DBID_V2_GAME_PLAYERCNT_SYNC = DB_ID + 46;
//同步热门比赛激战人数
DBID_V2_TOP_MATCH_PLAYERCNT_SYNC = DB_ID + 47;
//得到短信通道号码
DBID_GET_SMS_NUMBER = DB_ID + 49;
//服务器列表
//DBID_SERVER_LIST = DB_ID + 50;
//获取大厅活动网址【V2.3客户端】
DBID_V2_3_GET_HALL_ACTIVITY_URL_LIST = DB_ID + 52;
//牌桌等待提示
DBID_V2_WATING_TIPS = DB_ID + 53;
//用户分享送金概要信息
DBID_APP_SHARE_INFO = DB_ID + 54;
//已分享玩家列表
DBID_SHARE_USER_LIST = DB_ID + 55;
//新注册的分享玩家数
DBID_NEW_SHARE_USER_CNT = DB_ID + 56;
//充值
DBID_NEW_RECHARGE = DB_ID + 57;
//兑换
DBID_EXCHANGE = DB_ID + 58;

// 3.6.64每日登陆送金(DBID_LOGIN_SEND_GOLD)
DBID_LOGIN_SEND_GOLD = DB_ID + 64;
//3.6.68 商城商品列表(DBID_MALL_GOODS_LIST)
DBID_MALL_GOODS_LIST = DB_ID + 68;
//3.6.69 背包列表(DBID_BACKPACK_LIST)
DBID_BACKPACK_LIST = DB_ID + 69;
//3.6.70 兑换列表(DBID_EXCHANGE_LIST)
DBID_EXCHANGE_LIST = DB_ID + 70;
//3.6.71 购买商品(DBID_PAY_GOODS)
DBID_PAY_GOODS = DB_ID + 71;
//3.6.72 消耗商品(DBID_USE_GOODS)
DBID_USE_GOODS = DB_ID + 72;
//3.6.73 背包商品数量(DBID_BACKPACK_GOODS_COUNT)
DBID_BACKPACK_GOODS_COUNT = DB_ID + 73;
//3.6.74 VIP列表(DBID_VIP_LIST)
DBID_VIP_LIST = DB_ID + 74;
//3.6.75 请求VIP每日免费道具(DBID_QUERY_VIP_FREE_ITEM)
DBID_QUERY_VIP_FREE_ITEM = DB_ID + 75;
//3.6.76 领取VIP每日免费道具(DBID_GET_VIP_FREE_ITEM)
DBID_GET_VIP_FREE_ITEM = DB_ID + 76;
//3.6.77 第一次进商城赠送VIP和元宝(DBID_FIRST_ENTER_SHOP_SEND_VIP)
DBID_FIRST_ENTER_SHOP_SEND_VIP = DB_ID + 77;
//3.6.77 领取赠送的VIP和元宝(DBID_GET_SEND_VIP)
DBID_GET_SEND_VIP = DB_ID + 78;
//3.6.79 获取服务器通用配置(DBID_GET_SERVER_CONFIG)
DBID_GET_SERVER_CONFIG = DB_ID + 79;
//3.6.80 获取修改昵称的次数(DBID_GET_NICKNAME_MODIFY_TIMES)
DBID_GET_NICKNAME_MODIFY_TIMES = DB_ID + 80;
//3.6.81 DBID_VIP_LIST_V2
DBID_VIP_LIST_V2 = DB_ID + 81;
//3.6.82 获取指定商品详情（可多个）
DBID_MALL_GOODS_DETAIL = DB_ID + 82;
//3.6.88 网游基地商城商品列表(DBID_MALL_GOODS_LIST_ONLINE)
DBID_MALL_GOODS_LIST_ONLINE = DB_ID + 88;
//3.6.89 用户客户端手机信息(DBID_USER_PHONE_MSG)
DBID_USER_PHONE_MSG = DB_ID + 89;
//3.6.90 屏蔽某玩家站内信
DBID_SHIELD_MAIL_USERID = DB_ID + 90;
//3.6.91 充值结果通知
DBID_RECHARGE_RESULT_NOTIFICATION = DB_ID + 91;
//[[//////////////////////-STA_ID 消息//////////////////////]]

//提交用户界面停留时间消息
STAID_COMMIT_ACTIVITY_STAY = STA_ID + 1;
//提交用户事件消息
STAID_COMMIT_USER_EVENT = STA_ID + 2;
//3.14.3 提交用户事件列表(STAID_COMMIT_USER_EVENT_LIST)
STAID_COMMIT_USER_EVENT_LIST = STA_ID + 3;
//3.14.4 提交错误信息
STATID_COMMIT_EXCEPTION_INFO = STA_ID + 4;
//[[//////////////////////-MANAGER_ID 消息//////////////////////]]

//幸运转盘
//3.7.1 获取自己的转盘中奖记录(SELF_ROTARY_AWARD_RECORD)
SELF_ROTARY_AWARD_RECORD = MANAGER_ID + 1;
//3.7.2 获取别人中奖记录(OTHER_ROTARY_AWARD_RECORD)
OTHER_ROTARY_AWARD_RECORD = MANAGER_ID + 2;
//3.7.3 获取转盘的物品列表(ROTARY_ITEM_LIST)
ROTARY_ITEM_LIST = MANAGER_ID + 3;
//3.7.4 同步所有物品列表的信息包括图片地址(SYNC_ROTARY_ITEM_LIST)
SYNC_ROTARY_ITEM_LIST = MANAGER_ID + 4;
//3.7.5 开始玩转盘(START_ROTARY)
START_ROTARY = MANAGER_ID + 5;
//3.7.6 是否可以玩转盘(CAN_PLAY_ROTARY)
CAN_PLAY_ROTARY = MANAGER_ID + 6;
//3.7.20 获取通知列表(NOTIFICATION_PUSH_LIST)
NOTIFICATION_PUSH_LIST = MANAGER_ID + 20;
//3.7.21 支付数据列表(PAYMENT_DATA_LIST)
PAYMENT_DATA_LIST = MANAGER_ID + 21;
//3.7.22 获取IMEI(MANAGERID_GET_IMEI)
MANAGERID_GET_IMEI = MANAGER_ID + 22;
//3.7.23 大厅活动V3(MANAGERID_HALL_ACTIVITY)
MANAGERID_HALL_ACTIVITY = MANAGER_ID + 23;
//3.7.24获取所有奖品(MANAGERID_GET_PRESENTS)
MANAGERID_GET_PRESENTS = MANAGER_ID + 24;
//3.7.25兑奖(MANAGERID_EXCHANGE_AWARD)
MANAGERID_EXCHANGE_AWARD = MANAGER_ID + 25;
//3.7.26获取自己兑换的奖品列表(MANAGERID_GET_EXCHANGE_AWARDS)
MANAGERID_GET_EXCHANGE_AWARDS = MANAGER_ID + 26;
//3.7.28 获取初始化图片(MANAGERID_GET_INIT_PIC)
MANAGERID_GET_INIT_PIC = MANAGER_ID + 28;
//3.7.29 绑定用户手机号(MANAGERID_BINDING_USER_PHONE_NUMBER)
MANAGERID_BINDING_USER_PHONE_NUMBER = MANAGER_ID + 29;
//3.7.30 91支付列表
MANAGERID_GET_IPHONE_PRODUCTS =  MANAGER_ID + 30;
//iap
MANAGERID_VALIDATE_IAP =  MANAGER_ID + 31;
//客户端记录日志
MANAGERID_CLIENT_LOG = MANAGER_ID + 32;
//3.7.35 获得用户充值记录(GET_RECHARGE_RECORD)
GET_RECHARGE_RECORD = MANAGER_ID + 35;
//3.7.38 获得砸鸡蛋游戏列表(GET_EGG_LIST)
GET_EGG_LIST = MANAGER_ID + 38;
//3.7.39 获得砸鸡蛋游戏奖励(GET_EGG_PRIZE)
GET_EGG_PRIZE = MANAGER_ID + 39;
//3.7.40 获得砸鸡蛋游戏获奖提示(GET_EGG_TIP)
GET_EGG_TIP = MANAGER_ID + 40;
//3.7.41 获取绑定手机号随机码(MANAGERID_GET_BINDING_PHONE_RANDOM)
MANAGERID_GET_BINDING_PHONE_RANDOM = MANAGER_ID + 41;
//3.7.43 获取游戏基地支付说明数据 (MANAGERID_MOBILE_PAY_DATA)
MANAGERID_MOBILE_PAY_DATA = MANAGER_ID + 43;
//3.7.52 新获取自己赢得的奖品列表(NEW_GET_PRIZE_LIST)
NEW_GET_PRIZE_LIST = MANAGER_ID + 52;
//3.7.53 新充值卡备选奖品列表(NEW_GET_ALTERNATIVE_PRIZE_LIST)
NEW_GET_ALTERNATIVE_PRIZE_LIST = MANAGER_ID + 53;
//3.7.54 新备选奖品领奖(NEW_GET_ALTERNATIVE_PRIZE)
NEW_GET_ALTERNATIVE_PRIZE = MANAGER_ID + 54;
//3.7.56 IOS获取token(ADD_DEVICE_TOKEN)
ADD_DEVICE_TOKEN = MANAGER_ID + 56;
//3.7.58门票：获取我的门票列表(TICKET_GET_TICKET_LIST)
TICKET_GET_TICKET_LIST = MANAGER_ID + 58;
//3.7.59 宝盒：获取宝盒进度(BAOHE_GET_PRO)
BAOHE_GET_PRO = MANAGER_ID + 59;
//3.7.60 宝盒：获取宝藏(BAOHE_GET_TREASURE)
BAOHE_GET_TREASURE = MANAGER_ID + 60;
//3.7.61 获取新手引导信息(MANAGERID_GET_USERGUIDE_MSG)
MANAGERID_GET_USERGUIDE_MSG = MANAGER_ID + 61;
//3.7.62 领取新手引导奖励(MANAGERID_GET_USERGUIDE_PRIZE)
MANAGERID_GET_USERGUIDE_PRIZE = MANAGER_ID + 62;
//3.7.63 获取未使用门票数量(MANAGERID_GET_UNUSED_TICKET_CNT)
MANAGERID_GET_UNUSED_TICKET_CNT = MANAGER_ID + 63;
//3.7.64 获取充值返利活动详情(MANAGERID_RECHARGE_REBATE_DETAIL)
MANAGERID_RECHARGE_REBATE_DETAIL = MANAGER_ID + 64;
//3.7.65 获取充值返利活动状态(MANAGERID_RECHARGE_REBATE_STATUS)
MANAGERID_RECHARGE_REBATE_STATUS = MANAGER_ID + 65;
//3.7.66 充值返利活动领奖(MANAGERID_RECHARGE_REBATE_AWARD)
MANAGERID_RECHARGE_REBATE_AWARD = MANAGER_ID + 66;
//3.7.68 短代支付(MANAGERID_SMS_RECHARGE)
MANAGERID_SMS_RECHARGE = MANAGER_ID + 68;
//3.7.70 签到：获取签到内容(MANAGERID_DAILY_SIGN)
MANAGERID_DAILY_SIGN = MANAGER_ID + 70;
//3.7.71 签到：补签 (MANAGERID_SIGN_FILLCHECK)
MANAGERID_SIGN_FILLCHECK = MANAGER_ID + 71;
//3.7.72 签到：奖品表 (MANAGERID_SIGN_AWARDS)
MANAGERID_SIGN_AWARDS = MANAGER_ID + 72;
//3.7.73 签到：领奖 (MANAGERID_SIGN_GET_AWARDS)
MANAGERID_SIGN_GET_AWARDS = MANAGER_ID + 73;
//3.7.74 第二版VIP信息同步 (MANAGERID_GET_VIP_MSG)
MANAGERID_GET_VIP_MSG = MANAGER_ID + 74;
//3.7.75 VIP2改版公告 (MANAGERID_VIP2_UPGRADE_NOTICE)
MANAGERID_VIP2_UPGRADE_NOTICE = MANAGER_ID + 75;
//3.7.76 VIP列表_V3(MANAGERID_VIP_LIST_V3)
MANAGERID_VIP_LIST_V3 = MANAGER_ID + 76;
//3.7.77 VIP等级列表(MANAGERID_VIP_LEVEL_LIST)
MANAGERID_VIP_LEVEL_LIST = MANAGER_ID + 77;
//3.7.78 破产送金(MANAGERID_GIVE_AWAY_GOLD)
MANAGERID_GIVE_AWAY_GOLD = MANAGER_ID + 78;
//3.7.79 碎片兑换券列表(MANAGERID_PRIZE_PIECES_LIST)
MANAGERID_PRIZE_PIECES_LIST = MANAGER_ID + 79;
//3.7.80 碎片合成详情(MANAGERID_PIECES_COMPOUND_DETAILS)
MANAGERID_PIECES_COMPOUND_DETAILS = MANAGER_ID + 80;
//3.7.81 合成信息(MANAGERID_COMPOUND_INFO)
MANAGERID_COMPOUND_INFO = MANAGER_ID + 81;
//3.7.82 合成(MANAGERID_COMPOUND)
MANAGERID_COMPOUND = MANAGER_ID + 82;
//3.7.83平台游戏PAD版本检测(MANAGERID_PAD_LIVE_UPDATE)
MANAGERID_PAD_LIVE_UPDATE = MANAGER_ID + 83;
//3.7.84 宝盒：获取宝藏V2(BAOHE_GET_TREASURE_V2)
BAOHE_GET_TREASURE_V2 = MANAGER_ID + 84;
//3.7.85 兑奖券碎片合成详情
MANAGERID_PIECES_COMPOUND_DETAILS_V2 = MANAGER_ID + 85;
//3.7.86 兑奖券碎片合成(MANAGERID_COMPOUND_V2)
MANAGERID_COMPOUND_V2 = MANAGER_ID + 86;
//3.7.87 荣誉值兑换金币(MANAGERID_HONOR2COIN_INFO)
MANAGERID_HONOR2COIN_INFO = MANAGER_ID + 87;
//3.7.88 荣誉值兑换(MANAGERID_HONOR2COIN_EXCHANGE)
MANAGERID_HONOR2COIN_EXCHANGE = MANAGER_ID + 88;
//3.7.89 获取兑奖券碎片商城列表(MANAGERID_GET_PIECES_SHOP_LIST)
MANAGERID_GET_PIECES_SHOP_LIST = MANAGER_ID + 89;
//3.7.90 兑奖券碎片兑奖(MANAGERID_PIECES_EXCHANGE)
MANAGERID_PIECES_EXCHANGE = MANAGER_ID + 90;
//3.7.91 游戏退出提醒信息(MANAGERID_QUIT_REMIND)
MANAGERID_QUIT_REMIND = MANAGER_ID + 91;
//3.7.92 Ping参数(MANAGERID_PING_PARAM)
MANAGERID_PING_PARAM = MANAGER_ID + 92;
//3.7.93 Ping结果(MANAGERID_PING_RESULT)
MANAGERID_PING_RESULT = MANAGER_ID + 93;
//3.7.94 移动支付方式(MANAGERID_MOBILE_PAYMENT_MODE)
MANAGERID_MOBILE_PAYMENT_MODE = MANAGER_ID + 94;
//3.7.95 电信支付方式(MANAGERID_CT_PAYMENT_MODE)
MANAGERID_CT_PAYMENT_MODE = MANAGER_ID + 95;
//3.7.97 lua脚本版本检测(MANAGERID_LUA_SCRIPT_VERSION)
MANAGERID_LUA_SCRIPT_VERSION = MANAGER_ID + 97;
//3.7.98 lua脚本版本MD5校验(MANAGERID_LUA_SCRIPT_MD5)
MANAGERID_LUA_SCRIPT_MD5 = MANAGER_ID + 98;
//3.7.99 请求删除IMEI下绑定的用户账号(MANAGERID_DELETE_IMEIUSERS)
MANAGERID_DELETE_IMEIUSERS = MANAGER_ID + 99;
//3.7.100 小游戏列表状态消息(MANAGERID_MINIGAME_LIST_TYPE)
MANAGERID_MINIGAME_LIST_TYPE = MANAGER_ID + 100
//3.7.101 牌桌请求举报消息(MANAGERID_PLAYER_REPORT)
MANAGERID_PLAYER_REPORT = MANAGER_ID + 101
//3.7.106扎金花新手引导详情（MANAGERID_GET_JINHUA_USER_GUIDE_INFO）
MANAGERID_GET_JINHUA_USER_GUIDE_INFO = MANAGER_ID + 106
//3.7.107 扎金花领取新手引导奖励(MANAGERID_GET_JINHUA_USER_GUIDE_PRIZE)
MANAGERID_GET_JINHUA_USER_GUIDE_PRIZE = MANAGER_ID + 107
//3.7.108 查看是否有新公告
MANAGERID_GET_HAVE_NEW_GONGGAO = MANAGER_ID + 108
//3.7.109 获取活动网址【V3客户端】
MANAGERID_V3_GET_ACTIVITY_LIST = MANAGER_ID + 109
//3.7.110 获取每日签到信息
MANAGERID_DAILY_SIGN_V4 = MANAGER_ID + 110
//3.7.111 获取是否有新活动【Lua客户端】
MANAGERID_GET_HAVE_NEW_HUODONG = MANAGER_ID + 111
//3.7.112 获取可兑奖的奖品列表
MANAGERID_GET_EXCHANGBLE_AWARDS = MANAGER_ID + 112
//3.7.113 联通支付方式 (MANAGERID_CU_PAYMENT_MODE)
MANAGERID_CU_PAYMENT_MODE = MANAGER_ID + 113;
//3.7 114 获取大厅公告
MANAGERID_GET_SYSTEM_LIST_NOTICE = MANAGER_ID + 114
//3.7 115 获取大厅按钮状态
MANAGERID_GET_BUTTONS_STATUS = MANAGER_ID + 115
//iap支付 V2
MANAGERID_VALIDATE_IAP_V2 = MANAGER_ID + 116
//3.7 117 斗地主游戏3.04退出框
MANAGERID_QUIT_GUIDE = MANAGER_ID + 117
//3.7.121支付V3(MANAGERID_V3_RECHARGE)
MANAGERID_V3_RECHARGE = MANAGER_ID + 121;
//3.7.122 VIPV2提示信息
MANAGERID_VIPV2_TIP_INFO = MANAGER_ID + 122
//3.7.123 VIPV2 获取vip开通礼包
MANAGERID_VIPV2_GET_GIFTBAG = MANAGER_ID + 123
//大厅红点消息
MANAGERID_REQUEST_REDP = MANAGER_ID + 118
//删除大厅红点消息
MANAGERID_REMOVE_REDP = MANAGER_ID + 119
//推送消息
NOTIFICATION_PUSH_LIST_V2 = MANAGER_ID + 125
//备选奖品消息
GET_ALTERNATIVE_PRIZE_V2 = MANAGER_ID + 126
//手机卡兑奖
Rechargeable_Card_AWARD_V2 = MANAGER_ID + 127
//3.7 129 小游戏列表状态消息(支持单个功能的脚本更新)
MANAGERID_MINIGAME_LIST_TYPE_V2 = MANAGER_ID + 129
//3.7.130 内置德州用户信息消息(MANAGERID_POKER_USERINFO)
MANAGERID_POKER_USERINFO = MANAGER_ID + 130
//3.7.131 服务器推送发短信任务
MANAGERID_SEND_SMS_TASK = MANAGER_ID + 131
//3.7.134 客户端返回大厅通知 (MANAGERID_BACK_HALL_NOTIFY)
MANAGERID_BACK_HALL_NOTIFY = MANAGER_ID + 134
//3.7.135发起代付(MANAGERID_START_HELP_PAY)
MANAGERID_START_HELP_PAY = MANAGER_ID + 135
//3.7.136 支付代付(MANAGERID_DEAL_HELP_PAY)
MANAGERID_DEAL_HELP_PAY = MANAGER_ID + 136
//3.7.137找人代付(MANAGERID_FIND_HELP_PAY)
MANAGERID_FIND_HELP_PAY = MANAGER_ID + 137
//3.7.138 lua脚本版本检测V2 (MANAGERID_LUA_SCRIPT_VERSION_V2)
MANAGERID_LUA_SCRIPT_VERSION_V2 = MANAGER_ID + 138
//3.7.139 lua脚本版本资源列表路径MD5上传（MANAGERID_LUA_FILE_PATH_UP)
MANAGERID_LUA_FILE_PATH_UP = MANAGER_ID + 139
//3.7.140 添加android devicetoken（MANAGERID_ADD_ANDROID_DEVICE_TOKEN)
MANAGERID_ADD_ANDROID_DEVICE_TOKEN = MANAGER_ID + 140
//3.7.141 背包物品列表V2(MANAGERID_BACKPACK_LIST_V2)
MANAGERID_BACKPACK_LIST_V2 = MANAGER_ID + 141;
//3.7.142 微信绑定(MANAGERID_WECHAT_BIND)
MANAGERID_WECHAT_BIND = MANAGER_ID + 142;
//3.7.143 是否是微信绑定用户(MANAGERID_IS_BIND_WECHAT)
MANAGERID_IS_BIND_WECHAT = MANAGER_ID + 143;
//3.7.144 赠送礼物(MANAGERID_SEND_GIFT)
MANAGERID_SEND_GIFT = MANAGER_ID + 144;
//3.7.145 背包使用礼物(MANAGERID_USE_GIFT)
MANAGERID_USE_GIFT = MANAGER_ID + 145;
//3.7.146 获取用户礼物数量(MANAGERID_USER_GIFT_NUMBER)
MANAGERID_USER_GIFT_NUMBER = MANAGER_ID + 146;
//3.7.147服务器列表 (MANAGERID_SERVER_LIST)
MANAGERID_SERVER_LIST = MANAGER_ID + 147;
//3.7.148上传联网IP (MANAGERID_NETWORK_IP)
MANAGERID_NETWORK_IP = MANAGER_ID + 148;
//3.7.154 获取服务器通用开关配置V2(MANAGERID_GET_SERVER_CONFIG_V2)
MANAGERID_GET_SERVER_CONFIG_V2 = MANAGER_ID + 154;
//3.7.155 获取绑定手机号基本信息 (MANAGERID_GET_BINDING_PHONE_INFO)
MANAGERID_GET_BINDING_PHONE_INFO = MANAGER_ID + 155;
//3.7.156 获取小游戏推广 (MANAGERID_GET_MINIGAME_PROMOTION)
MANAGERID_GET_MINIGAME_PROMOTION = MANAGER_ID + 156;
//3.7.157 获取当前手机用户登录列表信息(MANAGERID_USERLIST_FROM_IMIE)
MANAGERID_USERLIST_FROM_IMIE = MANAGER_ID + 157;
//3.7.158 获取用户绑定微信信息(MANAGERID_HINT_BIND_WECHAT)
MANAGERID_HINT_BIND_WECHAT = MANAGER_ID + 158;
//3.7.164 小游戏列表V3(MANAGERID_MINIGAME_LIST_TYPE_V3)
MANAGERID_MINIGAME_LIST_TYPE_V3 = MANAGER_ID + 164;
//3.7.165 请求红包信息(MANAGERID_GET_RED_PACKETS_INFO)
MANAGERID_GET_RED_PACKETS_INFO = MANAGER_ID + 165;
//3.7.166 请求领取红包(MANAGERID_RECEIVE_RED_PACKETS)
MANAGERID_RECEIVE_RED_PACKETS = MANAGER_ID + 166;
// 3.7.167 请求是否可以弹出appstore评价(APPSTORE_COMMENT_GUIDE)
APPSTORE_COMMENT_GUIDE = MANAGER_ID + 167;

//[[//////////////////////-礼包模块GIFTBAG_ID 消息//////////////////////]]

//3.8.1 获取用户充值信息(GIFTBAGID_USER_ENCHARGE_INFO)
GIFTBAGID_USER_ENCHARGE_INFO = GIFTBAG_ID + 1;
//3.8.2 获取礼包信息(GIFTBAGID_GET_GIFT_DATA)
GIFTBAGID_GET_GIFT_DATA = GIFTBAG_ID + 2; //////////////////- 停用
// 3.8.3 通用礼包请求消息(GIFTBAGID_REQUIRE_GIFTBAG)
GIFTBAGID_REQUIRE_GIFTBAG = GIFTBAG_ID + 3;
//3.8.4 推送单套餐礼包(GIFTBAGID_PUSH_SINGLE_GIFTBAG)
GIFTBAGID_PUSH_SINGLE_GIFTBAG = GIFTBAG_ID + 4; //////////////////- 停用
// 3.8.5 推送双核礼包(GIFTBAGID_PUSH_DUAL_GIFTBAG)
GIFTBAGID_PUSH_DUAL_GIFTBAG = GIFTBAG_ID + 5;
//3.8.6 使用元宝购买礼包(GIFTBAGID_BUY_GIFTBAG)
GIFTBAGID_BUY_GIFTBAG = GIFTBAG_ID + 6;
//3.8.7 客户端展示礼包(GIFTBAGID_SHOW_GIFTBAG)
GIFTBAGID_SHOW_GIFTBAG = GIFTBAG_ID + 7;
//3.8.8 用户礼包状态(GIFTBAGID_GET_GIFTBAG_MSG)
GIFTBAGID_GET_GIFTBAG_MSG = GIFTBAG_ID + 8;
//3.8.9 用户可购买礼包列表(GIFTBAGID_GIFTBAG_LIST)
GIFTBAGID_GIFTBAG_LIST = GIFTBAG_ID + 9;
//3.8.10 用户删除背包礼包列表(GIFTBAGID_PUSH_DELBACKLIST)
GIFTBAGID_PUSH_DELBACKLIST = GIFTBAG_ID + 10;
//3.8.11 用户背包中新礼包状态(GIFTBAGID_NEWGIFT_TYPE)
GIFTBAGID_NEWGIFT_TYPE = GIFTBAG_ID + 11;
//3.8.12 请求特殊物品充值引导数据(GIFTBAGID_SPECIAL_INFO)
GIFTBAGID_SPECIAL_INFO = GIFTBAG_ID + 12;
//3.8.13 首充礼包图标是否显示(GIFTBAGID_SHOW_FIRSTPAY_ICON)
GIFTBAGID_SHOW_FIRSTPAY_ICON = GIFTBAG_ID + 13;
//3.8.14 请求循环礼包(GIFTBAGID_GET_LOOP_GIFT)
GIFTBAGID_GET_LOOP_GIFT = GIFTBAG_ID + 14;
//3.8.16 用户可购买礼包列表(精简)(GIFTBAGID_GIFTBAG_LIST_SIMPLE)
GIFTBAGID_GIFTBAG_LIST_SIMPLE = GIFTBAG_ID + 16;

//[[//////////////////////-公用消息块头模块//////////////////////]]

//获取活动列表
COMM_GET_OPERATIONAL_TASKS_LIST = COMMONS_ID + 1;
//获取排行榜信息
RankListGetRankDataBean = COMMONS_ID +2
//检查自己的排名
RankListCheckSelfRankingBean = COMMONS_ID +3
//游戏间推广消息
COMM_GAME_MUTUAL_PROMOTION = COMMONS_ID + 4;
//每日登录送金信息
LoginGift = COMMONS_ID +5
//获取初始化时月签数据
MonthlySignV2 = COMMONS_ID +7
//新月签 签到消息
RetroactiveSign = COMMONS_ID +8
//新版月签补签消息
GetMonthlySignData = COMMONS_ID +6
//获取新月签奖励的信息
GetMonthlySignAwardInfo = COMMONS_ID +9
//新月签增加奖励
AddAward = COMMONS_ID +10
//获取登录奖励
GetLoginGift = COMMONS_ID +11
//跳过新手引导
COMMONS_SKIP_NEWUSERGUIDE = COMMONS_ID + 12
//获取新手引导基本信息
COMMONS_GET_BASEINFO_NEWUSERGUIDE = COMMONS_ID + 13
//领取新手引导奖励
COMMONS_GET_NEWUSERGUIDE_AWARD = COMMONS_ID + 14
//同步新手引导状态
COMMONS_SYN_NEWUSERGUIDE_STATE = COMMONS_ID + 15
//新手任务信息
COMMONS_V3_NEWUSER_TASK_INFO = COMMONS_ID + 16
//新手任务是否完成
COMMONS_V3_NEWUSER_TASK_IS_COMPLETE = COMMONS_ID + 17
//新手任务领取奖励
COMMONS_V3_NEWUSER_TASK_AWARD = COMMONS_ID + 18
//请求新手引导方案
COMMONS_GET_NEWUSERGUIDE_SCHEME = COMMONS_ID + 19
//根据URL获取web页面源码
COMMONS_HTTPPROXY = COMMONS_ID + 20
//新手引导开关
COMMONS_GET_NEWUSERGUIDE_IS_OPEN = COMMONS_ID + 21
//请求充值榜新手引导文字
COMMONS_GET_RECHARGE_NEWUSER_GUIDE_MSG = COMMONS_ID + 22
//请求充值榜鼓励描述
COMMONS_GET_RECHARGE_ENCOURAGE_MSG = COMMONS_ID + 23
//充值排行榜消息
RANKLIST_RECHARGE_DATA = COMMONS_ID + 24
//土豪排行榜消息
RANKLIST_COIN_DATA = COMMONS_ID + 25
//赚金排行榜消息
RANKLIST_EARN_COIN_DATA = COMMONS_ID + 26
//魅力排行榜消息
RANKLIST_CHARM_DATA = COMMONS_ID + 27
//3.16.30 成就任务列表（COMMONS_LIFETIME_TASKLIST）
COMMONS_LIFETIME_TASKLIST = COMMONS_ID + 30
//3.16.31 领取成就任务奖励（COMMONS_GET_LIFETIME_TASKPRIZE）
COMMONS_GET_LIFETIME_TASKPRIZE = COMMONS_ID + 31
//3.16.32 每日任务列表（COMMONS_DAILYTASK）
COMMONS_DAILYTASK = COMMONS_ID + 32
//3.16.33 领取每日任务奖励（COMMONS_GET_DAILYTASK_PRIZE）
COMMONS_GET_DAILYTASK_PRIZE = COMMONS_ID + 33
//3.16.34 更新IMEI（COMMONS_UPDATE_IMEI）
COMMONS_UPDATE_IMEI = COMMONS_ID + 34

//3.16.36 出售背包道具（COMMONS_BACK_PACK_RECLAIM）
COMMONS_BACK_PACK_RECLAIM = COMMONS_ID + 36

//[[//////////////////////-活动消息模块//////////////////////]]

//得到APK下载任务（领任务）
OPERID_GET_DOWNLOAD_APK_TASK = OPER_ID + 1;
//完成APK下载人物（交任务）
OPERID_COMPLETE_DOWNLOAD_APK_TASK = OPER_ID + 2;
//3.14.2 提交用户事件消息(STAID_COMMIT_USER_EVENT)
OPERID_COMMIT_USER_EVENT = OPER_ID + 3;
//获取哪些事件需要发送服务器
OPERID_QUERY_AVAILABLE_USER_EVENT_LIST = OPER_ID + 4;

OPERID_ACTIVITY_MARQUEE = OPER_ID + 11
//3.15.26 宝盒V3：获取宝盒进度(BAOHE_V4_GET_PRO)
BAOHE_V4_GET_PRO = OPER_ID + 26
//3.15.27 宝盒V3：获取宝盒列表(BAOHE_V4_GET_LIST)
BAOHE_V4_GET_LIST = OPER_ID + 27
//3.15.28 宝盒V3：宝盒领奖(BAOHE_V4_GET_PRIZE)
BAOHE_V4_GET_PRIZE = OPER_ID + 28
//3.15.18 请求现金奖品列表 (OPERID_GET_CASH_AWARD_LIST)
OPERID_GET_CASH_AWARD_LIST = OPER_ID + 18
//3.15.19 请求同步现金限量奖品数量 (OPERID_GET_CASH_AWARD_REMAINDER)
OPERID_GET_CASH_AWARD_REMAINDER = OPER_ID + 19
//3.15.20 请求兑换限量奖品 (OPERID_EXCHANGE_LIMITED_AWARD)
OPERID_EXCHANGE_LIMITED_AWARD = OPER_ID + 20
//转盘基本信息
TURNTABLE_BASIC_INFO = OPER_ID + 21;
//转盘抽奖信息
TURNTABLE_LOTTERY_INFO = OPER_ID + 22;
//月签奖励列表
MONTH_SIGN_REWARD_LIST = OPER_ID + 23;
//用户月签基本信息
USERS_MONTH_SIGN_BASIC_INFO = OPER_ID + 24;
//月签签到
SIGN_TO_MONTH_SIGN = OPER_ID + 25;
//3.15.29 请求我的奖品中现金奖品列表 (OPERID_GET_CASH_PRIZE_LIST)
OPERID_GET_CASH_PRIZE_LIST = OPER_ID + 29
//3.15.30 请求现金奖品兑现成话费 (OPERID_PRIZE_EXCHANGE_MOBILE_FARE)
OPERID_PRIZE_EXCHANGE_MOBILE_FARE = OPER_ID + 30
//3.15.31请求现金奖品兑现成金币(OPERID_PRIZE_EXCHANGE_GAME_COIN)
OPERID_PRIZE_EXCHANGE_GAME_COIN = OPER_ID + 31
//3.15.32闯关赛基本信息(OPERID_CRAZY_GAME_USER_INFO)
OPERID_CRAZY_STAGE_BASE_INFO = OPER_ID + 32
//3.15.33 开始闯关消息(OPERID_CRAZY_STAGE_BEGIN)
OPERID_CRAZY_STAGE_BEGIN = OPER_ID + 33
//3.15.34 闯关结果(OPERID_CRAZY_STAGE_RESULT)
OPERID_CRAZY_STAGE_RESULT = OPER_ID + 34
//3.15.35 闯关领奖消息(OPERID_CRAZY_STAGE_RECEIVE_AWARD)
OPERID_CRAZY_STAGE_RECEIVE_AWARD = OPER_ID + 35
//3.15.36 闯关复活(OPERID_CRAZY_STAGE_RELIVE)
OPERID_CRAZY_STAGE_RELIVE = OPER_ID + 36
//3.15.37 闯关重置消息(OPERID_CRAZY_STAGE_RESET)
OPERID_CRAZY_STAGE_RESET = OPER_ID + 37
//3.15.38 闯关排行榜(OPERID_CRAZY_STAGE_RANK)
OPERID_CRAZY_STAGE_RANK = OPER_ID + 38
//3.15.39 闯关开始打牌验证消息(OPERID_CRAZY_STAGE_VALIDATE)
OPERID_CRAZY_STAGE_VALIDATE = OPER_ID + 39
//3.15.40 闯关昨日获取奖励提示消息(OPERID_CRAZY_STAGE_TOMORROW_ARWARDS)
OPERID_CRAZY_STAGE_YESTERDAY_AWARDS = OPER_ID + 40
//3.15.41 免费金币(OPERID_FREE_COIN)
OPERID_FREE_COIN = OPER_ID + 41
//3.15.43 领取游戏分享奖励(OPERID_REQUEST_GAME_SHARING_REWARD)
OPERID_REQUEST_GAME_SHARING_REWARD = OPER_ID + 43
//3.15.44 请求游戏分享累计奖励(OPERID_GAME_SHARING_ALL_REWARD)
OPERID_GAME_SHARING_ALL_REWARD = OPER_ID + 44
//3.15.45 宝盒V4新手预读奖励(OPERID_PREREADING_BAOHEV4_NEW_PERSON_REWARD)
OPERID_PREREADING_BAOHEV4_NEW_PERSON_REWARD = OPER_ID + 45
//3.15.46 XY平台新用户礼包兑换
OPERID_XYPLATFORM_GIFTBAG_EXCHANGE = OPER_ID + 46;
//3.15.47 分享V2分享下载地址预读(OPERID_SHARINGV2_PRE_READING_DOWNLOAD_URL)
OPERID_SHARINGV2_PRE_READING_DOWNLOAD_URL = OPER_ID + 47
//3.15.48 分享V2 IOS是否可以填写好友ID(OPERID_SHARINGV2_IOS_IS_ADD_OLD_FRIEND)
OPERID_SHARINGV2_IOS_IS_ADD_OLD_FRIEND = OPER_ID + 48
//3.15.49 分享V2 IOS绑定好友关系(OPERID_SHARINGV2_IOS_BINDING_OLD_FRIEND)
OPERID_SHARINGV2_IOS_BINDING_OLD_FRIEND = OPER_ID + 49
//3.15.50 分享奖励说明
OPERID_SHARING_REWARD_DESCRIPTION = OPER_ID + 50;
//3.15.51 请求红包分享V3基本信息
OPERID_SHARING_V3_BASE_INFO = OPER_ID + 51
//3.15.52 新玩家首次领取红包V3奖励
OPERID_SHARING_V3_NEW_PLAYER_GET_RP_REWARD = OPER_ID + 52
//3.15.53红包V3新玩家首次分享
OPERID_SHARING_V3_GET_NEW_PLAYER_FIRST_SHARING_REWARD = OPER_ID + 53
//3.15.54 运营活动列表消息(OPERID_GET_OPER_TASK_LIST_V2)
OPERID_GET_OPER_TASK_LIST_V2 = OPER_ID + 54
//3.15.55 每日登陆公告消息(OPERID_GET_DAILY_NOTIFY_INFO)
OPERID_GET_DAILY_NOTIFY_INFO = OPER_ID + 55
//3.15.56愚人节活动排行榜(TRICKYPARTY_RANK_LIST)
TRICKYPARTY_RANK_LIST = OPER_ID + 56
//3.15.57 闯关今日排行榜(OPERID_CRAZY_STAGE_TODAY_RANK)
OPERID_CRAZY_STAGE_TODAY_RANK = OPER_ID + 57
//3.15.63 新每日登陆公告信息
NEW_OPERID_GET_DAILY_NOTIFY_INFO = OPER_ID + 63
//3.15.69 闯关赛关卡奖励信息
CRAZY_STAGE_LEVEL_REWARD_INFO = OPER_ID + 69
//交叉推广消息
CROSS_PROMOTION_DATA = OPER_ID + 71
//交叉推广消息 下载
CORSS_PROMOTION_DOWNLOAD = OPER_ID + 72
//3.15.73领取安智推广活动奖励(AZ_REWARD_COIN)
AZ_REWARD_COIN = OPER_ID + 73
//APPSTORE评价站内信奖励
APPSTORE_COMMENT_COIN = OPER_ID + 78
//3.15.79 闯关体力值同步消息(OPERID_CRAZY_VIGOR_SYNC)
OPERID_CRAZY_VIGOR_SYNC = OPER_ID + 79
//3.15.80 获取大厅小游戏活动气泡消息(OPERID_GET_MINIGAME_ACTIVITY_MSG)
OPERID_GET_MINIGAME_ACTIVITY_MSG = OPER_ID + 80
//3.15.82 交叉推广消息（CROSS_PROMOTION_DATA_V2）
CROSS_PROMOTION_DATA_V2 = OPER_ID + 82
//3.15.83 交叉推广开始下载通知（CORSS_PROMOTION_DOWNLOAD_V2）
CORSS_PROMOTION_DOWNLOAD_V2 = OPER_ID + 83
//3.15.84 下载小游戏完整包消息（MINIGAME_DOWNLOAD_PROMOTION）
MINIGAME_DOWNLOAD_PROMOTION = OPER_ID + 84
//3.15.86 用户自分享基本信息(OPERID_USERSHARE_INFO)
OPERID_USERSHARE_INFO = OPER_ID + 86
//3.15.87 用户自分享基本信息(OPERID_USER_SHARE_BASICINFO)
OPERID_USER_SHARE_BASICINFO = OPER_ID + 87
//3.15.88 用户自分享成功后领取奖励(OPERID_USER_SHARE_SUCCEES_GETAWARD)
OPERID_USER_SHARE_SUCCEES_GETAWARD = OPER_ID + 88

//[[//////////////////////-站内消息 MAILID 消息//////////////////////]]
MAIL_SYSTEM_MESSGE_LIST = MAILID + 1;
MAIL_SYSTEM_MESSAGE_RECEIVE_AWARD = MAILID + 2;
MAIL_SYSTEM_MESSAGE_READ = MAILID + 3;
MAIL_UNREAD_SEND = MAILID + 6
MAIL_DELETE = MAILID + 7
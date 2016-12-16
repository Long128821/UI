var profile_user= {
    UserTable:{},//账户列表,存储一些基本数据
    //UserID
    getSelfUserID:function(){
        var value= this.UserTable["SelfInfo"].UserID;
        return (value== undefined?0:value);
    },
    setSelfUserID:function(userID){
        this.UserTable["SelfInfo"].UserID= userID;
    },

    //昵称
    getSelfNickName:function(){
        var value= this.UserTable["SelfInfo"].NickName;
        return (value== undefined?0:value);
    },
    setSelfNickName:function(nickName){
        this.UserTable["SelfInfo"].NickName= nickName;
    },

    //密码
    getSelfPassword:function(){
        var value= this.UserTable["SelfInfo"].Password;
        return (value== undefined?0:value);
    },
    setSelfPassword:function(password){
        this.UserTable["SelfInfo"].Password= password;
    },

    //头像
    getSelfPhotoUrl:function(){
        var value= this.UserTable["SelfInfo"].PhotoUrl;
        return (value== undefined?0:value);
    },
    setSelfPhotoUrl:function(photoUrl){
        this.UserTable["SelfInfo"].PhotoUrl= photoUrl;
    },

    //金币数
    getSelfCoin:function(){
        var value= this.UserTable["SelfInfo"].Coin;
        return (value== undefined?0:value);
    },
    setSelfCoin:function(coin){
        this.UserTable["SelfInfo"].Coin= coin;
    },

    //玩家等级
    getSelfLevel:function(){
        var value= this.UserTable["SelfInfo"].Level;
        return (value== undefined?0:value);
    },
    setSelfLevel:function(level){
        this.UserTable["SelfInfo"].Level= level;
    },

    //玩家性别
    getSelfSex:function(){
        var value= this.UserTable["SelfInfo"].Sex;
        return (value== undefined?0:value);
    },
    setSelfSex:function(sex){
        this.UserTable["SelfInfo"].Sex= sex;
    },


    //Vip等级
    getSelfVipLevel:function(){
        var value= this.UserTable["SelfInfo"].VipLevel;
        return (value== undefined?0:value);
    },
    setSelfVipLevel:function(vipLevel){
        this.UserTable["SelfInfo"].VipLevel= vipLevel;
    },

    //元宝数
    getSelfYuanBao:function(){
        var value= this.UserTable["SelfInfo"].YuanBao;
        return (value== undefined?0:value);
    },
    setSelfYuanBao:function(yuanBao){
        this.UserTable["SelfInfo"].YuanBao= yuanBao;
    },

    //称号
    getSelfHonor:function(){
        var value= this.UserTable["SelfInfo"].Honor;
        return (value== undefined?0:value);
    },
    setSelfHonor:function(honor){
        this.UserTable["SelfInfo"].Honor= honor;
    },

    //魅力值
    getSelfCharm:function(){
        var value= this.UserTable["SelfInfo"].Charm;
        return (value== undefined?0:value);
    },
    setSelfCharm:function(charm){
        this.UserTable["SelfInfo"].Charm= charm;
    },
    //魅力值
    getSelfCharmLevel:function(){
        var value= this.UserTable["SelfInfo"].CharmLevel;
        return (value== undefined?0:value);
    },
    setSelfCharmLevel:function(level){
        this.UserTable["SelfInfo"].CharmLevel= level;
    },
    //局数
    getSelfInnings:function(){
        var value= this.UserTable["SelfInfo"].Innings;
        return (value== undefined?0:value);
    },
    setSelfInnings:function(innings){
        this.UserTable["SelfInfo"].Innings= innings;
    },
    //局数
    getSelfWinPer:function(){
        var value= this.UserTable["SelfInfo"].WinPer;
        return (value== undefined?0:value);
    },
    setSelfWinPer:function(winPer){
        this.UserTable["SelfInfo"].WinPer= winPer;
    },
    //玩家当前等级所拥有的经验值
    getSelfLevelExp:function(){
        var value= this.UserTable["SelfInfo"].LevelExp;
        return (value== undefined?0:value);
    },
    setSelfLevelExp:function(levelExp){
        this.UserTable["SelfInfo"].LevelExp= levelExp;
    },
    //玩家当前等级最大经验值
    getSelfLevelExpMax:function(){
        var value= this.UserTable["SelfInfo"].LevelExpMax;
        return (value== undefined?0:value);
    },
    setSelfLevelExpMax:function(levelExpMax){
        this.UserTable["SelfInfo"].LevelExpMax= levelExpMax;
    },

    //初始化账户数据，登录或者注册时，切换账户
    initUserInfo:function(userID){
        if(userID== this.getSelfUserID()){
            this.UserTable["SelfInfo"]= {};
            this.UserTable["OtherInfo"]= {};
        }
    },
    //读取用户消息
    readJINHUA_MGR_USER_INFO:function(dataTable){
        this.setSelfNickName(dataTable["nickName"]);
        this.setSelfCoin(dataTable["Coin"]);
        this.setSelfLevel(dataTable["Level"]);
        this.setSelfSex(dataTable["Sex"]);
        this.setSelfCharm(dataTable["Charm"]);
        this.setSelfCharmLevel(dataTable["CharmLv"]);
        this.setSelfInnings(dataTable["Innings"]);
        this.setSelfWinPer(dataTable["winPer"]);
        this.setSelfLevelExpMax(dataTable["LevelExpMax"]);
        this.setSelfLevelExp(dataTable["LevelExp"]);
    },
    //登录成功
    readBASEID_LOGIN:function(dataTable){
        this.setSelfNickName(dataTable["NickName"]);
        this.setSelfCoin(dataTable["Coin"]);
        this.setSelfYuanBao(dataTable["yuanbao"]);
        this.setSelfPhotoUrl(dataTable["PhotoUrl"]);
        this.setSelfVipLevel(dataTable["VipLevel"]);
    },
    //注册成功
    readBASEID_REGISTER:function(dataTable){
        this.setSelfUserID(dataTable["UserID"]);
        this.setSelfNickName(dataTable["NickName"]);
        this.setSelfPassword(dataTable["Password"]);
        this.setSelfCoin(dataTable["Coin"]);
        this.setSelfYuanBao(dataTable["YuanBao"]);
        this.setSelfHonor(dataTable["honor"]);
    },
    //进入大厅
    //注册成功
    readBASEID_GET_BASEINFO:function(dataTable){
        this.setSelfUserID(dataTable["UserID"]);
        this.setSelfNickName(dataTable["NickName"]);
        this.setSelfPhotoUrl(dataTable["PhotoUrl"]);
        this.setSelfCoin(dataTable["Coin"]);
        this.setSelfLevel(dataTable["VipLevel"]);
        this.setSelfSex(dataTable["Sex"]);
        this.setSelfYuanBao(dataTable["yuanbao"]);
        this.setSelfHonor(dataTable["Honor"]);
//        //Age	byte	年龄
//        dataTable["Age"]= nmBaseMessage.readByte();
//        //City	text	城市	如 :北京-海淀
//        dataTable["City"]= nmBaseMessage.readUTF16();
//        //PhotoUrl UTF16 头像URL
//        dataTable["PhotoUrl"]= nmBaseMessage.readUTF16();
//        //sign	text	个性签名
//        dataTable["Sign"]= nmBaseMessage.readUTF16();
//        //DuiJiangQuan  兑奖券
//        dataTable["DuiJiangQuan"]= nmBaseMessage.readInt();
//        //commendationCnt  奖状数
//        dataTable["commendationCnt"]= nmBaseMessage.readInt();
//        //djqPieces  兑奖券碎片
//        dataTable["djqPieces"]= nmBaseMessage.readInt();
    }
//    //第三方平台ID
//    setUserThirdPartPlatId:function(thirdPartPlatId){
//        this.UserTable["SelfInfo"].ThirdPartPlatId= thirdPartPlatId;
//    },
//    getUserThirdPartPlatId:function(){
//        var value= this.UserTable["SelfInfo"].ThirdPartPlatId;
//        return (value== undefined?0:value);
//    }
};

profile_user.UserTable["SelfInfo"]= {};
profile_user.UserTable["OtherInfo"]= {};
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

    //初始化账户数据，登录或者注册时，切换账户
    initUserInfo:function(userID){
        if(userID== this.getSelfUserID()){
            this.UserTable["SelfInfo"]= {};
            this.UserTable["OtherInfo"]= {};
        }
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
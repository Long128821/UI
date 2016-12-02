//数据图集
var ProfileLogin= {
    mUserIDValue:0,//登录/注册界面存储的用户ID
    mUserNameValue:null,//登录/注册界面存储的用户昵称
    mPasswordValue:null,//登录/注册界面存储的用户密码
    isChangeAccount:false,//是否切换账户
    getLoginPassword:function(){
        return this.mPasswordValue;
    },
    setLoginPassword:function(password){
        this.mPasswordValue= password;
    },
    getLoginUserName:function(){
        return this.mUserNameValue;
    },
    setLoginUserName:function(userName){
        this.mUserNameValue= userName;
    },
    //切换账户
    setChangeAccount:function(isChange){
        this.isChangeAccount= isChange;
    },
    //切换账户时，更新账户数据
    initAllGameData:function(userID){
        if(this.isChangeAccount){
            this.isChangeAccount= false;
            profile_user.initUserInfo(userID);
        }
    },
    //在本地数据中，存储登录账户数据
    saveUserData:function(){
        var UserID = profile_user.getSelfUserID();
        var username = profile_user.getSelfNickName();
        var password = profile_user.getSelfPassword();

        if(UserID== 0|| username== null) return;

        console.log(window.localStorage.getItem("userInfo"));

        if(window.localStorage){//支持本地存储
            if(window.localStorage.getItem("userInfo")!= null){//已有数据
                var userInfo= window.localStorage.getItem("userInfo");//本地存储中，已经存在用户数据
                var userInfo_map= JSON.parse(userInfo);
                if((UserID== userInfo_map["UserID"])&&(username== userInfo_map["nickname"])&&(password== userInfo_map["password"])) return;
            }
            var userInfoMap = {};
            userInfoMap["UserID"] = UserID;
            userInfoMap["nickname"] = username;
            userInfoMap["password"] = password;

            //localStorage不支持直接存储对象，需要借助JSON.stringify转换为json串
            var str= JSON.stringify(userInfoMap);
            //本地存储
            window.localStorage.setItem("userInfo",str);
        }
    },
    //读取账户和密码
    readLocalStorageData:function(){
        if(window.localStorage) {//支持本地存储
            if (window.localStorage.getItem("userInfo") != null) {//已有数据
                var userInfo = window.localStorage.getItem("userInfo");//本地存储中，已经存在用户数据
                var userInfo_map = JSON.parse(userInfo);//将Json串转为Json对象

                ProfileLogin.setLoginUserName(userInfo_map["nickname"]);
                ProfileLogin.setLoginPassword(userInfo_map["password"]);
            }else{
                //Todo:测试时，如果本地没有本地存储，那么添加
                //记录登录账户的用户名和密码
                ProfileLogin.setLoginUserName("游客60372800");
                ProfileLogin.setLoginPassword("4137ac");
            }
        }
    },
    //界面收到登录信息后处理
    loginManage:function(dataTable){
        var result= dataTable.get("result");
        var resultText= dataTable.get("ResultTxt");

        console.log("登录:"+ result+" "+ resultText);

        if(result== 0){
            //初始化账户数据
            ProfileLogin.initAllGameData(ProfileLogin.isChangeAccount);

            //设置一些基本数据
            profile_user.setSelfUserID(dataTable.get("UserID"));
            profile_user.setSelfNickName(dataTable.get("NickName"));
            profile_user.setSelfPassword(ProfileLogin.mPasswordValue);
            profile_user.setSelfCoin(dataTable.get("Coin"));
            profile_user.setSelfYuanBao(dataTable.get("YuanBao"));
            //profile_user.setUserThirdPartPlatId(dataTable.get("ThirdPartPlatId"));

            //本地保存用户数据
            ProfileLogin.saveUserData();

            MvcEngine.getInstance().setNeedCreateModuleName(GUI_HALL);
        }else{
            //Todo:登录失败提示
            alert(resultText);
        }
    }
};

//登陆页面-首先读取本地数据
ProfileLogin.readLocalStorageData();
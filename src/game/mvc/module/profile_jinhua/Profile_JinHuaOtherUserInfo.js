//JINHUA_MGR_SETTING消息
var Profile_JinHuaOtherUserInfo= {
    JinHuaOtherUserInfoTable:null,//金花settingsTable
    //读取消息体
    readJINHUA_MGR_USER_INFO:function(dataTable){
        this.JinHuaOtherUserInfoTable= dataTable== undefined?{}:dataTable;
    },
    //获取table
    getUserInfoTable:function(){
        return this.JinHuaOtherUserInfoTable;
    },
    //是否为我的好友
    getIsFriend:function(){
        return Common.judgeValueIsEffect(this.JinHuaOtherUserInfoTable)&&Common.judgeValueIsEffect(this.JinHuaOtherUserInfoTable["isFriend"])&&(this.JinHuaOtherUserInfoTable["isFriend"]== 1);
    },
    //是否已追踪
    getIsTrack:function(){
        return Common.judgeValueIsEffect(this.JinHuaOtherUserInfoTable)&&Common.judgeValueIsEffect(this.JinHuaOtherUserInfoTable["isTrack"])&&(this.JinHuaOtherUserInfoTable["isTrack"]== 1);
    }
};
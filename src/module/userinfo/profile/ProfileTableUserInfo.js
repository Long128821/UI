//数据图标集
var TabTag= {
    Tab_mofa:0,//魔法表情
    Tab_gift:1,//收到的礼物
    Tab_shenglv:2,//胜率
    Tab_safety:3//保险箱
};
var ProfileTableUserInfo= {
    m_userInfoTable:{},
    m_bMySelf:false,//是否为玩家自己
    m_curTabTag:TabTag.Tab_mofa,//魔法
    m_bFriend:false,//是否为我的好友
    m_bTrack:false,//是否已追踪
    getUserInfoTable:function(){
        return this.m_userInfoTable;
    },
    setUserInfoTable:function(dataTable){
        this.m_userInfoTable= dataTable;
    },
    //设置是否为玩家自己
    setBMySelf:function(bMySelf){
        this.m_bMySelf= bMySelf== undefined?false:bMySelf;
    },
    //获取
    getBMySelf:function(){
        return this.m_bMySelf;
    },
    //获取当前tag
    getCurTabTag:function(){
        return this.m_curTabTag;
    },
    setCurTabTag:function(tabTag){
        this.m_curTabTag= tabTag==undefined?false:tabTag;
    },
    setBFriend:function(bFriend){
        this.m_bFriend= bFriend;
    },
    getBFriend:function(){
        return this.m_bFriend;
    },
    setBTrack:function(bTrack){
        this.m_bTrack= bTrack;
    },
    getBTrack:function(){
        return this.m_bTrack;
    },
    //添加追踪
    slot_JINHUA_MGR_ADD_TRACE:function(dataTable){
        Profile_JinHuaTrace.readJINHUA_MGR_ADD_TRACE(dataTable);
        TableUserInfoLogic.updateJINHUA_MGR_ADD_TRACE();
    },
    //取消追踪
    slot_JINHUA_MGR_DEL_TRACE:function(dataTable){
        Profile_JinHuaTrace.readJINHUA_MGR_DEL_TRACE(dataTable);
        TableUserInfoLogic.updateJINHUA_MGR_DEL_TRACE();
    }
};

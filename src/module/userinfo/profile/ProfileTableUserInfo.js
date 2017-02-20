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
    }
};

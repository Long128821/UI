//数据图标集
var ProfileTableUserInfo= {
    m_userInfoTable:{},
    m_bMySelf:false,//是否为玩家自己
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
    }
};

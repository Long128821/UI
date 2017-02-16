//数据图标集
var ProfileJinHuaChatPop= {
    m_arrChatLog:[],//历史聊天信息
    // 清空聊天历史数据
    clearLogList:function(){
        this.m_arrChatLog= [];
    },
    //获取聊天记录数量
    getChatLogLength:function(){
        return this.m_arrChatLog.length;
    },
    //获取聊天记录
    getChatLog:function(){
        return this.m_arrChatLog;
    },
    //追加聊天记录
    pushLogList:function(nickName,msg){
        var table = {
            nickName: nickName,
            msg: msg
        };
        this.m_arrChatLog.push(table);
    }
};

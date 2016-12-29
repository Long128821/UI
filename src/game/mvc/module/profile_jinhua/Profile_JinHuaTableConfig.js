//金花牌桌数据
var Profile_JinHuaTableConfig= {
    remainChangeCardCnt:0,//换牌卡数量
    remainNoPKCnt:0,//禁比数量
    playerCnt:5,//人数
    getRemainChangeCardCnt:function(){
        return this.remainChangeCardCnt;
    },
    setRemainChangeCardCnt:function(remainChangeCardCnt){
        this.remainChangeCardCnt= remainChangeCardCnt== undefined?0:remainChangeCardCnt;
    },
    getRemainNoPKCnt:function(){
        return this.remainNoPKCnt;
    },
    setRemainNoPKCnt:function(remainNoPKCnt){
        this.remainNoPKCnt= remainNoPKCnt== undefined?0:remainNoPKCnt;
    }
};
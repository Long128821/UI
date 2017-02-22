var Profile_JinHuaKickOut= {
    KickResultTable:{},//踢人消息
    BeKickOutTable:{},//被踢消息
    readJHGAMEID_KICK_OUT:function(dataTable){
        this.KickResultTable = dataTable;
    },
    readJHID_KICK_OUT_V2:function(dataTable){
        this.KickResultTable = dataTable;
    },
    getKickResultTable:function(){
        return this.KickResultTable;
    },
    getBeKickOutTable:function(){
        return this.BeKickOutTable;
    }
};
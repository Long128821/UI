var Profile_GameCommon= {
    SendBugleTable:{},//发送大喇叭
    BugleTable:{},//大喇叭table
    clearData:function(){
        this.SendBugleTable= {};
        this.BugleTable= {};
    },
    //获取OPERID_MGR_SEND_BUGLE
    getSendBugleTable:function(){
        return this.SendBugleTable;
    },
    //获取大喇叭
    getBugleTable:function(){
        return this.BugleTable;
    },
    //获取一条大喇叭数据
    getOneBugle:function(){
        if(Common.judgeValueIsEffect(this.BugleTable)&&Common.getTableSize(this.BugleTable)> 0){
            for(var key in this.BugleTable){
                return this.BugleTable[key];
            }
        }
        return null;
    },
    //移除第一条大喇叭数据
    removeOneBugle:function(){
        for(var key in this.BugleTable){
            delete  this.BugleTable[key];
            break;
        }
    },
    //使用大喇叭
    readOPERID_MGR_SEND_BUGLE:function(dataTable){
        this.SendBugleTable= dataTable;
    },
    //接受大喇叭
    readOPERID_SEND_ALL_BUGLE:function(dataTable){
        var bugle= dataTable;
        if(Common.judgeValueIsEffect(bugle)&&Common.judgeValueIsEffect(bugle.NickName)&&Common.judgeValueIsEffect(bugle.Message)){
            this.BugleTable[Common.getTableSize(this.BugleTable)]= bugle;
        }
    }
};
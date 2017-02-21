var Profile_JinHuaTrace= {
    AddTraceTable:{},
    DelTraceTable:{},
    TraceInfoTable:{},
    getAddTraceTable:function(){
        return this.AddTraceTable;
    },
    getDelTraceTable:function(){
        return this.DelTraceTable;
    },
    getTraceInfoTable:function(){
        return this.TraceInfoTable;
    },
    readJINHUA_MGR_ADD_TRACE:function(dataTable){
        this.AddTraceTable= dataTable;
    },
    readJINHUA_MGR_DEL_TRACE:function(dataTable){
        this.DelTraceTable= dataTable;
    },
    readJINHUA_MGR_TRACE_LIST:function(dataTable){
        this.TraceInfoTable= dataTable;
    }
};
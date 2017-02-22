/**
 * Created by Administrator on 2017/2/22.
 */
var Profile_JinHuaStrongBox= {
    StrongBoxInfoTable:{},//保险箱info
    //保险箱info
    readJHID_STRONG_BOX_INFO:function(dataTable){
        this.StrongBoxInfoTable = dataTable;
    },
    getStrongBoxInfoTable:function(){
        return this.StrongBoxInfoTable;
    }
};
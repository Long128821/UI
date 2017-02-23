/**
 * Created by Administrator on 2017/2/22.
 */
var Profile_JinHuaStrongBox= {
    StrongBoxInfoTable:{},//保险箱info
    SaveCoinTable:{},//存取款
    //保险箱info
    readJHID_STRONG_BOX_INFO:function(dataTable){
        this.StrongBoxInfoTable = dataTable;
    },
    getStrongBoxInfoTable:function(){
        return this.StrongBoxInfoTable;
    },
    //存取款
    readJHID_SAVE_TAKE_STRONG_BOX_COIN:function(dataTable){
        this.SaveCoinTable= dataTable;
    },
    getSaveCoinTable:function(){
        return this.SaveCoinTable;
    }
};
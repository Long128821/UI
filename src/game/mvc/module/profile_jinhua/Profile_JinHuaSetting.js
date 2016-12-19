//JINHUA_MGR_SETTING消息
var Profile_JinHuaSetting= {
    Timestamp:0,//时间戳
    JinHuaSettingTable:null,//金花settingsTable
    JinHuaTitleListTable:null,//称为列表
    isRecharged:false,//是否充过值
    //获取时间戳
    getTimeStamp:function(){
        return this.Timestamp;
    },
    //是否充过值
    getIsRecharged:function(){
        return this.isRecharged;
    },
    //读取消息体
    readJINHUA_MGR_SETTING:function(dataTable){
        if(dataTable== undefined||dataTable== null){
            this.Timestamp=0;//时间戳
            this.JinHuaSettingTable= null;//金花settingsTable
            this.JinHuaTitleListTable= null;//称为列表
            this.isRecharged= false;//是否充过值
        }else{
            this.JinHuaSettingTable= dataTable;//消息体
            this.JinHuaTitleListTable= this.JinHuaSettingTable["TitleList"];
            this.Timestamp= this.JinHuaSettingTable["Timestamp"];
            this.isRecharged= (this.JinHuaSettingTable["IsRecharged"]== 1);//是否充过值1-充过
        }
    },
    //获取在线时长
    getOnlinePlayerNumber:function(){
        //获取同时在线时长
        var onlinePlayerNumber = this.JinHuaSettingTable["onLineCnt"];
        return onlinePlayerNumber== undefined?0:onlinePlayerNumber;
    },
    //获取用户称号和用户等级
    getUserTitle:function(userCoin){
        var titleName = null;
        var level = 1;
        if(Common.judgeValueIsEffect(this.JinHuaTitleListTable)&&(Common.getTableSize(this.JinHuaTitleListTable)!= 0)){
           var coin= 0;
            if(!Common.judgeValueIsEffect(userCoin)){
                coin= profile_user.getSelfCoin();
            }else{
                coin= userCoin;
            }
            if(Common.judgeValueIsEffect(coin)){
                for(var i=0; i< Common.getTableSize(this.JinHuaTitleListTable);++i){
                    if(coin>= this.JinHuaTitleListTable[i].mincoin && coin< this.JinHuaTitleListTable[i].maxcoin){
                        titleName= this.JinHuaTitleListTable[i].name;
                        level= i+ 1;
                    }
                }
            }
        }
        return [titleName, level];
    }
};
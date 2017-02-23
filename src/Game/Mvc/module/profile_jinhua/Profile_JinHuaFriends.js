var Profile_JinHuaFriends= {
    FriendListTable:{},
    AddFriendTable:{},
    DelFriendTable:{},
    GiftResultTable:{},
    getFriendListTable:function(){
        return this.FriendListTable;
    },
    getAddFriendTable:function(){
        return this.AddFriendTable;
    },
    getDelFriendTable:function(){
        return this.DelFriendTable;
    },
    readJINHUA_MGR_ADD_FRIEND:function(dataTable){
        this.AddFriendTable= dataTable;
    },
    readJINHUA_MGR_DEL_FRIEND:function(dataTable){
        this.DelFriendTable= dataTable;
    },
    getAddFriendResult:function(){
        var result= {
            msg:null,
            tag:false
        };
        if(Common.judgeValueIsEffect(this.AddFriendTable)&&(Common.judgeValueIsEffect(this.AddFriendTable["Result"]))){
            var Result= this.AddFriendTable["Result"];
            switch (Result){
                case 1:
                    result.msg= "添加好友成功";
                    result.tag= true;
                    break;
                case 2:
                    result.msg= "添加好友失败,好友已达上限";
                    break;
                case 3:
                    result.msg= "添加好友失败,你们已经是好友了";
                    break;
                default :
                    result.msg= "添加好友失败";
                    break;
            }
        }
        return result;
    },
    getDelFriendResult:function(){
        var result= {
            msg:null,
            tag:false
        };
        if(Common.judgeValueIsEffect(this.DelFriendTable)&&(Common.judgeValueIsEffect(this.DelFriendTable["Result"]))){
            var Result= this.DelFriendTable["Result"];
            switch (Result){
                case 1:
                    result.msg= "删除好友成功";
                    result.tag= true;
                    break;
                default :
                    result.msg= "删除好友失败";
                    break;
            }
        }
        return result;
    },
    //发送礼物
    readJINHUA_MGR_SEND_GIFT:function(dataTable){
        this.GiftResultTable= dataTable;
    },
    getGiftResultTable:function(){
        return this.GiftResultTable;
    }
};

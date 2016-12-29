/**
 * Created by Administrator on 2016/12/15.
 */
var Profile_JinHuaGameData= {
    MALE:1,//男
    FEMALE:2,//女
    backPackGoodsCountData:null,
    GameData:null,
    mySelf:null,
    clearData:function(){
        this.backPackGoodsCountData= null;
        this.GameData= null;
    },
    getBackPackGoodsCountData:function(){
        return this.backPackGoodsCountData;
    },
    getGameData:function(){
        return this.GameData;
    },
    //获取桌面上的玩家
    getPlayers:function(){
        return this.GameData["Players"];
    },
    //本局我是否在打牌中
    isMePlayingThisRound:function(){
        var players= this.GameData["players"];
        if(this.GameData.mySSID
            &&this.mySelf.cardSprites!= null
            &&this.mySelf.cardSprites[1]){

        }
    },
    //牌桌同步
    readJHID_TABLE_SYNC:function(dataTable){
        this.GameData= dataTable;
        console.log(this.GameData.roomId);
    },
    //背包数量
    readDBID_BACKPACK_GOODS_COUNT:function(dataTable){
        this.backPackGoodsCountData= dataTable;
        if(dataTable.ItemID== GameConfig.GOODS_ID_SUPERIORFACE){//高级表情
            GameConfig.remainSuperiorFaceTime= parseInt(dataTable.Num);
        }else if(dataTable.ItemID== GameConfig.GOODS_ID_CHANGECARD){//换牌道具
            Profile_JinHuaTableConfig.setRemainChangeCardCnt(dataTable.Num);
        }else if(dataTable.ItemID== GameConfig.GOODS_ID_NO_PK){//禁比道具
            Profile_JinHuaTableConfig.setRemainChangeCardCnt(dataTable.Num);
        }
    },
    //退出房间
    readJHID_QUIT_TABLE:function(dataTable){
        console.log("退出房间");
    }
};
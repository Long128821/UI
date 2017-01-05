/**
 * Created by Administrator on 2016/12/15.
 */
var Profile_JinHuaGameData= {
    MALE:1,//男
    FEMALE:2,//女
    backPackGoodsCountData:null,
    GameData:null,
    mySelf:null,
    isMatch:false,//是否在比赛
    betChipData:null,//加注
    readyData:null,
    chatMsg:null,//聊天
    standUpData:null,//站起
    sitDownData:null,//坐下
    clearData:function(){
        this.backPackGoodsCountData= {};
        this.GameData= {};
        this.mySelf= {};
        this.betChipData= {};
        this.readyData= {};
        this.chatMsg= {};
        this.standUpData= {};
    },
    getBackPackGoodsCountData:function(){
        return this.backPackGoodsCountData;
    },
    getGameData:function(){
        return this.GameData;
    },
    //获取是否是在比赛中
    getIsMatch:function(){
        return this.isMatch;
    },
    //设置牌桌是否是在比赛
    setIsMatch:function(){
        if(this.GameData["matchInstanceId"]!= null &&this.GameData["matchInstanceId"]!= ""){
            this.isMatch= true;
        }
    },
    //获取桌面上的玩家
    getPlayers:function(){
        return this.GameData["players"];
    },
    //本局我是否在打牌中
    isMePlayingThisRound:function(){
        var players= this.GameData["players"];
        if(this.GameData.mySSID
            &&this.mySelf.cardSprites
            &&this.mySelf.cardSprites[1]
            &&players[1]
            &&(players[1].status == STATUS_PLAYER_LOOKCARD || players[1].status == STATUS_PLAYER_PLAYING)){
            return true;
        }else{
            return false;
        }
    },
    //牌桌同步
    readJHID_TABLE_SYNC:function(dataTable){
        this.clearData();
        //Todo:JinHuaTableRealFace.resetRealFaceList() --清除牌桌真人头像列表
        this.GameData= dataTable;
        //存储我的数据
        this.setMySSID();
        //设置庄家
        this.setDealerCSID();
        //更新所有的玩家
        this.setAllUserCSID();
        //设置牌桌上玩家的位置
        this.setUserArrayOrder();
        //设置是否为比赛
        this.setIsMatch();
        //Todo：是否支持断线重玩
        //Todo：设置牌桌可比牌手数
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
    },
    //准备
    readJHID_READY:function(dataTable){
        this.readyData= dataTable;
        this.readyData.CSID = this.getUserCSID(this.readyData.SSID);
        if(this.GameData["players"]&&this.GameData["players"][this.readyData.CSID]&&this.readyData.result == 1){
            this.GameData["players"][this.readyData.CSID].status= STATUS_PLAYER_READY;
        }
    },
    //准备
    readJHID_CHAT:function(dataTable){
        this.chatMsg= dataTable;
        this.chatMsg.CSID = this.getUserCSID(this.chatMsg.SSID);
    },
    //加注(JHID_BET)
    readJHID_BET:function(dataTable){
        this.betChipData= dataTable;

        var CSID= this.getUserCSID(this.betChipData.SSID);
        this.betChipData.CSID = CSID;
        if(this.GameData["players"]&&this.GameData["players"][CSID]){
            this.GameData["players"][CSID].betCoins = dataTable["betCoins"];
            this.GameData["players"][CSID].remainCoins = dataTable["remainCoins"];
            this.GameData["round"] = dataTable["round"];
            this.GameData["totalPoolCoin"] = dataTable["totalPoolCoin"];
            this.GameData["singleCoin"] = dataTable["singleCoin"];

            if(this.betChipData["currentPlayer"]){
                this.betChipData["currentPlayer"].CSID = this.getUserCSID(this.betChipData["currentPlayer"].SSID);
            }
            if(this.betChipData.type == TYPE_BET_ANTE&& this.betChipData.dealerSSID){
                this.GameData.dealerSSID = this.betChipData.dealerSSID;
                //设置创建ID
                this.setDealerCSID();
            }
        }
    },
    //获取用户客户端座位号（服务端座位号）
    getUserCSID:function(ssid){
        if(ssid== undefined) return;
        if(this.GameData.mySSID){//别人站起&&庄家 顺移下一位
            return (ssid - this.GameData.mySSID + Profile_JinHuaTableConfig.playerCnt)%Profile_JinHuaTableConfig.playerCnt;
        }else{
            return ssid;//自己站起&&庄家 也是下一位
        }
    },
    //设置当前庄家客户端座位号
    setDealerCSID:function(){
        this.GameData.dealerCSID = this.getUserCSID(this.GameData.dealerSSID);
    },
    getChatMsg:function(){
        return this.chatMsg;
    },
    //准备
    getReadyData:function(){
        return this.readyData;
    },
    //站起
    readJHID_STAND_UP:function(dataTable){
        this.standUpData= dataTable;
        this.standUpData.CSID = this.getUserCSID(this.standUpData.SSID);
        //如果是我 并且我主动要求站起（不考虑站起失败）
        if(this.mySelf.SSID&& this.mySelf.SSID == this.standUpData.SSID&& this.mySelf.status == STATUS_PLAYER_WATCH){
            this.mySelf.SSID= null;
        }
    },
    getStandUpData:function(){
        return this.standUpData;
    },
    //获取玩家数据
    getMySelf:function(){
        return this.mySelf;
    },
    //自己站起更新
    updatePlayerInfo_SelfStand:function(){
        if((this.GameData&&
            this.GameData["players"]&&
            this.GameData["players"][0]&&
            this.GameData["players"][0].userId== profile_user.getSelfUserID())){
            //清空自己的元素
            this.GameData["players"][0]= null;
        }
        //服务器座位号 置空
        this.GameData.mySSID= null;
        //旁观者模式
        this.mySelf.status= STATUS_PLAYER_WATCH;
        //下注金额置空
        this.mySelf.betCoins= 0;
        //更新当前庄家座位号
        this.setDealerCSID();
        //设置所有用户客户端座位号
        this.setAllUserCSID();
        //按照客户端顺序设置玩家数组
        this.setUserArrayOrder();
    },
    //设置所有用户客户端座位号
    setAllUserCSID:function(){
        if(this.GameData== null||this.GameData== undefined)  return;

        for(var key in this.GameData["players"]){
            var user= this.GameData["players"][key];
            if(user!= null&&user.SSID!= null){
                user.CSID= this.getUserCSID(user.SSID);
            }
        }
    },
    //按照客户端顺序设置玩家数组
    setUserArrayOrder:function(){
        if(this.GameData== null||this.GameData== undefined)  return;

        var users = {};
        for(var key in this.GameData["players"]){
            var user= this.GameData["players"][key];
            if(user!= null){
                users[this.GameData["players"][key].CSID] = this.GameData["players"][key];
            }
        }
        this.GameData["players"] = users;
    },
    //得到我的服务器座位号
    setMySSID:function(){
        if(this.GameData== null||this.GameData== undefined)  return;

        var myUserId= profile_user.getSelfUserID();
        for(var key in this.GameData["players"]){
            if(this.GameData["players"]&&
                this.GameData["players"][key]&&
                this.GameData["players"][key].userId== myUserId){
                this.mySelf= this.GameData["players"][key];
                this.GameData.mySSID= this.GameData["players"][key].SSID;
                //Todo:可以删除，利用id比较，而不是isMe
                this.GameData["players"][key].isMe = true;
                break;
            }
        }
    },
    //获取押注信息
    getBetChipData:function(){
        return this.betChipData;
    },
    //坐下应答
    readJHID_SIT_DOWN:function(dataTable){
        if(!this.GameData["players"]) return;

        this.sitDownData= dataTable;
        //坐下失败
        if(this.sitDownData["result"]==0){
            return;
        }
        console.log("坐下:"+ this.sitDownData.playerInfo.userId);
        console.log(this.sitDownData.playerInfo);
        if(this.sitDownData.playerInfo&&this.sitDownData.playerInfo.userId){
            this.sitDownData.playerInfo.CSID = this.getUserCSID(this.sitDownData.playerInfo.SSID);

            //是否为玩家本身
            if(this.sitDownData.playerInfo.userId== profile_user.getSelfUserID()){
                this.mySelf.remainCoins = this.sitDownData.playerInfo.remainCoins;
                this.mySelf.status = this.sitDownData.playerInfo.status;
            }else{
                this.GameData["players"][this.sitDownData.playerInfo.CSID] = this.sitDownData.playerInfo;
            }
        }
    },
    //获取坐下消息
    getSitDownData:function(){
        return this.sitDownData;
    }
};
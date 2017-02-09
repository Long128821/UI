//JINHUA_MGR_SETTING消息
var Profile_JinHuaSetting= {
    Timestamp:0,//时间戳
    JinHuaSettingTable:null,//金花settingsTable
    JinHuaTitleListTable:null,//称为列表
    isRecharged:false,//是否充过值
    arrUserTitle:[//玩家称谓(小乞丐)
        "ui_xiaoqigai.png",//小乞丐
        "ui_pingmin.png",//平民
        "ui_xiaokang.png",//小康
        "ui_caizhu.png",//财主
        "ui_tuhao.png",//土豪
        "ui_yidaijujia.png",//一代巨贾
        "ui_fujiatianxia.png",//富甲天下
        "ui_fukediguo.png",//富可敌国
        "ui_guominlaogong.png"//国民老公
    ],
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
        return onlinePlayerNumber== undefined||onlinePlayerNumber<0?0:onlinePlayerNumber;
    },
    //获取用户称号和用户等级
    getUserTitleLevel:function(userCoin){
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
                        level= i+ 1;
                    }
                }
            }
        }
        return level;
    },
    /**
     * Func:获取玩家称号纹理路径
     * @param coin 玩家所持有的金币数
     * @returns {*} 称号纹理路径(存放在纹理图集中)
     */
    getUserTitlePath:function(coin){
        var level =  this.getUserTitleLevel(coin);
        var index= ((level< 1||level>= this.arrUserTitle.length||level==undefined)?0:level- 1);
        return this.arrUserTitle[index];
    },
    /**
     * Func:设置玩家称号(cc.Sprite对象)
     * @param coin 玩家所持有的金币数
     * @param target 称号精灵
     */
    setUserTitleOnSprite:function(coin, target){
        var url= this.getUserTitlePath(coin);
        if(cc.spriteFrameCache.getSpriteFrame(url)== undefined) return;
        target.setSpriteFrame(url);
    },
    /**
     * Func:设置玩家称号(Json文件中，"classname": "ImageView")
     * @param coin 玩家所持有的金币数
     * @param target 称号精灵
     */
    setUserTitleOnImageView:function(coin, target){
        var url= this.getUserTitlePath(coin);
        //在图集中，没有对应的资源
        if(cc.spriteFrameCache.getSpriteFrame(url)== undefined) return;
        target._imageRenderer.setSpriteFrame(url);
    }
};
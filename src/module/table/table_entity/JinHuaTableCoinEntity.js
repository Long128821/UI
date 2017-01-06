//筹码的种类
COIN_TYPE_10 = 1;
COIN_TYPE_20 = 2;
COIN_TYPE_50 = 3;
COIN_TYPE_1H = 4;
COIN_TYPE_2H = 5;
COIN_TYPE_5H = 6;
COIN_TYPE_1K = 7;
COIN_TYPE_2K = 8;
COIN_TYPE_5K = 9;
COIN_TYPE_1W = 10;
COIN_TYPE_2W = 11;
COIN_TYPE_5W = 12;
COIN_TYPE_10W = 13;
COIN_TYPE_20W = 14;
COIN_TYPE_50W = 15;
COIN_TYPE_100W = 16;
COIN_TYPE_200W = 17;
COIN_TYPE_500W = 18;

//牌桌上筹码Table
var JinHuaTableCoinEntity= {
    spriteChips:{},
    //创建普通筹码
    createTableCoinEntity:function(coinNumber,type) {
        for(var i=0; i< coinNumber; ++i){
            var spriteChip= cc.Sprite.create("#"+ this.getCoinEntityPath(type));
            //筹码随机区间
            var xStep= Profile_JinHuaTableConfig.rangRight- Profile_JinHuaTableConfig.rangLeft;
            var yStep= Profile_JinHuaTableConfig.rangTop- Profile_JinHuaTableConfig.rangBottom;

            var x= Math.random()* xStep+ Profile_JinHuaTableConfig.rangLeft;
            var y= Math.random()* yStep+ Profile_JinHuaTableConfig.rangBottom;

            spriteChip.setScale(0.75);
            spriteChip.setPosition(x,y);
            spriteChip.setZOrder(1);
            this.spriteChips[i]= spriteChip;
        }
        return this.spriteChips;
    },
    //根据筹码种类,获取对应的纹理
    getCoinEntityPath:function(type){
        var chipPath;
        switch(type){
            case COIN_TYPE_10:
                chipPath= "desk_coin_bg_10.png";
                break;
            case COIN_TYPE_20:
                chipPath= "desk_coin_bg_20.png";
                break;
            case COIN_TYPE_50:
                chipPath= "desk_coin_bg_50.png";
                break;
            case COIN_TYPE_1H:
                chipPath= "desk_coin_bg_1h.png";
                break;
            case COIN_TYPE_2H:
                chipPath= "desk_coin_bg_2h.png";
                break;
            case COIN_TYPE_5H:
                chipPath= "desk_coin_bg_5h.png";
                break;
            case COIN_TYPE_1K:
                chipPath= "desk_coin_bg_1k.png";
                break;
            case COIN_TYPE_2K:
                chipPath= "desk_coin_bg_2k.png";
                break;
            case COIN_TYPE_5K:
                chipPath= "desk_coin_bg_5k.png";
                break;
            case COIN_TYPE_1W:
                chipPath= "desk_coin_bg_1w.png";
                break;
            case COIN_TYPE_2W:
                chipPath= "desk_coin_bg_2w.png";
                break;
            case COIN_TYPE_5W:
                chipPath= "desk_coin_bg_5w.png";
                break;
            case COIN_TYPE_10W:
                chipPath= "desk_coin_bg_10w.png";
                break;
            case COIN_TYPE_20W:
                chipPath= "desk_coin_bg_20w.png";
                break;
            case COIN_TYPE_50W:
                chipPath= "desk_coin_bg_50w.png";
                break;
            case COIN_TYPE_100W:
                chipPath= "desk_coin_bg_100w.png";
                break;
            case COIN_TYPE_200W:
                chipPath= "desk_coin_bg_200w.png";
                break;
            case COIN_TYPE_500W:
                chipPath= "desk_coin_bg_500w.png";
                break;
        }
        return chipPath;
    },
    //清空数据
    clearData:function(){
        for(var key in this.spriteChips){
            if(this.spriteChips[key]== null) continue;
            this.spriteChips[key].removeFromParent(true);
        }
        this.spriteChips= {};
    }
};

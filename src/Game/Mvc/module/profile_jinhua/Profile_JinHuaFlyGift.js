/**
 * Created by Administrator on 2017/2/20.
 */
var Profile_JinHuaFlyGift= {
    FlyGiftTable:{},
    SEND_GIFT : 1, //送礼物
    INTERACTION : 2, //互动表情
    KICK_OUT : 3, //踢人
    getFlyGiftTable:function(){
        return this.FlyGiftTable;
    },
    readJHID_FLY_GIFT:function(dataTable){
        this.FlyGiftTable= dataTable;
    }
};
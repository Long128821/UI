//数据图标集
var ProfilePresentGift= {
    m_targetUserID:0,//要送礼物的目标UserID
    GiftType:{
        GIFT_FLOWER:1,//鲜花
        GIFT_CAR:2,//汽车
        GIFT_HOME:3,//房子
        GIFT_BOAT:4//游艇
    },
    //发送礼物
    slot_JINHUA_MGR_SEND_GIFT:function(dataTable){
        Profile_JinHuaFriends.readJINHUA_MGR_SEND_GIFT(dataTable);
        PresentGiftLogic.updateJINHUA_MGR_SEND_GIFT();
    }
};

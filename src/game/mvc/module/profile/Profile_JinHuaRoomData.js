var Profile_JinHuaRoomData= {
    ROOMID_BASIC_LOW : 1, //经典场普通场
    ROOMID_BASIC_MID : 2, //经典场高级场
    ROOMID_BASIC_HIGH : 3, //经典场富豪场

    ROOMID_SHARK_LOW : 4, //千王场普通场
    ROOMID_SHARK_MID : 5, //千王场高级场
    ROOMID_SHARK_HIGH : 6, //千王场富豪场

    TYPE_JINGDIAN : 1, //显示经典场模式
    TYPE_QIANWANG : 2,//显示千王场模式
    m_curRoomType:0,
    getCurRoomType:function(){
        return this.m_curRoomType;
    },
    setCurRoomType:function(type){
        this.m_curRoomType= type==undefined?0:type;
    }
};
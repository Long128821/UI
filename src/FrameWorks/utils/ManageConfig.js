var ManageConfig= {
    slot_JHID_TABLE_SYNC:function(dataTable){
        ManageConfig.openTable();
    },
    slot_JINHUA_ROOMID_ROOM_LIST:function(dataTable){
        console.log(dataTable);
    },
    //进入牌桌
    openTable:function(){
        console.log("进入牌桌");
        GameConfig.setCurBaseLayer(GUI_HALL);
        MvcEngine.createModule(GUI_JINHUATABLE);
    }
};

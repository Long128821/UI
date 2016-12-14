cc.game.onStart = function(){
    
    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(960, 640,cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);
    //自动登录——初始化WbSocket
    Network.getInstance().initNetwork();
//    Frameworks.addSlot2Signal(0x550002);


    //加载完毕之后
    MvcEngine.init();
    MvcEngine.createModule(GUI_LOGIN);//创建Table
};
cc.game.run();

////有时候资源加载的Label显示不出来的原因是:UI工程导出的Json问题
//
////金花VIP等级信息 (JINHUA_MGR_VIP_INFO)
//function send80550002(){
//    console.log("发送消息");
//    var nmBaseMessage = new NMBaseMessage();
//    nmBaseMessage.setMessageType(0x550002);
//    nmBaseMessage.writeStart();
//
//    nmBaseMessage.writeOver();
//
//    Network.getInstance().sendMessage(nmBaseMessage);
//
//    delete nmBaseMessage;
//}
//
//function read80550002(nmBaseMessage) {
//    console.log("接受消息");
//    var dataTable = new Map();
//    //存放消息类型和消息名
//    dataTable.put("messageType", ACK + 0x550002);
//    dataTable.put("messageName", "JINHUA_MGR_USER_INFO");
//    console.log(nmBaseMessage.readUTF16());
//
//    var giftCnt = nmBaseMessage.readInt();
//    console.log(giftCnt);
//    /************Loop类型*******************/
//    var table = {};
//    if (giftCnt > 0) {
//        for (var i = 0; i < giftCnt; ++i) {
//            nmBaseMessage.readShort();
//            //设置
//            nmBaseMessage.m_binaryStream.readPos -= 2;
//            table[i] = {};
//            //cnt	Int	收到的礼物数量
//            table[i]["cnt"] = nmBaseMessage.readInt();
//            //name	String	礼物名称
//            table[i]["name"] = nmBaseMessage.readUnicode();
//
//        }
//        //属性Table
//        dataTable.put("Gifts", table);
//    }
//    console.log(dataTable);
//    return dataTable;
//}
//消息的接收、发送类型
var MessageControlType= {
    Response:0,//接受
    Send:1//发送
};
/**
 * Func:在消息队列中，接收和发送消息，统一管理
 */
var MessageCenter= {
    m_isWebSocketPause:true,//当前WebSocket是否暂停
    getIsWebSocketPause:function(){
        return this.m_isWebSocketPause;
    },
    setIsWebSocketPause:function(isPause){
        this.m_isWebSocketPause= ((isPause== undefined)?false:isPause);
    },
    //WebSocket连接成功
    connectSuccess:function(){
        //先关闭网络监测，再开启网络监测
        NetworkMonitor.closeNetworkMonitor();
        NetworkMonitor.startNetworkMonitor();
        //不可以接收、发送消息
        this.setIsWebSocketPause(false);
    },
    //WebSocket连接断开
    unConnect:function(){
        //拒绝接受和转发消息
        this.setIsWebSocketPause(true);
        //断线重连
        Network.getInstance().initNetwork();
    },
    /*********消息缓存***************/
    /**
     * 说明:不管缓冲池中是否有该消息，都添加到缓冲池中，先进先出
     * @param controlType 是接收，还是发送
     * @param baseMessage 消息缓冲
     */
    addBaseMessage:function(controlType,baseMessage){
        var messageDictionary= FrameWorkDataPool.getInstance();//获取消息缓存列表
        //缓冲池中，已经存在，在缓冲池的最后，追加元素
        messageDictionary.setObject(controlType, baseMessage);
    },
    /**
     * Func:读取缓冲池中的第一个消息,读取之后，移除
     * @param controlType 消息的接收、发送类型
     * @returns 消息(NMBaseMessage类型)
     */
    getBaseMessage:function(controlType){
        var messageDictionary= FrameWorkDataPool.getInstance();//获取消息缓存列表
        var nmBaseMessage= messageDictionary.getFirstMessage(controlType);//获取缓冲池中的第一个消息
        //从缓冲池中，
        this.removeBaseMessage(controlType,nmBaseMessage.getMsgType());

        return nmBaseMessage;
    },
    /**
     * Func:移除指定的消息ID缓存
     * @param controlType
     * @param msgID 要移除的消息ID
     */
    removeBaseMessage:function(controlType,msgID){
        var messageDictionary= FrameWorkDataPool.getInstance();//获取消息缓存列表
        messageDictionary.removeObjectForKey(controlType,msgID);
    },
    /**
     * Func:移除所有的消息缓存(读、写消息队列)
     */
    removeAllBaseMessage:function(){
        var messageDictionary= FrameWorkDataPool.getInstance();//获取消息缓存列表
        messageDictionary.removeAllObjects();
    },
    /**
     * Func:
     *      1、接受下行消息
     *      2、重置最后一次心跳时间
     *      3、将二进制数组buffer，转换为NMBaseMessage数据类型,添加到消息缓存队列中
     * @param buffer 网络中的二进制数组buffer
     */
    acceptMessage:function(buffer){
        if(!MessageCenter.getIsWebSocketPause()){//可否接受信息
            //重置最后一次心跳时间
            NetworkMonitor.initLastRecvTime();
            //存储基本消息
            var nmBaseMessage= new NMBaseMessage(buffer);
            //添加到消息缓冲池中
            MessageCenter.addBaseMessage(MessageControlType.Response, nmBaseMessage);
        }
    },
    /**
     * Func:读取消息队列中的消息，分发给对应的界面
     */
    emitMessage:function(){
        //是否暂停
        if(!this.getIsWebSocketPause()) {
            var messageDictionary = FrameWorkDataPool.getInstance();//获取消息缓存列表
            var controlType= MessageControlType.Response;
            //读取缓冲池是否为空
            if (!messageDictionary.isEmpty(controlType)) {//读取缓冲池中的消息，分发给对应的界面
                //分发消息
                MessageRouting.messageDistribute(this.getBaseMessage(controlType));
            }
        }
    },
    /**
     * Func:读取消息队列中的消息，发送给服务器
     */
    sendMessage:function(){
        //是否暂停
        if(!this.getIsWebSocketPause()) {
            var messageDictionary = FrameWorkDataPool.getInstance();//获取消息缓存列表
            var controlType= MessageControlType.Send;
            //读取缓冲池是否为空
            if (!messageDictionary.isEmpty(controlType)) {//读取缓冲池中的消息，分发给对应的界面
                //分发消息
                MessageRouting.sendMessage(this.getBaseMessage(controlType));
            }
        }
    }
};

//Todo:同一个按钮，可以发送多个消息
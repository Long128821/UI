//网络监测
var NetworkMonitor= {
    monitorTime:100,//监测时间
    IDLE_INTERVAL:4000,//心跳的时间间隔为4s,超过两倍的时间心跳，超时重新连接
    mnLastRecvTime:0,//上一次收到消息的时间戳
    m_heartTimerID:null,//心跳定时器
    m_monitorTimerID:null,//判断定时器
    //判断当前网络状况
    logicNetwork:function(){
        var self= NetworkMonitor;
        if(Network.getInstance().getWebSocketConnecting()){
            //已经建立连接
            var curTime= new Date().getTime();
            if(self.mnLastRecvTime== 0){
                //初始化时
                self.initLastRecvTime();
            }
            //心跳是否超时
            if((curTime- self.mnLastRecvTime)> self.IDLE_INTERVAL* 2){
                console.log("两次心跳超时！");
                //虽然此时
                self.initLastRecvTime();
                //Network.getInstance().initNetwork();
            }
        }
    },

    //设置上一次设置心跳的时间
    initLastRecvTime:function(){
        this.mnLastRecvTime= new Date().getTime();
    },

    //开启网络监测
    startNetworkMonitor:function(){
        var self= this;
        if(self.m_monitorTimerID== null){
            self.m_monitorTimerID= setInterval(self.logicNetwork, self.monitorTime);
        }

        if(self.m_heartTimerID== null){
            self.m_heartTimerID= setInterval(self.keepAlive, self.IDLE_INTERVAL);
        }
    },
    keepAlive:function(){
        sendIdleMsg();
    },

    //关闭网络监测
    closeNetworkMonitor:function(){
        var self= this;
        if(self.m_monitorTimerID!= null){
            clearInterval(self.m_monitorTimerID);
            self.m_monitorTimerID= null;
        }
        if(self.m_heartTimerID!= null){
            clearInterval(self.m_heartTimerID);
            self.m_heartTimerID= null;
        }
    }
};

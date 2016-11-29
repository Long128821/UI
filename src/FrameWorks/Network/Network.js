//const WebSocketURL= "ws://10.10.0.66:65031";//WebSocket连接路径
const WebSocketURL= "ws://10.10.0.119:65031";//WebSocket连接路径

const HeartBeatTime= 3000;//心跳空闲时长
const ContentTimeOut= 30000;//断网多长时间以后没有重连上，不再重连 报错

/**
 * Func:网络连接(单例模式)
 * 断网之后，立即连接(也可以间隔5s之后，再重连，不过感觉游戏，不太合适)，
 * 但是一段时间后，仍然没有连接成功，发送断网请求
 * 间隔多长时间，发送一个心跳(发送数据时，不发送心跳包)，保持与服务器端的连接。
 * 以二进制流的传递方式，传输数据
 */
var Network= {
    webSocket:null,//WebSocket连接单例
    isConnect:false,//是否连接
    callback:null,//发送消息，客户端给了响应之后的回调
    heartBeat_timer:null,//心跳定时器
    preHeartBeatTime:-1,//上次心跳时间
    unConnectTime:0,//记录开始断网的时间
    closeTimer:null,//关闭定时器
    getInstance:function(){
        return this;
    },
    //初始化网络配置
    initNetwork:function(){
        console.log('Network initSocket...');
        //判断浏览器是否支持WebSocket
        if(window.WebSocket){
            this.initWebSocket();//初始化WebSocket
            this.initHeartBeat();//开启心跳定时器
        }else{
            alert("该浏览器不支持WebSocket!");
        }
    },
    //初始化WebSocket
    initWebSocket:function(){
        var self= this;
        self.webSocket = new WebSocket(WebSocketURL);//创建目标WebSocket服务器
        self.webSocket.binaryType="arraybuffer";//以二进制传递方式传输数据
        /**
         * 说明:
         *  在函数体内使用self，而不使用this的原因是:
         *  在函数体内,this的值为(this.webSocket)
         */
        //连接成功之后，会自动打开onopen方法
        self.webSocket.onopen = function(evt){
            console.log('Network onOpen...');
            self.unConnectTime= 0;//连接成功以后，上次断网时间置0
            self.isConnect = true;
        };

        //连接成功之后，前台获取后台的信息
        self.webSocket.onmessage = function(evt){
            var buffer= evt.data;
            //回调读取消息体
            if(self.callback!= null){
                var nmBassMessage= new NMBaseMessage(buffer);
                nmBassMessage.readStart();//开始读取-读取消息头
                self.callback(nmBassMessage);
                //清除数据
                nmBassMessage.clear();
            }
        };

        //Socket连接失败时，会自动调用该函数
        /**
         * 说明:
         * 断线重连机制， 没有在onerror中执行，仅仅只是在onclose中执行的原因是:
         * 发送onerror时，一定会执行oncolse
         */

        self.webSocket.onerror = function(evt){
            console.log('Network onError...');
            self.clearData();//清空数据
        };

        //Socket关闭时，自动调用该函数
        self.webSocket.onclose = function(evt){
            console.log('Network onClose...');
            self.clearData();//清空数据
            //记录第一次断网的时间，从而计算已经断网的时间
            if(!self.unConnectTime){
                self.unConnectTime= new Date().getTime();
            }
            //断线重连
            self.reconnect();
        };
    },
    //清空数据，关闭心跳连接
    clearData:function(){
        var self= this;
        self.isConnect = false;
        self.webSocket= null;
        //关闭心跳定时器
        clearInterval(self.heartBeat_timer);
        self.heartBeat_timer= null;
        self.preHeartBeatTime= 0;
    },
    //创建心跳
    initHeartBeat:function(){
        var self= this;
        //开启心跳定时器
        self.heartBeat_timer= setInterval(function(){
            self.keepAlive();
        }, HeartBeatTime);
    },

    //心跳
    keepAlive:function(){
        //只有空闲的时候,才会需要发送心跳包
        //不为空&&连接中
        if(this.webSocket&&(this.webSocket.readyState== WebSocket.OPEN)){
            var curTime= new Date().getTime();
            //空闲中
            if(this.webSocket.bufferedAmount== 0){
                //大约心跳时间
                if(curTime- this.preHeartBeatTime>= HeartBeatTime) {
                    //发送心跳包
                    console.log("发送心跳！");
                }
            }
            this.preHeartBeatTime= curTime;
        }else{
            //清空数据后，重连
            this.clearData();
            //记录第一次断网的时间，从而计算已经断网的时间
            if(!this.unConnectTime){
                this.unConnectTime= new Date().getTime();
            }
            this.reconnect();
        }
    },

    //重连
    reconnect:function(){
        var curTime= new Date().getTime();
        //判断断线时长是否超时
        if(curTime- this.unConnectTime>= ContentTimeOut){
            this.unConnectTime= 0;
            this.isConnect= false;
            this.closeWebSocket();
        }else{
            this.initWebSocket();
            this.initHeartBeat();
        }
    },

    /**
     * Func:发送信息，以二进制数组的方式传送
     * @param data 要发送的二进制数组(ArrayBuffer)
     */
    send:function(data){
        if (!this.isConnect){
            console.log('Network is not inited...');
        }else if(this.webSocket.readyState == WebSocket.OPEN){
            if(((Object.prototype.toString.call(data) == "[object ArrayBuffer]"))){
                this.webSocket.send(data);
            }else{//Text文本格式传输
                alert("Send失败:数据不是ArrayBuffer类型！");
            }
        }else{
            console.log('Network WebSocket readState:'+this.webSocket.readyState);
        }
    },

    /**
     * Func:
     *  手动关闭WebSocket时，一定要确保:
     *  所有数据流中的消息，已经发送完毕，才可以关闭。
     */
    close:function(){
        if (this.webSocket){
            if(!this.closeWebSocket()){
                var self= this;
            }
        }
    },
    //关闭WebSocket
    closeWebSocket:function(){
        var self= this;
        if(self.webSocket&&self.webSocket.bufferedAmount== 0){
            self.webSocket.close();
            if(self.webSocket.readyState== WebSocket.CLOSED){
                self.webSocket = null;
                self.isConnect= false;
                console.log("Network close...");
                (self.closeTimer)&&(clearInterval(self.closeTimer));
                self.closeTimer= null;
            }
        }else{
            //开关仅开启一次关闭定时器
            if(!self.closeTimer){
                //手动关闭时,一定要去确保数据流中，没有数据
                self.closeTimer= setInterval(function(){
                    self.closeWebSocket();
                }, 100);
            }
        }
    },
    //发送消息
    sendMessage:function(nmBassMessage, callback){
        if(typeof nmBassMessage!= "object") return;
        this.callback= callback== undefined?null:callback;
        this.send(nmBassMessage.getArrayBuffer());
    }
};

var URLList= [
//    "10.10.0.200",
//    "10.10.0.119",
    "10.10.0.120",
    "10.10.0.66"
];

//当前
var NetworkConfig= {
    URL:"",//webSocket连接地址
    IP:"",//当前连接的IP地址
    Port:"",//端口号
    curUrlID:0,//当前URL的下标
    getCurPort:function(){
        return this.Port;
    },
    setCurPort:function(port){
        this.Port= port;
    },
    getCurIP:function(){
        return this.IP;
    },
    setCurIP:function(ip){
        this.IP= ip;
        this.URL= this.IP+":"+this.Port;
    },
    getCurUrlID:function(){
        return this.curUrlID;
    },
    setCurUrlID:function(urlID){
        this.curUrlID= urlID;
        this.setCurURL(URLList[urlID]);
    },
    //H5使用的端口号,一定是65031;APP使用的是65002
    getCurURL:function(){
        return this.URL;
    },
    setCurURL:function(IP){
        this.IP= IP;
        this.Port= 65031;
        this.URL= this.IP+":"+this.Port;
    }
};

//默认为第一个IP地址
NetworkConfig.setCurUrlID(0);
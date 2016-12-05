//获取消息、分发消息
var MessageRouting= {
    m_bReceiverMsg:false,
    /**
     * Func:消息分发
     * @param buffer 二进制流(ArrayBuffer)
     */
    messageDistribute:function(buffer){
        if(!CommonFunction.judgeValueIsEffect(buffer)) return;
        //返回事件
        NetworkMonitor.initLastRecvTime();

        var nmBaseMessage= new NMBaseMessage(buffer);
        nmBaseMessage.readStart();//开始读取-读取消息头

        //读取消息
        var funcName= "read"+ nmBaseMessage.getMsgType();
        //将字符串80010002-->16进制表示-->10进制表示
        var msgID= parseInt(nmBaseMessage.getMsgType(), 16)- ACK;

        if(Frameworks.isContainsSignal(msgID)){
            var dataTable= eval(funcName)(nmBaseMessage);
            //分发消息
            Frameworks.emit(msgID, dataTable);
        }else{
            console.warn("\nMessageRouting.js function is not define!MsgType:0x"+ nmBaseMessage.getMsgType());
        }

        //清除数据
        nmBaseMessage.clear();
    }
};

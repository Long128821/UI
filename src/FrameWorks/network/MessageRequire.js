
var MessageRequire= {
    /**
     * Func:获取消息机制
     * @param buffer
     */
    requireMessage:function(buffer){
        var nmBaseMessage= new NMBaseMessage(buffer);
        nmBaseMessage.readStart();//开始读取-读取消息头

        //读取消息
        var funcName= "read"+ nmBaseMessage.getMsgType();
        var dataTable= eval(funcName)(nmBaseMessage);

        //将字符串80010002-->16进制表示-->10进制表示
        var msgID= parseInt(nmBaseMessage.getMsgType(), 16)- ACK;

        //是否监听了该信号
        if(Frameworks.m_signalSlotTable.get(msgID)!= undefined){
            Frameworks.m_signalSlotTable.get(msgID)(dataTable);
        }

        //清除数据
        nmBaseMessage.clear();
    }
};

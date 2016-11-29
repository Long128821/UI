function NMBaseMessage(arraybuffer){
    this.setArrayBuffer= function(arrayBuffer){//设置消息
        this.m_arrayBuffer=((arrayBuffer== undefined)?0:arrayBuffer);
    };

    //成员函数
    this.setMessageType= function(type){//设置消息类型
        this.m_type=((type== undefined)?0:type);
    };

    this.setMsgVer= function(ver){//设置消息版本号
        this.m_msgVer=((ver== undefined)?0:ver);
    };

    //获取ArrayBuffer
    this.getArrayBuffer= function(){
        return this.m_arrayBuffer;
    };
    //获取消息ID
    this.getMsgType= function(){
        return this.m_type;
    };

    this.clear= function(){
        //数据成员
        this.m_binaryStream= null;//二进制数据
        this.m_type= 0;//消息ID(Int类型)
        this.m_arrayBuffer= ((arraybuffer== undefined)?null:arraybuffer);//消息ArrayBuffer
        this.m_extData= 0;//预留字段
        this.m_msgVer= 0;//消息版本
        this.m_userID= 0;//玩家ID
    };

    //开始读取
    this.readImpl= function(){
        this.m_binaryStream.readShort();//读取消息长度
        this.m_type= this.m_binaryStream.readIntByString();//消息ID
        this.m_extData= this.m_binaryStream.readByte();//预留字段
        this.m_msgVer= this.m_binaryStream.readByte();//消息版本
        this.m_userID= this.m_binaryStream.readInt();//UserID
    };

    //开始写消息
    this.writeStart= function(){
        //**************二进制数组传递方式****************/
        this.m_binaryStream= BinaryStream();
        this.m_binaryStream.writeShort(0);//消息长度[预留字段，最后发送的时候，会重新赋值]
        this.m_binaryStream.writeInt(this.m_type);//消息ID
        this.m_binaryStream.writeByte(this.m_extData);//预留字段
        this.m_binaryStream.writeByte(this.m_msgVer);//消息版本
        this.m_binaryStream.writeInt(this.m_userID);//UserID;
    };

    this.writeOver= function(){//写消息结束
        //转换为ArrayBuffer,同时在消息的头部设置长度
        this.m_arrayBuffer= this.m_binaryStream.toArrayBuffer();
        //回收空间
        this.m_binaryStream= null;
    };

    //开始写消息
    this.readStart= function(){
        //清空数据
        this.clear();

        //**************二进制数组传递方式****************/
        this.m_binaryStream= BinaryStream(this.m_arrayBuffer);
        this.readImpl();//读取消息头
    };

    //监测数据是否为空
    //@DataType:数据类型
    //@Way:0-写入 1-读取
    this.checkBinaryStream= function(DataType, Way){
        if(this.m_binaryStream== null){
            console.error(((Way== 0)?"写入":"读取")+DataType+"类型数据失败:binaryStream为NULL。");
            return true;
        }else{
            return false;
        }
    };

    //Int类型
    this.writeInt= function(value){
        if(this.checkBinaryStream(g_DataType.Int, 0)){
            return ;
        }
        this.m_binaryStream.writeInt(value);
    };

    //Byte类型
    this.writeByte= function(value){
        if(this.checkBinaryStream(g_DataType.Byte, 0)){
            return ;
        }
        this.m_binaryStream.writeByte(value);
    };

    //Short类型
    this.writeShort= function(value){
        if(this.checkBinaryStream(g_DataType.Short, 0)){
            return ;
        }
        this.m_binaryStream.writeShort(value);
    };

    //Long类型
    this.writeLong= function(value){
        if(this.checkBinaryStream(g_DataType.Long, 0)){
            return ;
        }
        this.m_binaryStream.writeLong(value);
    };

    //UTF16类型
    this.writeUTF16= function(value){
        if(this.checkBinaryStream(g_DataType.UTF16, 0)){
            return ;
        }
        this.m_binaryStream.writeUTF16(value);
    };

    //Int类型
    this.readInt= function(){
        if(this.checkBinaryStream(g_DataType.Int, 1)){
            return ;
        }
        return this.m_binaryStream.readInt();
    };

    //Byte类型
    this.readByte= function(){
        if(this.checkBinaryStream(g_DataType.Byte, 1)){
            return ;
        }
        return this.m_binaryStream.readByte();
    };

    //Short类型
    this.readShort= function(){
        if(this.checkBinaryStream(g_DataType.Short, 1)){
            return ;
        }
        return this.m_binaryStream.writeShort();
    };

    //Long类型
    this.readLong= function(){
        if(this.checkBinaryStream(g_DataType.Long, 1)){
            return ;
        }
       return this.m_binaryStream.readLong();
    };

    //UTF16类型
    this.readUTF16= function(){
        if(this.checkBinaryStream(g_DataType.UTF16, 1)){
            return ;
        }
        return this.m_binaryStream.readUTF16();
    };
} 
//数据图标集
var ProfileDoubleButtonConfirm= {
    m_message:null,
    m_curType:null,
    typeTable:{
        Delete_Friend:1//删除好友
    },
    getMessage:function(){
        return this.m_message;
    },
    setMessageByType:function(type){
        this.m_curType= ((type== undefined)?this.typeTable.Delete_Friend:type);
        switch(this.m_curType){
            case this.typeTable.Delete_Friend:{
                this.m_message= "确定删除好友吗?";
                break;
            }
        }
    }
};

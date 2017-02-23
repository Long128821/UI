//数据图标集
var ProfileDoubleButtonConfirm= {
    m_message:null,
    m_curType:null,
    m_changeCoin:0,//要取款、存款的金额
    typeTable:{
        Delete_Friend:1,//删除好友
        Save_Coin:5,//存款
        Draw_Coin:6//取款
    },
    getMessage:function(){
        return this.m_message;
    },
    setMessageByType:function(type, data){
        this.m_curType= ((type== undefined)?this.typeTable.Delete_Friend:type);
        switch(this.m_curType){
            case this.typeTable.Delete_Friend:{
                this.m_message= "确定删除好友吗?";
                break;
            }
            case this.typeTable.Save_Coin:{//存款
                var StrongBoxInfoTable= Profile_JinHuaStrongBox.getStrongBoxInfoTable();
                var changeCharm = Math.floor(data * StrongBoxInfoTable["charmRate"] / 1000);
                this.m_changeCoin= data;
                this.m_message= "确认是否要存入"+ data+ "金币,将扣除"+ changeCharm+ "魅力值.";
                break;
            }
            case this.typeTable.Draw_Coin:{//取款
                this.m_changeCoin= data;
                this.m_message= "确认是否要取出"+ data+ "金币.";
                break;
            }
        }
    }
};

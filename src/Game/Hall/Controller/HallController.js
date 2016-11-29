var HallController = BaseController.extend({

    /*****************Base类(继承CC.Layer的原因，有时候需要监听该Layer)******************/
    m_logic:null,//逻辑类

    reset:function(){
        this.m_logic.view= null;
    },

    getLayer:function(){
        return this.m_logic.view;
    },

    createView:function(){
        this.m_logic= HallLogic;
        this.m_logic.createView();
        this.addChild(this.m_logic);

        //添加按钮响应事件
        this.addCallback();
    },

    //休眠
    sleepModule:function(){
        console.log("休眠");
        this.m_logic.m_view.setTouchEnabled(false);
        this.m_logic.setLogicEnabled(false);
    },

    //唤醒
    wakeModule:function(){
        console.log("唤醒");
        this.m_logic.m_view.setTouchEnabled(true);
        this.m_logic.setLogicEnabled(true);
    },

    //销毁
    destroyModule:function(){
        console.log("销毁");
        this.destroy();

        this.m_logic.m_view.removeFromParentAndCleanup(true);

        this.releaseData();
    },

    addCallback:function(){
//        this.addEvent("closeButton", this.m_logic.m_view, this.m_logic.onBtn_CloseEvent);
    },

    /***************以上可以封装为基类，函数或者成员不需要改变**********************/

    /***************以下方法，可以在派生类中，根据游戏逻辑自己重写****************************/

    //销毁数据
    releaseData:function(){
        this.m_logic= null;
    }
});

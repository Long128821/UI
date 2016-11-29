var BaseController = cc.Class.extend({
    /*****************Base类(继承CC.Layer的原因，有时候需要监听该Layer)******************/
    m_ModuleLayer:g_LayerTag.Base_Layer,
    m_bActive:false,//当前页面是否为活动页面
    ctor: function() {
        this.init();
    },

    init:function(){
        //创建视图
        this.createView();
    },

    //设置Module层级
    setModuleLayer:function(tag){
        this.m_ModuleLayer= ((tag==undefined)?g_LayerTag.Base_Layer:tag);
    },

    //设置Module层级
    getModuleLayer:function(){
        return this.m_ModuleLayer;
    },

    /***************以下方法，可以在派生类中，根据游戏逻辑自己重写****************************/

    //销毁数据
    destroy:function(){
        this.m_ModuleLayer= 0;
        this.m_bActive= false;
    },

    //创建View
    createView:function(){},

    /**********************可重写的函数********************/
    addEvent:function(targetName, rootNode, callback){
        this._registerWidgetEvent(rootNode, ccui.helper.seekWidgetByName(rootNode, targetName), callback);
    },
    /**
     * 注册控件事件
     * @param target
     * @param widget
     * @private
     */
    _registerWidgetEvent: function(target, widget, eventFunc) {
        //注册事件监听
        if (widget.addEventListener) {
            widget.addEventListener(eventFunc, target);
        } else {
            widget.addTouchEventListener(eventFunc, target);
        }
    }
});
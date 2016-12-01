var Frameworks= {
    m_curButton:null,//当前
    m_signalSlotTable:new Map(),//存放信号
    m_callbackEventTable:new Map(),//存放点击事件
    m_callBackOnKeypadEventTable:{},//存放返回键事件(android特有)
    //清空除了function以外的所有数据
    moduleCleanUp:function(moduleTable){
        for(var key in moduleTable){
            if(typeof moduleTable[key]== "object"){
                moduleTable[key]= null;
            }
        }
    },
    //释放
    releaseClick:function(){
        this.m_curButton= null;
    },
    //点击事件的回调
    callbackHandle:function(component, event){
        var self= Frameworks;
        if(event== ccui.Widget.TOUCH_BEGAN){
            //当前有按钮进行操作，没有释放
            if(self.m_curButton!= null) return true;
            //当前活动按钮
            self.m_curButton= component;
        }

        //当前没有按钮 或者 当前按钮与要操作的按钮不匹配，则返回
        if(self.m_curButton== null||self.m_curButton!= component) return false;

        if(event== ccui.Widget.TOUCH_ENDED|| event== ccui.Widget.TOUCH_CANCELED){
            Frameworks.releaseClick();
        }

        //遍历Map
        var contain= self.m_callbackEventTable.get(component);
        if(contain){//判断控件是否一致
            //是否有会有回调方法
            if(contain[event]!= null&&contain[event]!=undefined){
                //回调
                contain[event](component, event);
            }
        }
    },
    /**
     * Func:绑定点击事件
     * @param component 要绑定的控件(cc.widget)
     * @param callback 回调函数
     * @param event 绑定事件(按钮响应类型)
     * @param btnEffectEvent 特效(点击时，是否有特效，是否音效)
     */
    bindEventCallback:function(component, callback, event, btnEffectEvent){
        var map= {};
        if(!this.m_callbackEventTable.containsKey(component)){
            this.m_callbackEventTable.put(component, map);
        }

        //Todo:其他事件的监听
        if(event== BUTTON_CLICK){//单击事件
            map[event]= callback;//单击事件
        }

        map[btnEffectEvent]= btnEffectEvent;
        map[name]= component._name;

        component.addTouchEventListener(this.callbackHandle);
    },
    /**
     * Func:解绑点击事件
     * @param component 要解绑的控件(cc.widget)
     * @param callback 回调函数
     * @param event 绑定事件(按钮响应类型)
     * @param btnEffectEvent 特效(点击时，是否有特效，是否音效)
     */
    unbindEventCallback:function(component, callback, event, btnEffectEvent){
        //遍历Map
        var contain= this.m_callbackEventTable.get(component);
        if(!contain){return;}

        if(contain[event]!= null){
            if(event== BUTTON_CLICK){
                contain[event]= null;
            }
        }

        //其他事件引用次数
        var count= 0;
        for(var i in contain){
            if(contain[i]!= null){
                count++;
            }
        }

        //原因是:Map中，除了监听事件之外，还有两个对象btnEffectEvent、name
        if(count== 2){
            this.m_callbackEventTable[component]= null;
            //console.log("事件解绑成功！");
        }
    },
    /**
     * Func:注册消息信号
     * @param signal
     * @param callbackFunction
     */
    addSlot2Signal:function(signal, callbackFunction){
        //判断是否已经有该存在该信号
        if(!this.m_signalSlotTable.containsKey(signal)){
            this.m_signalSlotTable.put(signal, callbackFunction);
        }else{
            //如果已经存在,判断信号的回调是否一致
            if(this.m_signalSlotTable.get(signal)!= callbackFunction){
                this.m_signalSlotTable.put(signal, callbackFunction);
            }
        }
    },
    /**
     * Func:发送消息信号
     * @param signal 信号
     * @param dataTable 回调数据(一般为null)
     */
    emit:function(signal, dataTable){
        if(this.m_signalSlotTable.get(signal)== null) return;
        //发送信号，执行回调函数
        this.m_signalSlotTable.get(signal)(dataTable);
    },
    /**
     * Func:删除消息信号
     * @param signal
     * @param callbackFunction
     */
    removeSlotFromSignal:function(signal, callbackFunction){
        if(this.m_signalSlotTable.get(signal)== null) return;

        //监听信号的回调函数 是否匹配
        if(this.m_signalSlotTable.get(signal)== callbackFunction){
            this.m_signalSlotTable.removeByKey(signal);//从监听中移除
        }
    }
};


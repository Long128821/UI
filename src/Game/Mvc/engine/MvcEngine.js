var MvcEngine= {
    needCreateModuleName : null,//当前要创建的界面名称(GUIConfig中定义)
    needDestoryModuleName : null,//需要销毁的界面名称(GUIConfig中定义)
    needHandleModuleCount : 0,//记录当前需要处理的界面数
    needAddActiveModuleTable : {},//记录当前需要添加到活跃队列的界面
    activeModuleTable : {},//当前显示的层(包括休眠的层)
    wakeModuleTable : {},//需要唤醒的层
    delayTime : 0.2,//延时添加界面
    //获取要删除的界面
    removeModuleFromTable:function(moduleName){
        var module= null;
        for(var key in this.activeModuleTable){
            if(key == moduleName){
                module= this.activeModuleTable[key];
                this.activeModuleTable[key]= null;
            }
        }
        return module;
    },
    //删除需要添加到活跃队列的界面
    removeNeedAddActiveModuleFromTable:function(moduleName){
        var module= null;
        for(var key in this.needAddActiveModuleTable){
            if(key == moduleName){
                module= this.needAddActiveModuleTable[key];
                this.needAddActiveModuleTable[key]= null;
            }
        }
        return module;
    },
    //获取需要添加到活跃队列的界面数量
    getNeedAddActiveModuleSize:function(){
        var size= 0;
        for(var key in this.needAddActiveModuleTable){
            if(this.needAddActiveModuleTable[key]!= null){
                size++;
            }
        }
        return size;
    },
    //获取当前显示的界面中的最大层级
    getActiveModuleMaxLayer:function(){
        var maxLayer = 1;
        for(var key in this.activeModuleTable){
            var value= this.activeModuleTable[key];
            var moduleLayer = value.getModuleLayer();
        }
        return (maxLayer + this.getNeedAddActiveModuleSize());
    },
    //获取下一级的层级定义
    getNextLevelLayer:function(level){
        for(var key in Layer){
            var value= this.activeModuleTable[key];
            if(value- level== 1){
                return key;
            }
        }
    },
    //唤醒界面
    doWakeModule:function(addModuleName){
        if(addModuleName!=null && typeof addModuleName== "string"){
            //createView方法中可能同时创建了多个界面,需要屏蔽界面
            var isHasDestroyModule = false;//是否有需要销毁的层
            var sleepModuleTable = {};//休眠的层
            console.log(sleepModuleTable.length);
            var layerOfCreateModule = ModuleTable[addModuleName]["Layer"];//要创建的界面层级
            for(var key in this.activeModuleTable){
                var value= this.activeModuleTable[key];
                var moduleLayer = value.getModuleLayer();
                if (Layer[layerOfCreateModule] < Layer[moduleLayer]) {
                    //高于新打开界面的层级销毁
                    isHasDestroyModule = true;
                }else if (Layer[layerOfCreateModule] > Layer[moduleLayer]){
                    //小于新打开界面的层级休眠
                    sleepModuleTable[getMapSize(sleepModuleTable)+ 1] = value;
                }
            }

            if(isHasDestroyModule){
                //连续创建界面时，保证下层不会唤醒
                if(this.activeModuleTable[addModuleName].getLayer()!= null){
                    this.activeModuleTable[addModuleName].sleepModule();
                }
            }


        }
    },
    //创建界面
    doCreateModule:function(isDelay){
        if(this.needCreateModuleName== null){
            console.error("要创建的新界面为空");
            //唤醒界面
            this.doWakeModule();
            return;
        }else{
            //根据名字，在ModuleConfig.js配置文件中，查找配置信息
            if(ModuleTable[this.needCreateModuleName]== undefined||ModuleTable[this.needCreateModuleName]== null){
                console.error("要创建的新界面("+this.needCreateModuleName+")没有在ModuleConfig.js配置！");
                return;
            }

            var self= this;
            //加载该页面中所使用的js文件
            Load.LoadRes(self.needCreateModuleName, function(msg){
                //字符串拼接层名(GUI_Config.js中的层名+ "Controller")
                var className= self.needCreateModuleName+"Controller";
                var classFunc= eval(className);//将字符串转换为类名
                self._setModuleSettings(new classFunc());
            });
        }
    },
    //func:Table的初始化
    /**
     * @param className 新添加的类名(字符串)
     * @param moduleControl 类对象
     * @private
     */
    _setModuleSettings:function(moduleControl){
        //根据在ModuleConfig.js中的配置，设置类的层级
        moduleControl.setModuleLayer(ModuleTable[this.needCreateModuleName]["Layer"]);

        //this.m_rootNode.addChild(classFunc.view);//将新创建的Table,添加到根节点中，显示出来


        this.needAddActiveModuleTable[this.needCreateModuleName]= moduleControl;

        this.activeModuleTable[this.needCreateModuleName]= moduleControl;

        this.doWakeModule(this.needCreateModuleName);

        this.needCreateModuleName= null;
    },
    //当前界面休眠/销毁结束以后调用(界面Controller发送信号)
    //如没有需要休眠/销毁的界面，则直接调用
    slot_Destroy_Sleep_Done:function(){
        this.needHandleModuleCount--;
        var isDelay= false;
        if(this.needHandleModuleCount == 0 && this.needHandleModuleCount!= null){
            isDelay= true;
        }

        if(this.needHandleModuleCount<= 0){
            this.needHandleModuleCount= 0;

            this.doCreateModule(isDelay);

            Frameworks.removeSlotFromSignal(SignalCommon.Signal_DestroyModule_Done, this.slot_Destroy_Sleep_Done);
            Frameworks.removeSlotFromSignal(SignalCommon.Signal_SleepModule_Done, this.slot_Destroy_Sleep_Done);
        }
    },
    //移除所有Module
    destroyAllModules:function(){
        for(var key in this.activeModuleTable){
            var value= this.activeModuleTable[key];
            if(value.getLayer()!= null){
                value.destroyModule(DESTORY_TYPE_CLEAN);
            }
        }
        this.activeModuleTable= {};
    },
    //唤醒最高层级的界面
    wakeMaxModule:function(){
        var moduleKey = null;
        var module = null;
        var maxLayer = 0;
        for(var key in this.activeModuleTable){
            var value= this.activeModuleTable[key];
            var moduleLayer = value.getModuleLayer();
            if (maxLayer < Layer[moduleLayer]){
                maxLayer = Layer[moduleLayer];
                moduleKey = key;
                module = value;
            }
        }

        if(moduleKey != null && module != null){
            if(module.getLayer() != null){
                module.wakeModule();
            }
        }
    },
    //销毁某个界面
    destroyModule:function(module, destroy_type){
        Frameworks.releaseClick();
        Frameworks.addSlot2Signal(SignalCommon.Signal_DestroyModule_Done, this.slot_Destroy_Sleep_Done);
        this.wakeOrDestroyModules(moduleName, destroy_type);
    },
    //要打开的界面
    createModule:function(moduleName, action){
        Frameworks.releaseClick();
        Frameworks.addSlot2Signal(SignalCommon.Signal_SleepModule_Done, this.slot_Destroy_Sleep_Done);
        Frameworks.addSlot2Signal(SignalCommon.Signal_DestroyModule_Done, this.slot_Destroy_Sleep_Done);
        this.sleepOrDestroyModules(moduleName, action);
    },
    //获取当前界面是否显示
    logicModuleIsShow:function(moduleName){
        for(var key in this.activeModuleTable){
            var value= this.activeModuleTable[key];
            //var moduleLayer = value.getModuleLayer();
            if (key== moduleName){
                return true;
            }
        }
        return false;
    },
    //判断界面是否是休眠状态
    logicModuleIsSleep:function(moduleName){
        //要创建的界面层级
        var layerModule= ModuleTable[moduleName]["Layer"];
        var maxLayer= 0;
        for(var key in this.activeModuleTable){
            var value= this.activeModuleTable[key];
            var moduleLayer = value.getModuleLayer();
            if (maxLayer== Layer[moduleLayer]){
                maxLayer= Layer[moduleLayer];
            }
        }
        //不是最高层级，则是休眠状态
        return Layer[layerModule]!= maxLayer;
    }
};


//获取Map的长度
function getMapSize(map){
    var size= 0;
    for(var key in map){
        size++;
    }
    return size;
}
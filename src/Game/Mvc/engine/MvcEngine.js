/**
 * Created by Administrator on 2016/11/17.
 */
/********整个游戏的UI管理器************/
var MvcEngine= {
    m_needCreateModuleName:null,//需要创建的界面名字,需要在GUI_Config.js文件中配置
    m_rootNode:null,//根节点
    m_activeModuleTable:null,//当前显示的层(包括休眠的层)【自定义实现的Map类型】
    /*******单例模式**********/
    getInstance:function(){
        return this;
    },
    //初始化获取节点
    init:function(){
        this.releaseData();
        var scene= new cc.Scene();
        cc.director.runScene(scene);
        //初始化当前Map为空
        this.m_activeModuleTable= new Map();
        //获取根节点，以后游戏的所有Layer都放置到该节点下
        this.getRootNode(scene);
    },
    //获取根节点
    getRootNode:function(scene){
        if(!this.m_rootNode){
            this.m_rootNode= new cc.Node();
            scene.addChild(this.m_rootNode);
        }
    },
    //游戏结束时，清除数据
    releaseData:function(){
        this.m_activeModuleTable= null;
        this.m_needCreateModuleName= null;
        this.m_rootNode= null;
    },
    /**
     *@func: 设置要创建的界面的入口
     *@paramneedCreateModuleName: 要创建的界面名
     */
    setNeedCreateModuleName:function(needCreateModuleName){
        this.m_needCreateModuleName= ((needCreateModuleName== undefined)?null:needCreateModuleName);
        //创建的新Table
        this.doCreateModule();
    },
    /**
     * func:创建新的Table
     */
    doCreateModule:function(){
        if(this.m_needCreateModuleName== null){
            console.error("要创建的新界面为空");
            return;
        }
        //根据名字，在ModuleConfig.js配置文件中，查找配置信息
        if(ModuleTable[this.m_needCreateModuleName]== undefined){
            console.error("要创建的新界面("+this.m_needCreateModuleName+")没有在ModuleConfig.js配置！");
            return;
        }

        //加载创建新Table所需要的资源
        this.loadTableResources();
    },
    //加载创建新Table所需要的资源
    loadTableResources:function(){
        var self= this;
        //加载该页面中所使用的js文件
        Load.LoadRes(self.m_needCreateModuleName, function(msg){
            //字符串拼接层名(GUI_Config.js中的层名+ "Controller")
            var className= self.m_needCreateModuleName+"Controller";
            var classFunc= eval(className);//将字符串转换为类名
            self._setModuleSettings(new classFunc());
        });
    },
    //func:Table的初始化
    /**
     * @param className 新添加的类名(字符串)
     * @param module 类对象
     * @private
     */
    _setModuleSettings:function(module){
        var className= this.m_needCreateModuleName+"Logic";
        var classFunc= eval(className);//将字符串转换为类名
        //根据在ModuleConfig.js中的配置，设置类的层级
        module.setModuleLayer(ModuleTable[this.m_needCreateModuleName]["Layer"]);

        this.m_rootNode.addChild(classFunc.view);//将新创建的Table,添加到根节点中，显示出来

        className= this.m_needCreateModuleName+"Controller";
        this.m_activeModuleTable.put(className, module);//添加到已显示的Map中

        //立即唤醒界面
        this.doWakeModule(module);
    },
    //func:唤醒界面
    /**
     * @param addModule 需要唤醒的界面
     */
    doWakeModule:function(addModule){
        //唤醒此页面时，对其他页面的影响(休眠OR删除)
        this.sleepOrDestroyModuleTableArray(addModule);

        //唤醒自身
        addModule.wakeModule();
    },
    /**
     * func:唤醒某页面时，对其他页面的影响
     * @param addModule 需要唤醒的页面
     */
    sleepOrDestroyModuleTableArray:function(addModule){
        //因为在Main函数中，使用cc.LoaderScene，因此只需要添加上去即可，不需要runScene()
        //是否有需要销毁的层
        var destroyModuleTable= [];
        //需要休眠的层
        var sleepModuleTable= [];

        //遍历所有显示的层Map,根据要添加的层级，选择要休眠或者销毁的层
        //其中this.m_activeModuleTable.elements是Map中真正存储数据的数组
        //以key-value的方式存储
        for(var i in this.m_activeModuleTable.elements){
            //获取当前的Table,同时获取它的层级
            var moduleTable= this.m_activeModuleTable.elements[i].value;//BaseController
            var moduleLayer= moduleTable.getModuleLayer();//层级
            //大于或者等于新创建的层级时，全部销毁，例如:在Base中，创建另一个Base
            //使用等于的原因是:可能会出现在一个Base中，新建另一个Base，需要将原Base移除
            if(moduleLayer>= addModule.getModuleLayer()){
                if(addModule!= moduleTable){//不能销毁新创建的层
                    destroyModuleTable.push(moduleTable);
                }
            }else if(moduleLayer< addModule.getModuleLayer()){//小于新创建的，全部休眠
                sleepModuleTable.push(moduleTable);
            }
        }

        //需要休眠的Table数组
        this.sleepModuleTableArray(sleepModuleTable);
        //需要销毁的Table数组
        this.destroyModuleTableArray(destroyModuleTable);

        sleepModuleTable= null;
        destroyModuleTable= null;
    },
    /**
     * func:删除所有需要销毁的Table数组
     * @param destroyModuleTable 需要销毁的数组
     */
    destroyModuleTableArray:function(destroyModuleTable){
        //如果有需要销毁的层
        for(i=0; i<destroyModuleTable.length; ++i){
            destroyModuleTable[i].destroyModule();
        }

        //从当前层级中，删除数组
        for(var i=0; i< destroyModuleTable.length; ++i){
            this.m_activeModuleTable.removeByValue(destroyModuleTable[i]);//按照Value在Map中移除
        }
    },
    /**
     * func:休眠所有需要休眠的Table数组
     * @param sleepModuleTable  需要休眠的数组
     */
    sleepModuleTableArray:function(sleepModuleTable){
        //需要休眠的层
        for(i=0; i<sleepModuleTable.length; ++i){
            sleepModuleTable[i].sleepModule();
        }
    },
    /**
     * fun:根据在GameConfig.js中配置的Table名，销毁该Table
     * @param moduleName 在GameConfig.js中配置的Table名
     */
    createModule:function(moduleName, callback){
        //如果层的名称为空，返回
        if(!moduleName.trim()) return;
        var self= this;
        //加载该页面中所使用的js文件
        Load.LoadRes(moduleName, function(msg){
            //字符串拼接层名(GUI_Config.js中的层名+ "Controller")
            var className= moduleName+"Controller";
            var classFunc= eval(className);//将字符串转换为类名
            var module= new classFunc();
            //根据在ModuleConfig.js中的配置，设置类的层级
            module.setModuleLayer(ModuleTable[moduleName]["Layer"]);

            self.m_rootNode.addChild(module);//将新创建的Table,添加到根节点中，显示出来
            self.m_activeModuleTable.put(className, module);//添加到已显示的Map中

            ((callback!= null)&&(callback(module.m_logic)));
        });
    },
    /**
     * fun:根据在GameConfig.js中配置的Table名，销毁该Table
     * @param moduleName 在GameConfig.js中配置的Table名
     */
    destroyModule:function(moduleName){
        //如果层的名称为空，返回
        if(!moduleName.trim()) return;
        //在Map中，查找并移除该Table
        var key= moduleName+"Controller";
        var moduleTable= this.m_activeModuleTable.get(key);//查找
        if(moduleTable== null&& moduleTable== undefined) return;

        //在已显示的页面数组中，根据key移除
        this.m_activeModuleTable.removeByKey(key);
        moduleTable.removeFromParentAndCleanup(true);

        //销毁指定页面
        moduleTable.destroyModule();

        //唤醒当前所有已显示的最高等级的Table
        this.wakeHighestModuleTable();
    },
    //找到当前显示的显示的最大层级Table
    getHighestModuleTable:function(){
        //当前已显示Table数组，要有值
        if(this.m_activeModuleTable.getSize()<= 0) return null;

        //以数组中的第一个作为要唤醒的Table,和后面的比较
        var wakeModule=  this.m_activeModuleTable.elements[0].value;//需要唤醒的层级
        var maxLayer=  wakeModule.getModuleLayer();//最大的层

        //遍历Map
        for(var i in this.m_activeModuleTable.elements){
            var moduleTable= this.m_activeModuleTable.elements[i] .value;//BaseController
            var moduleLayer= moduleTable.getModuleLayer();//对应的层级
            //只有大于当前Table,才交换
            if(maxLayer< moduleLayer){
                maxLayer= moduleLayer;
                wakeModule= moduleTable;
            }
        }
        return wakeModule;
    },
    //唤醒某一个所有显示的层中 最高级别的层级Table
    wakeHighestModuleTable:function(){
        var wakeModule= this.getHighestModuleTable();//需要唤醒的层级

        //找到需要唤醒的最大层
        if(wakeModule!= null && wakeModule!=undefined){
            wakeModule.wakeModule();
        }else{
            console.warn("要唤醒的层为空！");
        }
    }
};
var Common= {
    debugState:true,//是否为调试模式
    changeID:CHANGEID,//渠道号
    version:0x04000000,//版本号
    isDebugState:function(){
        return this.debugState;
    },
    getChangeID:function(){
        return this.changeID;
    },
    setChangeID:function(changeID){
        this.changeID= changeID;
    },
    getVersion:function(){
        return this.version;
    },
    setVersion:function(version){
        this.version= version;
    },
    /**
     * Func:判断一个值是否有效
     * @param value
     * @returns {boolean} 该值既不为null,又不是undefined时，返回true,否则false
     */
    judgeValueIsEffect:function(value){
        return (value!= undefined&& value!= null);
    },
    //获取Map的有效长度
    //原因:在销毁或者删除之后，只能把map中的value置空(null),却不能把key置空，此key已经被占用
    getTableSize:function(table){
        var size= 0;
        for(var key in table){
            if(this.judgeValueIsEffect(table[key])){
                size++;
            }
        }
        return size;
    },

    //获取值
    getValue:function(key, table){
        if((!this.judgeValueIsEffect(key))||(!this.judgeValueIsEffect(table))) return null;
        for(var _key in table){
            if(_key == key){
                return table[_key];
            }
        }
        return null;
    },
    //ImageView换图(网络)
    setTextureByNet:function(url, target){
        //异步加载头像资源
        cc.loader.loadImg(
            url,
            function(){
                target._imageRenderer.setTexture(url);
            }
        );
    },
    createArmature:function(jsonPath, armatureName, callback){
        this.loadArmature(jsonPath, function(){
            ccs.armatureDataManager.addArmatureFileInfo(jsonPath);
            callback(ccs.Armature.create(armatureName));
        });
    },
    loadArmature:function(jsonPath, callback){
        var jsonName= jsonPath.substring(0, jsonPath.lastIndexOf("."));
        var index= 0;
        Load.LoadJson([
            jsonName+"0.png",
            jsonName+"0.plist",
            jsonPath
        ],function(){
            callback();
        });
    }
};

//根据是否Debug模式，设置是否显示、启动showFPS、debugMode
cc.director.setDisplayStats(Common.isDebugState());
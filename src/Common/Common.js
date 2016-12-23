var Common= {
    debugState:true,//是否为调试模式
    changeID:CHANGEID,//渠道号
    version:0x04000000,//版本号
    isDebugState:function(){
        return this.debugState;
    },
    getChannelID:function(){
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
    addSpriteByNet:function(url, callback){
        //异步加载头像资源
        cc.loader.loadImg(
            url,
            function(){
                if(callback!= undefined){
                    callback(cc.Sprite.create(url));
                }
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
        Load.LoadJsonOrPic([
            jsonName+"0.png",
            jsonName+"0.plist",
            jsonPath
        ],function(){
            callback();
        });
    },
    //获取金花资源路径
    getResourcePath:function(path){
        return "res/"+ path;
    },
    //设置称谓
    setUserChengWei:function(coin, target){
        var url= this.getUserChengWeiPath(coin);
        target.loadTexture(url);
    },
    getUserChengWeiPath:function(coin){
        var arr= Profile_JinHuaSetting.getUserTitle(coin);
        var tipLevel = arr[1];
        var url = null;
        if(tipLevel == 1 ){
            url = "ui_xiaoqigai_1.png";
        }else if( tipLevel == 2 ){
            url = "ui_pingming_1.png";
        }else if( tipLevel == 3 ){
            url = "ui_xiaokang_1.png";
        }else if( tipLevel == 4 ){
            url = "ui_caizhu_1.png";
        }else if( tipLevel == 5 ){
            url = "ui_tuhao_1.png";
        }else if( tipLevel == 6 ){
            url = "ui_yidiajujia_1.png";
        }else if( tipLevel == 7 ){
            url = "ui_fujiatianxia_1.png";
        }else if( tipLevel == 8 ){
            url = "ui_fukediguo_1.png";
        }else if( tipLevel == 9 ){
            url = "ui_guominlaogong_1.png";
        }
        return this.getResourcePath(url);
    }
};

//根据是否Debug模式，设置是否显示、启动showFPS、debugMode
cc.director.setDisplayStats(Common.isDebugState());
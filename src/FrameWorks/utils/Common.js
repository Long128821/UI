var Common= {
    debugState:true,//是否为调试模式
    channelID:CHANNEL_ID,//渠道号
    version:0x04000000,//版本号
    isDebugState:function(){
        return this.debugState;
    },
    getChannelID:function(){
        return this.channelID;
    },
    setChannelID:function(changeID){
        this.channelID= changeID;
    },
    getVersion:function(){
        return this.version;
    },
    setVersion:function(version){
        this.version= version;
    },
    getVersionName:function(){
        return Profile_JinHuaTableConfig.JinHuaGameVersion;
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
    getCardValue:function(key, table){
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
        this.loadTextureByNetwork(url, function(msg){
            (msg!= null&&target._imageRenderer.setTexture(msg));
        });
    },
    //获取网络图片，添加精灵
    addSpriteByNet:function(url, callback){
        //异步加载头像资源
        cc.loader.loadImg(
            url,
            function(err){
                if(callback!= undefined){
                    callback(err==null?cc.Sprite.create(url):"ERROR");
                }
            }
        );
    },
    loadTextureByNetwork:function(url,callback){
        //异步加载头像资源
        cc.loader.loadImg(
            url,
            function(){},
            function(err){
                var msg= err;
                if(err== null){//加载成功
                    msg= url;
                }else{//加载失败
                    msg= null;
                }
                callback(msg);
            }
        );
    },
    //获取网络图像
    /**
     *
     * @param resLists 资源精灵[要裁切的路径,蒙版]
     * @param rect 精灵所在的位置、尺寸
     * @param target 目标
     */
    setPortraitByType:function(resLists, rect, target){
        this.loadTextureByNetwork(resLists[0], function(msg){
            if(msg==null) return;
            //只有网络头像加载成功，才会执行裁切节点
            //异步加载头像资源
            cc.loader.load(
                resLists,
                function(err){
                    var content= cc.Scale9Sprite.create(resLists[0]);
                    var stencil = cc.Sprite.create(resLists[1]);
                    //为了预防头像小于蒙版尺寸，出现边角的情况
                    if(stencil.height>content.height){
                        stencil.setScaleY(content.height/stencil.height);
                    }

                    if(stencil.width>content.width){
                        stencil.setScaleX(content.width/stencil.width);
                    }

                    var clipper= new cc.ClippingNode();
                    clipper.setStencil(stencil);
                    clipper.setPosition(cc.p(target.getContentSize().width* 0.5, target.getContentSize().height* 0.5));
                    clipper.addChild(content);
                    target.addChild(clipper);
                    target.setOpacity(0);

                    //缩放
                    clipper.setScale(rect.width/(stencil.width* stencil.getScaleX()), rect.height/(stencil.height* stencil.getScaleY()));
                }
            );
        });
    },
    //获取网络图像
    /**
     *
     * @param resLists 资源精灵[要裁切的路径,蒙版]
     * @param rect 精灵所在的位置、尺寸
     */
    getPortraitByType:function(resLists, rect, callback){
        this.loadTextureByNetwork(resLists[0], function(msg){
            if(msg==null) return;//只有网络头像加载成功，才会执行裁切节点
            //异步加载头像资源
            cc.loader.load(
                resLists,
                function(err){
                    var content= cc.Scale9Sprite.create(resLists[0]);
                    var stencil = cc.Sprite.create(resLists[1]);
                    //为了预防头像小于蒙版尺寸，出现边角的情况
                    if(stencil.height>content.height){
                        stencil.setScaleY(content.height/stencil.height);
                    }

                    if(stencil.width>content.width){
                        stencil.setScaleX(content.width/stencil.width);
                    }

                    var clipper= new cc.ClippingNode();
                    clipper.setStencil(stencil);
                    clipper.addChild(content, 1, 1);
                    //缩放
                    clipper.setScale(rect.width/(stencil.width* stencil.getScaleX()), rect.height/(stencil.height* stencil.getScaleY()));

                    (callback!= undefined)&&(callback(clipper));
                }
            );
        });
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
    getJinHuaResourcePath:function(path){
        return "res/"+ path;
    },
    /**
     * Func:显示WebView
     * @param webURL 读取web的url地址
     * @param pos 相对于屏幕左下角位移
     * @param size webview的尺寸(宽和高)
     * @param color webView背景色，默认为rgb(56, 0, 38)
     */
    showWebView:function(webURL, pos, size, target, color){
        var webView = new ccui.WebView(webURL);
        webView.setContentSize(size);
        webView.setAnchorPoint(cc.p(0,0));
        //移除原有的webView
        //获取bgColor(this.Panel_webview._color)
        //设置背景色
        webView._renderCmd._div.style["background"]= ((color== undefined)?"rgb(56, 0, 38)":color);
        var canvasWidth=  cc.game.canvas.width;
        var canvasHeight=  cc.game.canvas.height;
        var posX= (document.body.clientWidth- canvasWidth)* 0.5/cc.view.getScaleX();
        var posY= (document.body.clientHeight- canvasHeight)* 0.5/cc.view.getScaleY();
        //手机旋转
        if(cc.sys.isMobile&&cc.view._orientation== cc.ORIENTATION_LANDSCAPE){
            posX= 0;
            posY= document.body.clientHeight- canvasHeight * 0.5;
        }
        var leftBottomPos= cc.p(posX, posY);
        webView.setPosition(cc.pAdd(leftBottomPos, pos));
        target.addChild(webView);
        return webView;
    },
    //删除字符串中的所有的空格
    deleteAllSpace:function(str){
        var temp= "";
        for(var i=0;i< str.length; ++i){
            if(str.charCodeAt(i)!= 32){
                temp+= str.charAt(i);
            }
        }
        str= temp;
        return str;
    },
    //获取字符串中包含的某个字符或者子串的个数
    getCharCount:function(str, char){
        var length= 0;
        while(str.indexOf(char)!= -1){
            length++;
            str= str.substring(str.indexOf(char)+ 1, str.length);
        }
        return length;
    },
    showToast:function(txt, toastSecond){
        var scene= cc.director.getRunningScene();

        var self= this;
        Load.LoadJsonOrPic("res/toast_bg.png", function(){
            var msg= cc.LabelTTF.create(txt, "微软雅黑",20);
            //根据要显示的文案的宽度和高度，设置点九图的尺寸
            var toastSp= GamePub.createPointNineSpriteForPlist("res/toast_bg.png", 20, 90, msg.width+ 50, msg.height+ 20);
            scene.addChild(toastSp);
            toastSp.setPosition(cc.winSize.width* 0.5, cc.winSize.height* 0.35);

            msg.setPosition(toastSp.getContentSize().width* 0.5, toastSp.getContentSize().height* 0.5);
            toastSp.addChild(msg);

            self.toastMoveUp(toastSp, toastSecond== undefined?2:toastSecond);
        });
    },
    //上移&&不透明度逐渐降低
    toastMoveUp:function(toast, toastSecond){
        var moveTo= cc.moveTo(1, cc.winSize.width* 0.5, cc.winSize.height* 0.65);
        var delay= cc.delayTime(toastSecond);
        var fadeOut= cc.fadeOut(1, 128);
        var spawn= cc.spawn(moveTo, fadeOut);
        var seq= cc.sequence(delay, spawn, cc.callFunc(function(pSender){
            toast.removeFromParent(true);
        }));
        toast.runAction(seq);
    },
    /**
     * Func:获得应用版本号(不带渠道号)
     * 16进制
     * .左右 分别占用8位
     * 因为JS没有匹配字符串的%p模式,所以在使用时,必须以.作为分割。
     */
    getVersionCode:function(mVersionName){
        var versionName= "";
        if(mVersionName== undefined){
            versionName= Profile_JinHuaTableConfig.JinHuaGameVersion;
        }else{
            versionName= mVersionName;
        }
        var id=versionName.indexOf(".");
        if(id== -1){
            console.warn("转换应用版本号失败！"+mVersionName);
            return;
        }
        var version1= versionName.substring(0, id);
        var version2= versionName.substring(id+ 1, versionName.length);
        return Load.leftShiftOp(version1, 24)+ Load.leftShiftOp(version2, 16);
    },
    //得到版本编号
    getScriptVerCode:function(sVersionCode){
        return this.getVersionCode(sVersionCode);
    }
};

//根据是否Debug模式，设置是否显示、启动showFPS、debugMode
cc.director.setDisplayStats(Common.isDebugState());
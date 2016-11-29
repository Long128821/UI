/**
 * Created by Administrator on 2016/11/16.
 */
HallLogic= cc.Layer.extend({
    m_view:null,//视图
    m_bEnabled:false,//是否可用
    m_nickName:null,
    m_photoUrl:null,
    ctor:function(){
        this._super();

    },
     /**
     * func:创建视图
     */
    createView:function(){
        var self= this;
        cc.view.setDesignResolutionSize(1136, 640, cc.ResolutionPolicy.SHOW_ALL);
        this.initView();
        this.initLayer();

        this.m_view.setTouchEnabled(false);

        //初始化时，默认显示不可用，为了迎合以后可能有的延时动画
        this.setLogicEnabled(false);
    },
    initView:function(){
        //使用自动添加事件，已经将UI工程中，导出的控件，添加到该对象中
        this.m_view= CocoStudio.getRooNode("res/Hall.json");
        this.addChild(this.m_view);

        this.m_view.setPosition(cc.winSize.width* 0.5- this.m_view.getContentSize().width* 0.5, cc.winSize.height* 0.5- this.m_view.getContentSize().height* 0.5);
    },

    initLayer:function(){
        CocoStudio.bindMembers(this.m_view, this);//绑定数据成员成员

        if(window.localStorage&&window.localStorage.getItem("NickName")){
            var self= this;
            //设置昵称
            this.Label_NickName.setString(window.localStorage.getItem("NickName"));
            //设置金币数
            self.Label_Coin.setString(window.localStorage.getItem("Coin"));
            //设置元宝数
            self.Label_YuanBao.setString(window.localStorage.getItem("YuanBao"));
            if(window.localStorage.getItem("VipLevel")){
                //设置Vip等级
                self.Image_vipInfo._imageRenderer.setTexture("res/ic_vip"+ window.localStorage.getItem("VipLevel")+".png");
            }
            //设置未读消息数量
            //设置称号
            //Todo:为什么使用loadTexture()不正确
            self.Image_chengwei._imageRenderer.setTexture(g_arrHonor[parseInt(window.localStorage.getItem("Honor"))]);
            //异步加载头像资源
            var image= cc.loader.loadImg(
                window.localStorage.getItem("PhotoUrl"),
                function(){
                    self.Image_touxiang_default._imageRenderer.setTexture(image.src);
                }
            );

            //摇钱树动画
            ccs.armatureDataManager.addArmatureFileInfo("res/Animation/Yaoqianshu_Action_Enter_Animation.ExportJson");
            var armature1 = ccs.Armature.create("Yaoqianshu_Action_Enter_Animation");
            armature1.getAnimation().playWithIndex(0);
            var PosX= this.Button_yaoqianshu.getPosition().x- armature1.getContentSize().width* 0.5;
            var PosY= this.Button_yaoqianshu.getPosition().y- armature1.getContentSize().height* 0.5;
            armature1.setAnchorPoint(cc.p(0,0));
            armature1.setPosition(PosX, PosY);

            this.Panel_top.addChild(armature1);

            //添加监听事件
            //注册事件监听
            self.addListener(armature1);

            //按钮的响应事件
            this.Button_yaoqianshu.removeFromParent(true);

            //快速开始动画
            ccs.armatureDataManager.addArmatureFileInfo("res/Animation/Animation_Hall_Quick.ExportJson");
            var armature2 = ccs.Armature.create("Animation_Hall_Quick");
            armature2.getAnimation().playWithIndex(0, 0.1, true);
            PosX= this.Button_lijiyouxi.getPosition().x- armature1.getContentSize().width* 0.7;
            PosY= this.Button_lijiyouxi.getPosition().y- armature1.getContentSize().height* 0.5;
            armature2.setAnchorPoint(cc.p(0,0));
            armature2.setPosition(PosX, PosY);

            this.panel_down.addChild(armature2);

            //添加监听事件
            //注册事件监听
            self.addListener(armature2);

            //按钮的响应事件
            this.Button_lijiyouxi.removeFromParent(true);


            //经典场动画
            ccs.armatureDataManager.addArmatureFileInfo("res/Animation/Animation_Newhall_ClassicRoom.ExportJson");
            var armature3 = ccs.Armature.create("Animation_Newhall_ClassicRoom");
            armature3.getAnimation().playWithIndex(0, 0.1, true);
            var desPosX= this.Button_jingdian.getPosition().x+  this.panel_centernew.getPosition().x+ this.panel_hall_center.getPosition().x;
            var desPosY= this.Button_jingdian.getPosition().y+  this.panel_centernew.getPosition().y+ this.panel_hall_center.getPosition().y;

            armature3.setAnchorPoint(0, 0);
            armature3.setPosition(cc.p(0, 10));
            this.Button_jingdian.addChild(armature3);

            self.addListener(armature3);


            //千王场动画
            ccs.armatureDataManager.addArmatureFileInfo("res/Animation/Animation_Newhall_CheatKingRoom.ExportJson");
            var armature4 = ccs.Armature.create("Animation_Newhall_CheatKingRoom");
            armature4.getAnimation().playWithIndex(0, 0.1, true);

            armature4.setAnchorPoint(0, 0);
            armature4.setPosition(cc.p(0, 10));
            this.Button_qianwang.addChild(armature4);

            //添加监听事件
            //注册事件监听
            self.addListener(armature4);

            //千王场动画
            ccs.armatureDataManager.addArmatureFileInfo("res/Animation/Animation_Newhall_TounamentRoom.ExportJson");
            var armature5 = ccs.Armature.create("Animation_Newhall_TounamentRoom");
            armature5.getAnimation().playWithIndex(0, 0.1, true);

            armature5.setAnchorPoint(0, 0);
            armature5.setPosition(cc.p(-16, 10));
            this.Button_match.addChild(armature5);

            //添加监听事件
            //注册事件监听
            self.addListener(armature5);

            //按钮的响应事件
            this.Button_lijiyouxi.removeFromParent(true);

            GamePub.showShakeAnimate(this.btn_libao);

            //分割线动画
            this.showLightLineAnimate();
        }
    },
    //分割线动画
    showLightLineAnimate:function(){
        var self= this;
        self.Image_light.setPosition(cc.p(-76, 259));
        var moveTo= cc.moveTo(1.5, cc.p(1136+ 76, 259));
        var delayTime= cc.delayTime(Math.random()* 10+ 10);
        var seq= cc.sequence(moveTo, delayTime, cc.callFunc(function(pSender){
            self.showLightLineAnimate();
        }));
        self.Image_light.runAction(seq);
    },

    //添加监听机制
    addListener:function(armature){
        var self= this;
        var listener= cc.EventListener.create({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            onTouchBegan:function(touch, event){
                //设置触摸的坐标
                var locationPos= touch.getLocation();
                //设置监测区域
                console.log(armature.getContentSize());
                console.log(armature.getPosition());
                var posInView= armature.getParent().convertToWorldSpace(armature.getPosition());
                var rect= cc.rect(posInView.x, posInView.y, armature.getContentSize().width, armature.getContentSize().height);
                console.log("asdf");
                return cc.rectContainsPoint(rect, locationPos);
            },
            onTouchEnded:function(touch, event){
                console.log("135224901");
                self.onBtn_OpenEvent(armature, self);
            }
        });
        cc.eventManager.addListener(listener, armature);
    },

    //设置编辑框是否可使用
    setLogicEnabled:function(bEnabled){
        this.m_bEnabled= ((bEnabled== undefined)?false:bEnabled);
    },
    //关闭按钮
    onBtn_OpenEvent:function(pSender, self){
        console.log(pSender);
        if(!self.m_bEnabled) return;

        //快速进入房间
        alert("快速进入房间！");
    }
});

var HallLogic= new HallLogic();

//Todo:头像异步加载失败的原因是:<script> 中添加了cocos

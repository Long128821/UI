var InteractionTable= {};
//炸弹
InteractionTable[Profile_JinHuaSocial.Type_Bomb]= {
    AnimationName:"BombAnimation",
    Start:"BombStart",
    End:"BombEnd"
};
//鲜花
InteractionTable[Profile_JinHuaSocial.Type_Flower]= {
    AnimationName:"FlowerAnimation",
    Start:"FlowerStart",
    End:"FlowerEnd"
};
//机枪
InteractionTable[Profile_JinHuaSocial.Type_Gun]= {
    AnimationName:"GunAnimation",
    Start:"GunStart",
    End:"GunToEnd"
};
//亲吻
InteractionTable[Profile_JinHuaSocial.Type_Kiss]= {
    AnimationName:"KissAnimation",
    Start:"KissStart",
    End:"KissEnd"
};
//大便
InteractionTable[Profile_JinHuaSocial.Type_Shit]= {
    AnimationName:"ShitAnimation",
    Start:"ShitStart",
    End:"ShitEnd"
};
//西红柿
InteractionTable[Profile_JinHuaSocial.Type_Tomato]= {
    AnimationName:"TomatoAnimation",
    Start:"TomatoStart",
    End:"TomatoEnd"
};

var JinHuaInteractionAnim= {
    m_type:null,
    m_fromPos:null,
    m_toPos:null,
    m_isMoveRight:false,
    m_armature:null,
    //获取互动表情的路径
    getInteraction:function(name){
        return Common.getJinHuaResourcePath("interaction_anim/"+ name);
    },
    //加载动画资源
    loadArmatureData:function(PngPath, PlistPath, ExportJsonPath){
        ccs.armatureDataManager.addArmatureFileInfo(PngPath, PlistPath, ExportJsonPath);
    },
    //加载牌桌动画文件
    loadTableAnim:function(){
        //互动道具动画
        this.loadArmatureData(this.getInteraction("TomatoAnimation0.png"), this.getInteraction("TomatoAnimation0.plist"), this.getInteraction("TomatoAnimation.ExportJson"));//西红柿
        this.loadArmatureData(this.getInteraction("FlowerAnimation0.png"), this.getInteraction("FlowerAnimation0.plist"), this.getInteraction("FlowerAnimation.ExportJson"));//鲜花
        this.loadArmatureData(this.getInteraction("BombAnimation0.png"), this.getInteraction("BombAnimation0.plist"), this.getInteraction("BombAnimation.ExportJson"));//炸弹
        this.loadArmatureData(this.getInteraction("BombAnimation1.png"), this.getInteraction("BombAnimation1.plist"), this.getInteraction("BombAnimation.ExportJson"));
        this.loadArmatureData(this.getInteraction("KissAnimation0.png"), this.getInteraction("KissAnimation0.plist"), this.getInteraction("KissAnimation.ExportJson"));//亲吻
        this.loadArmatureData(this.getInteraction("ShitAnimation0.png"), this.getInteraction("ShitAnimation0.plist"), this.getInteraction("ShitAnimation.ExportJson"));//大便
        this.loadArmatureData(this.getInteraction("ShitAnimation1.png"), this.getInteraction("ShitAnimation1.plist"), this.getInteraction("ShitAnimation.ExportJson"));
        this.loadArmatureData(this.getInteraction("GunAnimation0.png"), this.getInteraction("GunAnimation0.plist"), this.getInteraction("GunAnimation.ExportJson"));//机枪
    },
    //显示互动道具开始阶段
    //@param #type number 动画类型
    //@param #fromPos number 发起者位置
    //@param #toPos number 目标者位置
    //@param #isMoveToRight
    showInteractionAnimStart:function(type, fromPos, toPos, isMoveToRight){
        this.m_type= type;
        this.m_fromPos= fromPos;
        this.m_toPos= toPos;
        this.m_isMoveRight= isMoveToRight;
        var self= this;
        switch (type){
            case Profile_JinHuaSocial.Type_Bomb://炸弹
            {
                //比牌胜利动画
                Common.createArmature(self.getInteraction("BombAnimation.ExportJson"), "BombAnimation", function(armature){
                    armature.animation.play(InteractionTable[type].Start);
                    armature.animation.setMovementEventCallFunc(self.startCallBack);
                    armature.setScaleX(isMoveToRight?1:(-1));
                    JinHuaInteractionAnim.setArmatureDataOfStart(armature, fromPos);
                });
                break;
            }
            case Profile_JinHuaSocial.Type_Flower://鲜花
            {
                //比牌胜利动画
                Common.createArmature(self.getInteraction("FlowerAnimation.ExportJson"), "FlowerAnimation", function(armature){
                    armature.animation.play(InteractionTable[type].Start);
                    armature.animation.setMovementEventCallFunc(self.startCallBack);
                    armature.setScaleX(isMoveToRight?1:(-1));
                    JinHuaInteractionAnim.setArmatureDataOfStart(armature, fromPos);
                });
                break;
            }
            case Profile_JinHuaSocial.Type_Gun://机关枪
            {
                //比牌胜利动画
                Common.createArmature(self.getInteraction("GunAnimation.ExportJson"), "GunAnimation", function(armature1){
                    var animation1= armature1.getAnimation();
                    animation1.play(InteractionTable[type].End);
                    animation1.setMovementEventCallFunc(self.endCallBack);
                    armature1.setScaleX(isMoveToRight?1:(-1));
                    JinHuaInteractionAnim.setArmatureDataOfStart(armature1, toPos);
                    //比牌胜利动画
                    Common.createArmature(self.getInteraction("GunAnimation.ExportJson"), "GunAnimation", function(armature){
                        var animation= armature.getAnimation();
                        animation.play(InteractionTable[type].Start);
                        animation.setMovementEventCallFunc(self.startCallBack);
                        armature.setScaleX(isMoveToRight?1:(-1));
                        JinHuaInteractionAnim.setArmatureDataOfStart(armature, fromPos);
                    });
                });
                break;
            }
            case Profile_JinHuaSocial.Type_Kiss://亲吻
            {
                //比牌胜利动画
                Common.createArmature(self.getInteraction("KissAnimation.ExportJson"), "KissAnimation", function(armature){
                    armature.animation.play(InteractionTable[type].Start);
                    armature.animation.setMovementEventCallFunc(self.startCallBack);
                    armature.setScaleX(isMoveToRight?1:(-1));
                    JinHuaInteractionAnim.setArmatureDataOfStart(armature, fromPos);
                });
                break;
            }
            case Profile_JinHuaSocial.Type_Shit://大便
            {
                //比牌胜利动画
                Common.createArmature(self.getInteraction("ShitAnimation.ExportJson"), "ShitAnimation", function(armature){
                    armature.animation.play(InteractionTable[type].Start);
                    armature.animation.setMovementEventCallFunc(self.startCallBack);
                    armature.setScaleX(isMoveToRight?1:(-1));
                    JinHuaInteractionAnim.setArmatureDataOfStart(armature, fromPos);
                });
                break;
            }
            case Profile_JinHuaSocial.Type_Tomato://西红柿
            {
                //比牌胜利动画
                Common.createArmature(self.getInteraction("TomatoAnimation.ExportJson"), "TomatoAnimation", function(armature){
                    armature.animation.play(InteractionTable[type].Start);
                    armature.animation.setMovementEventCallFunc(self.startCallBack);
                    armature.setScaleX(isMoveToRight?1:(-1));
                    JinHuaInteractionAnim.setArmatureDataOfStart(armature, fromPos);
                });
                break;
            }
            default :return;
        }
    },
    //设置动画数据
    setArmatureDataOfStart:function(armature, fromPos){
        if(!Common.judgeValueIsEffect(armature)) return;
        this.m_armature= armature;
        armature.setPosition(fromPos);
        armature.setLocalZOrder(99);
        JinHuaSendGiftAnim.getSendGiftLayer().addChild(armature, 1);
    },
    //设置动画数据
    setArmatureDataOfEnd:function(armature, toPos){
        if(!Common.judgeValueIsEffect(armature)) return;
        this.m_armature= armature;
        armature.setPosition(toPos);
        armature.setLocalZOrder(99);
        JinHuaSendGiftAnim.getSendGiftLayer().addChild(armature, 1);
    },
    startCallBack:function(armatureBack, movementType, movementID){
        if(movementType== ccs.MovementEventType.complete){//循环动画结束一次
            armatureBack.stopAllActions();
            switch(movementID){
                case InteractionTable[Profile_JinHuaSocial.Type_Bomb].Start:
                case InteractionTable[Profile_JinHuaSocial.Type_Flower].Start:
                case InteractionTable[Profile_JinHuaSocial.Type_Kiss].Start:
                case InteractionTable[Profile_JinHuaSocial.Type_Shit].Start:
                case InteractionTable[Profile_JinHuaSocial.Type_Tomato].Start:
                {
                    JinHuaInteractionAnim.moveAnimation(armatureBack);
                    break;
                }
                case InteractionTable[Profile_JinHuaSocial.Type_Gun].Start:
                    armatureBack.removeFromParent(true);
                    JinHuaInteractionAnim.m_armature= null;
                    break;
            }
        }
    },
    //位移动画
    moveAnimation:function(armature){
        var moveTo= cc.moveTo(0.5, this.m_toPos);
        var seq= cc.sequence(moveTo, cc.callFunc(this.moveEndCallback));
        armature.runAction(seq);
    },
    moveEndCallback:function(pSender){
        pSender.removeFromParent(true);
        JinHuaInteractionAnim.m_armature= null;
        JinHuaInteractionAnim.showInteractionAnimEnd();
    },
    showInteractionAnimEnd:function(){
        var self= this;
        switch (JinHuaInteractionAnim.m_type){
            case Profile_JinHuaSocial.Type_Bomb://炸弹
            {
                //比牌胜利动画
                Common.createArmature(self.getInteraction("BombAnimation.ExportJson"), "BombAnimation", function(armature){
                    armature.animation.play(InteractionTable[JinHuaInteractionAnim.m_type].End);
                    armature.animation.setMovementEventCallFunc(self.endCallBack);
                    armature.setScaleX(JinHuaInteractionAnim.m_isMoveRight?1:(-1));
                    JinHuaInteractionAnim.setArmatureDataOfEnd(armature, JinHuaInteractionAnim.m_toPos);
                });
                break;
            }
            case Profile_JinHuaSocial.Type_Flower://鲜花
            {
                //比牌胜利动画
                Common.createArmature(self.getInteraction("FlowerAnimation.ExportJson"), "FlowerAnimation", function(armature){
                    armature.animation.play(InteractionTable[JinHuaInteractionAnim.m_type].End);
                    armature.animation.setMovementEventCallFunc(self.endCallBack);
                    armature.setScaleX(JinHuaInteractionAnim.m_isMoveRight?1:(-1));
                    JinHuaInteractionAnim.setArmatureDataOfEnd(armature, JinHuaInteractionAnim.m_toPos);
                });
                break;
            }
            case Profile_JinHuaSocial.Type_Kiss://亲吻
            {
                //比牌胜利动画
                Common.createArmature(self.getInteraction("KissAnimation.ExportJson"), "KissAnimation", function(armature){
                    armature.animation.play(InteractionTable[JinHuaInteractionAnim.m_type].End);
                    armature.animation.setMovementEventCallFunc(self.endCallBack);
                    armature.setScaleX(JinHuaInteractionAnim.m_isMoveRight?1:(-1));
                    JinHuaInteractionAnim.setArmatureDataOfEnd(armature, JinHuaInteractionAnim.m_toPos);
                });
                break;
            }
            case Profile_JinHuaSocial.Type_Shit://大便
            {
                //比牌胜利动画
                Common.createArmature(self.getInteraction("ShitAnimation.ExportJson"), "ShitAnimation", function(armature){
                    armature.animation.play(InteractionTable[JinHuaInteractionAnim.m_type].End);
                    armature.animation.setMovementEventCallFunc(self.endCallBack);
                    armature.setScaleX(JinHuaInteractionAnim.m_isMoveRight?1:(-1));
                    JinHuaInteractionAnim.setArmatureDataOfEnd(armature, JinHuaInteractionAnim.m_toPos);
                });
                break;
            }
            case Profile_JinHuaSocial.Type_Tomato://西红柿
            {
                //比牌胜利动画
                Common.createArmature(self.getInteraction("TomatoAnimation.ExportJson"), "TomatoAnimation", function(armature){
                    armature.animation.play(InteractionTable[JinHuaInteractionAnim.m_type].End);
                    armature.animation.setMovementEventCallFunc(self.endCallBack);
                    armature.setScaleX(JinHuaInteractionAnim.m_isMoveRight?1:(-1));
                    JinHuaInteractionAnim.setArmatureDataOfEnd(armature, JinHuaInteractionAnim.m_toPos);
                });
                break;
            }
            case Profile_JinHuaSocial.Type_Gun://机关枪
            default :return;
        }
    },
    //结束回调函数
    endCallBack:function(armatureBack, movementType, movementID){
        if(movementType== ccs.MovementEventType.complete){//循环动画结束一次
            armatureBack.stopAllActions();
            armatureBack.removeFromParent(true);
            JinHuaInteractionAnim.m_armature= null;
        }
    }
};
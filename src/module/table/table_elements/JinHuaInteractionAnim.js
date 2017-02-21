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
    End:"GunEnd"
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
//        this.loadArmatureData(this.getInteraction("TomatoAnimation0.png"), this.getInteraction("TomatoAnimation0.plist"), this.getInteraction("TomatoAnimation.ExportJson"));//西红柿
//        this.loadArmatureData(this.getInteraction("FlowerAnimation0.png"), this.getInteraction("FlowerAnimation0.plist"), this.getInteraction("FlowerAnimation.ExportJson"));//鲜花
//        this.loadArmatureData(this.getInteraction("BombAnimation0.png"), this.getInteraction("BombAnimation0.plist"), this.getInteraction("BombAnimation.ExportJson"));//炸弹
//        this.loadArmatureData(this.getInteraction("BombAnimation1.png"), this.getInteraction("BombAnimation1.plist"), this.getInteraction("BombAnimation.ExportJson"));
//        this.loadArmatureData(this.getInteraction("KissAnimation0.png"), this.getInteraction("KissAnimation0.plist"), this.getInteraction("KissAnimation.ExportJson"));//亲吻
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
                break;
            case Profile_JinHuaSocial.Type_Flower://鲜花
                break;
            case Profile_JinHuaSocial.Type_Gun://机关枪
            {
                //比牌胜利动画
                Common.createArmature(self.getInteraction("GunAnimation.ExportJson"), "GunAnimation", function(armature){
                    armature.animation.playWithIndex(0, 0.1,false);
                    armature.animation.setMovementEventCallFunc(self.startCallBack);
                    armature.setScaleX(isMoveToRight?1:(-1));
                    JinHuaInteractionAnim.setArmatureData(armature, fromPos, toPos);
                });
                break;
            }
            case Profile_JinHuaSocial.Type_Kiss://亲吻
                break;
            case Profile_JinHuaSocial.Type_Shit://大便
                break;
            case Profile_JinHuaSocial.Type_Tomato://西红柿
                break;
            default :return;
        }
    },
    //设置动画数据
    setArmatureData:function(armature, fromPos, toPos){
        if(!Common.judgeValueIsEffect(armature)) return;
        this.m_armature= armature;
        armature.setPosition(fromPos);
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
                    JinHuaInteractionAnim.showInteractionAnimEnd();
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
        this.m_armature= null;
        this.showInteractionAnimStart();
    },
    showInteractionAnimEnd:function(){
        var self= this;
        switch (JinHuaInteractionAnim.m_type){
            case Profile_JinHuaSocial.Type_Bomb://炸弹
                break;
            case Profile_JinHuaSocial.Type_Flower://鲜花
                break;
            case Profile_JinHuaSocial.Type_Gun://机关枪
            {
                //比牌胜利动画
                Common.createArmature(self.getInteraction("GunAnimation.ExportJson"), "GunAnimation", function(armature){
                    armature.animation.playWithIndex(0, 0.1,false);
                    armature.animation.setMovementEventCallFunc(self.startCallBack);
                    armature.setScaleX(JinHuaInteractionAnim.m_isMoveRight?1:(-1));
                    JinHuaInteractionAnim.setArmatureData(armature, JinHuaInteractionAnim.m_fromPos, JinHuaInteractionAnim.m_toPos);
                });
                break;
            }
            case Profile_JinHuaSocial.Type_Kiss://亲吻
                break;
            case Profile_JinHuaSocial.Type_Shit://大便
                break;
            case Profile_JinHuaSocial.Type_Tomato://西红柿
                break;
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
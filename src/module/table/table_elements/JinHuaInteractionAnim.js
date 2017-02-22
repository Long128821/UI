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
    m_type:null,//互动表情类型
    m_fromPos:null,//互动表情动画的起始位置
    m_toPos:null,//互动表情动画的终点位置
    m_isMoveRight:false,//目标位置是否在起始位置的右边(决定是否旋转动画)
    /**
     * Func:获取互动表情动画的路径
     * @param resName 动画文件名(*.ExportJson格式)
     */
    getInteraction:function(resName){
        return Common.getJinHuaResourcePath("interaction_anim/"+ resName);
    },
    /**
     * Func:创建动画
     * @param bStart 是否为初始动画
     */
    createArmature:function(bStart){
        var self= this;
        var interactionTable= InteractionTable[self.m_type];
        Common.createArmature(self.getInteraction(interactionTable.AnimationName+ ".ExportJson"), interactionTable.AnimationName, function(armature){
            //确保机枪在弹孔的上面(机枪和弹孔同时出现)
            if(self.m_type== Profile_JinHuaSocial.Type_Gun){//机枪
                var armature1= ccs.Armature.create(interactionTable.AnimationName);
                self.addChildToLayer(false, armature1);
            }
            self.addChildToLayer(bStart, armature);
        });
    },
    /**
     * Func:将动画添加到Layer中，显示出来
     * @param bStart 是否为初始动画
     * @param armature 动画
     */
    addChildToLayer:function(bStart, armature){
        var self= this;
        var animation= armature.getAnimation();
        var interactionTable= InteractionTable[self.m_type];
        animation.play(bStart?interactionTable.Start:interactionTable.End);//要执行的动画名
        animation.setMovementEventCallFunc(bStart?self.startCallBack:self.endCallBack);//设置回调
        JinHuaInteractionAnim.setArmatureData(armature, bStart?self.m_fromPos:self.m_toPos);
    },
    /**
     * Func:显示互动道具开始阶段
     * @param type 动画类型
     * @param fromPos 动画类型
     * @param toPos 动画类型
     * @param isMoveToRight 目标位置是否在右边(送礼物为参照物)
     */
    showInteractionAnimStart:function(type, fromPos, toPos, isMoveToRight){
        this.m_type= type;
        this.m_fromPos= fromPos;
        this.m_toPos= toPos;
        this.m_isMoveRight= isMoveToRight;
        this.createArmature(true);//创建对应的初始动画
    },
    /**
     * Func:设置动画数据
     * @param armature 动画
     * @param pos 动画初始位置
     */
    setArmatureData:function(armature, pos){
        if(!Common.judgeValueIsEffect(armature)) return;
        armature.setPosition(pos);
        armature.setLocalZOrder(99);
        armature.setScaleX(this.m_isMoveRight?1:(-1));//是否翻转
        JinHuaSendGiftAnim.getSendGiftLayer().addChild(armature, 1);
    },
    /**
     * Func:动画执行动作(移动到目标位置)
     * @param armature
     */
    moveAnimation:function(armature){
        var moveTo= cc.moveTo(0.5, this.m_toPos);
        var seq= cc.sequence(moveTo, cc.callFunc(this.moveEndCallback));
        armature.runAction(seq);
    },
    /**
     * Func:移除初始动画,显示结束动画
     * @param pSender 初始化动画
     */
    moveEndCallback:function(pSender){
        pSender.removeFromParent(true);
        JinHuaInteractionAnim.showInteractionAnimEnd();
    },
    /**
     * Func:显示结束动画
     */
    showInteractionAnimEnd:function(){
        if(this.m_type== Profile_JinHuaSocial.Type_Gun) return;
        this.createArmature(false);
    },
    /**
     * Func:动画执行完毕之后的回调函数(animation.setMovementEventCallFunc())
     * @param armatureBack 执行的动画
     * @param movementType 动画ID
     * @param movementID 动画名
     */
    startCallBack:function(armatureBack, movementType, movementID){
        if(movementType== ccs.MovementEventType.complete){//循环动画结束一次
            armatureBack.stopAllActions();
            if(movementID== InteractionTable[Profile_JinHuaSocial.Type_Gun].Start){
                armatureBack.removeFromParent(true);
            }else{
                JinHuaInteractionAnim.moveAnimation(armatureBack);
            }
        }
    },
    //结束回调函数
    endCallBack:function(armatureBack, movementType, movementID){
        if(movementType== ccs.MovementEventType.complete){//循环动画结束一次
            armatureBack.stopAllActions();
            armatureBack.removeFromParent(true);
        }
    }
};
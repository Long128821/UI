/**
 * Created by Administrator on 2016/11/28.
 */
var GamePub= {
    //左右摆动动画
    showShakeAnimate:function(view){
        var array= [];
        array.push(cc.rotateBy(0.08, 20));
        array.push(cc.rotateBy(0.08, -40));
        array.push(cc.rotateBy(0.08, 40));
        array.push(cc.rotateBy(0.08, -20));
        array.push(cc.delayTime(0.8));
        var seq= cc.sequence(array);
        view.runAction(seq.repeatForever());
    }
};
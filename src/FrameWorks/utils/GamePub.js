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
    },
    //精确保留多少位消息
    //
    getPreciseDecimal:function(nNum, n){
        if(typeof nNum!= "number"){
            console.warn(nNum+ " is not number");
            return;
        }
        n= n||0;
        n= Math.floor(n);
        if(n< 0){
            n= 0;
        }
        var nDecimal = 1/Math.pow(10, n);
        if(nDecimal == 1) {
            nDecimal = nNum;
        }
        var nLeft= nNum%nDecimal;
        return nNum- nLeft;
    }
};
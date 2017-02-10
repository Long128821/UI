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
    //保留操作后得到数的最后一位数，如果是0或者小数点，不要
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
        var strNum= nNum.toFixed(n).toString();
        if(strNum.length< 1) return 0;
        var lastIndex= strNum.length- 1;//最后一位的索引
        var lastNum= strNum[lastIndex];//最后一位数
        while((lastNum== '0'||lastNum== '.')){
            strNum= strNum.substring(0, lastIndex);
            lastIndex= strNum.length- 1;
            lastNum= strNum[lastIndex];
        }
        return strNum;
    },
    //转换金币数(使用万、亿为单位)
    convertCoin:function(coin){
        if(coin>= 100000000){
            return this.getPreciseDecimal(coin / 100000000, 2)+"亿"
        }else if(coin >= 10000){
            return this.getPreciseDecimal(coin / 10000, 2)+"万";
        }
        return coin;
    },
    //
        //得到九宫格精灵
        //@param #String imageNamePath 图片地址
    //@param #number insetWidth 图片保留宽
    //@param #number insetHeight 图片保留高
    //@param #number ScaleWidth 图片显示宽
    //@param #number ScaleHeight 图片显示高
    createPointNineSpriteForPlist:function(imageNamePath, insetWidth, insetHeight, ScaleWidth, ScaleHeight){
        var tmp = cc.Sprite.createWithSpriteFrameName(imageNamePath);
        var tmpSize = tmp.getContentSize();
        var rectInsets = cc.size(insetWidth,insetHeight,tmpSize.width-insetWidth*2,tmpSize.height-insetHeight*2);
        var winRect = cc.size(ScaleWidth, ScaleHeight==undefined?tmpSize.height:ScaleHeight);//设置要拉伸后的的大小
        var m_pNextBG  = cc.Scale9Sprite.createWithSpriteFrameName(imageNamePath, rectInsets);
        m_pNextBG.setContentSize(winRect);
        return m_pNextBG;
    }
};
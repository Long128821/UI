var CommonFunction= {
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
//    //在Table中，是否包含某个key
//    isContainsKey:function(key, table){
//        if(this.judgeValueIsEffect(key)||this.judgeValueIsEffect(table)) return false;
//
//        for(var _key in table){
//            if(_key== key){//判断是否一致
//                return true;
//            }
//        }
//        return false;
//    },

    //获取值
    getValue:function(key, table){
        if((!this.judgeValueIsEffect(key))||(!this.judgeValueIsEffect(table))) return null;
        for(var _key in table){
            if(_key == key){
                return table[_key];
            }
        }
        return null;
    }
};
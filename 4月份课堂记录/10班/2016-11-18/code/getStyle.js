/**
 * Created by Administrator on 2016/11/18.
 */
define(function(require,exports,module){
    exports.getStyle = function(obj,name){
        if(obj.currentStyle){
            return obj.currentStyle[name];
        }else{
            return getComputedStyle(obj,false)[name];
        }
    }
});


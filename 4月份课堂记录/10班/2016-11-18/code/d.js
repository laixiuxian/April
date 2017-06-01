/**
 * Created by Administrator on 2016/11/18.
 */
define(function(require,exports,module){
    var mod1 = require('b');
    var mod2 = require('c');

    exports.sum = function(){
        return mod1.a + mod2.a;
    }

});


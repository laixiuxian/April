/**
 * Created by Administrator on 2016/11/18.
 */
define(function(require,exports,module){
    var get = require('getStyle');
    exports.move = function (obj, json, options) {
        clearInterval(obj.timer);
        options = options || {};
        options.time = options.time || 500;
        options.easeing = options.easeing || 'ease-out';
        var dis = {};
        var start = {};
        for (var name in json) {
            start[name] = parseFloat(get.getStyle(obj, name));
            dis[name] = json[name] - start[name];
        }
        var count = Math.floor(options.time / 30);
        var n = 0;
        obj.timer = setInterval(function () {
            n++;
            for (var name in json) {
                switch (options.easeing) {
                    case 'linear':
                        var a = n / count;
                        var cur = start[name] + dis[name] * a;
                        break;
                    case 'ease-in':
                        var a = n / count;
                        var cur = start[name] + dis[name] * a * a * a;
                        break;
                    case 'ease-out':
                        var a = 1 - n / count;
                        var cur = start[name] + dis[name] * (1 - a * a * a);
                }
                if (name == 'opacity') {
                    obj.style.opacity = cur;
                    obj.style.filter = 'alpha(opacity:' + cur * 100 + ')';
                } else {
                    obj.style[name] = cur + 'px';
                }
            }
            if (n == count) {
                clearInterval(obj.timer);
                options.fn && options.fn();
            }
        }, 30);
    }
});


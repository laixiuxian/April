/**
 * Created by Administrator on 2016/11/18.
 */
define(function(require,exports,module){
    var move = require('startmove');
    var aBtn = document.getElementById('btn').getElementsByTagName('li');
    var oBox = document.getElementById('box');
    var aLi = oBox.getElementsByTagName('li');

    exports.slider = function(){
        for(var i = 0; i < aBtn.length; i++){
            (function(index){
                aBtn[i].onclick = function(){
                    for(var i = 0; i < aBtn.length; i++){
                        aBtn[i].className = '';
                    }
                    this.className = 'active';
                    move.move(oBox,{top:-aLi[0].offsetHeight * index});
                }
            })(i);
        }
    };
});


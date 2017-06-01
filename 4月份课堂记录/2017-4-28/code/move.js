//获取非行间样式;
function getStyle(obj, attr) {
   if (obj.currentStyle) {
      return obj.currentStyle[attr];
   } else {
      return getComputedStyle(obj, false)[attr];
   }
}

//obj:物体,iTarget:目标点;name:起点属性;
function move(obj, name, iTarget, time, fn) {
   var start = parseFloat(getStyle(obj, name));//起点
   var dis = iTarget - start;//总距离
   var count = parseInt(time / 30);//总次数
   var step = dis / count;//步长
   var n = 0;//当前走的次数;
   timer = setInterval(function () {
      n++;
      if (n == count) {
         clearInterval(timer);
         fn && fn();
      }
      obj.style[name] = start + step * n + 'px';
   }, 30);
}
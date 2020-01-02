function dateDiff(date1,date2){
    var d1 = new Date(date1);
    if(date2){
        var d2 = new Date(date2);
    }else{
        var d2 = new Date();
    }
    var sum = Math.abs(d2.getTime() - d1.getTime());
    var day = parseInt(sum/1000/60/60/24);
    var h = parseInt((sum - day*24*60*60*1000)/1000/60/60);
    var m = parseInt((sum - day*24*60*60*1000 - h*60*60*1000)/1000/60);
    var s = parseInt((sum - day*24*60*60*1000 - h*60*60*1000 - m*60*1000)/1000);
    return {
        day:day,
        hours:h,
        minutes:m,
        seconds:s
    }
}

function createDate(){
    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth();
    var mydate = d.getDate();
    var myday = d.getDay();

    var h = d.getHours();
    var miuts = d.getMinutes();
    var s = d.getSeconds();

    switch(myday){
        case 0:myday = "星期日";break;
        case 1:myday = "星期一";break;
        case 2:myday = "星期二";break;
        case 3:myday = "星期三";break;
        case 4:myday = "星期四";break;
        case 5:myday = "星期五";break;
        case 6:myday = "星期六";break;
    }

    return {
        year:y,
        month:createZero(m+1),
        date:createZero(mydate),
        day:myday,
        hours:createZero(h),
        minutes:createZero(miuts),
        seconds:createZero(s)
    };
}

function createZero(n){
    if(n<10 || n.length<2){
        return "0"+n;
    }else{
        return n;
    }
}

function random(a,b){
    return Math.round(Math.random()*(a-b)+b);
}

function randomColorStr(){
    var r = random(0,255).toString(16);
    var g = random(0,255).toString(16);
    var b = random(0,255).toString(16);
    return "#"+createZero(r)+createZero(g)+createZero(b);
}

function randomColorRGB(){
    return "rgb("+random(0,255)+","+random(0,255)+","+random(0,255)+")";
}

//获取样式兼容性写法
function getStyle(ele,attr){
    if(ele.currentStyle)
    {
        return ele.currentStyle[attr];
    }
    else
    {
        return getComputedStyle(ele,false)[attr];
    }
}

// keyBoardEvent获取键盘输入兼容性写法
function eventCom(e){
    var code = e.keyCode || e.witch;
}

//添加事件监听器兼容性写法
function addEvent(ele,type,callback){
    if(ele.attachEvent) ele.attachEvent("on"+type,callback);
    else    ele.addEventListener(type,callback);
}

//删除事件监听器兼容性写法
function removeEvent(ele,type,callback){
    if(ele.detachEvent) ele.detachEvent("on"+type,callback);
    else    ele.removeEventListener(type,callback);
}

//阻止浏览器默认行为的兼容性写法
function stopDefault(e){
    if(e.preventDefault)    e.prevenDefault();
    else    e.returnValue = true;
}
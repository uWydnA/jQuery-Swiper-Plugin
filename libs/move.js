function move(ele, data, end) {
    clearInterval(ele.t);
    ele.t = setInterval(() => {
        var onoff = true;
        for (var i in data) {
            var iNow = parseInt(getStyle(ele, i));
            var speed = (data[i] - iNow) / 7;
            speed = speed < 0 ? Math.floor(speed) : Math.ceil(speed);

            (data[i] != iNow) && (onoff = false);
            ele.style[i] = iNow + speed + "px";
        }
        if (onoff) {
            clearInterval(ele.t);
            end && end();
        }
    }, 30);
}

function getStyle(ele, attr) {
    if (getComputedStyle) {
        return getComputedStyle(ele, false)[attr];
    } else {
        return ele.currentStyle[attr];
    }
}
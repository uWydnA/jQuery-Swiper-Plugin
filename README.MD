# jQuery Swiper Plugin

## 依赖

```js
<script src="libs/jquery-2.2.4.js"></script>
```

## 调用方式

1. 选中BOM元素
2. 调用他身上的方法：.banner()
3. 传入下列参数

```js
 $(".banner").banner({
        //必传,数组,图片路径
        img: ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"],
        btn: true, //可选，默认为true
        list: true, //可选，默认为true
        autoPlay: true, //可选，默认为true
        delayTime: 3000, //可选，默认为2000
        moveTime: 500, //可选，默认为200
        index: 0 //可选，默认为0
 })
```



## 参数

### img

> 图片的相对路径

### btn

> 轮播图的左右按钮，默认有，值为false时，没有

### list

>  轮播图的小圆点，默认有，值为false时，没有

### autoPlay

> ture或不填:开启自动播放功能
>
> false:关闭自动播放功能

### delayTime

> 自动播放下一张图片的间隔时间

### moveTime

> 切换照片所需的时间

### index

> 页面打开默认的图片，如希望第n张图片默认打开时显示，则输入n-1
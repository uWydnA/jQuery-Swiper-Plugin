;
(function ($, jQuery) {
    "use strict";
    $.fn.banner = function (options) {
        var that = this;
        options = options || {};
        this._obj = {
            img: options.img ? options.img : [],
            btn: options.btn === false ? false : true,
            list: options.list === false ? false : true,
            autoPlay: options.autoPlay === false ? false : true,
            delayTime: options.delayTime ? options.delayTime : 2000,
            moveTime: options.moveTime ? options.moveTime : 200,
            index: options.index ? options.index : 0,
            iPrev: options.img.length - 1
        };
        this._obj.init = function () {
            var str = ``;
            for (var i = 0; i < this.img.length; i++) {
                str += `<a><img src = '${this.img[i]}'></a>`;
            }
            that.html(`<div class="imgbox">${str}</div>`).css({
                width: 1000,
                height: 300,
                position: "relative",
                overflow: "hidden"
            }).children(".imgbox").css({
                height: 300
            }).children("a").css({
                width: 1000,
                height: 300,
                left: 1000,
                top: 0,
                position: "absolute",
            }).children("img").css({
                width: "100%",
                height: "100%"
            }).end().eq(0).css({
                left: 0
            });
        }
        this._obj.display = function (iPrev, iNow, type) {
            var img = that.children(".imgbox").children("a");
            var l = img.eq(0).width();
            img.eq(iPrev).css({
                left: 0
            }).stop().animate({
                left: -l * type
            }).end().eq(iNow).css({
                left: l * type
            }).stop().animate({
                left: 0
            })
        }
        this._obj.dot = function () {
            that.children(".list").children("li").eq(this.index).css({
                background: "rgba(255,153,153,.8)"
            }).siblings().css({
                background: "rgba(100,100,100,.3)",
            })
        }
        this._obj.leftClick = function () {
            if (that._obj.index == 0) {
                that._obj.index = that._obj.img.length - 1;
                that._obj.iPrev = 0;
            } else {
                that._obj.iPrev = that._obj.index;
                that._obj.index--;
            }
            that._obj.display(that._obj.iPrev, that._obj.index, -1);
            if (that.children(".list")[0]) {
                that._obj.dot();
            }
        }
        this._obj.rightClick = function () {
            if (that._obj.index == that._obj.img.length - 1) {
                that._obj.index = 0;
                that._obj.iPrev = that._obj.img.length - 1;
            } else {
                that._obj.iPrev = that._obj.index;
                that._obj.index++;
            }
            that._obj.display(that._obj.iPrev, that._obj.index, 1);
            if (that.children(".list")[0]) {
                that._obj.dot();
            }
        }
        this._obj.btnCheck = function () {
            if (this.btn) {
                $("<input id='left' value = '<'>").css({
                    left: 0
                }).appendTo(that).after($("<input id='right' value = '>'>").css({
                    right: 0
                })).parent().children("input").css({
                    position: "absolute",
                    width: 40,
                    height: 35,
                    top: that.height() / 2 - $("#left").height(),
                    border: "0",
                    background: "rgba(102,102,102.5)",
                    lineHeight: $("#left").height(),
                    textAlign: "center",
                })
                that.children("#left").on("click", this.leftClick);
                that.children("#right").on("click", this.rightClick);

            }
        }
        this._obj.listCheck = function () {
            if (this.list) {
                $("<ul class='list'>").appendTo(that);
                var str = ``;
                for (var i = 0; i < this.img.length; i++) {
                    str += `<li>${i+1}</li>`;
                }
                that.children(".list").html(str).css({
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    position: "absolute",
                    bottom: 0,
                    display: "flex",
                    width: "100%",
                    height: "40px",
                    justifyContent: "center",
                    alignItems: "center",
                }).children("li").css({
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: "rgba(100,100,100,.3)",
                    margin: "0 10px",
                    textAlign: "center",
                    lineHeight: "30px"
                }).eq(this.index).css({
                    background: "rgba(255,153,153,.8)",
                });
                $(".list").on("click", "li", function () {
                    that._obj.iPrev = that._obj.index
                    that._obj.index = $(this).index()
                    if (that._obj.iPrev < that._obj.index) {
                        that._obj.display(that._obj.iPrev, that._obj.index, 1);
                    }
                    if (that._obj.iPrev > that._obj.index) {
                        that._obj.display(that._obj.iPrev, that._obj.index, -1);
                    }
                    that._obj.dot();
                })
            }
        }
        this._obj.autoCheck = function () {
            if (this.autoPlay) {
                that._obj.t = setInterval(() => {
                    that._obj.rightClick();
                }, that._obj.delayTime);
                that.hover(function () {
                    clearInterval(that._obj.t)
                }, function () {
                    that._obj.t = setInterval(() => {
                        that._obj.rightClick();
                    }, that._obj.delayTime);
                })
            }
        }
        this._obj.init();
        this._obj.btnCheck()
        this._obj.listCheck()
        this._obj.autoCheck()
    }
})($, jQuery);
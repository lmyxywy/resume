/// <reference path="jquery.min.js" />
$(function () {

    /////////////////////////////////////////////////////////////////////页面加载之后css3动画效果

    var obAll_1 = [
            [$(".header_left"), "animated fadeInLeftBig"],
            [$(".header_right"), "animated fadeInRightBig"],
            [$(".nav"), "animated fadeInLeftBig"],
            [$(".inpage_top"), "animated fadeInRightBig"]
    ];
    moreAnimate(1, obAll_1);
    ////////////////////////////////导航下蓝色小三角显示效果

    $(".nav_show").css({ "color": "#00acee" });
    $(".nav_show .nav_triangle").css({ "display": "block"});

    ////////////////////////////////////////头部小搜索按钮默认隐藏

    headerSearch();

    function headerSearch() {
        $(".header_fixed_search").hide();
        $(".header_fixed_search_body").hide();
        $(".header_fixed_search").hover(function () {
            $(".header_fixed_search_body").show();
        }, function () {
            $(".header_fixed_search_body").hide();
        });
    }

    ///////////////////////////////////滚动鼠标滚轮触发

    $(window).scroll(function () {

        navFixed($(".header"), "header_fixed");

        var obAll_0 = [
            [$(".footer"), "animated fadeInUp"]
        ];
        moreAnimate(0, obAll_0);

    });

    ///////////////头部导航自动渐变贴顶(*使用时需要放在$(window).scroll(function (){}中)

    function navFixed(ob, className) {
        if (ob.offset().top <= $(window).scrollTop()) {
            ob.addClass(className);

            $(".header_fixed_search").show();

            if ($(window).scrollTop() == 0) {
                ob.removeClass(className);

                $(".header_fixed_search").hide();
            }
        }
    }




})

///////////////多组"元素出现动画"循环遍历

function moreAnimate(situate, group) {
    if (situate == 0) {
        for (i = 0; i < group.length; i++) {
            animateShow(group[i][0], group[i][1]);
        }
    }//在$(window).scroll（）方法内部时
    else if (situate == 1) {
        for (i = 0; i < group.length; i++) {
            group[i][0].addClass(group[i][1]);
        }
    }//在$(window).scroll（）方法外部时(不需判断是否在可视区域内，页面加载就启动)
}

///////////////"元素出现动画"核心代码（只有元素出现在窗口中才能触动）

function animateShow(ob, className) {

    //元素在window窗口下方的情况

    var top = $(window).height() - ob.offset().top + $(window).scrollTop();

    //元素在window窗口上方的情况

    var btm = $(window).scrollTop() - ob.offset().top - ob.height();

    if (top > 0 && btm < 0) {
        ob.css("opacity", "1");
        ob.addClass(className);
    }
    else {
        ob.css("opacity", "0");
        ob.removeClass(className);
    }
}
//////列表延迟进入动画//////////////////////////////

function listAnimateShow(ob, className) {
    for (i = 0; i < ob.length; i++) {
        ob.eq(i).addClass("animated " + className);
        ob.eq(i).css({ 'animation-delay': (i / 10) + 's' });
    }
}



/// <reference path="jquery.min.js" />
$(function () {

    /////////////////////////////////////////////////////////////////////页面加载之后css3动画效果



    var obAll_1 = [
                [$(".first_img"), "animated fadeInUp"]
    ];
    moreAnimate(1, obAll_1);

    ///////////////////////////////////滚动鼠标滚轮触发

    $(window).scroll(function () {

        navFixed($(".header"), "header_fixed");

        listAnimateShow($(".news li"), "animated fadeInLeft");
        listAnimateShow($(".open li"), "animated fadeInUpBig");
        listAnimateShow($(".communi li"), "animated fadeInUpBig");
        listAnimateShow($(".btn_group li"), "animated fadeInRightBig");
        listAnimateShow($(".spot_btns li"), "animated fadeInRightBig");

        var obAll_0 = [
            [$(".newsAndOpen"), "animated fadeInLeftBig"],
            [$(".video"), "animated fadeInRightBig"],
            [$(".three_block"), "animated fadeInUp"], 
            [$(".three_block"), "animated fadeInUp"],
            [$(".btn_group"), "animated fadeInUp"], 
            [$(".activity"), "animated fadeInUp"],
            [$(".spot"), "animated fadeInLeftBig"],
            [$(".photo"), "animated fadeInRightBig"], 
            [$(".three_items"), "animated fadeInLeftBig"],
            [$(".tour_tittle"), "animated fadeInRightBig"],
            [$(".tour_tittle_triangle"), "animated fadeInRightBig"],
            [$(".tour_content"), "animated fadeInLeftBig"]
        ];
        moreAnimate(0, obAll_0);
    });

    //////////////////////////////////////////////////旅游景点图片切换

    spotImgShow();
    function spotImgShow() {
        $(".spot_img a").eq(0).css({ "display": "block" });
        $(".spot_btns li").mouseover(function () {
            var index = parseInt($(this).index());

            $(".spot_img a").eq(index).css({ "display": "block" });

            $(".spot_img a").not(":eq(" + index + ")").css({ "display": "none" });
        });
    }

    //////////////////////////////////////////////////轮播图插件swiper启动器

    /////////////新闻轮播
    var newsWrap = new Swiper('.news_wrap .swiper-container', {
        pagination: '.news_wrap .pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 3000,
    });

    $('.news_wrap .arrow-left').on('click', function (e) {
        e.preventDefault()
        newsWrap.swipePrev()
    })
    $('.news_wrap .arrow-right').on('click', function (e) {
        e.preventDefault()
        newsWrap.swipeNext()
    })

    ////////////////专题活动轮播
    var activityWrap = new Swiper('.activity .swiper-container', {
        pagination: '.activity .pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 3000,
    });

    $('.activity .arrow-left').on('click', function (e) {
        e.preventDefault()
        activityWrap.swipePrev()
    })
    $('.activity .arrow-right').on('click', function (e) {
        e.preventDefault()
        activityWrap.swipeNext()
    })
})
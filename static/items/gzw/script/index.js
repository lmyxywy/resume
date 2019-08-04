/// <reference path="jquery.min.js" />
/// <reference path="Ytool_1.0.js" />
$(function () {

    (function () {

        /////////////////////////////////////////////////////////////////////页面加载之后css3动画效果

        var Y = new Ytool();

        var obAll_1 = [
                    [$(".first_img"), "animated fadeInUp"]
        ];

        Y.moreAnimate(1, obAll_1);

        ///////////////////////////////////滚动鼠标滚轮触发

        $(window).scroll(function () {

            Y.navFixed($(".header"), "header_fixed");

            Y.listAnimateShow($(".news li"), "animated fadeInLeft");
            Y.listAnimateShow($(".open li"), "animated fadeInUpBig");
            Y.listAnimateShow($(".communi li"), "animated fadeInUpBig");
            Y.listAnimateShow($(".btn_group li"), "animated fadeInRightBig");
            Y.listAnimateShow($(".spot_btns li"), "animated fadeInRightBig");

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
            Y.moreAnimate(0, obAll_0);
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


        ////////////////背景大图片轮播
        var bodyBg = new Swiper('.body_bg .swiper-container', {//////activityWrap需改变
            paginationClickable: false,
            loop: true,
            autoplay: 3000,
        });

        ////////////////图片新闻轮播
        var newsWrap = new Swiper('.news .swiper-container', {
            pagination: '.news .pagination',
            paginationClickable: true,
            loop: true,
            autoplay: 3000,
        });

        $('.news .arrow-left').on('click', function (e) {
            e.preventDefault()
            newsWrap.swipePrev()
        })
        $('.news .arrow-right').on('click', function (e) {
            e.preventDefault()
            newsWrap.swipeNext()
        })

        ////////////////专题活动轮播
        var activity = new Swiper('.activity .swiper-container', {
            pagination: '.activity .pagination',
            paginationClickable: true,
            loop: true,
            autoplay: 3000,
        });

        //$('.activity .arrow-left').on('click', function (e) {
        //    e.preventDefault()
        //    activity.swipePrev()
        //})
        //$('.activity .arrow-right').on('click', function (e) {
        //    e.preventDefault()
        //    activity.swipeNext()
        //})

    }())

    
})
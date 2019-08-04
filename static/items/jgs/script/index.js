/// <reference path="jquery.min.js" />
/// <reference path="Ytool_1.0.js" />
$(function () {

    (function () {

        var Y = new Ytool();

        ///////////////////////////////////滚动鼠标滚轮触发

        $(window).scroll(function () {

            Y.navFixed($(".header"), "header_fixed");

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


        ////////////////专题活动轮播
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


    }())

    
})
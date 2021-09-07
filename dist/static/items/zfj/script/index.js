/// <reference path="jquery.min.js" />
/// <reference path="common.js" />
$(function () {


    var theme_color = "#00acee";

    /////////////////////////////////////////////////////////////////////页面加载之后css3动画效果

    var obAll_1 = [
            [$(".news"), "animated fadeInRightBig"],
            [$(".three_left"), "animated fadeInLeftBig"],
            [$(".float_r"), "animated fadeInRightBig"],
            [$(".header_right"), "animated fadeInRightBig"],
            [$(".header_right"), "animated fadeInRightBig"]
    ];
    moreAnimate(1, obAll_1);


    $(window).scroll(function () {
        var obAll_0 = [
            [$(".open .tittle_1"), "animated fadeInLeftBig"],
            [$(".open_blocks"), "animated fadeInRightBig"],
            [$(".music .tittle_2"), "animated fadeInLeftBig"],
            [$(".music_body"), "animated fadeInRightBig"],
            [$(".music_btn"), "animated fadeInLeftBig"],
            [$(".communi"), "animated fadeInLeftBig"],
            [$(".business"), "animated fadeInRightBig"],
            [$(".video .tittle_3"), "animated fadeInUp"],
            [$(".video_body"), "animated fadeInUp"],
            [$(".online .tittle_1"), "animated fadeInUp"],
            [$(".online_tittle"), "animated fadeInUp"],
            [$(".online form"), "animated fadeInUp"],
            [$(".activity_body"), "animated fadeInUp"],
            [$(".footer"), "animated fadeInUp"]
        ];
        moreAnimate(0, obAll_0);


    });
    //////////////////////////////////////////////////////////////////////////////////政务公开效果

    openHover(0);

    $(".open_blocks li").hover(function () {

        var index = parseInt($(this).index());

        openHover(index);


    },
        function () {

        var index = parseInt($(this).index());
        $(".open_blocks_img img").eq(index).attr("src", "image/open_icon_" + (index + 1) + "_" + 1 + ".png");
    });

    //////////核心方法

    function openHover(index) {

        $(".open_blocks li a").eq(index).css({ "background": theme_color });
        $(".open_blocks li a").not(":eq(" + index + ")").css({ "background": "#fff" });

        $(".open_chi").eq(index).addClass("open_word_hover");
        $(".open_chi").not(":eq(" + index + ")").removeClass("open_word_hover");

        $(".open_line").eq(index).css({
            "border-bottom": "3px solid #fff",
            "width": "60%"
        });
        $(".open_line").not(":eq(" + index + ")").css({
            "border-bottom": "3px solid " + theme_color,
            "width": "20%"
        });

        $(".open_eng").eq(index).addClass("open_word_hover");
        $(".open_eng").not(":eq(" + index + ")").removeClass("open_word_hover");

        $(".open_triangle").eq(index).css({ "display": "block" });
        $(".open_triangle").not(":eq(" + index + ")").css({ "display": "none" });

        $(".open_blocks_img img").eq(index).attr("src", "image/open_icon_" + (index + 1) + "_" + 2 + ".png");

 }

    //////////////////////////////////////////////////////////////////////////////////////////设置微调

    setWidthHeight();

    function setWidthHeight() {

        //城市零距离左侧li位置
        var margin_left = $(".music_line ul li").width();
        $(".music_line ul li:odd").css({ "margin-left": (-(margin_left + 44)) + "px" });
    }

    //////////////////////////////////////////在线调查按钮选择效果


    $(".online_row").click(function () {

        var index = parseInt($(this).index());

        $(".online_row img").eq(index).attr("src", "image/online_btn_" + 2 + ".png");

        $(".online_row img").not(":eq(" + index + ")").attr("src", "image/online_btn_" + 1 + ".png");
    });
})
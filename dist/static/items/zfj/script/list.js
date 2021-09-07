/// <reference path="jquery.min.js" />
/// <reference path="common.js" />
$(function () {


    /////////////////////////////////////////////////////////////////////页面加载之后css3动画效果

    var obAll_1 = [
            [$(".news"), "animated fadeInRightBig"],
            [$(".three_left"), "animated fadeInLeftBig"],
            [$(".float_r"), "animated fadeInRightBig"],
            [$(".header_right"), "animated fadeInRightBig"],
            [$(".listpage_tittle"), "animated fadeInLeftBig"],
            [$(".listpage_left"), "animated fadeInLeftBig"],
            [$(".listpage_right"), "animated fadeInRightBig"]
    ];
    moreAnimate(1, obAll_1);

})
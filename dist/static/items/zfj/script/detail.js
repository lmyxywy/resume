/// <reference path="jquery.min.js" />
/// <reference path="common.js" />
$(function () {
    /////////////////////////////////////////////////////////////////////页面加载之后css3动画效果

    var obAll_1 = [
            [$(".detail_tittle"), "animated fadeInLeftBig"],
            [$(".detail_author"), "animated fadeInLeftBig"],
            [$(".detail_time"), "animated fadeInRightBig"],
            [$(".detail_content"), "animated fadeInUpBig"]
    ];
    moreAnimate(1, obAll_1);
})
/// <reference path="jquery.min.js" />
/// <reference path="common.js" />
$(function () {


    listAnimateShow($(".listpage_left li"), "animated fadeInLeftBig");
    listAnimateShow($(".listpage_right li"), "animated fadeInRightBig");

    /////////////////////////////////////////////////////////////////////页面加载之后css3动画效果

    var obAll_1 = [
                [$(".listpage_tittle"), "animated fadeInLeftBig"],
                [$(".listpage_left"), "animated fadeInLeft"],
                [$(".listpage_right"), "animated fadeInRight"]
    ];
    moreAnimate(1, obAll_1);
})
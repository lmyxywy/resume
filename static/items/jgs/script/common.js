/// <reference path="jquery.min.js" />
/// <reference path="Ytool_1.0.js" />

$(function () {


    (function () {

        var Y = new Ytool();

        ///////////////////////////////////滚动鼠标滚轮触发

        $(window).scroll(function () {

            Y.navFixed($(".header"), "header_fixed");

            if ($(".nav").offset().top <= $(window).scrollTop()) {
                $(".header_fixed_search").css({ "display": "block" });
            }
            else if ($(window).scrollTop() == 0) {
                $(".header_fixed_search").css({ "display": "none" });
            }
        });


        //////////////////////////////////////////导航贴顶后的搜索部分

        $(".header_fixed_search").hover(function () {
            $(".header_fixed_search input").css({ "width": "150px", "opacity": "1" });
        }, function () {
            $(".header_fixed_search input").css({ "width": "0", "opacity": "0" });
        });
        /////////////////////////////////////移动端导航按钮控制

        $(".mobile_menu_btn").click(function () {
            if ($(".nav").css("display") == "none") {
                $(".nav").slideDown();
            }
            else {
                $(".nav").slideUp();
            }
        });




    }())
})


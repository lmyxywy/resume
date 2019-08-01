/// <reference path="jquery.min.js" />
/// <reference path="common.js" />
$(function () {

    (function () {

        var Y = new Ytool();

        /////////////////////////////////////////////////////////////////////iframe高度自适应（id需对应上）

        $("#iframepage").load(function () {
            var mainheight = $(this).contents().find("body").height();
            $(this).height(mainheight);
        });






    }())
})
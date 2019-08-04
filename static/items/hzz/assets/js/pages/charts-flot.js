function randNum() {
    return ((Math.floor(Math.random() * (1 + 40 - 20))) + 20) * 10;
}

function randNum2() {
    return ((Math.floor(Math.random() * (1 + 40 - 20))) + 20) * 500;
}

function randNum3() {
    return ((Math.floor(Math.random() * (1 + 40 - 20))) + 20) * 300;
}

function randNum4() {
    return ((Math.floor(Math.random() * (1 + 40 - 20))) + 20) * 100;
}


$(document).ready(function() {

    /* ---------- Basic chart ---------- */
    if ($("#dotChart").length) {
        var likes = [
            [0, 5 + randNum()],
            [1, 10 + randNum()],
            [2, 40 + randNum()],
            [3, 60 + randNum()],
            [4, 70 + randNum()],
            [5, 80 + randNum()],
            [6, 95 + randNum()],
            [7, 100 + randNum()]
        ];

        var plot = $.plot($("#dotChart"), [{ data: likes }], {
            series: {
                lines: {
                    show: true,
                    lineWidth: 2,
                    fill: true,
                    fillColor: { colors: [{ opacity: 0.5 }, { opacity: 0.2 }] }
                },
                points: {
                    show: true,
                    lineWidth: 3
                },
                shadowSize: 0
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f6f6f6",
                borderWidth: 0
            },
            colors: ["rgb(6, 217, 149)"],
            // xaxis: { ticks: 20, tickDecimals: 0 },
            xaxis: {
                ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                tickFormatter: function(num) {
                    var word = '刘凤娇'
                    switch (num) {
                        case 0:
                            word = '刘凤娇'
                            break;
                        case 1:
                            word = '戴军'
                            break;
                        case 2:
                            word = '张云涛'
                            break;
                        case 3:
                            word = '洪波'
                            break;
                        case 4:
                            word = '李金立'
                            break;
                        case 5:
                            word = '郑宇田'
                            break;
                        case 6:
                            word = '王家栋'
                            break;
                        case 7:
                            word = '沈原'
                            break;
                        default:
                            break;
                    }
                    return word;
                }
            },
            yaxis: {
                label: "Y Axis"
            },
        });

        function showTooltip(x, y, contents) {
            $('<div id="tooltip">' + contents + '</div>').css({
                position: 'absolute',
                display: 'none',
                top: y + 5,
                left: x + 5,
                border: '1px solid #fdd',
                padding: '2px',
                'background-color': '#dfeffc',
                opacity: 0.80
            }).appendTo("body").fadeIn(200);
        }

        var previousPoint = null;
        $("#dotChart").bind("plothover", function(event, pos, item) {
            $("#x").text(pos.x.toFixed(2));

            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;

                    $("#tooltip").remove();
                    var x = item.datapoint[0].toFixed(2),
                        y = item.datapoint[1].toFixed(2);

                    showTooltip(item.pageX, item.pageY,
                        item.datapoint[1] + '个');
                }
            } else {
                $("#tooltip").remove();
                previousPoint = null;
            }
        });

    }

    function randNumTW() {
        return ((Math.floor(Math.random() * (1 + 40 - 20))) + 20);
    }


    /* ---------- Chart with points ---------- */
    // if ($("#sincos").length) {
    //     var sin = [],
    //         cos = [];

    //     for (var i = 0; i < 14; i += 0.5) {
    //         sin.push([i, Math.sin(i) / i]);
    //         cos.push([i, Math.cos(i)]);
    //     }

    //     var plot = $.plot($("#sincos"), [{ data: sin, label: "sin(x)/x" }, { data: cos, label: "cos(x)" }], {
    //         series: {
    //             lines: {
    //                 show: true,
    //                 lineWidth: 2,
    //             },
    //             points: { show: true },
    //             shadowSize: 2
    //         },
    //         grid: {
    //             hoverable: true,
    //             clickable: true,
    //             tickColor: "#dddddd",
    //             borderWidth: 0
    //         },
    //         yaxis: { min: -1.2, max: 1.2 },
    //         colors: ["#FA5833", "#2FABE9"]
    //     });

    //     function showTooltip(x, y, contents) {
    //         $('<div id="tooltip">' + contents + '</div>').css({
    //             position: 'absolute',
    //             display: 'none',
    //             top: y + 5,
    //             left: x + 5,
    //             border: '1px solid #fdd',
    //             padding: '2px',
    //             'background-color': '#dfeffc',
    //             opacity: 0.80
    //         }).appendTo("body").fadeIn(200);
    //     }

    //     var previousPoint = null;
    //     $("#sincos").bind("plothover", function(event, pos, item) {
    //         $("#x").text(pos.x.toFixed(2));
    //         $("#y").text(pos.y.toFixed(2));

    //         if (item) {
    //             if (previousPoint != item.dataIndex) {
    //                 previousPoint = item.dataIndex;

    //                 $("#tooltip").remove();
    //                 var x = item.datapoint[0].toFixed(2),
    //                     y = item.datapoint[1].toFixed(2);

    //                 showTooltip(item.pageX, item.pageY,
    //                     item.series.label + " of " + x + " = " + y);
    //             }
    //         } else {
    //             $("#tooltip").remove();
    //             previousPoint = null;
    //         }
    //     });



    //     $("#sincos").bind("plotclick", function(event, pos, item) {
    //         if (item) {
    //             $("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
    //             plot.highlight(item.series, item.datapoint);
    //         }
    //     });
    // }

    // dd
    function randNum5() {
        return ((Math.floor(Math.random() * (1))) - 20);
    }
    if ($("#sincos").length) {
        var likes = [
            [0, 90],
            [1, 85],
            [2, 87],
            [3, 96]
        ];

        var plot = $.plot($("#sincos"), [{ data: likes }], {
            series: {
                lines: {
                    show: true,
                    lineWidth: 2,
                    fill: false,
                    fillColor: { colors: [{ opacity: 0.5 }, { opacity: 0.2 }] }
                },
                points: {
                    show: true,
                    lineWidth: 3
                },
                shadowSize: 0
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f6f6f6",
                borderWidth: 0
            },
            colors: ["#73B9FF"],
            // xaxis: { ticks: 20, tickDecimals: 0 },
            xaxis: {
                ticks: [0, 1, 2, 3],
                tickFormatter: function(num) {
                    var word = '金沙镇'
                    switch (num) {
                        case 0:
                            word = '金沙镇'
                            break;
                        case 1:
                            word = '永吉街道'
                            break;
                        case 2:
                            word = '桦郊乡'
                            break;
                        case 3:
                            word = '公吉乡'
                            break;
                        default:
                            break;
                    }
                    return word;
                },
                min: 0
            }
        });

        function showTooltip(x, y, contents) {
            $('<div id="tooltip">' + contents + '</div>').css({
                position: 'absolute',
                display: 'none',
                top: y + 5,
                left: x + 5,
                border: '1px solid #fdd',
                padding: '2px',
                'background-color': '#dfeffc',
                opacity: 0.80
            }).appendTo("body").fadeIn(200);
        }

        var previousPoint = null;
        $("#sincos").bind("plothover", function(event, pos, item) {
            $("#x").text(pos.x.toFixed(2));

            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;
                    console.log(item)
                    $("#tooltip").remove();
                    var x = item.datapoint[0].toFixed(2),
                        y = item.datapoint[1].toFixed(2);

                    showTooltip(item.pageX, item.pageY,
                        item.datapoint[1] + '%');
                }
            } else {
                $("#tooltip").remove();
                previousPoint = null;
            }
        });

    }
    /* ---------- Flot chart ---------- */
    if ($("#flotchart").length) {
        var d1 = [];
        for (var i = 0; i < Math.PI * 2; i += 0.25)
            d1.push([i, Math.sin(i)]);

        var d2 = [];
        for (var i = 0; i < Math.PI * 2; i += 0.25)
            d2.push([i, Math.cos(i)]);

        var d3 = [];
        for (var i = 0; i < Math.PI * 2; i += 0.1)
            d3.push([i, Math.tan(i)]);

        $.plot($("#flotchart"), [
            { label: "sin(x)", data: d1 },
            { label: "cos(x)", data: d2 },
            { label: "tan(x)", data: d3 }
        ], {
            series: {
                lines: { show: true },
                points: { show: true }
            },
            xaxis: {
                ticks: [0, [Math.PI / 2, "\u03c0/2"],
                    [Math.PI, "\u03c0"],
                    [Math.PI * 3 / 2, "3\u03c0/2"],
                    [Math.PI * 2, "2\u03c0"]
                ]
            },
            yaxis: {
                ticks: 10,
                min: -2,
                max: 2
            },
            grid: {
                tickColor: "#dddddd",
                borderWidth: 0
            },
            colors: ["#FA5833", "#2FABE9", "#BFDFFF"]
        });
    }


    /* ---------- Stack chart ---------- */
    if ($("#stackchart").length) {
        var d1 = [];
        for (var i = 0; i <= 10; i += 1)
            d1.push([i, parseInt(Math.random() * 30)]);

        var d2 = [];
        for (var i = 0; i <= 10; i += 1)
            d2.push([i, parseInt(Math.random() * 30)]);

        var d3 = [];
        for (var i = 0; i <= 10; i += 1)
            d3.push([i, parseInt(Math.random() * 30)]);

        var d4 = [];
        for (var i = 0; i <= 10; i += 1)
            d4.push([i, parseInt(Math.random() * 30)]);

        var stack = 0,
            bars = true,
            lines = false,
            steps = false;

        function plotWithOptions() {
            $.plot($("#stackchart"), [d1, d2, d3, d4], {
                series: {
                    stack: stack,
                    lines: { show: lines, fill: true, steps: steps },
                    bars: { show: bars, barWidth: 0.5 },
                },
                grid: {
                    hoverable: true,
                    clickable: true,
                    borderColor: 'rgba(0,0,0,0.1)',
                    borderWidth: 1,
                    labelMargin: 15,
                    backgroundColor: 'transparent'
                },
                tooltip: true,
                tooltipOpts: {
                    content: '%y',
                    shifts: {
                        x: -10,
                        y: 20
                    },
                    defaultTheme: false
                },
                colors: ["#FF7373", "#2FABE9", "#73B9FF", "#15caeb"],
                xaxis: {
                    ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    tickFormatter: function(num) {
                        var word = '夹皮沟镇'
                        switch (num) {
                            case 0:
                                word = '夹皮沟镇'
                                break;
                            case 1:
                                word = '红石砬子镇'
                                break;
                            case 2:
                                word = '二道甸子镇'
                                break;
                            case 3:
                                word = '常山镇'
                                break;
                            case 4:
                                word = '金沙镇'
                                break;
                            case 5:
                                word = '八道河子镇'
                                break;
                            case 6:
                                word = '公吉乡'
                                break;
                            case 7:
                                word = '横道河子乡'
                                break;
                            case 8:
                                word = '桦郊乡'
                                break;
                            case 9:
                                word = '永吉街道'
                                break;
                            case 10:
                                word = '明桦街道'
                                break;
                            default:
                                break;
                        }
                        return word;
                    }
                }
            });
        }

        plotWithOptions();

        $(".stackControls input").click(function(e) {
            e.preventDefault();
            stack = $(this).val() == "With stacking" ? true : null;
            plotWithOptions();
        });
        $(".graphControls input").click(function(e) {
            e.preventDefault();
            bars = $(this).val().indexOf("柱状图") != -1;
            lines = $(this).val().indexOf("折线图") != -1;
            steps = $(this).val().indexOf("steps") != -1;
            plotWithOptions();
        });
    }


    /* ----------Realtime chart ---------- */

    // we use an inline data source in the example, usually data would
    // be fetched from a server
    var data = [],
        totalPoints = 300;

    function getRandomData() {
        if (data.length > 0)
            data = data.slice(1);

        // do a random walk
        while (data.length < totalPoints) {
            var prev = data.length > 0 ? data[data.length - 1] : 50;
            var y = prev + Math.random() * 10 - 5;
            if (y < 0)
                y = 0;
            if (y > 100)
                y = 100;
            data.push(y);
        }

        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i)
            res.push([i, data[i]])
        return res;
    }

    // setup control widget
    var updateInterval = 30;
    $("#updateInterval").val(updateInterval).change(function() {
        var v = $(this).val();
        if (v && !isNaN(+v)) {
            updateInterval = +v;
            if (updateInterval < 1)
                updateInterval = 1;
            if (updateInterval > 2000)
                updateInterval = 2000;
            $(this).val("" + updateInterval);
        }
    });


    if ($("#realtimechart").length) {
        var options = {
            series: { shadowSize: 1 },
            lines: { fill: true, fillColor: { colors: [{ opacity: 1 }, { opacity: 0.1 }] } },
            yaxis: { min: 0, max: 100 },
            xaxis: { show: false },
            colors: ["#73B9FF"],
            grid: {
                tickColor: "#dddddd",
                borderWidth: 0
            },
        };
        var plot = $.plot($("#realtimechart"), [getRandomData()], options);

        function update() {
            plot.setData([getRandomData()]);
            // since the axes don't change, we don't need to call plot.setupGrid()
            plot.draw();

            setTimeout(update, updateInterval);
        }

        update();
    }

});


/* ---------- Pie chart ---------- */
var data = [
    { label: "社会监督", data: 12 },
    { label: "巡查河湖", data: 27 },
    { label: "相关系统推送", data: 85 },
    { label: "督导检查", data: 64 }
];

if ($("#piechart").length) {
    $.plot($("#piechart"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true,
            clickable: true
        },
        legend: {
            show: false
        },
        colors: ["#FA5833", "#2FABE9", "#26C9FF", "#78CD51"]
    });

    function pieHover(event, pos, obj) {
        if (!obj)
            return;
        percent = parseFloat(obj.series.percent).toFixed(2);
        $("#hover").html('<span style="font-weight: bold; color: ' + obj.series.color + '">' + obj.series.label + ' (' + percent + '%)</span>');
    }
    $("#piechart").bind("plothover", pieHover);
}

/* ---------- Donut chart ---------- */
var data1 = [
    { label: "侵占河道", data: 24 },
    { label: "超标排污", data: 38 },
    { label: "非法采砂", data: 74 },
    { label: "倾倒废物", data: 52 }
];

if ($("#donutchart").length) {
    $.plot($("#donutchart"), data1, {
        series: {
            pie: {
                innerRadius: 0.5,
                show: true
            }
        },
        legend: {
            show: false
        },
        colors: ["#FA5833", "#2FABE9", "rgb(6, 217, 149)", "#73B9FF"],
        grid: {
            hoverable: true
        }
    });
}

function pieHover(event, pos, obj) {
    if (!obj)
        return;
    percent = parseFloat(obj.series.percent).toFixed(2);
    $("#hover").html('<span style="font-weight: bold; color: ' + obj.series.color + '">' + obj.series.label + ' (' + percent + '%)</span>');
}
$("#donutchart").bind("plothover", pieHover);
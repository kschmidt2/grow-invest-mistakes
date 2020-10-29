// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }


Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

let chartIdMistakes = document.getElementById("chart-container-invest-mistakes");

// checks for the chart ID and displays a backup image if the browser can't find it
setTimeout(function() {
    if(chartIdMistakes.innerHTML === "") {
        // console.log('noId');
        let chartArea = document.getElementsByClassName("chart-area-invest-mistakes");
        for(var i = 0; i < chartArea.length; i++) {
            chartArea[i].style.display = "none";
        } 
        // insert chart screenshot here
        document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">';
    } else {
        // console.log('yesId')
    }
},500);

function drawHighcharts() {
    Highcharts.chart(chartIdMistakes, {
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 0,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        // data: {
        //     googleSpreadsheetKey: '1jZBUloPNR0jN2daYZn77CWm9aa2Qt7PJhxl-i3AXork',
        //     endColumn: 1
        // },
        series: [{
            data: [26418,8358,1908,-1850,-4153]
        }],
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1
            },
            bar: {
                dataLabels: {
                    enabled: true,
                    // format: '${y}',
                    formatter: function () {
                        if (this.y < 0) {
                            return '-$' + (Highcharts.numberFormat(this.y*-1,0,'.',','));
                        }
                            return '$' + Highcharts.numberFormat(this.y,0,'.',',');
                        },
                } 
            }
        },
        // for line charts only
        // plotOptions: {
        //     series: {
        //         lineWidth: 1,
        //         // clip: false,
        //         marker: {
        //             enabled: false,
        //             symbol: 'circle',
        //             fillColor: '#ffffff',
        //             states: {
        //                 hover: {
        //                     fillColor: '#ffffff'
        //                 }
        //             }
        //         }
        //     }
        // },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5,
            categories: ['Stayed fully invested', 'Missed 10 best days', 'Missed 20 best days', 'Missed 30 best days', 'Missed 40 best days'],
            // edits xAxis ticks
            // dateTimeLabelFormats: {
            //     week: '%b. %e',
            // },
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            tickAmount: 5,
            min: -10000,
            max: 30000
            // adds commas to thousands
            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}
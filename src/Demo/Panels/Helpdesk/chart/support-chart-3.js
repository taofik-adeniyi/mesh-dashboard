const chartData = {
    type: 'area',
    height: 100,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        colors: ['#9ccc65'],
        stroke: {
            curve: 'smooth',
            width: 2
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: (seriesName) => ''
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            name: 'series1',
            data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
        }
    ]
};
export default chartData;

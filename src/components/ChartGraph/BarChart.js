import React from 'react'
import { Bar } from 'react-chartjs-2'
const BarChart = () => {
    const barChartdata = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Sales for 2020 (M)',
                data: [3, 2, 2, 1, 5],
                borderColor: [
                    'rgba(255,206,86,0.2)',
                    'rgba(255,206,86,0.2)',
                    'rgba(255,206,86,0.2)',
                    'rgba(255,206,86,0.2)',
                    'rgba(255,206,86,0.2)',
                ],
                backgroundColor: [
                    'rgba(255,206,86,0.2)',
                    'rgba(255,206,86,0.2)',
                    'rgba(255,206,86,0.2)',
                    'rgba(255,206,86,0.2)',
                    'rgba(255,206,86,0.2)',
                ],

            },
            {
                label: 'Sales for 2019 (M)',
                data: [1, 3, 2, 2, 3],
                borderColor: [
                    'rgba(54,162,235,0.2)',
                    'rgba(54,162,235,0.2)',
                    'rgba(54,162,235,0.2)',
                    'rgba(54,162,235,0.2)',
                    'rgba(54,162,235,0.2)',
                ],
                backgroundColor: [
                    'rgba(54,162,235,0.2)',
                    'rgba(54,162,235,0.2)',
                    'rgba(54,162,235,0.2)',
                    'rgba(54,162,235,0.2)',
                    'rgba(54,162,235,0.2)',
                ],
            }
        ]

    }
    const barChartoptions = {
        title: {
            display: true,
            text: 'Bar Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 6,
                        stepSize: 1
                    }
                }
            ]
        }

    }
    return (
        <div>
            <h2>Bar Chart</h2>
            <Bar
                data={barChartdata}
                options={barChartoptions}
            />
            <hr />
        </div>
    )
}

export default BarChart

import React from 'react'
import LineChart from './LineChart'
import BarChart from './BarChart'
import DoughnutChart from './DoughnutChart'

const ChartGraph = () => {

    const chart = {
        width: '720px',
    }
    return (
        <div className="container">
            <div className="chart" >
                <h1>Chart Graph</h1>
                <hr />
                <div className="row">

                    <div className="col"> <LineChart /></div>
                    <div className="col"> <BarChart /></div>
                    <div className="col">
                        <DoughnutChart />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ChartGraph


/**
 https://www.npmjs.com/package/react-chartjs-2

Installation via NPM
npm install --save react-chartjs-2 chart.js

Installation via YARN
yarn add react-chartjs-2 chart.js

import { Doughnut } from 'react-chartjs-2';

*/
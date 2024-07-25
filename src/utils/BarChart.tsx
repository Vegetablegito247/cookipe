import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

interface ChartType {
    chartType: any
}

function BarChart({ chartType }: ChartType) {
    const options = {
        datasets: {
            bar: {
                barThickness: 25,
            },
        },

    }
    return (
        <Bar height={130} options={options} data={chartType} />
    )
}

export default BarChart
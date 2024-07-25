import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  plugins,
  LineElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface Options {
  responsive: boolean,
  maintainAspectRatio: boolean,
  plugins: any,
  scales: any
}

interface ChartType {
  chartType: any
}

function LineChart({chartType}: ChartType) {
  const options: Options = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    }
  }

  return(
    <Line style={{width: '85%'}} height={100}  className='line' options={ options } data={ chartType } />
  )
  }

  export default LineChart
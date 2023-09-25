import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

import { Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend
 } from 'chart.js';
 ChartJs.register(
    BarElement,
    CategoryScale,
    ArcElement,
    LinearScale,
    Tooltip,
    Legend
 )
const data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
    datasets: [
      {
        label: 'Sample Data',
        data: [12, 19, 3, 5], // Example data for the bars
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
      {
        label: 'Data2',
        data: [23, 9, 13, 3], // Example data for the bars
        backgroundColor: [
          'brown',
          'black',
          'rgba(255, 206, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const data1 = {
    labels: [ 'Label 2', 'Label 3'],
    datasets: [
      {
        data: [ 45, 25], // Example data for the pie chart
        backgroundColor: [ 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
      },
    ],
  };
  
  const options1 = {
    responsive: true,
  };
  
  
export default function Dashboard() {
  return (
    <>
    <div className='section'>
       <div className='sec-top'>
         <div className="bar-chart">
            <Bar data={data} options={options} />
          </div>
        </div>
        <div className='sec-bottom'>
            <div className='right-bottom'>
              <Pie data={data1} options={options1} />
            </div>
            <div className='left'>
              <Pie data={data1} options={options1} />

            </div>
        </div>    
    </div>  
    </>
  );
}

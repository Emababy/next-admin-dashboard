'use client'

import React ,{useState , useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function BarCharts() {

    const [charDataSet , SetChartData] = useState({
        datasets: [],
    });

    const [chartOptions , SetChartOptions] = useState({});

    useEffect(() => {
        SetChartData({
            labels: ['Jun','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [
                {
                    label: "Revenue $",
                    data: [10000 , 19283 , 18192 , 9080 , 10029 , 17928 , 15928 , 14028 , 7000 , 16963 , 19989 , 18038],
                    borderColor: 'rgb(53 , 162 , 235)',
                    backgroundColor: 'rgb(53 , 162 , 235 , 0.4)',
                }
            ],
        })
        SetChartOptions({
            Plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Monthly Revenue'
                },
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, []);

    return (
        <>
            <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
                <Bar data={charDataSet} options={chartOptions}  />
            </div>
        </>
    );
}

export default BarCharts;

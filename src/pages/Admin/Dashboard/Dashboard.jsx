import { useEffect, useState} from 'react';
import { GeneralUtility } from '../../../utils';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Action from "./Action";
import { useLoaderData } from "react-router-dom";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const Dashboard = () => {
    const [dataNow, setDataNow] = useState([]);
    const [dataPrev, setDataPrev] = useState([]);

    const {
        chartBar
    } = useLoaderData();

    const [user, setUser] = useState({});

    useEffect(() => {
        const userInfo = GeneralUtility.getUserInfo();
        setUser(userInfo);
    }, []);

    const options = {
        plugins: {
            title: {
                display: true,
                text: '',
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: false,
            },
            y: {
                stacked: false,
                beginAtZero: true,
            },
        },
    };

    useEffect(() => {
        const dataNowFiltered =chartBar
        .filter(item => item.year === new Date().getFullYear())
        .map(item => ({
          "year": item.year,
          "month": item.month_abbreviation,
          "total_orders_current_year": parseInt(item.total_orders_current_year)
        }));
  
      const dataPrevFiltered = chartBar
        .filter(item => item.year === new Date().getFullYear() - 1)
        .map(item => ({
        "year": item.year,
          "month": item.month_abbreviation,
          "total_orders_previous_year": parseInt(item.total_orders_previous_year)
        }));
  
      setDataNow(dataNowFiltered);
      setDataPrev(dataPrevFiltered);

    },[])

    const labels = dataNow.map(item => item.month);
    const current_year = dataNow.map(item => item.total_orders_current_year)
    const previous_year = dataPrev.map(item => item.total_orders_previous_year)

    const data = {
        labels,
        datasets: [
            {
                label: dataPrev.length > 0 ? dataPrev[0].year : '-',
                data: previous_year,
                backgroundColor: 'rgba(255, 206, 86, 0.5)', 
                borderColor: 'rgb(255, 206, 86)', 
                borderWidth: 1,
            },
            {
                label: dataNow.length > 0 ? dataNow[0].year : '-',
                data: current_year, 
                backgroundColor: 'rgba(45, 148, 51, 0.5)', 
                borderColor: 'rgb(55,129,60)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <div>Welcome {user.email} - <span className='font-bold capitalize'>{user.role}</span></div>
            <div>
                <h1 className='text-2xl font-bold'>Laporan Transaksi</h1>
                <div className='w-full'>
                    <Bar
                    options={options} data={data} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

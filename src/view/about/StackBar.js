import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './about.css';

const StackBar = () => {
    const [position, setPosition] = useState(0);

    const onScroll = () => {
        setPosition(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const [state] = useState({
        series: [
            {
                data: [78, 70, 67, 56, 58, 65, 68, 72, 84],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                },
            },
            dataLabels: {
                enabled: false,
                maxItems: 100,
            },
            xaxis: {
                categories: [
                    'Javascript',
                    'React.js',
                    'Css',
                    'Node.js',
                    'MongoDB',
                    'FireBase',
                    'AWS',
                    'github',
                    'Notion',
                ],
            },
            colors: ['rgb(167, 165, 165)'],
        },
    });

    return (
        <div className="centerContain">
            <div className="aboutForm">
                <h3>STACK</h3>
                {position > 80 && (
                    <div className="chart" style={{ opacity: (position - 80) / 50 }}>
                        <ReactApexChart
                            options={state.options}
                            series={state.series}
                            type="bar"
                            height={350}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default StackBar;

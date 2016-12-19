import React from 'react';
import { Line } from 'react-chartjs-2';


export default class SummaryChart extends React.Component {
    constructor() {
        super();
    }
    render(){
        const data = {
            width: '100%',
            labels: this.props.labels,
            datasets: [
                {
                    label: 'My First dataset',
                    animation : true,
                	animationSteps : 60,
                	animationEasing : "easeOutQuart",
                	onAnimationComplete : null,
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.props.data
                }
            ],
        };

        const options = {
            //maintainAspectRatio: true,
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };
        return (
            <Line data={data} options={options}/>
        )
    }
}

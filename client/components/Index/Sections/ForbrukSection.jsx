import React from 'react';
import { Pie } from 'react-chartjs-2';

class AccountSection extends React.Component {
    render() {
        const data = {
            width: '100%',
            labels: ['hei', 'heo', 'asd', 'lela'],
            datasets: [
                {
                    label: 'My First dataset',
                    animation : true,
                	animationSteps : 60,
                	animationEasing : "easeOutQuart",
                	onAnimationComplete : null,
                    fill: true,
                    lineTension: 0.1,
                    borderColor: 'transparent',
                    borderWidth: 10,
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    data: [1, 3, 6, 5],
                    sliced: true
                }
            ],
        };
        return (
            <div>
                <h4>Mitt forbruk</h4>
                <Pie data={data} options={{cutoutPercentage: 0}}/>
            </div>
        )
    }
}
export default AccountSection;

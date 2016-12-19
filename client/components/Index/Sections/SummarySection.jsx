import React from 'react';
import transactions from '../../../../data/transactions';
import {Line} from 'react-chartjs-2';
import Carousel from 'nuka-carousel';
import SummaryChart from '../Charts/SummaryChart';
//import Carousel from 'nuka-carousel';

class SummarySection extends React.Component {
    constructor(){
        super();
        this.state = {
            formData: transactions.map((t) => t.amount),
            formLabels: transactions.map((t) => t.id)
        }
    }
    render() {
        const b = this.state.formData.reduce((c, p) => c + p);
        console.log(transactions);

        return (
            <div className='stupid'>
                <h4>Kontobevegeler:</h4>
                <span>(siste dag)</span>
                <h2>{this.state.formData.reduce((p, c) => p + c)}</h2>
                <SummaryChart
                    labels={this.state.formLabels}
                    data={this.state.formData}
                />
                <table>
                    <tbody>
                    <tr>
                        <th>From account</th>
                        <th>To account</th>
                        <th>Amount</th>
                    </tr>

                    {transactions.map((t) =>
                        <tr
                            className={ t.amount > 0 ? "green" : (t.amount === 0 ? "neutral" : "red")}
                            key={t.id}>
                            <td>{t.fromAcc}</td>
                            <td>{t.toAcc}</td>
                            <td className='amount-row'>{t.amount}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default SummarySection;

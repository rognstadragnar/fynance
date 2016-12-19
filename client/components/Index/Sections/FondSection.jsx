import React from 'react';
import FondChart from '../Charts/FondChart';
import fond from '../../../../data/fond';


class FondSection extends React.Component {
    constructor(){
        super();
        this.state = {
            fdata: fond.map((f) => f.data),
            frate: fond.map((f) => f.data).map((f) => f.map((d) => d.rate)),
            flabels: fond.map((t) => t.navn)

        }
    }
    render() {


        return (
            <div className='stupid'>
                <h4>Fond er kult</h4>
                <FondChart data={this.state.frate} labels={this.state.flabels}/>
                <ul>
                    { fond.map((f) => <li key={f.id + Date.now()}>{f.navn}</li>)}
                </ul>
            </div>
        )
    }
}
export default FondSection;

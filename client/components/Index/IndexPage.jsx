import React from 'react';
import ForbrukSection from './Sections/ForbrukSection';
import SummarySection from './Sections/SummarySection';
import FondSection from './Sections/FondSection';
import KontoOversiktSection from './Sections/KontoOversiktSection';
import KontoHighlight from './Sections/KontoHighlight';

import Card from '../_common/Card';


import Kontoer from '../../../data/kontoer.js';

class IndexPage extends React.Component {
    render() {

        return (
            <div className='index-page'>
                <div className='full-width'>
                    <Card><KontoHighlight kontoer={Kontoer}/></Card>
                </div>
                <div className='main'>
                    <Card>
                        <SummarySection />
                    </Card>
                    <Card>
                        <ForbrukSection />
                    </Card>
                </div>
                <div className='aside'>
                    <Card>
                        <KontoOversiktSection kontoer={Kontoer}/>
                        <FondSection />
                    </Card>
                </div>
            </div>
        );
    }

}
export default IndexPage;

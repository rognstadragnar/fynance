import React from 'react';
import { Link } from 'react-router';

class KontoPreview extends React.Component {
    render() {
        const { id, kontoNavn, kontoNr, saldo } = this.props;
        return (
            <div className='konto-preview'>
                <Link to='/'>
                <span>{kontoNavn}</span>
                <h2>{saldo}</h2>
                <span>({kontoNr})</span></Link>
            </div>
        )
    }
}

export default KontoPreview

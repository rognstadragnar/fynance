import React from 'react';
import KontoPreview from './KontoPreview';
class KontoHighlight extends React.Component {
    render() {
        const kontoer = this.props.kontoer;

        function compare(a,b) {
          if (a.saldo > b.saldo)
            return -1;
          if (a.saldo < b.saldo)
            return 1;
          return 0;
        }
        kontoer.sort(compare);
        const lol = kontoer.map((k) => <KontoPreview key={k.id + Date.now()} id={k.id} kontoNavn={k.kontoNavn} kontoNr={k.kontoNr} saldo={k.saldo} />)

        console.log(kontoer)
        return (
            <div className='konto-highlight'>{lol}</div>
        )
    }
}

export default KontoHighlight;

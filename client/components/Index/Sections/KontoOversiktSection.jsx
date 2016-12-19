import React from 'react';

class KontoOversiktSection extends React.Component {
    render() {
        const kontoer = this.props.kontoer
        return (
            <div>
                <h4>Konto-oversikt</h4>
                <table>
                    <tbody>
                    <tr>
                        <th>Konto</th>
                        <th>Saldo</th>
                    </tr>

                    {kontoer.map((d) =>
                        <tr key={d.id}>
                            <td>{d.kontoNavn} ({d.kontoNr})</td>
                            <td>{d.saldo}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default KontoOversiktSection;

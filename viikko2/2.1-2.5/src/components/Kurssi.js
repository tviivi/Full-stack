import React from 'react'

const Kurssi =( props ) => {
    const {kurssi} = props;

    const Kurssi = () => kurssi.map(kurssi => 
    <li key={kurssi.id}>
    <h2>{kurssi.nimi}</h2> {kurssi.osat.map(osat =>
    <li key={osat.id}>
    {osat.nimi} {osat.tehtavia}</li>
    )} {'yhteensä '}{(kurssi.osat.map(kurssi => kurssi.tehtavia)).reduce(reducer)} { 'tehtävää'}
    </li>)

    
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    return (
        <div>
            <h1>Opetusohjelma</h1>
        <ul>
        <div>{Kurssi()}</div>
        </ul>
        
        </div>
    )
}

export default Kurssi
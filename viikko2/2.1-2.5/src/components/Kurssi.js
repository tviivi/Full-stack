import React from 'react'

const Kurssi =( props ) => {
    const {kurssi} = props;
    const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>
    const yhteensa =  kurssi.osat.map(kurssi => kurssi.tehtavia)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sisalto = () => kurssi.osat.map(kurssi => 
    <li key={kurssi.id}>
    {kurssi.nimi} {kurssi.tehtavia}</li>
    )
    return (
        <div>
            <Otsikko kurssi={kurssi}/>
        <ul>
        {sisalto()}
        </ul>
        {'yhteensä '}{yhteensa.reduce(reducer)}{' tehtävää'}
        </div>
    )
}

export default Kurssi
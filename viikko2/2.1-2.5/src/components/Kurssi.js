import React from 'react'

const Kurssi =( props ) => {
    const {kurssi} = props;
    const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>
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
        </div>
    )
}

export default Kurssi
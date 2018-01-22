import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.nimi}</h1>
        </div>
    )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.moi}</p>
            <p>{props.tehtavat}</p>
        </div>    
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa moi={props.osa1.nimi} tehtavat={props.osa1.tehtavia}/>
            <Osa moi={props.osa2.nimi} tehtavat={props.osa2.tehtavia}/>
            <Osa moi={props.osa3.nimi} tehtavat={props.osa3.tehtavia}/>
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <div>
            <p>{props.tehtavia1 + props.tehtavia2 + props.tehtavia3}</p>
        </div>
    )
}

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = {
        nimi: 'Reactin perusteet',
        tehtavia: 10
    }
    const osa2 = {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
    }
    const osa3 = {
        nimi: 'Komponenttien tila',
        tehtavia: 14
    }

    return (
          <div>
      <Otsikko nimi={kurssi} />
      <Sisalto osa1={osa1} osa2={osa2} osa3={osa3} />
      <Yhteensa tehtavia1={osa1.tehtavia} tehtavia2={osa2.tehtavia} tehtavia3={osa3.tehtavia} />

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
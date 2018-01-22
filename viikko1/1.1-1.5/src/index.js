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
            <Osa moi={props.osa1} tehtavat={props.eka}/>
            <Osa moi={props.osa2} tehtavat={props.toka}/>
            <Osa moi={props.osa3} tehtavat={props.kolmas}/>
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <div>
            <p>{props.tehtavia1+props.tehtavia2+props.tehtavia3}</p>
        </div>
    )
}

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14

    return (
          <div>
      <Otsikko nimi={kurssi} />
      <Sisalto osa1={osa1} osa2={osa2} osa3={osa3} eka={tehtavia1} toka={tehtavia2} kolmas={tehtavia3} />
      <Yhteensa tehtavia1={tehtavia1} tehtavia2={tehtavia2} tehtavia3={tehtavia3} />

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
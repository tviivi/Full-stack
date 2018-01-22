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
            <Osa moi={props.osat[0].nimi} tehtavat={props.osat[0].tehtavia}/>
            <Osa moi={props.osat[1].nimi} tehtavat={props.osat[1].tehtavia}/>
            <Osa moi={props.osat[2].nimi} tehtavat={props.osat[2].tehtavia}/>
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <div>
            <p>{props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia}</p>
        </div>
    )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14
          }
        ]
      }

    return (
          <div>
      <Otsikko nimi={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
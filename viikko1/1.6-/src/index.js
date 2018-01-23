import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  const Statistic = ({nimi, arvo}) => {
    return (
      <tr>
      {nimi+" "}
      {arvo}
      </tr>
    )
  }
  

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0,
        keskiarvo: 0.0,
        positiivisia: 0
      }
    }
  
    asetaArvoon = (arvo) => {
        return () => {
        if(arvo === 1) {
            this.setState({hyva: this.state.hyva + 1 })
        }
        if(arvo === 0) {
            this.setState({neutraali: this.state.neutraali + 1 })
        }
        if(arvo === -1) {
            this.setState({huono: this.state.huono + 1 })
        }
        }
    }
  
    render() {
      const Statistics = () => {
        return (
            <div>
          <Statistic
                  nimi = "hyvä"
                  arvo = {this.state.hyva}
                  />
                  <Statistic
                  nimi = "neutraali"
                  arvo = {this.state.neutraali}
                  />
                  <Statistic
                  nimi = "huono"
                  arvo = {this.state.huono}
                  />
                  <Statistic
                  nimi = "keskiarvo"
                  arvo = {((this.state.hyva-this.state.huono)/(this.state.hyva+this.state.huono+this.state.neutraali))}
                  />
                  <Statistic
                  nimi = "positiivisia"
                  arvo = {(((this.state.hyva)/(this.state.hyva+this.state.huono+this.state.neutraali))*100)+"%"}
                  />  
                  </div>
        )
    }
      return (
        <div>
            <h1>anna palautetta</h1>
          
          <div>
            <Button handleClick={this.asetaArvoon(1)}
              text="Hyvä"
            />
            <Button handleClick={this.asetaArvoon(0)}
              text="Neutraali"
            />
            <Button handleClick={this.asetaArvoon(-1)}
              text="Huono"
            />

            <h1>statistiikka</h1>
            <Statistics/>
           
          </div>
        </div>
      )
    }
  }

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
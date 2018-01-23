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
      <td>{nimi}</td>
      <td>{arvo}</td>
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
          if (this.state.hyva+this.state.huono+this.state.neutraali===0) {
              return (
                  <p>Ei yhtään palautetta annettu</p>
              )
          }
      return (
        <table>
          <Statistic
                nimi = "Hyvä "
                arvo = {this.state.hyva}
                />
                <Statistic
                nimi = "Neutraali "
                arvo = {this.state.neutraali}
                />
                <Statistic
                nimi = "Huono "
                arvo = {this.state.huono}
                />
                <Statistic
                nimi = "Keskiarvo "
                arvo = {((this.state.hyva-this.state.huono)/(this.state.hyva+this.state.huono+this.state.neutraali))}
                />
                <Statistic
                nimi = "Positiivisia "
                arvo = {(((this.state.hyva)/(this.state.hyva+this.state.huono+this.state.neutraali))*100)+"%"}
                />
                </table>
                )
              }
            
                return (
                  <div>
            <h1>Anna palautetta</h1>
          
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

            <h1>Statistiikka</h1>
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
import React from 'react'
import ReactDOM from 'react-dom'

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
  
    asetaArvoon1 = (arvo1) => {
      return () => {
        this.setState({ hyva: arvo1})
      }
    }

    asetaArvoon2 = (arvo2) => {
        return () => {
            this.setState({ neutraali: arvo2})
        }
    }

    asetaArvoon3 = (arvo3) => {
        return() => {
            this.setState({ huono: arvo3})
        }
    }
  
    render() {
      return (
        <div>
            <h1>anna palautetta</h1>
          
          <div>
            <button onClick={this.asetaArvoon1(this.state.hyva + 1)}>
              Hyvä
            </button>
            <button onClick={this.asetaArvoon2(this.state.neutraali + 1)}>
              Neutraali
            </button>
            <button onClick={this.asetaArvoon3(this.state.huono + 1)}>
              Huono
            </button>

            <h1>statistiikka</h1>

            <p>hyvä {this.state.hyva}</p>
            <p>neutraali {this.state.neutraali}</p>
            <p>huono {this.state.huono}</p>
            <p>keskiarvo {((this.state.hyva)-(this.state.huono))/((this.state.hyva)+(this.state.neutraali)+(this.state.huono))}</p>
            <p>positiivisia {((this.state.hyva)/((this.state.hyva)+(this.state.neutraali)+(this.state.huono)))*100}%</p>
          </div>
        </div>
      )
    }
  }

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
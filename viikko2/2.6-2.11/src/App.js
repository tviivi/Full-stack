import React from 'react';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: 'uusi nimi...',
      newNumber: 'uusi numero...',
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('will mounttt')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ persons: response.data })
      })
  }

  addName = (event) => {
      event.preventDefault()
      const nameObject = {
        name: this.state.newName,
        number: this.state.newNumber,
        id: this.state.persons.length + 1
      }
    
      if (this.state.persons.find(x => x.name === this.state.newName) == null) {
      const persons = this.state.persons.concat(nameObject)
    
      this.setState({
        persons: persons,
        newName: ''
      })
    }
  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  addNumber = (event) => {
    event.preventDefault()
    const numberObject = {
      name: this.state.newName,
      number: this.state.newNumber,
      id: this.state.persons.length + 1
    }
  
    if (this.state.persons.find(x => x.number === this.state.newNumber) == null) {
    const persons = this.state.persons.concat(numberObject)
  
    this.setState({
      persons: persons,
      newNumber: ''
    })
  }
}

handleNumberChange = (event) => {
  console.log(event.target.value)
  this.setState({ newNumber: event.target.value })
}

  render() {
    console.log('render')
    return (
      <div>
        <h1>Puhelinluettelo</h1>
          <div>
              <h2>Lisää uusi</h2>
          <form onSubmit={this.addName}>
          <div>
            nimi:
            <input 
            value={this.state.newName}
            onChange={this.handleNameChange}
            />
            </div>
            <div>
            numero:
            <input 
            value={this.state.newNumber}
            onChange={this.handleNumberChange}
            />
            </div>
            <button type="submit">lisää</button>
          </form>
        </div>
        <h2>Numerot</h2>
        {this.state.persons.map(persons => <div key={persons.id}> {persons.name} {persons.number}</div>)}
      </div>
    )
  }
}

export default App
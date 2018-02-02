import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          number: '0401234567',
          id: 1 
        },
        { name: 'Viivi Tiihonen',
          number: '0507654321',
          id: 2
        }
      ],
      newName: 'uusi nimi...',
      newNumber: 'uusi numero...'
    }
  }

  addName = (event) => {
      event.preventDefault()
      const nameObject = {
        name: this.state.newName,
        number: this.state.newNumber,
        id: this.state.persons.length + 1
      }
    
      if (this.state.persons.find(x => x.name == this.state.newName) == null) {
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
  
    if (this.state.persons.find(x => x.number == this.state.newNumber) == null) {
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
    return (
      <div>
        <h2>Puhelinluettelo</h2>
          <div>
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
        <table>
        {this.state.persons.map(persons => <div key={persons.id}> {persons.name} {persons.number}</div>)}
        </table>
      </div>
    )
  }
}

export default App
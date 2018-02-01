import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          id: 1 
        },
        { name: 'Viivi Tiihonen',
          id: 2}
      ],
      newName: 'uusi nimi...'
    }
  }

  addName = (event) => {
      event.preventDefault()
      const nameObject = {
        name: this.state.newName,
        id: this.state.persons.length + 1
      }
    
      const persons = this.state.persons.concat(nameObject)
    
      this.setState({
        persons: persons,
        newName: ''
      })
  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
          <div>
          <form onSubmit={this.addName}>
            nimi:
            <input 
            value={this.state.newName}
            onChange={this.handleNameChange}
            />
            <button type="submit">lisää</button>
          </form>
        </div>
        <h2>Numerot</h2>
        {this.state.persons.map(persons => <div key={persons.id}> {persons.name}</div>)}
      </div>
    )
  }
}

export default App
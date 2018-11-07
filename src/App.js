import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 29},
      {name: 'Manu', age: 28},
      {name: 'Stephanie', age: 25}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    this.setState({
      persons: [
          {name: newName, age: 29},
          {name: 'Manu', age: 18},
          {name: 'Stephanie', age: 27}
      ]
    })
  }
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
          {name: 'Max', age: 29},
          {name: event.target.value, age: 18},
          {name: 'Stephanie', age: 27}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi! This is a react app</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Mor')}>Simple changes</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}  />
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Ror')}
          changed={this.nameChangeHandler} >I have many hobbies</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;

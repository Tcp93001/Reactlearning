import React, { Component } from 'react';
import ValidationComponent from './Components/ValidationComponent';

import './App.css';
import CharComponent from './Components/CharComponent';

class App extends Component {
  state = {
    inputString: ''
  }

  deleteChar = (letterIndex) => {
    const text = this.state.inputString.split('');
    text.splice(letterIndex, 1);
    const updatedText = text.join('');
    this.setState({inputString: updatedText})
  }

  handleInputField = (event) => {
    this.setState({inputString: event.target.value})
  }

  render() {
    const showChar = (
      <div>
        {this.state.inputString.split('').map((elem, index) => {
          return <CharComponent
            setLetter={elem}
            clicked={() => this.deleteChar(index)}
            key={index}
          />
        })}
      </div>
    );

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <p>-----------------------</p>
        <input
          type='text'
          value={this.state.inputString}
          onChange={this.handleInputField}
        />
        <ValidationComponent stringLength={this.state.inputString.length} />
        <p>Caracteres:</p>
        <p>{this.state.inputString}</p>
        {showChar}
      </div>


    );
  }
}

export default App;

import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {

  const charShow = (
    <div className='container' onClick={props.clicked}>
      <p>{props.setLetter}</p>
    </div>
  )

// TO DO include the prop.inputString and convert it into an array, then change again
//you will need a prop.function for returning the click on each block
  return charShow;

};

export default CharComponent;

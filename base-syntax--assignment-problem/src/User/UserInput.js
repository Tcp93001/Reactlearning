import React from 'react';

const UserInput = (props) => {
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  return <input style={style} type='text' onChange={props.handler} value={props.name} />
}

export default UserInput;
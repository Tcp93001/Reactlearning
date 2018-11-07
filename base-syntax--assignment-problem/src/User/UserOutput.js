import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
  return (
    <div className='container'>
      <p>{props.name}</p>
      <p>Something to say</p>
      <p>Another thing to say</p>
    </div>
  )
}

export default UserOutput;
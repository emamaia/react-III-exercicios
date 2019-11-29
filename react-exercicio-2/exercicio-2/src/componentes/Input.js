import React from 'react';

function Input(props) {
return(
    <input type={props.type}
     className='input'
      onChange={props.change}
      placeholder={props.placeholder}    
    >

      </input>
)
}

export default Input
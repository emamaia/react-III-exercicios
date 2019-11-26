import React from 'react';

import './style.css'

const Button = ({handleClick, classe, children}) => (
    <button 
        className={classe} 
        onClick={handleClick}>
            {children}
    </button>
);




export default Button
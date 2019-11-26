import React from 'react';

function Button(props){
    return(
        <button className={props.classe} onClick={props.clique}>{props.children}</button>
    )
}

export default Button
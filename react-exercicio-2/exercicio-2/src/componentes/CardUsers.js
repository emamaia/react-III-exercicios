import React from 'react'

import './style.css'

function CardUsers(props){
    return(
        <div className='card' onClick={props.clique}>

            <p>{props.name}</p>
            <p>{props.user}</p>
            <img className='img-card' src={props.img}></img>

        </div>
    )
}

export default CardUsers
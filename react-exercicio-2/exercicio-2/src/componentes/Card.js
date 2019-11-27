import React from 'react'


import './style.css'

function Card(props) {
    return (
        <div className='card'>
            <img className='img-card' src={props.img}></img>
            <p>{props.title}</p>
            <p>{props.price}</p>

        </div>
    )
}



export default Card
import React from 'react'

const Repos=props =>{
    console.log(props);
    
    const repos= props.location.state.repos;
    return(
        
        <ul>
              {repos.map(item=>(
            <li>{item.name}</li>
            ))}
        </ul>
    )
}


export default Repos
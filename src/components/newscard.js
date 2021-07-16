import React from 'react'

const Newscard=(props)=>{
    return(
        <div style={{border:'1px solid',margin:'4%',borderRadius:'20px'}}>
            <img style={{padding:'2%'}} width='100%' height='100%' src={props.image} />
            <div style={{padding:'5%'}}>
            <h2 style={{color:'white'}}>{props.title}</h2>
            <p>{props.description}</p>
            </div>
        </div>
    )
}
export default Newscard
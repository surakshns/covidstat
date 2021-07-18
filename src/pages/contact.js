import React, { useEffect, useState } from 'react'
import contact from '../components/contack.json'

const Contact=()=>{
    console.log(contact[0].Hname);
    return(
        <div>
            {
                contact.map((item)=>{
                    return(
                        <div style={{border:'solid',margin:'4%',padding:'2%',borderRadius:'20px'}}>
                            <h1>{item.Hname}</h1>
                            <p>{item.Hadd}</p>
                            <h3><a href={`tel: ${item.Phone}`}>{item.Phone}</a></h3>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Contact
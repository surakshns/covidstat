import { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar=()=>{
    const [active,setActive]= useState('')
    return(
    <div className="navbar">
        <div> 
            <h1>CovidStat</h1>
        </div>
        <div>
            <ul className='navlist'>
                <li className={active=='stats'? 'activenav' : ''} onClick={()=>{setActive('stats')}}><NavLink to="/" >Stats</NavLink></li>
                <li className={active=='News'? 'activenav' : ''} onClick={()=>{setActive('News')}}><NavLink to='/News'>News</NavLink></li>
                <li className={active=='Contacts'? 'activenav' : ''} onClick={()=>{setActive('Contacts')}}><NavLink to='/Contact'>Contacts</NavLink></li>
            </ul>
        </div>
    </div>
    )
}
export default Navbar

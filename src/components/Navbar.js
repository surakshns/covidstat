import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Navbar=()=>{
    const [active,setActive]= useState('stats')
    return(
    <div className="navbar sticky-top">
        <div> 
            <h1>CovidStat</h1>
        </div>
        <div>
            <ul className='navlist'>
                <li><NavLink to="/" activeClassName={active=='stats'? 'activenav' : ''} onClick={()=>{setActive('stats')}}>Stats</NavLink></li>
                <li><NavLink to='/News' activeClassName={active=='News'? 'activenav' : ''} onClick={()=>{setActive('News')}}>News</NavLink></li>
                <li><NavLink to='/contacts' activeClassName={active=='Con'? 'activenav' : ''} onClick={()=>{setActive('Contacts')}} >Contacts</NavLink></li>
            </ul>
        </div>
    </div>
    )
}
export default Navbar

import {} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Navbar=()=>{
    return(
    <div className="navbar">
        <div>
            <h1>CovidStat</h1>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <ul className='navlist'>
                <li><NavLink to="/" activeClassName="active">Stats</NavLink></li>
                <li><NavLink to='/News' activeClassName="active">News</NavLink></li>
                <li><NavLink to='/contacts' activeClassName="active">Contacts</NavLink></li>
            </ul>
        </div>
    </div>
    )
}
export default Navbar

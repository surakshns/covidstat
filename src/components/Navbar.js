import {} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar=()=>{
    return(
    <div className="navbar">
        <div>
            <h1>CovidStat</h1>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <ul className='navlist'>
                <li><Link to='/covid'>Stats</Link></li>
                <li><Link to='/News'>News</Link></li>
                <li><Link to='/contacts'>Contacts</Link></li>
            </ul>
        </div>
    </div>
    )
}
export default Navbar

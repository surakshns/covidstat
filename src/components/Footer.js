
import './footer.css'

const Footer=()=>{
    return(
    <div className="footer">
        <div>
            <p>Contact US:<a href={"tel: +8983298472"}> 9932323234</a></p>
            <p className={'quote'}>Wear <p className='mask'>masks</p> and maintain <p className='distance'>social distance.</p></p>
            <p>Email: <a href={"mailto: surakshnss@gmail.com"}>covidstat@gmail.com</a></p>
        </div>
        <div>Copyright CovidStat 2021</div>
    </div>
    )
}
export default Footer

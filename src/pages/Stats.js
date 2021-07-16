import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { } from 'bootstrap'

const Stats=()=>{
    const [data,setData]= useState([])
    const [active,setActive]= useState('')
    const [confirmed,setConfirmed]= useState('')
    const [deaths,setDeaths]= useState('')
    const [recovered,setRecovered]= useState('')
    const [date,setDate]= useState(new Date())

    const getData= async() =>{
        const res = await axios.get('https://api.covid19india.org/data.json')
        const statedata= await res.data.statewise;
        setData(statedata)
        setActive(statedata[0].active)
        setConfirmed(statedata[0].confirmed)
        setDeaths(statedata[0].deaths)
        setRecovered(statedata[0].recovered)
    }
    
    useEffect(()=>{
        getData()
    },[]);


    return(
        <div className='statstable'>
            <div className='container-fluid mb-5'>
                <h1 className='heading'>Stats</h1>
            </div>
            <div className='totaldetails'>
                <div className='confirmed'>
                    <h5>Confirmed</h5>
                    <h3>{confirmed}</h3>
                </div>
                <div className='active'>
                    <h5> Active </h5>
                    <h3>{active}</h3>
                </div>
                <div className='recovered'>
                    <h5>Recovered</h5>
                    <h3>{recovered}</h3>
                </div>
                <div className='death'>
                    <h5>Death</h5>
                    <h3>{deaths}</h3>
                </div>
            </div>
            <div className='table-responsive'>
                <table className='table table-hover'>
                    <thead className='thead-black'>
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Death</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item,index)=>{
                                return(
                                <tr key={index}>
                                    <th style={{textAlign:'start'}}>{item.state} ({item.statecode})</th>
                                    <td>{item.confirmed}</td>
                                    <td>{item.recovered}</td>
                                    <td>{item.deaths}</td>
                                    <td>{item.active}</td>
                                    <td>{item.lastupdatedtime.split('/')[0]>=date.getDate()-1 ? `${date.getHours()-item.lastupdatedtime.split('')[12]} Hours ago` : 'More Than day ago'}</td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Stats
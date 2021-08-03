import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { } from 'bootstrap'
import {Line} from 'react-chartjs-2'
import Speech from 'react-speech';
import {useSpeechSynthesis} from 'react-speech-kit'

const Stats=()=>{
    const [data,setData]= useState([])
    const [filterdata,setfilerdata]=useState([])
    const [active,setActive]= useState('')
    const [confirmed,setConfirmed]= useState('')
    const [filter,setfilter]= useState('')
    const [deaths,setDeaths]= useState('')
    const [recovered,setRecovered]= useState('')
    const [date,setDate]= useState(new Date())
    const [showgraph,setshowgraph] = useState('confirmed')
    const [rows, setRows] = useState([])
    const [totdate,settotdate] = useState([])
    const [totconfirmed,settotConfirmed]= useState([])
    const [totactive,settotActive]= useState([])
    const [totdeaths,settotDeaths]= useState([])
    const [totrecovered,settotRecovered]= useState([])
    const [search,setsearch]= useState(false)
    const [refresh,setrefresh]= useState(false)

    const {speak} = useSpeechSynthesis();

    const getData= async() =>{

        const res = await axios.get('https://api.covid19india.org/data.json')
        const timedata= res.data.cases_time_series
        const statedata= await res.data.statewise;
        setData(statedata)
        setActive(statedata[0].active)
        setConfirmed(statedata[0].confirmed)
        setDeaths(statedata[0].deaths)
        setRecovered(statedata[0].recovered)
        var i=0
        var totdat=[]
        var totc=[]
        var totd=[]
        var totr=[]
        var tota=[]
        for (i in timedata){
            totdat.push(timedata[i].date)
            totc.push(timedata[i].dailyconfirmed)
            totr.push(timedata[i].dailyrecovered)
            totd.push(timedata[i].dailydeceased)
            tota.push(timedata[i].dailydeceased)
        }
        settotConfirmed(totc)
        settotdate(totdat)
        settotRecovered(totr)
        settotDeaths(totd)
        settotActive(tota)
    }
    
    useEffect(()=>{
        getData()
        setfilerdata(data)
        onlooad()
    },[])

    useEffect(()=>{
        setfilerdata(data.filter((item) => (item.state.toLowerCase().includes(filter.toLowerCase()) || filter === '')).map(({state,statecode,confirmed,recovered,active,deaths,lastupdatedtime}) => ({state,confirmed,recovered,active,deaths,statecode,lastupdatedtime})))
    },[filter])

    const onsearch=(e)=>{
        setsearch(true)
        setfilter(e.target.value)
    }
    const onlooad=()=>{
        console.log('h')
        speak({text: `welcome to covidstat`})
    }
    

    
    const confirmedpress=()=>{
        setshowgraph('confirmed')
        speak({text: `Total confirmed cases in india is of ${confirmed}`})
    }
    const activepress=()=>{
        setshowgraph('Active')
        speak({text: `Total active cases in india is of ${active}`})
    }
    const recoveredpress=()=>{
        setshowgraph('recovered')
        speak({text: `Total Recovered cases in india is of ${recovered}`})
    }
    const deathpress=()=>{
        setshowgraph('Death')
        speak({text: `Total deaths in india is of ${deaths}`})
    }

    return(
        <div  className='statstable'>
            <div className='container-fluid mb-5'>
            </div>
            <div className='totaldetails'>
                <div className='confirmed box' onClick={()=>confirmedpress()}>
                    <h5>Confirmed</h5>
                    <h3>{confirmed}</h3>
                    { showgraph=='confirmed' ?
                    <Line 
                        data={{ 
                            labels: totdate,
                            datasets: [
                                {
                                label: 'Confirmed',
                                data: totconfirmed,
                                fill: false,
                                backgroundColor: 'rgb(255, 99, 132)',
                                borderColor: 'rgba(255, 99, 132, 0.2)',
                                },
                            ],
                        }}
                        height={300}
                        width={500}
                        options={{
                            
                            pointStyle: 'line',
                            pointBorderWidth: .1,
                            maintainAspectRatio:true,
                        }}
                    />
                    :
                    null
                }
                </div>
                <div className='active box' onClick={()=>activepress()}>
                    <h5> Active </h5>
                    <h3>{active}</h3>
                    { showgraph=='Active' ?
                    <Line 
                        data={{ 
                            labels: totdate,
                            datasets: [
                                {
                                label: 'Active',
                                data: totactive,
                                fill: false,
                                backgroundColor: 'rgb(255, 99, 132)',
                                borderColor: 'rgba(255, 99, 132, 0.2)',
                                },
                            ],
                        }}
                        height={300}
                        width={500}
                        options={{
                            pointStyle: 'line',
                            maintainAspectRatio:true
                        }}
                    />
                    :
                    null
                }
                </div>
                <div className='recovered box' onClick={()=>recoveredpress()}>
                    <h5>Recovered</h5>
                    <h3>{recovered}</h3>
                    { showgraph=='recovered' ?
                    <Line 
                        data={{ 
                            labels: totdate,
                            datasets: [
                                {
                                label: 'Recovered',
                                data: totrecovered,
                                fill: false,
                                backgroundColor: 'rgb(255, 99, 132)',
                                borderColor: 'rgba(255, 99, 132, 0.2)',
                                },
                            ],
                        }}
                        height={300}
                        width={500}
                        options={{
                            pointStyle: 'line',
                            maintainAspectRatio:true
                        }}
                    />
                    :
                    null
                }
                </div>
                <div className='death box' onClick={()=>deathpress()}>
                    <h5>Death</h5>
                    <h3>{deaths}</h3>
                    { showgraph=='Death' ?
                    <Line 
                        data={{ 
                            labels: totdate,
                            datasets: [
                                {
                                label: 'deaths',
                                data: totdeaths,
                                fill: false,
                                backgroundColor: 'rgb(255, 99, 132)',
                                borderColor: 'rgba(255, 99, 132, 0.2)',
                                },
                            ],
                        }}
                        height={300}
                        width={500}
                        options={{
                            pointStyle: 'line',
                            maintainAspectRatio:true
                        }}
                    />
                    :
                    null
                }
                </div>
            </div>
            <input className='search' type={'text'} placeholder={'Search'} value={filter} onChange={(e)=>onsearch(e)} />
            <div className='table-responsive'>
                <table className='table table-hover'>
                    <thead className='thead-black'>
                        <tr>
                            <th >State</th>
                            <th className='confirmed'>Confirmed</th>
                            <th className='recovered'>Recovered</th>
                            <th className='death'>Death</th>
                            <th className='active'>Active</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            search ? filterdata.map((item,index)=>{
                                return(
                                <tr key={index}>
                                    <th style={{textAlign:'start'}}>{item.state} ({item.statecode})</th>
                                    <td className='confirmed'>{item.confirmed}</td>
                                    <td className='recovered'>{item.recovered}</td>
                                    <td className='death'>{item.deaths}</td>
                                    <td className='active'>{item.active}</td>
                                    <td>{item.lastupdatedtime.split('/')[0]>=date.getDate()-1 ? (date.getHours()-item.lastupdatedtime.split('')[12])>=0 ? `${date.getHours()-item.lastupdatedtime.split('')[12]} hours ago` : `${date.getHours()+24-item.lastupdatedtime.split('')[12]} hours ago` : 'More Than day ago'}</td>
                                </tr>
                                )
                            })
                            :
                            data.map((item,index)=>{
                                return(
                                <tr key={index}>
                                    <th style={{textAlign:'start'}}>{item.state} ({item.statecode})</th>
                                    <td className='confirmed'>{item.confirmed}</td>
                                    <td className='recovered'>{item.recovered}</td>
                                    <td className='death'>{item.deaths}</td>
                                    <td className='active'>{item.active}</td>
                                    <td>{item.lastupdatedtime.split('/')[0]>=date.getDate()-1 ? (date.getHours()-item.lastupdatedtime.split('')[12])>=0 ? `${date.getHours()-item.lastupdatedtime.split('')[12]} hours ago` : `${date.getHours()+24-item.lastupdatedtime.split('')[12]} hours ago` : 'More Than day ago'}</td>
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
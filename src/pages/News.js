import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Newscard from '../components/newscard'
import newsres from '../components/newsinfo.json'

const News=()=>{
    const [data,setData]= useState([])

    const getNews=async()=>{
        const res = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=4d258bd4b31f40c59180ce5b754b72e7')
        console.log(newsres);
        const news= res.data.articles
        setData(newsres)
    }

    useEffect(()=>{
        getNews()
    },[]);

    return(
        <div className='newspage'>
            <h1 className='heading'>Covid News</h1>
            <div style={{padding:'5%'}}>
                <div style={{fontSize:"40px"}}>All India's top healthcare news</div>
                {
                data.map((item)=>{
                    return(
                        <Newscard image={item.urlToImage} title={item.title} description={item.description} url={item.url} />
                    )  
                })
            }
            </div>
        </div>
    )
}
export default News
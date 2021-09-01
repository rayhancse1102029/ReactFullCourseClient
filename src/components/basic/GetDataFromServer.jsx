import axios from 'axios'
import React from 'react'
import { useState, useEffect  } from 'react'

export default function GetDataFromServer() {

    const [weathers, setweathers] = useState([])

    useEffect(() => {
        axios.get("https://localhost:44344/weatherforecast").then(res=>{
            setweathers(res.data);
        })
    }, [])

    console.log("weathers",weathers)

    return (
        <div>
            <ul>
                {weathers.map((weather) =>{
                    return <li key={weather.temperatureC}>{weather.temperatureC}</li>
                })}
            </ul>
        </div>
    )
}


// export default GetDataFromServer; 
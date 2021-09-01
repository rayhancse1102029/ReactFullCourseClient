import axios from 'axios'
import React from 'react'
import { List } from 'semantic-ui-react'
import  { useState, useEffect } from 'react'
import ListExampleDivided from '../bind-handler/ListExampleDivided'


export default function GetDataFromServer02() {

    const [weathers, setweathers] = useState([])

    useEffect(() => {
        axios.get("https://localhost:44344/weatherforecast").then(res=>{
            setweathers(res.data)
        })
    }, [])

    return (

        
        <div>
            <ListExampleDivided weathers={weathers}></ListExampleDivided>          
        </div>

        // OR
        
        // <List divided relaxed>
        //     {weathers.map((weather) =>{
        //         return  <List.Item>
        //                 <List.Icon name='github' size='large' verticalAlign='middle' />
        //                 <List.Content>
        //                     <List.Header as='a'>Weather: {weather.summary}</List.Header>
        //                     <List.Description as='a'>TemperatureC : {weather.temperatureC}</List.Description>
        //                 </List.Content>
        //             </List.Item> 
        //         })}
        // </List>

    )
}

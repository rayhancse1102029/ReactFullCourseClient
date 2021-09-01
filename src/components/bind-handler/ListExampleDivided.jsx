import React from 'react'
import { List } from 'semantic-ui-react'

const ListExampleDivided = (props) => (
  <List divided relaxed>
      {props.weathers.map((weather) =>{
            return <List.Item>
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
                <List.Header as='a'>Weather: {weather.summary}</List.Header>
                <List.Description as='a'>TemperatureC : {weather.temperatureC}</List.Description>
            </List.Content>
        </List.Item>
       })}
  </List>
)

export default ListExampleDivided
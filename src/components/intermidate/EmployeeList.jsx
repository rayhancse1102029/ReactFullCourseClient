
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Container, Card, Grid, Form, Checkbox, Button } from 'semantic-ui-react'
import UserListHandler from '../bind-handler/UserListHandler'

export default function EmployeeList() {

    const [users, setusers] = useState([])

    useEffect(() => {        
        axios.get("https://localhost:44335/api/Auth/GetAllUserList").then(res=>{
        setusers(res.data)
    })
    }, [])

    return (
        <div style={{marginTop: '7em'}}>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <UserListHandler users={users}></UserListHandler>      
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Card
                                image='https://localhost:44335/UploadUserImage/637663745680292695.jpeg'
                                header='Elliot Baker'
                                meta='Friend'
                                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                // extra={extra}
                            />
                             <Form>
                                <Form.Field>
                                <label>First Name</label>
                                <input placeholder='First Name' />
                                </Form.Field>
                                <Form.Field>
                                <label>Last Name</label>
                                <input placeholder='Last Name' />
                                </Form.Field>
                                <Form.Field>
                                <Checkbox label='I agree to the Terms and Conditions' />
                                </Form.Field>
                                <Button type='submit'>Submit</Button>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>                              
                </Grid>                              
            </Container>
        </div>
    )
}

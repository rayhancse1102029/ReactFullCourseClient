import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

export default function UserListHandler(props) {
    return (
        <Card.Group>
            {props.users.map((user)=>{
                return <Card>
                            <Card.Content>
                            <Image
                                floated='right'
                                size='mini'
                                src={user.imgUrl}
                            />
                            <Card.Header>{user.fullName}</Card.Header>
                            <Card.Meta>{user.fullName}</Card.Meta>
                            <Card.Description>
                                Steve wants to add you to the group <strong>best friends</strong>
                            </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green'>
                                Approve
                                </Button>
                                <Button basic color='red'>
                                Decline
                                </Button>
                            </div>
                            </Card.Content>
                        </Card>
            })}
        </Card.Group>
    )
}


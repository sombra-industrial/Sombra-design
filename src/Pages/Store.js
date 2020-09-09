import React from 'react';
import {Card, CardDeck, Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class Store extends React.Component {
    render() {
        return (
            <Container>
                <h2 className='m-4'>Our store</h2>
                <CardDeck  className='m-4'>
                    <Card bg='warning'>
                        <Card.Img variant='top' src=''/>
                        <Card.Body>
                            <Card.Title>Стол</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quia?</Card.Text>
                            <Button variant='primary'>About</Button>
                        </Card.Body>
                    </Card>
                    <Card bg='success'  text='warning'>
                        <Card.Body>
                            <Card.Title>Стул</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quia?</Card.Text>
                            <Button variant='primary'>About</Button>
                        </Card.Body>
                        <Card.Img variant='bottom' src=''/>
                    </Card>
                    <Card bg='lite'>
                        <Card.Img variant='top' src=''/>
                        <Card.Body>
                            <Card.Title>Кровать</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quia?</Card.Text>
                            <Button variant='primary'>About</Button>
                        </Card.Body>
                    </Card>
                    <Card bg='info'>
                        <Card.Img variant='top' src=''/>
                        <Card.Body>
                            <Card.Title>Шкаф</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quia?</Card.Text>
                            <Button variant='primary'>About</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant='top' src=''/>
                        <Card.Body>
                            <Card.Title>Кресло</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quia?</Card.Text>
                            <Button variant='primary'>About</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant='top' src=''/>
                        <Card.Body>
                            <Card.Title>Пуфик</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quia?</Card.Text>
                            <Button variant='primary'>About</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        )
    }
}

export default Store
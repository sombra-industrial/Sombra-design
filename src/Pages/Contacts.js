import React from 'react';
import {Button, Container, Form} from 'react-bootstrap';

class Contacts extends React.Component {
    render() {
        return (
            <Container>
                <h1>Contact us</h1>
                <Form>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Email.address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email'></Form.Control>
                        <Form.Text>
                            Ваш email теперь в наших руках!
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId='formBasicPassword'>
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as='textarea' rows='3'></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='formBasicPCheckbox'>
                        <Form.Check type='checkbox' label='check me baby'/>
                    </Form.Group>
                    <Button variant='primary' type='submit'>Submit</Button>
                </Form>
            </Container>
        )
    }
}

export default Contacts
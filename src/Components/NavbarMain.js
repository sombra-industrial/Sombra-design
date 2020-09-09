import React from 'react';
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import logo from '../assets/anotherprojects/sombra-design.png';

const NavbarMain = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='light'>
                <Container fluid>
                    <Navbar.Brand href='/'>
                        <img
                            src={logo}
                            height='30'
                            alt='Logo'
                            width='30'
                            className='d-inline-block align-top'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='m-auto'>
                            <Nav.Link className='text-white text-uppercase ml-5' href='/'>Главная</Nav.Link>
                            <Nav.Link className='text-white text-uppercase ml-5' href='/gallery'>Галерея</Nav.Link>
                            <Nav.Link className='text-white text-uppercase ml-5' href='/store'>Магазин</Nav.Link>
                            <Nav.Link className='text-white text-uppercase ml-5' href='/contacts'>Контакты</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Form.Control
                                type='text'
                                placeholder='Что ищем?'
                                className='mr-sm-2'
                            />
                            <Button className='btn btn-primary'>Поиск</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarMain
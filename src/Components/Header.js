import React from 'react';
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import logo from '../assets/anotherprojects/sd-logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand='lg' bg='transparent' variant='light' className='fixed-top'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img
                            src={logo}
                            height='25'
                            alt='Logo'
                            width='auto'
                            className='d-inline-block align-top'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='m-auto'>
                            <Nav.Link as={NavLink} className='text-white text-uppercase ml-5' to='/'>
                                <div>
                                    Главная<FontAwesomeIcon className='ml-2' icon={faHome}/>
                                </div>
                            </Nav.Link>
                            <Nav.Link as={NavLink} className='text-white text-uppercase ml-5' to='/gallery'>Галерея</Nav.Link>
                            <Nav.Link as={NavLink} className='text-white text-uppercase ml-5' to='/store'>Магазин</Nav.Link>
                            <Nav.Link as={NavLink} className='text-white text-uppercase ml-5'to='/contacts'>Контакты</Nav.Link>
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

export default Header
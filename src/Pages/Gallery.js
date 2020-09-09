import React from 'react'
import {Col, Container, Nav, NavLink, Row, Tab} from 'react-bootstrap'


class Gallery extends React.Component {
    render() {
        return (
            <Container>
                <Tab.Container id='leds-tabs-example' defaultActiveKey='guestRoom'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey='guestroom'>Гостиная</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='kitchen'>Кухня</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='bathroom'>Ванная</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='bedroom'>Спальная</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='balcony'>Балкон</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-5'>
                                <Tab.Pane eventKey='guestroom'>
                                    <img src="" alt=""/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto labore pariatur suscipit tenetur. Est, modi, quo? Animi beatae commodi, incidunt itaque necessitatibus quas rerum ut?</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='kitchen'>
                                    <img src="" alt=""/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto labore pariatur suscipit tenetur. Est, modi, quo? Animi beatae commodi, incidunt itaque necessitatibus quas rerum ut?</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='bathroom'>
                                    <img src="" alt=""/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto labore pariatur suscipit tenetur. Est, modi, quo? Animi beatae commodi, incidunt itaque necessitatibus quas rerum ut?</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='bedroom'>
                                    <img src="" alt=""/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto labore pariatur suscipit tenetur. Est, modi, quo? Animi beatae commodi, incidunt itaque necessitatibus quas rerum ut?</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='balcony'>
                                    <img src="" alt=""/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto labore pariatur suscipit tenetur. Est, modi, quo? Animi beatae commodi, incidunt itaque necessitatibus quas rerum ut?</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}

export default Gallery
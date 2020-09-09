import React from 'react';
import {Carousel} from 'react-bootstrap';
import room from '../assets/carousel/room.mp4'
import room2 from '../assets/carousel/room2.mp4'
import room3 from '../assets/carousel/room3.mp4'

class CarouselBox extends React.Component {
    render() {
        return (
            <div>
                <Carousel data-interval='5000'>
                    <Carousel.Item>
                        <video autoPlay loop muted className='w-100'>
                            <source src={room} type='video/mp4'/>
                        </video>
                        <Carousel.Caption>
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, odio!</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <video autoPlay loop muted className='w-100'>
                            <source src={room2} type='video/mp4'/>
                        </video>
                        <Carousel.Caption>
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, odio!</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <video autoPlay loop muted className='w-100'>
                            <source src={room3} type='video/mp4'/>
                        </video>
                        <Carousel.Caption>
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, odio!</p>
                        </Carousel.Caption>
                    </Carousel.Item>


                </Carousel>
            </div>
        )
    }
}

export default CarouselBox
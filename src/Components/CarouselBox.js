import React from 'react';
import s from './Carousel.module.css'
import {Carousel} from 'react-bootstrap';

import room from '../assets/carousel/room.mp4'
import room2 from '../assets/carousel/room2.mp4'
import room3 from '../assets/carousel/room3.mp4'

class CarouselBox extends React.Component {
    render() {
        return (
            <div className={s.middle}>
                <Carousel data-interval='5000'>
                    <Carousel.Item>
                            <video autoPlay loop muted className='vh-100'>
                                <source src={room} type='video/mp4'/>
                            </video>
                        <Carousel.Caption className={s.captionCentre}>
                            <h2 className='display-4'>В деталях сокрыта душа интерьера!</h2>
                            <p className={s.captionDescription}>
                                В этом <a href="/">магазине</a> ты найдешь, то чего именно не хватало. Дизайнерская
                                мебель от
                                производителя.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <video autoPlay loop muted className='vh-100'>
                            <source src={room2} type='video/mp4'/>
                        </video>
                        <Carousel.Caption className={s.captionCentre}>
                            <h2 className='display-4'>Расширяй границы своей фантазии</h2>
                            <p className={s.captionDescription}>В <a href="/">галерее выполенных работ</a> ты обязательно найдешь свой стиль</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <video autoPlay loop muted className='vh-100'>
                            <source src={room3} type='video/mp4'/>
                        </video>
                        <Carousel.Caption className={s.captionCentre}>
                            <h2 className='display-4'>Новые знакомства и идеи</h2>
                            <p  className={s.captionDescription}>В нашем <a href="/">сообществе</a> ты найдешь новых друзей и новые интересы!</p>
                        </Carousel.Caption>
                    </Carousel.Item>


                </Carousel>
            </div>
        )
    }
}

export default CarouselBox
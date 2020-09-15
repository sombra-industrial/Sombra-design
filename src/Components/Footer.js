import React from 'react';
import styled from 'styled-components'
import {faEnvelope, faMapMarkerAlt, faPhone} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <FooterContainer className='main-footer'>
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/*column 1*/}
                        <div className=".col-md-3 col-sm-6 col-lg-3">
                            <h4 className='mb-3'>About us</h4>
                            <ul className='list-unstyled'>
                                <li>
                                    <FontAwesomeIcon className='mr-2' icon={faMapMarkerAlt}/>
                                    <b>Location</b>
                                    <p>Moscow, Kaluga, Tula</p>
                                </li>
                                <li><FontAwesomeIcon className='mr-2' icon={faEnvelope}/>
                                    <b>Have any questions?</b>
                                    <p>sombra-design@info.ru</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon className='mr-2' icon={faPhone}/>
                                    <b>Phone</b>
                                    <p>+7(902)930-89-47</p>
                                </li>
                            </ul>
                        </div>
                        {/*column 2*/}
                        <div className=".col-md-3 col-sm-6 col-lg-3">
                            <h4>Gallery</h4>
                            <ul className='list-unstyled'>
                                <li><a href="/">Lorem ipsum dolor.</a></li>
                                <li><a href="/">Lorem ipsum dolor.</a></li>
                                <li><a href="/">Lorem ipsum dolor.</a></li>
                                <li><a href="/">Lorem ipsum dolor.</a></li>
                            </ul>
                        </div>
                        {/*column 3*/}
                        <div className=".col-md-3 col-sm-6 col-lg-3">
                            <h4>Store</h4>
                            <ul className='list-unstyled'>
                                <li><a href="/">Lorem ipsum dolor.</a></li>
                                <li><a href="/">Lorem ipsum dolor.</a></li>
                                <li><a href="/">Lorem ipsum dolor.</a></li>
                                <li><a href="/">Lorem ipsum dolor.</a></li>
                            </ul>
                        </div>
                        {/*column 4*/}
                        <div className=".col-md-3 col-sm-6 col-lg-3">
                            <h4>Socials</h4>
                            <ul className='list-unstyled'>
                                <li><a href="/">Lorem ipsum dolor.</a></li>
                                <li><a href="/">Lorem ipsum dolor.</a></li>
                                <li><a href="/">Lorem ipsum dolor.</a></li>
                                <li><a href="/">Lorem ipsum dolor.</a></li>
                            </ul>
                        </div>
                    </div>
                    {/*Footer Bottom*/}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Sombra-design - All right reserved
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
    .footer-middle {
        background: black;
        padding-top: 3rem;
        color: var(--mainWhite);
    }
    .footer-bottom {
        padding-top: 3rem;
        padding-bottom: 1rem;
    }
    ul li a {
        color: var(--mainGrey)
    }
        ul li a:hover {
        color: var(--mainLightGrey)
    }
`
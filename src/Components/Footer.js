import React from 'react';
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer className='main-footer'>
            <div className="footer-middle">
                <div className="container-fluid">
                    <div className="row">
                        {/*column 1*/}
                        <div className=".col-md-3 col-sm-6 col-lg-3">
                            <h4>Contacts</h4>
                            <ul className='list-unstyled'>
                                <li>Lorem ipsum dolor.</li>
                                <li>Lorem ipsum dolor.</li>
                                <li>Lorem ipsum dolor.</li>
                                <li>Lorem ipsum dolor.</li>
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
        background: var(--mainDark);
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
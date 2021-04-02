import Styled from 'styled-components';
import {Link} from 'react-router-dom';

import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterStyle>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4>A new way to get many quality graphic designs done</h4>
                        <p>Whether you're just starting your business or you are growing sales into millions, 
                        we will help you grow your business through our multiple 
                        and unlimited graphic design solutions.</p>
                        <Link className="cta" to="/register">Get Started</Link>
                    </div>
                    <div className="copyright col-md-6">
                        <div className="social-icons">
                            <a href="https://facebook.com/usepixelop"><FaFacebookF className="icons" /></a>
                            <a href="https://twitter.com/usepixelop"><FaTwitter className="icons" /></a>
                            <a href="https://instagram.com/usepixelop"><FaInstagram className="icons" /></a>
                        </div>
                        <p>Copyright © 2021. Pixelop. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </FooterStyle>
    )
}

export default Footer;

const FooterStyle = Styled.div`
    background: #DD127B;
    min-height: 200px;
    width: 100%;
    padding: 4.125rem 0;

    h4 {
        color: #fff;
        font-family: 'Lato', sans-serif;
        font-size: 2rem;
        font-weight: 700;
        line-height: 38.4px;

        @media (max-width: 768px) {
            text-align: center;
        }
    }

    p {
        color: #fff;
        font-family: 'Lato', sans-serif;
        font-size: 1.25rem;
        margin-bottom: 1.4rem;
        max-width: 500px;
        opacity: 0.5;

        @media (max-width: 768px) {
            text-align: center;
        }
    }

    .cta {
        align-items: center;
        background: #fff;
        border-radius: 8px;
        color:#DD127B;
        display: flex;
        font-size: 1rem
        font-weight: 700;
        justify-content: center;
        height: 50px;
        margin-top: 28px;
        width: 175px;
        outline: none;
        transition: .3s ease-in all;

        @media (max-width: 768px) {
            margin: 0 auto;
            margin-top: 28px;
        }

        &:hover {
            text-decoration: none;
            background: #DD127B;
            color: #fff;
        }
    }

    .copyright {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;

        @media (max-width: 768px) {
            justify-content: center;
            align-items: center;
        }

        .social-icons {
            width: 150px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 2rem; 

            @media (max-width: 768px) {
                margin-top: 2rem;
            }

            .icons {
                color: #fff;
                font-size: 1.12rem;

                &:hover {
                    color: rgba(255, 255, 255, .7);
                }
            }
        }

        p {
            @media (max-width: 768px) {
                text-align: center;
            }
        }
    }
`;
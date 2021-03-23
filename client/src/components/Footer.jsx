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
                        <h4>Ready to get started?</h4>
                        <p>Pixelop is a brand agency offering multiple 
                        and unlimited design solution for SMEs as well 
                        as startup on a monthly flat fee.</p>
                        <Link className="cta" to="/register">Get Started</Link>
                    </div>
                    <div className="copyright col-md-6">
                        <div className="social-icons">
                            <Link><FaFacebookF className="icons" /></Link>
                            <Link><FaTwitter className="icons" /></Link>
                            <Link><FaInstagram className="icons" /></Link>
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
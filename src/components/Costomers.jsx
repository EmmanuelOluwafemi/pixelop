import React from 'react';
import Styled from 'styled-components';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import customer2 from '../utilities/images/customer2.jpg';
import customer3 from '../utilities/images/customer3.png';
import customer4 from '../utilities/images/customer4.jpg';
import customer5 from '../utilities/images/customer5.jpg';

const Costomers = () => {

    const Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            initialSlide: 2,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            infinite: true,
            slidesToScroll: 1,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 2000,
            }
        }
    ]
    };

    return (
        <CustomerStyle>
            <div className="container">
                <h1>Working with a diverse global customer base</h1>

                <Slider className="slider" { ...Settings }>
                    <div>
                        <img src={customer2} alt="customer logo"/>
                    </div>
                    <div>
                        <img src={customer3} alt="customer logo"/>
                    </div>
                    <div>
                        <img src={customer4} alt="customer logo"/>
                    </div>
                    <div>
                        <img src={customer5} alt="customer logo"/>
                    </div>
                </Slider>

                <h1 className="footerCta">Our end result is <span>EXCELLENT</span></h1>
                <div className="ctaContainer">
                    <Link to='/register'>Get Started</Link>
                </div>
            </div>
        </CustomerStyle>
    )
}

export default Costomers;

const CustomerStyle = Styled.section`
    width: 100vw;

    h1 {
        font-size: 2.1rem;
        font-weight: bold;
        font-family: 'Monteserrat', sans-serif;
        color: #222222;
        line-height: 130%;
        text-align: center;

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }

    .footerCta {
        font-size: 3rem;
        font-weight: bold;
        font-family: 'Lato', sans-serif;
        color: #222222;
        text-align: center;
        margin-top: 108px;
        margin-bottom: 72px;

        span {
            color: #DD127B;
        }

        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }

    .ctaContainer {
        display: flex;
        justify-content: center;
        
        a {
            font-size: 1.85rem;
            font-weight: 900;
            color: #fff;
            background: #DD127B;
            padding: 1.5rem 4rem;
            border-radius: 10px;
            margin: 0 auto;
            text-decoration: none;
            margin-bottom: 6rem;
            transition: all .2s ease-in;

            &:hover {
                background: #FEF519;
                color #DD127B;
            }

            @media (max-width: 768px) {
                padding: 1.3rem 2.5rem;
                font-size: 1rem;
            }
        }
    }


    .slider {
        margin-top: 5rem;

        div {
            img {
                margin: 0 auto;
            }
        }
    }
`;
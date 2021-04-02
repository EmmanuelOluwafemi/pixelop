import React from 'react';
import Styled from 'styled-components';
import Header from './Header';

import herobg from '../utilities/images/herobg.png';
import heroImage from '../utilities/images/heroImage.png';

import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <HeroStyle>
            <div className="heroBg" style={{ backgroundImage: `url(${herobg})` }}></div>
            <Header />
            <div className="container">
                <div class="row align-items-center">
                    <div className="col-md-6 col-lg-7 textContent">
                        <p data-aos="fade-right" data-aos-duration="1000" className="rating"> <AiFillStar className="icons" /> Top design company </p>
                        <h1 data-aos="fade-right" data-aos-duration="1200">Multiple and unlimited Graphic Designs for your business.</h1>
                        <p data-aos="fade-right" data-aos-duration="1400">Pixelop is a brand agency offering multiple and unlimited design solution for 
                            SMEs as well as startups on a monthly flat fee.</p>
                        <Link data-aos="fade-right" data-aos-duration="1600" to="/register" className="cta">See Pricing</Link>
                    </div>
                    <div className="col-md-6 col-lg-5 logomark">
                        <img data-aos="fade-left" data-aos-duration="1000" src={heroImage} alt="pixel loop mark"/>
                    </div>
                </div>
            </div>
        </HeroStyle>
    )
}

export default Hero;

const HeroStyle = Styled.section`
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: #DD127B;

    .heroBg {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        background-size: cover;
        background-position: center;
    }

    .container {

        .row {
            margin-top: 3.6rem;

            @media (max-width: 768px) {
                margin-top: 0;
                margin: 1.3rem 0;
            }
        }

        .cta {
            padding: 16px 24px;
            background: #FFF500;
            color: #CE1A7D;
            font-size: 1.125rem;
            text-decoration: none;
            margin-top: 2rem;
            text-transform: uppercase;
            font-family: 'Montserrat', sans-serif;
            max-width: 216px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all .2s ease-in;

            &:hover {
                background: #FFF;
                color #DD127B;
            }

            @media (max-width: 768px) {
                font-size: 1rem;
                max-width: 200px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 12px 1rem;
                margin-top: .8rem;
            }
        }

        p {
            width: 100%;
            max-width: 615px;
            font-size: 1.5rem;
            font-weight: 400;
            color: #fff;
            display: flex;
            align-items: end;

            @media (max-width: 768px) {
                font-size: .8rem;
            }

            .icons {
                color: #FFF500;
                font-size: 1.25rem;
                margin-right: .4rem;

                @media (max-width: 768px) {
                    font-size: 1rem;
                }
            }

            &.rating {
                margin-bottom: 2.5rem;
                font-size: .8rem;
                display: flex;
                align-items: flex-end;

                @media (max-width: 768px) {
                    font-size: .6rem;
                    margin-bottom: 1rem;
                    margin-top: 0;
                }
            }
        }

        h1 {
            font-size: 3rem;
            font-weight: 900;
            color: #fff;
            max-width: 651px;
            line-height: 60px;
            text-transform: capitalize;
            text-shadow: 0px 2px 0px rgba(34, 34, 34, 0.1);
            margin-bottom: 1.5rem;

            @media (max-width: 768px) {
                font-size: 1.5rem;
                line-height: 32px;
                margin-bottom: 1rem;
            }
        }

        .logomark {
            display: flex;
            justify-content: flex-end;

            @media (max-width: 768px) {
                justify-content: center;

                img {
                    width: 70%;
                    height: auto;
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                }
            }
        }

        .textContent {
            display: flex;
            flex-direction: column;
        }
    }
`;
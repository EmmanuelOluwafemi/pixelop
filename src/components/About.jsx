import React from 'react';
import Styled from 'styled-components';

import fadedLogo from '../utilities/images/fadedLogo.png';
import object from '../utilities/images/object.svg';
import support from '../utilities/images/support.svg';
import about from '../utilities/images/about.jpg';

const About = () => {
    return (
        <AboutStyle>
            <img className="faded" src={fadedLogo} alt="faded logo"/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h6>Good Design is Good Business</h6>
                        <h2>The perfect design plug for your business</h2>
                        <p>Delegate your designs to experts who truly understand your brand, vision and values</p>

                        <div className="row iconContainer">
                            <div className="col-md-6 icons">
                                <div className="imageContainer">
                                    <img src={object} alt="Easy to use"/>
                                </div>
                                <h3>Easy to use</h3>
                                <p>Save money, save time to request many and unlimited designs 
                                    and get graphics for feedbacks promptly.</p>
                            </div>
                            <div className="col-md-6 icons mt-3 mt-md-0">
                                <div className="imageContainer">
                                    <img src={support} alt="Easy to use"/>
                                </div>
                                <h3>Customer Support:</h3>
                                <p>Your dedicated pixelopers will support 
                                    you on anything you need.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 aboutImage">
                        <div className="background"></div>
                        <img src={about} alt="About us"/>
                    </div>
                </div>
            </div>
        </AboutStyle>
    )
}

export default About;

const AboutStyle = Styled.div`
    width: 100%;
    min-height: 400px;
    position: relative;

    @media (max-width: 768px) {
        min-height: 800px;
    }

    .faded {
        position: absolute;
        top: 24px;
        left: 0;

        @media (max-width: 768px0) {
            opacity: .5;
        }
    }

    .container {
        .row {
            .aboutImage {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;

                .background {
                    height: 100%;
                    max-height: 540px;
                    width: 80%;
                    background: #DD127B;
                }

                img {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 90%;
                    height: auto;
                }

                @media (max-width: 768px) {
                    display: block;
                    margin-top: 2rem;

                    .background {
                        height: 100%;
                        min-height: 260px;
                        width: 90%;
                        margin: 0 auto;
                    }

                    .img {
                        position: static;
                    }
                }

            }

            .col-md-6 {
                h6 {
                    font-size: 1rem;
                    font-weight: 700;
                    margin-top: 56px;
                    color: #DD127B;
                    margin-bottom: 2rem;
                }

                h2 {
                    font-size: 3rem;
                    font-weight: 700;
                    color: #1F1F1F;
                    line-height: 56px;

                    @media (max-width: 768px) {
                        font-size: 2rem;
                        line-height: 40px;
                    }
                }

                p {
                    font-size: 1rem;
                    color: #666666;
                    font-weight: 400;
                    max-width: 504px;
                    width: 100%;
                    margin-top: 1.5rem;
                }

                .iconContainer {
                    margin-top: 4rem;

                    .icons {
                        .imageContainer {
                            width: 60px;
                            height: 60px;
                            background: #DD127B;
                            border-radius: 50%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        h3 {
                            font-size: 1.3125rem;
                            font-weight: bold;
                            color: #000;
                            margin-top: 1.5rem;
                            margin-bottom: .8rem;
                        }

                        p {
                            font-weight: 400;
                            font-size: 1rem;
                            color: #666;
                        }
                    }
                }
            }
        }
    }
`;
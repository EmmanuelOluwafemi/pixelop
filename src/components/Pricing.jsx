import React from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';

import pricingBg from '../utilities/images/pricingBg.jpg';

import { IoMdCheckmark } from 'react-icons/io';

const Pricing = () => {
    return (
        <PricingStyle style={{ backgroundImage: `url(${pricingBg})` }}>
            <div className="container">
                <h5>PRICING</h5>
                <h1>Ready to use our service? 
                Choose a package.</h1>

                <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0 cardContainer">
                        <div className="gridCard active">
                            <h5>Multiple Lite Plan</h5>
                            <h2>₦15,000 <span>/ month</span></h2>
                            <p>Best for individuals and small businesses.</p>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Up to 10 requests</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Limited Revision</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Single Brand</div>
                            <div className="list stroke"><IoMdCheckmark className="markIcon" /> No trial</div>
                            <div className="list stroke"><IoMdCheckmark className="markIcon" /> No discount</div>

                            <Link to='/register'>Get Started</Link>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0 cardContainer">
                        <div className="gridCard">
                            <h5>UNLIMITED PLAN <span>Popular</span></h5>
                            <h2>₦15,000 <span>/ month</span></h2>
                            <p>Best for individuals and small businesses.</p>
                            <h3>SAVE 20% on first month</h3>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Unlimited Request</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Unlimited Revisions</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Unlimited Brands</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Free Stock Images.</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Dedicated design team.</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Calender and Project base requests.</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> 1 Project Free Trial.</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Fast Turn-arounds</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Full ownership of files</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Web and Print-ready files</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Includes Custom illustration</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Includes Animated GIFs</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Advanced Infographics</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Presentation Decks</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Real-time customer support.</div>

                            <Link to='/register'>Get Started</Link>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0 cardContainer">
                        <div className="gridCard">
                            <h5>MULTIPLE PLAN <span>Popular</span></h5>
                            <h2>₦45,000 <span>/ month</span></h2>
                            <p>Best for entrepreneurs and social/digital marketers.</p>
                            <h3>SAVE 20% on first month</h3>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Up-to 30 Requests</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Unlimited Revisions</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Multiple Brands</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Free Stock Images.</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Calender based requests.</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> 3 Days free trial.</div>
                            <div className="list"><IoMdCheckmark className="markIcon" /> Calender based Turn-arounds.</div>

                            <Link to='/register'>Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </PricingStyle>
    )
}

export default Pricing;

const PricingStyle = Styled.section`
    width: 100%;
    min-height: 100vh;
    background-position: center;
    background-size: cover;
    padding: 134px 0;

    h5 {
        font-size: 1.5rem;
        font-weight: 700;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
    }

    h1 {
        font-size: 2rem;
        font-weight: 700;
        color: #fff;
        text-align: center;
        width: 100%;
        max-width: 611px;
        margin: 0 auto;
        margin-top: 2rem;
    }

    .row {
        margin-top: 94px;

        .cardContainer {
            width: 100%;

            .gridCard {
                width: 100%;
                border-radius: 6px;
                background: #fff;
                padding: 2.4375rem 2.8125rem;

                h5 {
                    margin: 0;
                    padding: 0;
                    text-align: left;
                    font-size: 1rem;
                    font-weight: bold;
                    text-transform: uppercase;
                    margin-bottom: 2rem;
                    color: #666666;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    span {
                        padding: 6px 13px;
                        background: #4EAB08;
                        border-radius: 13px;
                        font-family: 'Inter', sans-serif;
                        font-size: 0.75rem;
                        font-weight: bold;
                        color: #fff;
                    }
                }

                h2 {
                    
                    font-size: 1.2rem;
                    font-weight: bold;
                    text-align: left;
                    color: #2B405A;

                    span {
                        font-size: 1rem;
                        font-weight: 500;
                    }
                }

                h3 {
                    font-size: 1.05rem;
                    font-weight: 900;
                    line-height: 131.5%;
                    letter-spacing: 0.82px;
                    color: #2B405A;
                }

                p {
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 20px;
                    margin-top: .6rem;
                    color: #1F1F1F;
                }

                .list {
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 32px;


                    .markIcon {
                        font-size: 1.2rem;
                        margin-right: 6px;
                    }
                }

                a {
                    width: 190px;
                    height: 50px;
                    background: #DD127B;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1rem;
                    font-family: 'Karla', sans-serif;
                    font-weight: bold;
                    color: #FFF;
                    text-transform: uppercase;
                    border-radius: 5px;
                    margin-top: 3rem;
                }

                &.active {
                    background: #2B405A;
                    
                    h5, h2, p, .list {
                        color: #fff;
                    }

                    a {
                        background: #fff;
                        color: #DD127B;
                        font-family: 'Karla', sans-serif;
                        font-weight: bold;
                    }

                    .list {
                        &.stroke {
                            color: #878B90;
                            text-decoration: line-through;
                        }
                    }
                }
            }
        }
    }
`;
import React from 'react';

import Styled from 'styled-components';

// image import 
import avatar1 from '../utilities/images/avatar-1.png';
import avatar2 from '../utilities/images/avatar-2.png';
import avatar3 from '../utilities/images/avatar-3.png';
import avatar4 from '../utilities/images/avatar-4.png';

const Testimonial = () => {
    return (
        <TestimonialStyle>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 titleSection">
                        <h6>T E S T I M O N I A L S</h6>
                        <h2>50k+ users are showing love.</h2>
                        <p>We designed and tested prototypes that helped 
                        identify pain points in the account creation process. 
                        Together, we shaped the new standard.</p>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="testimonialCard">
                                    <p>The graphic solutions from Pixelop is always unique and speak the mind of the client. Good Job. </p>
                                    <div className="userDetails">
                                        <div className="avatar">
                                            <img className="img-fluid" src={avatar1} alt="customer identity"/>
                                        </div>
                                        <div className="details">
                                            <div className="name">Abiodun Lawal</div>
                                            <div className="position">Hemmsgreen Agricultural Projects</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="testimonialCard">
                                    <p>Always there to satisfy your design needs. All you need is to 
                                        say how and when you want it.'</p>
                                    <div className="userDetails">
                                        <div className="avatar">
                                            <img className="img-fluid" src={avatar2} alt="customer identity"/>
                                        </div>
                                        <div className="details">
                                            <div className="name">Ajala Tolani</div>
                                            <div className="position">Public Health Advocate</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="testimonialCard">
                                    <p>I strongly recommend Pixelop for every budding entrepreneur and start-up looking to take their business to the next level.</p>
                                    <div className="userDetails">
                                        <div className="avatar">
                                            <img className="img-fluid" src={avatar3} alt="customer identity"/>
                                        </div>
                                        <div className="details">
                                            <div className="name">Oludiran Yemi</div>
                                            <div className="position">Rehoboth Computers</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="testimonialCard">
                                    <p>Good Job with great business mindset, they created my beautiful logo and advert designs</p>
                                    <div className="userDetails">
                                        <div className="avatar">    
                                            <img className="img-fluid" src={avatar4} alt="customer identity"/>
                                        </div>
                                        <div className="details">
                                            <div className="name">Bright Ituh</div>
                                            <div className="position">Mathsbrain Tutors</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TestimonialStyle>
    )
}

export default Testimonial;

const TestimonialStyle = Styled.div`
    width: 100vw;
    min-height: 100vh;

    .container {
        height: 100%;

        .row {
            height: 100%;
            padding: 72px 0;

            .titleSection {
                h6 {
                    color: #DD127B;
                    font-size: .95rem;
                    font-weight: bold;
                    font-family: 'Karla', sans-serif;
                    text-transform: uppercase;
                }

                h2 {
                    font-family: 'karla', sans-serif;
                    font-size: 3rem;
                    font-weight: bold;
                    color: #DD127B;
                    margin-top: 3rem;
                    margin-bottom: 1rem;
                    line-height: 56px;

                    @media (max-width: 768px) {
                        font-size: 2rem;
                        margin-top: 1rem;
                        line-height: 40px;
                    }
                }

                p {
                    font-family: 'karla', sans-serif;
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 32px;
                    color: #666666;
                }
            }

            .testimonialCard {
                padding: 1.9375rem 2.3125rem;

                @media (max-width: 786px) {
                    padding: 1.9375rem 1.3125rem;
                }
                
                p {
                    font-family: 'Rubik', sans-serif;
                    font-size: 1.125rem;
                    font-weight: 400;
                    line-height: 32px;
                    letter-spacing: -0.1px;
                    color: #1F1F1F;

                    @media (max-width: 786px) {
                        font-size: 1rem;
                    }
                }

                .userDetails {
                    display: flex;
                    align-items: center;
            
                    .avatar {
                        height: 45px;
                        width: 45px;
                        background: #c4c4c4;
                        border-radius: 50%;
                        margin-right: 1.3rem;

                        @media (max-width: 786px) {
                            font-size: 1.1rem;
                        }
                    }

                    .details {
                        .name {
                            font-size: 1.0625rem;
                            font-family: 'karla', sans-serif;
                            font-weight: bold;
                            line-height: 28px;
                            letter-spacing: -0.31875px;
                            color: #1F1F1F;

                            @media (max-width: 786px) {
                                font-size: .9rem;
                            }
                        }

                        .position {
                            font-size: 0.9375rem;
                            font-family: 'karla', sans-serif;
                            font-weight: 400;

                            @media (max-width: 786px) {
                                font-size: .8rem;
                            }
                        }
                    }
                }
            }
        }
    }
`;
import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

import { IoIosArrowBack } from 'react-icons/io';

const RegisterForm = () => {
    return (
        <div className="container">
            <RegisterFormStyle className="row">
                <div className="col-md-6">
                    <Link to="/"><IoIosArrowBack className="icons" /> Back</Link>
                    <h1 data-aos="fade-right" data-aos-duration="1000" >Sign Up</h1>
                    <p data-aos="fade-right" data-aos-duration="1300" >Perxels is an online community that provides training and 
                    mentorship for User Interface and User Experience designers to 
                    grow and thrive in the Industry.</p>

                    <h4 data-aos="fade-up" data-aos-duration="1400" >BASIC INFORMATION</h4>

                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div data-aos="fade-up" data-aos-duration="1000" className="inputGroup">
                                    <label>FIRST NAME</label>
                                    <input type="text" placeholder="John" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div data-aos="fade-up" data-aos-duration="1000" className="inputGroup">
                                    <label>LAST NAME</label>
                                    <input type="text" placeholder="Doe" />
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className="inputGroup">
                            <label>EMAIL ADDRESS</label>
                            <input type="email" placeholder="john@abc.com"/>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className="inputGroup">
                            <label>Phone Number</label>
                            <input type="text" placeholder="+2349348843"/>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className="inputGroup">
                            <label>Company</label>
                            <input type="text" placeholder="Company Name"/>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className="inputGroup">
                            <label>Selected Package</label>
                            <input type="text" placeholder="Packages"/>
                        </div>

                        <h4 data-aos="fade-up" data-aos-duration="1000" >DESIGN BRIEF</h4>
                        
                        <div data-aos="fade-up" data-aos-duration="1000" className="inputGroup">
                            <label>Overview of Business</label>
                            <textarea></textarea>
                        </div>
                        
                        <div data-aos="fade-up" data-aos-duration="1000" className="inputGroup">
                            <label>Objective of design</label>
                            <textarea></textarea>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000" className="inputGroup">
                            <label>Design title and info</label>
                            <textarea></textarea>
                        </div>
                        
                        <div data-aos="fade-up" data-aos-duration="1000" className="inputGroup">
                            <label>Upload content/brief calendar (doc,pdf..)</label>
                            <input className="fileInput" type="file"/>
                        </div>

                        <button type="submit">Submit Request</button>
                    </form>
                </div>
                <div className="col-md-6 d-none d-md-block box-container">
                    <div data-aos="fade-up" data-aos-duration="1400" className="box"></div>
                    <div data-aos="fade-up" data-aos-duration="1400" className="box mt-5"></div>
                </div>
            </RegisterFormStyle>
        </div>
    )
}

export default RegisterForm;

const RegisterFormStyle = Styled.div`
    width: 100%;
    min-height: 100vh; 
    margin-top: 65px;
    margin-bottom: 4rem;

    .box-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .box {
        width: 100%;
        height: 46%;
        background: #ddd;
        margin-left: 6rem;
    }

    a {
        color: #4E4E4E;
        font-size: 0.875rem;
        font-family: 'inter', sans-serif;
        font-weight: 500;
        margin-bottom: 2rem;

        .icons {
            margin-right: 8px;
        }
    }

    h1 {
        font-family: 'FuturaHeavyBT', sans-serif;
        font-weight: 900;
        font-size: 3.125rem;
        color: #333;
        margin-top: 1.5rem;
    }

    h4 {
        font-family: 'FuturaHeeavyBT', sans-serif;
        font-weight: 900;
        font-size: 1.25rem;
        color: #1F1F1F;
        margin-top: 4.625rem;
        margin-bottom: 2.5rem;
    }

    p {
        font-size: 1rem;
        font-weight: 400;
        color: #313030;
        font-family: 'inter', sans-serif;
        margin-top: 1.6rem;
        margin-bottom: 4rem;
    }

    .inputGroup {
        width: 100%;
        min-height: 60px;
        margin-bottom: 1rem;

        label {
            display: block;
            font-size: 0.85rem;
            font-weight: 500;
            font-family: 'inter', sans-serif;
            color: #4E4E4E;
        }

        input {
            width: 100%;
            height: 40px;
            padding: 0 1rem;
            outline: none;
            border: 1px solid #D61177;
            border-radius: 4px;

            &.fileInput {
                border: none;
            }
        }

        textarea {
            width: 100%;
            height: 133px;
            outline: none;
            padding: 1rem;
            border: 1px solid #D61177;
            border-radius: 4px;
        }
    }
    
    button {
        font-size: 1.125rem;
        font-family: 'inter', sans-serif;
        font-weight: 900;
        padding: 1rem 3.5rem;
        color: #D61177;
        background: #FCDB04;
        border-radius: 5px;
        border: none;
        outline: none;
        margin-top: 2rem;
        transition: all .3s ease-in;

        &:hover {
            transform: scale(1.05);
        }
    }
`;
import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

import work from '../utilities/images/work.svg';
import workMb from '../utilities/images/workMb.svg';

const How = () => {
    return (
        <HowStyled>
            <div className="container">
                <h1>How it works</h1>

                <div className="howContainer">

                    <img className="img-fluid web" src={work} alt="work illustration"/>
                    <img className="img-fluid mobile" src={workMb} alt="work illustration"/>
                    <Link to="/register">Order Now</Link>

                </div>
            </div>
        </HowStyled>
    )
}

export default How;

const HowStyled = Styled.section`
    width: 100%;
    min-height: 500px;

    h1 {
        font-size: 3rem;
        font-family: 'lato', sans-serif;
        font-weight: bold;
        color: #000;
        text-align: center;

        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }

    .howContainer {
        min-height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        img {
            margin-top: 56px;

            &.mobile {
                display: none;

                @media (max-width: 768px) {
                    display: block;
                }

                @media (max-width: 480px) {
                    transform: scale(.8);
                    margin-top: 8px;
                }
            }

            &.web {
                @media (max-width: 768px) {
                    display: none;
                }
            }
        }

        a {
            padding: 24px 72px;
            background: #DD127B;
            color: #fff;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            font-size: 1.5rem;
            text-transform: uppercase;
            text-decoration: none;
            border-radius: 10px;
            margin-top: 78px;
            transition: .7s all ease;

            &:hover {
                background: #FEF519;
                color #DD127B;
            }

            @media (max-width: 768px) {
                margin-bottom: 64px;
            }

            @media (max-width: 500px) {
                margin-top: 32px;
                font-size: 1rem;
                max-width: 200px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 14px 32px;
            }
        }
    }
`;
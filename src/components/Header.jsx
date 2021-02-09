import React, {useState} from 'react';
import Styled from 'styled-components';

import { Link, NavLink } from 'react-router-dom';

import logo from '../utilities/images/logo.svg';

import { GiHamburgerMenu } from 'react-icons/gi';


const Header = () => {

    const [toggle, setToggle] = useState(false);

    const handleOnclick = () => {
        setToggle(!toggle);
    }

    return (
        <HeaderStyle>
            {toggle && 
                <div onClick={handleOnclick} className="overlay"></div>
            }
            <div className="container">
                <Nav>
                    <div className="logoContainer">
                        <Link to='/'><img src={logo} alt="pixeloop logo"/></Link>
                    </div>
                    <div className={toggle ? "navContainer active" : 'navContainer'}>
                        <ul>
                            <NavLink to='/' activeClassName="active">Home</NavLink>
                            <NavLink to='/portfolio' activeClassName="active">Portfolio</NavLink>
                            <NavLink to='/pricing' activeClassName="active">Pricing</NavLink>
                        </ul>
                        <div className="contact">+234 810 095 8576</div>
                    </div>
                    <GiHamburgerMenu onClick={handleOnclick} className="icons" />
                </Nav>
            </div>
        </HeaderStyle>
        
    )
}

export default Header;

const HeaderStyle = Styled.div`
    width: 100%;

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, .6);
        z-index: 4;
    }
`;

const Nav = Styled.nav`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        justify-content: space-between;
    }

    .icons {
        display: none;

        @media (max-width: 768px) {
            display: block;
            margin-right: 24px;
            font-size: 1.5rem;
            color: #fff;
            cursor: pointer;
        }
    }

    .logoContainer {
        display: inline;

        img {
            margin-right: 2rem;
        }
    }

    .navContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        @media (max-width: 768px) {
            position: fixed;
            top: 0;
            left: -260px;
            width: 250px;
            height: 100vh;
            background: #fff;
            z-index: 6;
            flex-direction: column;
            justify-content: center;
            transition: all .3s ease-in;

            &.active {
                left: 0;
            }
        }

        ul {
            list-style: none;
            margin: 0;

            a {
                margin-right: 1rem;
                text-transform: uppercase;
                font-size: .9rem;
                font-family: 'Montserrat', sans-serif;
                font-weight: 600;
                color: #fff;

            &:hover, &.active {
                color: #FFA3A3;
                text-decoration: none;
            }

            @media (max-width: 786px) {
                display: flex;
                flex-direction: column;
                justify-content: center;
                color: #000;
                text-align: center;
                margin-bottom: 1.5rem;
            }
        }

    }

    .contact {
        margin-right: 1rem;
        text-transform: uppercase;
        font-size: .9rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        color: #fff;

        @media (max-width: 768px) {
            color: #000;
            text-align: center;
        }
    }
`;
import React, {useState} from 'react';
import Styled from 'styled-components';

import logo from '../utilities/images/logo.svg';

import { GiHamburgerMenu } from 'react-icons/gi';

import { Link } from 'react-scroll';


const Header = () => {

    const [toggle, setToggle] = useState(false);

    const handleOnclick = () => {
        setToggle(!toggle);
    }

    const handleMobileMenu = () => {
        setToggle(false);
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
                            <Link onClick={handleMobileMenu} exact to='/' className="active" smooth={true}>Home</Link>
                            <Link onClick={handleMobileMenu} to='portfolio' smooth={true}>Portfolio</Link>
                            <Link onClick={handleMobileMenu} to='pricing' smooth={true}>Pricing</Link>
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
                cursor: pointer;

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
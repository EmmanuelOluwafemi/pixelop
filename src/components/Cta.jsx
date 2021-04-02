import Styled from 'styled-components';
import user from '../utilities/images/user.png';
import logomark from '../utilities/images/logomark.png';
import { RiWhatsappFill } from 'react-icons/ri';

const Cta = () => {
    return (
        <CtaStyle>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img data-aos="fade-right" data-aos-duration="1200" className="user_identity" src={user} alt="pixeloop identity"/>
                    </div>
                    <div className="user-content col-md-6">
                        <h2 data-aos="fade-left" data-aos-duration="1200">LET’S BUILD SOLUTIONS TOGETHER</h2>
                        <h5 data-aos="fade-left" data-aos-duration="1400">Akanni Emmanuel</h5>
                        <p data-aos="fade-left" data-aos-duration="1600">Team Lead, Pixelop</p>
                    </div>

                    <div className="contact">
                        <a href="https://wa.me/message/M7HVEB6TJYT5I1">SEND US A DIRECT MESSAGE ON WHATSAPP <RiWhatsappFill className="socialIcon" /></a>
                    </div>
                </div>
            </div>
            <img className="logomark" src={logomark} alt=""/>
        </CtaStyle>
    )
}

export default Cta;

const CtaStyle = Styled.div`
    position: relative;
    width: 100%;
    min-height: 300px;
    margin: 9.4375rem 0;
    margin-top: -2rem;
    margin-bottom: 4rem;

    .logomark {
        position: absolute;
        top: 50%;
        right: -5%;
        transform: translateY(-50%);
        opacity: .2;
        pointer-events: none;
        z-index: -1;
    }

    .user_identity {
        width: 100%;
        height: auto;
    }

    .user-content {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h2 {
            color: #1F1F1F;
            font-family: 'Karla', sans-serif;
            font-weight: 700;
            font-size: 3rem;
            max-width: 500px;
            width: 100%;

            @media (max-width: 768px) {
                margin-top: 3rem;
                text-align: center;
            }
        }

        h5 {
            color: #1F1F1F;
            font-family: 'Lato', sans-serif;
            font-weight: 700;
            font-size: 1.02rem;

            @media (max-width: 768px) {
                text-align: center;
            }
        }

        p {
            color: #666666;
            font-size: 0.95rem;
            font-weight: 400;
            font-family: 'Karla', sans-serif;

            @media (max-width: 768px) {
                text-align: center;
            }
        }
    }

    .contact {
        width: 100%;
        margin-top: 6rem;

        a {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: #1F1F1F;
            text-decoration: none;
            text-transform: uppercase;
            text-align: center;
            font-size: 1.625rem;
            font-weight: 700;
            transition: all .2s ease-in;

            &:hover {
                color: #000;
            }

            .socialIcon {
                color: #4CAF50;
                margin-left: 1.6rem;
            }

            @media (max-width: 720px) {
                font-size: .9rem;

                .social-icon {
                    margin-left: .6rem;
                }
            }
        }
    }
`;
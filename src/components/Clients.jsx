import React from 'react';
import Styled from 'styled-components';

import client1 from '../utilities/images/clients/client-1.png';
import client2 from '../utilities/images/clients/client-2.png';
import client3 from '../utilities/images/clients/client-3.png';
import client4 from '../utilities/images/clients/client-4.png';
import client5 from '../utilities/images/clients/client-5.png';
import client6 from '../utilities/images/clients/client-6.png';
import client7 from '../utilities/images/clients/client-7.png';
import client8 from '../utilities/images/clients/client-8.png';
import client9 from '../utilities/images/clients/client-9.png';

const Clients = () => {
    return (
        <div className="container">
            <Heading>Brands we have worked with</Heading>
            <ClientStyle>
                <img src={client1} alt="clients logo"/>
                <img src={client2} alt="clients logo"/>
                <img src={client9} alt="clients logo"/>
                <img src={client3} alt="clients logo"/>
                <img src={client4} alt="clients logo"/>
                <img src={client5} alt="clients logo"/>
                <img src={client6} alt="clients logo"/>
                <img src={client7} alt="clients logo"/>
                <img src={client8} alt="clients logo"/>
            </ClientStyle>
        </div>
    )
}

export default Clients;

const ClientStyle = Styled.div`
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 96px;

    img {
        height: 80px;
        width: auto;
        margin-left: 1rem;
        margin-right: 1rem;

        &:first-child {
            margin-left: 0;
        }
    }
`;

const Heading = Styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    font-family: 'Karla', sans-serif;
    text-align: center;
    color: #DD127B;
    width: 100%;
    margin-bottom: 56px;
    margin-top: 32px;
`;
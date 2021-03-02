import React from 'react';
import Styled from 'styled-components';

import calender from '../utilities/images/calender.jpg';
import cream from '../utilities/images/cream.jpg';
import card from '../utilities/images/card.jpg';
import cardGrid from '../utilities/images/card-grid.jpg';
import maniz from '../utilities/images/maniz.jpg';
import promo from '../utilities/images/promo.jpg';

const Portfolio = () => {
    return (
        <PortfolioStyle id="portfolio">
            <div className="container">
                <h1>Our Stunning Portfolios</h1>
                <p>Some networks believe that by only offering a basic tracking system their affiliates can reach a high level of creativity. We like to set the bar a lot higher by offering
                 you cutting-edge tech solutions together with a team of creative experts.</p>

                 <div className="row mt-4">
                     <div className="col-md-4">
                         <div className="cardContainer">
                            <img className="img-fluid" src={calender} alt="portfolio item one"/>
                         </div>
                     </div>
                     <div className="col-md-4">
                         <div className="cardContainer">
                             <img className="img-fluid" src={cream} alt="portfolio item two"/>
                         </div>
                     </div>
                     <div className="col-md-4">
                         <div className="cardContainer">
                             <img className="img-fluid" src={promo} alt="portfolio item three"/>
                         </div>
                     </div>
                     <div className="col-md-4">
                         <div className="cardContainer">
                             <img className="img-fluid" src={maniz} alt="portfolio item four"/>
                         </div>
                     </div>
                     <div className="col-md-4">
                         <div className="cardContainer">
                             <img className="img-fluid" src={card} alt="portfolio item five"/>
                         </div>
                     </div>
                     <div className="col-md-4">
                         <div className="cardContainer">
                             <img className="img-fluid" src={cardGrid} alt="portfolio item six"/>
                         </div>
                     </div>
                 </div>
            </div>
        </PortfolioStyle>
    )
}

export default Portfolio;

const PortfolioStyle = Styled.section`
    width: 100vw;
    min-height: 500px;
    padding: 127px 0;

    .container {
        h1 {
            text-align: center;
            font-size: 2.125rem;
            color: #222;
            font-weight: bold;
            line-height: 130%;
        }

        p {
            font-size: 1rem;
            font-weight: 400;
            text-align: center;
            max-width: 702px;
            width: 100%;
            margin: 0 auto;
            color: rgba(34, 34, 34, 0.7);
            margin-top: 1.3rem;
        }

        .row {
            .cardContainer {
                width: 100%;
                margin-bottom: 1.25rem;
                background: rgba(255, 245, 0, 0.2);
                border-radius: 15px;
            }
        }
    }
`;
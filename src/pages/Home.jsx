import React from 'react';
import About from '../components/About';
import Costomers from '../components/Costomers';
import Hero from '../components/Hero';
import How from '../components/How';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Testimonial from '../components/Testimonial';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Portfolio />
            <How />
            <Pricing />
            <Testimonial />
            <Costomers />
        </>
    )
}

export default Home;
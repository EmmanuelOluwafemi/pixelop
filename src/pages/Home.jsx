import React, {useEffect} from 'react';
import About from '../components/About';
// import Costomers from '../components/Costomers';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import How from '../components/How';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Testimonial from '../components/Testimonial';
import Clients from '../components/Clients';

import AOS from "aos";

const Home = () => {

    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <>
            <Hero />
            <About />
            <Portfolio />
            <How />
            <Pricing />
            <Testimonial />
            <Clients />
            <Cta />
            {/* <Costomers /> */}
            <Footer />
        </>
    )
}

export default Home;
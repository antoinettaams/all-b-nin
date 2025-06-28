// Home.jsx ou page.jsx

import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/Testimonials';
import KeyFeatures from '../components/KeyFeatures';
import ProSpace from '../components/ProSpace';

const Home = () => {
  return (
    <>
  
      <main>
        <Hero/>
        <ServicesSection/>
        <TestimonialsSection/>
        <KeyFeatures />
        <ProSpace/>
      </main>

    </>
  );
};

export default Home;

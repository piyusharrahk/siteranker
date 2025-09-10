import React from 'react';
import Hero from '../components/Hero';
import Comparison from '../components/Comparison';
import Guide from '../components/Guide';
import Newsletter from '../components/Newsletter';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Comparison />
      <Guide />
      <Newsletter />
      <FAQ />
    </>
  );
};

export default Home;
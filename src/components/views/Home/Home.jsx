import React from 'react';
import View from 'components/shared/View/View';

import Nav from 'components/shared/Nav/Nav';
import Hero from 'components/shared/Hero/Hero';
import Services from 'components/shared/Services/Services';
import Contact from 'components/shared/Contact/Contact';

const Home = () => {
  return (
    <View>
      <Nav />
      <Hero />
      <Services />
      <Contact />
    </View>
  );
};

export default Home;

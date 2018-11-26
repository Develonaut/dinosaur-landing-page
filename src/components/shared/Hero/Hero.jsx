import React from 'react';

import Header from 'components/shared/Hero/Header/Header';

import styles from 'components/shared/Hero/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.root}>
      <Header />
      <div className={styles.root__illustration} />
      <div className={styles.root__mask} />
    </section>
  );
};

export default Hero;

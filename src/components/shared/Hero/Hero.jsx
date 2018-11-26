import React from 'react';

import styles from 'components/shared/Hero/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.root}>
      <header>
        <section>
          <h1>Howdy</h1>
          <h1>We're</h1>
          <h1>Dinosaur.</h1>`
        </section>
        <section>
        A design and development studio, passionate about creating engaging experiences that help shape your brand.
        </section>
      </header>
      <div className={styles.root__illustration} />
      <div className={styles.root__mask} />
    </section>
  );
};

export default Hero;
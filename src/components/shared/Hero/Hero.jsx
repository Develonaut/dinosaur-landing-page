import React from "react";

import Header from "components/shared/Hero/Header/Header";
import CloudLarge from "components/shared/SVGs/CloudLarge";
import CloudSmall from "components/shared/SVGs/CloudSmall";
import CloudSmallDot from "components/shared/SVGs/CloudSmallDot";

import styles from "components/shared/Hero/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.root}>
      <section className={styles.root__content}>
        <Header />
        <CloudLarge className={styles["root__cloud-large"]} />
        <CloudSmall className={styles["root__cloud-small"]} />
        <CloudSmallDot className={styles["root__cloud-small-dot"]} />
      </section>
      <div className={styles.root__illustration} />
      <div className={styles.root__mask} />
    </section>
  );
};

export default Hero;

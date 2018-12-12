import React from "react";

import styles from "components/shared/Hero/Header/Header.module.css";

const HeroHeader = () => {
  return (
    <header className={styles.root}>
      <section className={styles.root__head}>
        <span className={styles["root__head__text--1"]}>Howdy!</span>
        <span className={styles["root__head__text--2"]}>We&rsquo;re</span>
        <span className={styles["root__head__text--3"]}>Dinosaur.</span>
      </section>
      <section className={styles.root__body}>
        A design and development studio, passionate about creating engaging
        experiences that help shape your brand.
      </section>
    </header>
  );
};

export default HeroHeader;

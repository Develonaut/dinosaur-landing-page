import React from "react";

import Header from "components/shared/Hero/Header/Header";
import CloudLarge from "components/shared/SVGs/CloudLarge";
import CloudSmall from "components/shared/SVGs/CloudSmall";
import CloudSmallDot from "components/shared/SVGs/CloudSmallDot";

import styles from "components/shared/Hero/Hero.module.css";

const onePageLoveStyle = {
  display: "inline-block",
  position: "fixed",
  left: "0",
  top: "150px",
  zIndex: "999999"
};

const Hero = () => {
  return (
    <section className={styles.root}>
      <a href="https://onepagelove.com/dinosaur" style={onePageLoveStyle}>
        <img
          width="73"
          height="56"
          src="https://s3.amazonaws.com/onepagelove/one-page-love-award-retina-left.png"
          alt="One Page Love Award"
        />
      </a>
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

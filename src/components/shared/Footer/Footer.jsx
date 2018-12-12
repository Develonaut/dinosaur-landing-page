import React from "react";

import styles from "components/shared/Footer/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.root}>
      <section className={styles.root__section}>
        <a
          href="mailto:hello@dinosaur.design"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.root__icon}
        />
        <a
          href="//www.behance.net/dinosaurcreative"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.root__icon}
        />
        <a
          href="//gitlab.com/dinosaur.design"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.root__icon}
        />
        <a
          href="//www.facebook.com/dinosaurcreative"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.root__icon}
        />
        <a
          href="//twitter.com/DinosaurCr8ive"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.root__icon}
        />
      </section>
      <section className={styles.root__section}>
        <span>Copyright © 2018 Dinosaur, LLC</span>
      </section>
    </footer>
  );
};

export default Footer;

import React from "react";
import classnames from "classnames";
import Button from "components/shared/Button/Button";

import styles from "components/shared/Contact/Header/Header.module.css";
import buttonStyles from "components/shared/Button/Button.module.css";

const ContactHeader = ({ className = "" }) => {
  const headerClass = classnames([styles.root, className]);
  return (
    <header className={headerClass}>
      <section className={styles.root__head}>
        <span className={styles["root__head__text--1"]}>Like</span>
        <span className={styles["root__head__text--2"]}>what</span>
        <span className={styles["root__head__text--3"]}>you</span>
        <span className={styles["root__head__text--4"]}>see?</span>
      </section>
      <a
        href="mailto:hello@dinosaur.design"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonStyles.root}
      >
        Say Hello!
      </a>
    </header>
  );
};

export default ContactHeader;

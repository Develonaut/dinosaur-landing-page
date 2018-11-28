import React from 'react';
import Button from 'components/shared/Button/Button'

import styles from 'components/shared/Contact/Header/Header.module.css'

const ContactHeader = () => {
  return (
    <header className={styles.root}>
      <section className={styles.root__head}>
        <span className={styles['root__head__text--1']}>Like</span>
        <span className={styles['root__head__text--2']}>what</span>
        <span className={styles['root__head__text--3']}>you</span>
        <span className={styles['root__head__text--3']}>see?</span>
      </section>
      <Button>Say Hello!</Button>
  </header>
  );
};

export default ContactHeader;

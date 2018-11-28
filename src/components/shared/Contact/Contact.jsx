import React from 'react';

import Header from 'components/shared/Contact/Header/Header';

import styles from 'components/shared/Contact/Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.root}>
      <div className={styles.root__mask} />
      <Header />
    </section>
  );
};

export default Contact;
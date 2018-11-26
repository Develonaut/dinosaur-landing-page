import React from 'react';
import { getExternalUrls } from 'conf/urls';

import Logo from 'components/shared/Logo/Logo';
import classnames from 'classnames';

import styles from 'components/shared/Nav/Nav.module.css';
import buttonStyles from 'components/shared/Button/Button.module.css';


const Nav = () => {
  console.log(getExternalUrls().BEHANCE);

  const emailClass = classnames([
    styles.root__link,
    buttonStyles['root--primary'],
  ]);

  return (
    <nav className={styles.root}>
      <section className={styles.root__left}>
        <Logo />
      </section>
      <section className={styles.root__right}>
        <a className={styles.root__link } target="_blank" rel="noopener noreferrer" href={getExternalUrls().BEHANCE}>Clients</a>
        <a className={emailClass} href={`mailto:${getExternalUrls().EMAIL}`}>Contact</a>
      </section>
    </nav>
  );
};

export default Nav;
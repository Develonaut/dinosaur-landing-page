import React from 'react';
import { ReactComponent as Logo } from 'images/svgs/Logo--orange.svg';
import styles from 'components/shared/Logo/Logo.module.css';

export default function _Logo() {
  return <Logo className={styles.root} />;
}
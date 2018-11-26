import React from 'react';
import classnames from 'classnames';

import styles from 'components/shared/View/View.module.css';

const View = ({
  className,
  children = [],
}) => {
  const viewClass = classnames([styles.root, className]);
  return (
    <main className={viewClass}>
      {children}
    </main>
  );
};

export default View;
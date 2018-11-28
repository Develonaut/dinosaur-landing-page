import React from 'react';
import classnames from 'classnames';

import styles from 'components/shared/Button/Button.module.css';

const Button = ({
  type = 'button',
  variant = 'primary',
  filled = 'true',
  border = 'false',
  children = [],
  className,
}) => {

  const buttonClass = classnames([
    styles.root,
    className,
  ], {
    [styles.root__primary]: variant === 'primary',
  })

  return (
    <button
      type={type}
      className={buttonClass}
    >
      {children}
    </button>
  );
};

export default Button;
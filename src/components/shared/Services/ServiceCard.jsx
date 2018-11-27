import React from 'react';
import classnames from 'classnames';

import styles from 'components/shared/Services/ServiceCard.module.css'

const ServiceCard = ({
  icon = () => {},
  heading = '',
  body = '',
  className = '',
}) => {
  const cardClass = classnames([
    className,
    styles.root,
  ])
  return (
    <div className={cardClass}>
      { React.createElement(icon, { className: styles.root__icon}) }
      <h1 className={styles.root__heading}>{heading}</h1>
      <p className={styles.root__body}>{body}</p>
    </div>
  );
};

export default ServiceCard;

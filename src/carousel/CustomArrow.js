import React from 'react';

import styles from '../Style';

const CustomArrow = ({
  className,
  style,
  onClick
}) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: styles.colors.gray,
      height: '2rem',
      width: '2rem',
      top: '4.5rem'
    }}
    onClick={onClick}
  />
);

export default CustomArrow;

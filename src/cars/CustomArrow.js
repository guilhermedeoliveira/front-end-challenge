import React from 'react';
import propTypes, { style } from 'prop-types';

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

CustomArrow.propTypes = {
  className: propTypes.string.isRequired,
  style: propTypes.objectOf(style),
  onClick: propTypes.func
};

CustomArrow.defaultProps = {
  onClick: () => { }
};
export default CustomArrow;

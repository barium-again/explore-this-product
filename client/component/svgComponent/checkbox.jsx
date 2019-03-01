import React from 'react';
import styles from './svgstyles.css';

const Checkbox = props => {
  const { checkBox, checkedBox } = props;

  const color = {
    fill: 'rgb(255, 255, 255)'
  };

  if (checkedBox === true) {
    color.fill = 'rgb(0,0,0)';
  }

  return (
    <div onClick={checkBox}>
      <svg
        viewBox={'0 0 32 32'}
        className={styles.checkBox}
        style={{ fill: color.fill }}
      >
        <path d={'M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z'} />
      </svg>
    </div>
  );
};

export default Checkbox;

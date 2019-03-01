import React from 'react';
import styles from './svgstyles.css';

const CloseModalSVG = props => {
  return (
    <svg viewBox={'0 0 17 17'} className={styles.mx}>
      <path d={'M17 7.5H9.5V0h-2v7.5H0v2h7.5V17h2V9.5H17'} />
    </svg>
  );
};

export default CloseModalSVG;

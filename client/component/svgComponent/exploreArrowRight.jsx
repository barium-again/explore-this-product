import React from 'react';
import styles from './svgstyles.css';

const RightArrow = props => {
  let color = {
    fill: 'rgb(0, 0, 0)'
  };

  if (props.currentIndex === props.numberOfSlide - 1) {
    color.fill = 'rgb(238, 238, 238)';
  }

  return (
    <button
      onClick={props.rightSlide}
      className={props.compCarouselStyles.arrButton}
      role="button"
      data-slide="prev"
    >
      <svg viewBox={'0 0 16 32'} className={styles.arrows} style={color}>
        <path
          d={
            'M13.8 15.952L.3 30.28c-.1.1-.3.398-.3.697 0 .497.4.995.9.995.3 0 .5-.2.6-.3L15.6 16.75c.2-.298.4-.497.4-.796 0-.298-.1-.398-.2-.497l-.1-.1L1.5.33C1.4.23 1.2.032.9.032c-.5 0-.9.497-.9.995 0 .298.2.497.3.696l13.5 14.23z'
          }
        />
      </svg>
    </button>
  );
};

export default RightArrow;

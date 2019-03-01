import React from 'react';
import styles from './innerCarousel.styles.css';

const InnerCarousel = props => {
  const { productNames, productImg, prodDesc, prodPrice } = props.list;
  return (
    <div
      style={{
        transform: `translateX(${props.translateValue}px)`,
        transition: 'transform 300ms ease 0s'
      }}
      className={styles.productItemBox}
    >
      <img className={styles.productImg} src={productImg} />
      <div className={styles.productNames}>{productNames}</div>
      <div className={styles.prodDesc}>{prodDesc}</div>
      <div className={styles.prodPrice}>{`$${prodPrice}.00`}</div>
    </div>
  );
};

export default InnerCarousel;

import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './PopularProductCard.module.css';
import Like from '../UI/Like/Like';
import placeholder from '../../assets/img/placeholder.png';

function PopularProductCard({ img, productName, productPrice }) {
  const [isLike, setIsLike] = useState(false);
  const handleClick = () => {
    setIsLike(!isLike);
  };
  return (
    <div className={styles.productCard}>
      <img
        className={styles.img}
        src={img}
        alt={`Фото ${productName}`}
        onError={(e) => {
          e.currentTarget.src = placeholder;
        }}
      />
      <span className={styles.productName}>{productName}</span>
      <span className={styles.productPrice}>{productPrice}</span>
      <div className={styles.like}>
        <Like onClick={handleClick} active={isLike} ariaLabel="like" />
      </div>
    </div>
  );
}

PopularProductCard.propTypes = {
  img: PropTypes.string,
  productName: PropTypes.string,
  productPrice: PropTypes.string,
};

export default PopularProductCard;

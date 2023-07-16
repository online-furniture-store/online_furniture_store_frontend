import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LargeCard.module.css';
import placeholder from '../../assets/img/placeholder.png';
import Like from '../UI/Like/Like';
import BlackButton from '../UI/BlackButton/BlackButton';

function LargeCard({
  image,
  brand,
  pictures,
  article,
  discount,
  totalPrice,
  price,
  name,
  availableQuantity,
}) {
  const navigate = useNavigate();
  const [largeCard, setLargeCard] = useState();
  const [isLike, setIsLike] = useState(false);
  const handleClick = () => {
    setIsLike(!isLike);
  };
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img
          className={styles.image}
          src={largeCard ? largeCard.photo : image}
          alt={`Фото ${brand}`}
          onError={(e) => {
            e.currentTarget.src = placeholder;
          }}
        />
      </div>
      <div className={styles.imgContainer}>
        {
          pictures.map((item) => {
            return (
              <button
                className={styles.imgBtn}
                type="button"
                key={item.id}
                onClick={() => {
                  setLargeCard(item);
                }}
              >
                <img
                  className={styles.image}
                  src={item.photo}
                  alt={`Фото ${brand}`}
                  onError={(e) => {
                    e.currentTarget.src = placeholder;
                  }}
                />
              </button>
            );
          })
        }
      </div>
      <div className={styles.info}>
        <div className={styles.likeContainer}> <Like onClick={handleClick} active={!isLike} ariaLabel="like" /></div>
        <span className={styles.name}>{name}</span>
        <span className={styles.brand}>{brand}</span>
        <span className={styles.article}>{`арт. ${article}`}</span>
        <div className={styles.priceContainer}>
          <span className={discount ? `${styles.totalPrice} ${styles.totalPricediscounted}` : styles.totalPrice}>{`${totalPrice} ₽`}</span>
          {
            discount !== 0 &&
            (
              <>
                <span className={styles.price}>{`${price} ₽`}</span>
                <span className={styles.discount}>{`-${discount}%`}</span>
              </>
            )
          }
        </div>
        <div className={styles.radioButtons}>
          <input
            className={styles.radioButton}
            type="radio"
            name="radio-group"
            id="black-button"
            checked="checked"
          />
          <label className={styles.label} htmlFor="black-button">
            <div className={styles.blackButton} />
          </label>
          <input
            className={styles.radioButton}
            type="radio"
            id="yellow-button"
            name="radio-group"
          />
          <label className={styles.label} htmlFor="yellow-button">
            <div className={styles.yellowButton} />
          </label>
        </div>
        {
          availableQuantity ?
            (
              <BlackButton
                type="button"
                buttonText="В корзину"
                onClick={() => navigate('/cart')}
              />
            ) :
            (
              <BlackButton
                type="submit"
                buttonText="Узнать о поступлении"
                onClick={() => {
                }}
              />
            )
        }
        {
          availableQuantity ?
            (
              <span className={styles.inStock}>{`в наличии ${availableQuantity} шт`}</span>
            ) :
            (
              <span className={styles.notAvailable}>Товара нет в наличии</span>
            )
        }
        <span className={styles.text}>Стоимость доставки и сборки</span>
      </div>
    </div>
  );
}

LargeCard.propTypes = {
  image: PropTypes.string,
  brand: PropTypes.string,
  pictures: PropTypes.string,
  article: PropTypes.number,
  discount: PropTypes.number,
  totalPrice: PropTypes.number,
  price: PropTypes.number,
  name: PropTypes.string,
  availableQuantity: PropTypes.number,
};

export default LargeCard;

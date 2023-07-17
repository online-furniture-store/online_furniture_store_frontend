import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './LargeCard.module.css';
import placeholder from '../../assets/img/placeholder.png';
import Like from '../UI/Like/Like';
import BlackButton from '../UI/BlackButton/BlackButton';

const pictures = [
  {
    id: 1,
    photo: 'https://ofs.proninteam.ru/media/6_M7pxMkD.png',
  },
  {
    photo: 'https://ofs.proninteam.ru/media/3_TPFA1pO.png',
    id: 2,
  },
  {
    photo: 'https://ofs.proninteam.ru/media/6_M7pxMkD.png',
    id: 3,
  },
  {
    photo: 'https://ofs.proninteam.ru/media/3_Xo7U2CH.png',
    id: 4,
  },
];

function LargeCard() {
  const { product } = useSelector((state) => state.furniture);
  const navigate = useNavigate();
  const [largeCard, setLargeCard] = useState();
  const [isLike, setIsLike] = useState(product.is_favorited);
  const handleClick = () => {
    setIsLike(!isLike);
  };
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img
          className={styles.image}
          src={largeCard ? largeCard.photo : product.image}
          alt={`Фото ${product.brand}`}
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
                  alt={`Фото ${product.brand}`}
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
        <span className={styles.name}>{product.name}</span>
        <span className={styles.brand}>{product.brand}</span>
        <span className={styles.article}>{`арт. ${product.article}`}</span>
        <div className={styles.priceContainer}>
          <span className={product.discount ? `${styles.totalPrice} ${styles.totalPricediscounted}` : styles.totalPrice}>{`${product.total_price} ₽`}</span>
          {
            product.discount !== 0 &&
            (
              <>
                <span className={styles.price}>{`${product.price} ₽`}</span>
                <span className={styles.discount}>{`-${product.discount}%`}</span>
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
          // checked="checked"
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
          product.available_quantity ?
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
                onClick={() => navigate('/sale')}
              />
            )
        }
        {
          product.available_quantity ?
            (
              <span className={styles.inStock}>{`в наличии ${product.available_quantity} шт`}</span>
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

export default LargeCard;

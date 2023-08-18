import PropTypes from 'prop-types';
import styles from './OrderElementCart.module.css';

function OrderElementCart({
  id,
  title,
  article,
  price,
  count,
  img,
}) {
  return (
    <div>
      <article className={styles.card}>
        <div className={styles.cardContent}>
          <img
            className={styles.image}
            src={img}
            alt={title}
            id={id}
          />
          <div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.captions}>
              арт.&nbsp;
              {article}
            </p>
            <div className={styles.counter}>
              <p className={styles.price}>
                {price}
                &nbsp;&#8381;
              </p>
            </div>
          </div>
        </div>
        <div className={styles.count}>{count} шт.</div>
      </article>
    </div>
  );
}

OrderElementCart.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  article: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

export default OrderElementCart;

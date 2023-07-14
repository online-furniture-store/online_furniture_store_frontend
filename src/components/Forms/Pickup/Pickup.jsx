import PropTypes from 'prop-types';
import styles from './Pickup.module.css';
import map from '../../../assets/img/map.svg';

function Pickup({ date, address }) {
  return (
    <section className={styles.pickup}>
      <p className={styles.header}>Пункт самовывоза</p>
      <div className={styles.adress}>
        <img src={map} alt="icon" />
        <p className={styles.adressText}>{address}</p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.info}>
          <p className={styles.middleText}>Время работы</p>
          <p className={styles.smallText}>пн-вс 09:00-21:00</p>
        </div>
        <div>
          <p className={styles.middleText}>Дата выдачи</p>
          <p className={styles.smallText}>{date}</p>
        </div>
      </div>
    </section>
  );
}
Pickup.propTypes = {
  date: PropTypes.string,
  address: PropTypes.string,
};

export default Pickup;

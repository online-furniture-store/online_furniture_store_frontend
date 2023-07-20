import PropTypes from 'prop-types';
import styles from './Characteristic.module.css';

function Characteristic({ property, value }) {
  return (
    <div className={styles.characteristic}>
      <span className={styles.property}>{property}</span>
      <div className={styles.line} />
      <span className={styles.value}>{value}</span>
    </div>
  );
}

Characteristic.propTypes = {
  property: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Characteristic;

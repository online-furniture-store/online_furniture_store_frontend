import PropTypes from 'prop-types';
import styles from './AddressNumber.module.css';

function AddressNumber({ onChange, place, value }) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        id="address"
        type="search"
        value={value || ''}
        onChange={onChange}
        placeholder=""
      />
      <label className={styles.naming} htmlFor="address">
        {place}
      </label>
    </div>
  );
}
AddressNumber.propTypes = {
  onChange: PropTypes.func.isRequired,
  place: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default AddressNumber;

import PropTypes from 'prop-types';
import styles from './Address.module.css';

function Address({ onChange, value, isValid }) {
	return (
		<div className={styles.container}>
			<label className={styles.naming} htmlFor="address-id">
				Населенный пункт, улица, дом
			</label>
			<input
				className={
					isValid
						? `${styles.input} ${styles.input__default}`
						: `${styles.input} ${styles.input__error}`
				}
				id="adress"
				type="text"
				value={value || ''}
				onChange={onChange}
				placeholder=""
			/>
			{/* <span className={styles.error}>{errorText}</span> */}
		</div>
	);
}

Address.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string,
	isValid: PropTypes.bool,
	// errorText: PropTypes.string,
};

export default Address;

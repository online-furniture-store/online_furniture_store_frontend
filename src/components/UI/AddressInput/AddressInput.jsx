import PropTypes from 'prop-types';
import styles from './Address.module.css';

function Address({ onChange, value, isValid }) {
	return (
		<div className={styles.container}>
			<input
				className={
					isValid
						? `${styles.input} ${styles.input__default}`
						: `${styles.input} ${styles.input__error}`
				}
				id="address"
				type="search"
				value={value || ''}
				onChange={onChange}
				placeholder=""
				required
			/>
			<label className={styles.naming} htmlFor="address">
				Населенный пункт, улица, дом
			</label>
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

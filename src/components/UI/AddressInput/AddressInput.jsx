import PropTypes from 'prop-types';
import styles from './Address.module.css';

function Address({ onChange, value, error, label }) {
	return (
		<div className={styles.container}>
			<input
				className={
					!error
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
				{label}
			</label>
			{/* <span className={styles.error}>{errorText}</span> */}
		</div>
	);
}

Address.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string,
	error: PropTypes.bool,
	label: PropTypes.string,
	// errorText: PropTypes.string,
};

export default Address;

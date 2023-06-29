import PropTypes from 'prop-types';
import styles from './NameInput.module.css';

function NameInput({ onChange, value, isValid, label }) {
	return (
		<div className={styles.container}>
			<label className={styles.naming} htmlFor="name-id">
				{label}
			</label>
			<input
				className={
					isValid
						? `${styles.input} ${styles.input__default}`
						: `${styles.input} ${styles.input__error}`
				}
				id="firstName"
				type="search"
				value={value || ''}
				onChange={onChange}
				placeholder=""
			/>
		</div>
	);
}

NameInput.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string,
	label: PropTypes.string,
	isValid: PropTypes.bool,
};

export default NameInput;

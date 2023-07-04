import PropTypes from 'prop-types';
import styles from './NameInput.module.css';

function NameInput({ onChange, value, isValid, label }) {
	return (
		<div className={styles.container}>
			<input
				className={
					isValid
						? `${styles.input} ${styles.input__default}`
						: `${styles.input} ${styles.input__error}`
				}
				id="name-id"
				type="search"
				value={value || ''}
				onChange={onChange}
				placeholder=""
				required
			/>
			<label className={styles.naming} htmlFor="name-id">
				{label}
			</label>
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

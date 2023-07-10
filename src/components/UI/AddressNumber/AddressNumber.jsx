import PropTypes from 'prop-types';
import styles from './AddressNumber.module.css';

function AddressNumber({
	inputId,
	onChange,
	onBlur,
	value,
	label,
	helperText,
	error,
}) {
	return (
		<div className={styles.container}>
			{error && <span className={styles.errorText}>{helperText}</span>}
			<input
				className={
					error
						? `${styles.input} ${styles.input__error}`
						: `${styles.input} ${styles.input__default}`
				}
				id={inputId}
				value={value}
				onChange={onChange}
				placeholder=""
				required
				onBlur={onBlur}
			/>
			<label className={styles.naming} htmlFor={inputId}>
				{label}
			</label>
		</div>
	);
}
AddressNumber.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.string,
	label: PropTypes.string,
	inputId: PropTypes.string,
	onBlur: PropTypes.func,
	helperText: PropTypes.string,
	error: PropTypes.bool,
};
export default AddressNumber;

import PropTypes from 'prop-types';
import styles from './NameInput.module.css';

function NameInput({
	inputId,
	onChange,
	onBlur,
	value,
	type,
	label,
	helperText,
	error,
	onClick,
	required,
	placeholder,
}) {
	return (
		<div className={styles.container}>
			<label className={required ? styles.naming : styles.naming__nonRequired} htmlFor={inputId}>
				{label}
			</label>
			<input
				className={
					error
						? `${styles.input} ${styles.input__error}`
						: `${styles.input} ${styles.input__default}`
				}
				id={inputId}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				type={type}
				required={required}
				onBlur={onBlur}
			/>

			{error && <span className={styles.errorText}>{helperText}</span>}
			{value && (
				<div type="button" onClick={onClick} className={styles.crossBtn} />
			)}
		</div>
	);
}

NameInput.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.string,
	type: PropTypes.string,
	label: PropTypes.string,
	inputId: PropTypes.string,
	onBlur: PropTypes.func,
	helperText: PropTypes.string,
	error: PropTypes.bool,
	onClick: PropTypes.func,
	required: PropTypes.bool,
	placeholder: PropTypes.string,
};

export default NameInput;

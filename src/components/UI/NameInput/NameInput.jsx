import PropTypes from 'prop-types';
import styles from './NameInput.module.css';

function NameInput({
	inputId,
	onChange,
	onBlur,
	value,
	label,
	helperText,
	error,
	onClick,
}) {
	return (
		<div className={styles.container}>
			<label className={styles.naming} htmlFor={inputId}>
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
				placeholder=""
				required
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
	label: PropTypes.string,
	inputId: PropTypes.string,
	onBlur: PropTypes.func,
	helperText: PropTypes.string,
	error: PropTypes.bool,
	onClick: PropTypes.func,
};

export default NameInput;

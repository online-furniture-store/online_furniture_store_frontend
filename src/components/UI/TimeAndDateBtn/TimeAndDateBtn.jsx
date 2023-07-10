import PropTypes from 'prop-types';
import styles from './TimeAndDateBtn.module.css';

function TimeAndDateBtn({
	date,
	day,
	time,
	id,
	name,
	checked,
	onChange,
	onClick,
}) {
	return (
		<div className={styles.container}>
			<input
				id={id}
				type="radio"
				value={time || date}
				onChange={onChange}
				checked={checked}
				name={name}
				onClick={onClick}
				className={
					time
						? `${styles.radioInput} ${styles.timeInput}`
						: `${styles.radioInput} ${styles.dateInput}`
				}
			/>
			<label
				htmlFor={id}
				className={
					time
						? `${styles.radioLabel} ${styles.timeLabel}`
						: `${styles.radioLabel} ${styles.dateLabel}`
				}
			>
				<span className={time ? styles.dateTime : styles.date}>{date}</span>
				<span className={styles.day}>{time || day}</span>
			</label>
		</div>
	);
}

TimeAndDateBtn.propTypes = {
	date: PropTypes.string,
	day: PropTypes.string,
	time: PropTypes.string,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	checked: PropTypes.bool,
	onClick: PropTypes.func,
};

export default TimeAndDateBtn;

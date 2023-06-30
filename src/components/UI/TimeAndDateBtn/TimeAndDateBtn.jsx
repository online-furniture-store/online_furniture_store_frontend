import PropTypes from 'prop-types';
import styles from './TimeAndDateBtn.module.css';

function TimeAndDateBtn({ date, day, time, id }) {
	return (
		<div className={styles.container}>
			<input
				id={id}
				type="radio"
				name="radio"
				value="1"
				className={styles.radioInput}
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
};

export default TimeAndDateBtn;

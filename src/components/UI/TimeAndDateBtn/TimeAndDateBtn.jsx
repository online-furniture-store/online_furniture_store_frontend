import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './TimeAndDateBtn.module.css';

function TimeAndDateBtn({ date, day, time, id, name }) {
	const [checked, setChecked] = useState(false);

	function changeCheckbox() {
		setChecked(!checked);
	}

	return (
		<div className={styles.container}>
			<input
				id={id}
				type="radio"
				value={id}
				onChange={changeCheckbox}
				checked={checked}
				name={name}
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
	name: PropTypes.string.isRequired,
};

export default TimeAndDateBtn;

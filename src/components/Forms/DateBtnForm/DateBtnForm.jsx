import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './DateBtnForm.module.css';
import TimeAndDateBtn from '../../UI/TimeAndDateBtn/TimeAndDateBtn';

function DateBtnForm({ control }) {
	const [timeNo, setTimeNo] = useState(false);

	const handleTime = () => {
		setTimeNo(true);
	};

	const dateDay = [
		{ idButton: '456', id: '2', date: '24 июл.', day: 'ПН', name: 'two' },
	];

	const dateTime = [
		{ idButton: '235', id: '5', time: '18:00 – 20:00', name: 'three' },
		{ idButton: '236', id: '6', time: '20:00 – 22:00', name: 'three' },
	];

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Дата и время доставки</h2>
			<ul className={styles.date}>
				{dateDay.map(({ date, id, day, idButton, name }) => (
					<li key={idButton}>
						<Controller
							name="date"
							control={control}
							render={({ field: { onChange, checked } }) => (
								<TimeAndDateBtn
									date={date}
									day={day}
									id={id}
									name={name}
									onChange={onChange}
									checked={checked}
									onClick={handleTime}
								/>
							)}
						/>
					</li>
				))}
			</ul>
			<ul
				className={`${styles.time__noActive} ${
					timeNo && `${styles.time__active}`
				}`}
			>
				{dateTime.map(({ id, time, idButton, name }) => (
					<li key={idButton}>
						<Controller
							name="time"
							control={control}
							render={({ field: { onChange, checked } }) => (
								<TimeAndDateBtn
									time={time}
									id={id}
									name={name}
									onChange={onChange}
									checked={checked}
									onClick={handleTime}
								/>
							)}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}

DateBtnForm.propTypes = {
	control: PropTypes.oneOfType([PropTypes.object]),
};

export default DateBtnForm;

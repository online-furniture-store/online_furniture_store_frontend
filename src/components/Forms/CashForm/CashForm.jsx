import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import styles from './CashForms.module.css';
import RadioCircleButton from '../../UI/RadioCircleButton/RadioCircleButton';

function CashForms({ control }) {
	const payCan = [
		{
			id: '1',
			text: 'Оплата картой онлайн',
			name: 'one',
			value: 'six',
		},
		{
			id: '2',
			text: 'Наличными или картой при получении',
			name: 'one',
			value: 'seven',
		},
		{
			id: '3',
			text: 'Безналичный расчёт для юрлиц',
			name: 'one',
			value: 'nine',
		},
	];

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Способы оплаты</h2>
			<ul className={styles.pay}>
				{payCan.map(({ text, name, id }) => (
					<li key={id}>
						<Controller
							name="pay"
							control={control}
							render={({ field: { onChange, checked } }) => (
								<RadioCircleButton
									name={name}
									text={text}
									onChange={onChange}
									value={text}
									checked={checked}
								/>
							)}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}

CashForms.propTypes = {
	control: PropTypes.oneOfType([PropTypes.object]),
};

export default CashForms;

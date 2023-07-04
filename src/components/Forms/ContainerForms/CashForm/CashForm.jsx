import styles from './CashForms.module.css';
import RadioCircleButton from '../../../UI/RadioCircleButton/RadioCircleButton';
import ContainerForms from '../ContainerForms';

function CashForms() {
	const payCan = [
		{
			id: '1',
			text: 'Оплата картой онлайн',
			name: 'one',
		},
		{
			id: '2',
			text: 'Наличными или картой при получении',
			name: 'one',
		},
		{
			id: '3',
			text: 'Безналичный расчёт для юрлиц',
			name: 'one',
		},
	];

	return (
		<ContainerForms>
			<h2 className={styles.title}>Способы оплаты</h2>
			<ul className={styles.pay}>
				{payCan.map(({ text, name, id }) => (
					<li key={id}>
						<RadioCircleButton name={name} text={text} />
					</li>
				))}
			</ul>
		</ContainerForms>
	);
}

export default CashForms;

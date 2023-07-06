import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './OrderingForm.module.css';
import RecipientForm from '../RecipientForm/RecipientForm';
import DateBtnForm from '../ContainerForms/DateBtnForm/DateBtnForm';
import CashForms from '../ContainerForms/CashForm/CashForm';
import Courier from '../Courier/Courier';
import ContainerForms from '../ContainerForms/ContainerForms';
import Pickup from '../Pickup/Pickup';
import TotalPrice from '../../TotalPrice/TotalPrice';
import RadioCircleButton from '../../UI/RadioCircleButton/RadioCircleButton';

function OrderingForm() {
	const { cart } = useSelector((state) => state.cart);

	const navigate = useNavigate();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	const posibility = [
		{
			id: '1',
			text: 'Самовывоз',
			name: 'ten',
		},
		{
			id: '2',
			text: 'Курьер',
			name: 'ten',
		},
	];

	return (
		<section className={styles.container}>
			<h2 className={styles.title}>Оформление заказа</h2>

			<div className={styles.wrapper}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
					<ContainerForms>
						<ul className={styles.pay}>
							{posibility.map(({ text, name, id }) => (
								<li key={id}>
									<RadioCircleButton name={name} text={text} />
								</li>
							))}
						</ul>
						<Pickup
							date="Москва, Преображенская площадь, 4"
							address="13 июня 2023 (чт)"
						/>
						<Courier />
					</ContainerForms>

					<RecipientForm />

					<DateBtnForm />
					<CashForms />
				</div>
				<TotalPrice
					discount={cart.total_price - cart.total_discount_price}
					count={cart.total_quantity || 0}
					weight={cart.total_weight}
					totalPrice={cart.total_discount_price}
					days={7}
					lastPrice={cart.total_price}
					buttonText="Перейти&nbsp;к&nbsp;оплате"
					onClick={() => {
						navigate('/order-form');
					}}
				/>
			</div>
		</section>
	);
}

export default OrderingForm;

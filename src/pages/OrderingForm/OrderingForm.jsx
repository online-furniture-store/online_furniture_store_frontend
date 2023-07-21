import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './OrderingForm.module.css';
import CashForms from '../../components/Forms/CashForm/CashForm';
import ContainerForms from '../../components/Forms/ContainerForms/ContainerForms';
import TotalPrice from '../../components/TotalPrice/TotalPrice';
import WayToReceive from '../../components/Sections/WayToReceive/WayToReceive';
import { makeOrder } from '../../store/orders/orders-slice';
import { openModal } from '../../store/modal/modal-slice';

function OrderingForm() {
	const { cart } = useSelector((state) => state.cart);
	const { isAuth } = useSelector((state) => state.auth);
	const { user } = useSelector((state) => state.registration);
	const stat = useSelector((state) => state);
	console.log(stat);
	const dispath = useDispatch();
	const navigate = useNavigate();
	const {
		control,
		handleSubmit,
		resetField,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			first_name: user.first_name || '',
			last_name: user.last_name || '',
			telephone: '',
			email: user.email || '',
			address: '',
		},
	});

	const onSubmit = (data) => {
		if (isAuth) {
			dispath(
				makeOrder({
					user,
					products: cart.products.map((el) => ({ product: el.product.id, quantity: el.quantity })),
					delivery: {
						address: data.address
							? `${data.address}  ${data.apartament || ''} 
							${data.entrance || ''} 
							${data.floor || ''}`
							: 'null',
						type_delivery: 3,
						comment: data.comment,
						datetime_from: '2023-07-25T07:18:33.916Z',
						datetime_to: '2023-07-25T07:18:33.916Z',
						elevator: data.lift || false,
					},
					paid: true,
				}),
			);
			navigate('/payment');
		} else {
			dispath(openModal('authModal'));
		}
	};

	return (
		<section className={styles.container}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2 className={styles.title}>Оформление заказа</h2>
				<div className={styles.wrapper}>
					<div className={styles.about}>
						<WayToReceive
							control={control}
							errors={errors}
							resetField={resetField}
						/>
						<ContainerForms>
							<CashForms control={control} />
						</ContainerForms>
					</div>
					<TotalPrice
						discount={cart.total_price - cart.total_discount_price}
						count={cart.total_quantity || 0}
						weight={cart.total_weight}
						totalPrice={cart.total_discount_price}
						days={7}
						lastPrice={cart.total_price}
						buttonText="Перейти&nbsp;к&nbsp;оплате"
					/>
				</div>
			</form>
		</section>
	);
}

export default OrderingForm;

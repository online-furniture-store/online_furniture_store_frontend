import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styles from './OrderingForm.module.css';
import CashForms from '../../components/Forms/CashForm/CashForm';
import ContainerForms from '../../components/Forms/ContainerForms/ContainerForms';
import TotalPrice from '../../components/TotalPrice/TotalPrice';
import WayToReceive from '../../components/Sections/WayToReceive/WayToReceive';
import { makeOrder } from '../../store/orders/orders-slice';

function OrderingForm() {
	const { cart } = useSelector((state) => state.cart);
	const { isAuth } = useSelector((state) => state.auth);
	const dispath = useDispatch();
	const {
		control,
		handleSubmit,
		resetField,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			firstName: '',
			surname: '',
			telephone: '',
			email: '',
			address: '',
		},
	});

	const onSubmit = () => {
		// eslint-disable-next-line no-unused-expressions, max-len
		isAuth && dispath(makeOrder({ products: cart.products, user: {}, paid: true, delivery: {} }));
		// reset();
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

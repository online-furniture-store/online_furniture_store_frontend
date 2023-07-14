import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import styles from './OrderingForm.module.css';
import CashForms from '../../components/Forms/CashForm/CashForm';
import ContainerForms from '../../components/Forms/ContainerForms/ContainerForms';
import TotalPrice from '../../components/TotalPrice/TotalPrice';
import WayToReceive from '../../components/Sections/WayToReceive/WayToReceive';

function OrderingForm() {
	const { cart } = useSelector((state) => state.cart);
	const {
		control,
		handleSubmit,
		reset,
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
		// console.log({ ...data, cart });
		reset();
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

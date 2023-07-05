import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './Courier.module.css';
import AddressNumber from '../../UI/AddressNumber/AddressNumber';
import TextField from '../../UI/TextField/TextField';
import Checkbox from '../../UI/Checkbox/Checkbox';
// import NameInput from '../../UI/NameInput/NameInput';
import Address from '../../UI/AddressInput/AddressInput';

function Courier() {
	const [apartament, setApartament] = useState('');
	const handleApartamentInput = (e) => {
		setApartament(e.target.value);
	};

	const [entrance, setEntrance] = useState('');
	const handleEntranceInput = (e) => {
		setEntrance(e.target.value);
	};

	const [floor, setFloor] = useState('');
	const handleFloorInput = (e) => {
		setFloor(e.target.value);
	};

	const [comment, setComment] = useState('');
	const handleCommentInput = (e) => {
		setComment(e.target.value);
	};

	const [checked, setChecked] = useState(false);

	const changeCheckbox = () => {
		setChecked(!checked);
	};
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			address: '',
		},
	});

	const onSubmit = () => {
		reset();
	};

	return (
		<section className={styles.address}>
			<p className={styles.text}>Адрес доставки</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="address"
					control={control}
					rules={{
						required: 'Поле обязательное',
						minLength: {
							value: 5,
							message: 'Длинна должна быть больше 6 символов',
						},
						pattern: {
							value:
								/[0-9]{6},\s[а-яА-ЯёЁa-zA-Z-,.\s\d]+,\s[а-яА-ЯёЁa-zA-Z-,.\s\d]+,\s[а-яА-ЯёЁa-zA-Z-,.\s\d]+(,\s[а-яА-ЯёЁa-zA-Z-,.\s\d])?/gi,
							message: 'Неверный git адрес',
						},
					}}
					render={({ field: { onBlur, onChange, value } }) => (
						<Address
							onBlur={onBlur}
							onChange={onChange}
							value={value}
							inputId="address"
							label="Населенный пункт, улица, дом"
							helperText={errors.address?.message?.toString()}
							error={!!errors.address?.message}
						/>
					)}
				/>
				<div className={styles.addressNumbers}>
					<AddressNumber
						onChange={handleApartamentInput}
						value={apartament}
						place="Квартира"
					/>
					<AddressNumber
						onChange={handleEntranceInput}
						value={entrance}
						place="Подъезд"
					/>
					<AddressNumber
						onChange={handleFloorInput}
						value={floor}
						place="Этаж"
					/>
				</div>
				<div className={styles.comment}>
					<TextField
						onChange={handleCommentInput}
						value={comment}
						label="Комментарий к доставке"
					/>
				</div>
			</form>
			<Checkbox
				onChange={changeCheckbox}
				label="Наличие лифта"
				checked={checked}
			/>
		</section>
	);
}
export default Courier;

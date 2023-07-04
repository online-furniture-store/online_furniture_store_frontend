import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './Courier.module.css';
import Address from '../../UI/AddressInput/AddressInput';
import AddressNumber from '../../UI/AddressNumber/AddressNumber';
import TextField from '../../UI/TextField/TextField';
import Checkbox from '../../UI/Checkbox/Checkbox';

function Courier() {
	const {
		control,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			firstName: '',
			surname: '',
			telephone: '',
			email: '',
		},
	});
	const [address, setAddress] = useState('');
	const handleAdressInput = (e) => {
		setAddress(e.target.value);
	};

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
	return (
		<section className={styles.address}>
			<p className={styles.text}>Адрес доставки</p>
			<Controller
				name="address"
				control={control}
				rules={{
            required: 'Это обязательное поле',
            minLength: {
              value: 2,
              message: 'Длинна должна быть больше 1 символа',
						},
					pattern: {
						value:
							/[0-9]{6},\s[а-яА-ЯёЁa-zA-Z-,.\s\d]+,\s[а-яА-ЯёЁa-zA-Z-,.\s\d]+,\s[а-яА-ЯёЁa-zA-Z-,.\s\d]+(,\s[а-яА-ЯёЁa-zA-Z-,.\s\d])?/gi,
						message: 'Неверный адрес',
					},
				}}
				render={({ field: { onBlur } }) => (
					<Address
						isValid={address?.isDisabled}
						label="Адрес регистрации"
						placeholder="188800, г. Выборг, ул. Куйбышева, д 1, к 2"
						size="large"
						maskName="normal"
						onChange={handleAdressInput}
						value={address}
						onBlur={onBlur}
						error={!!errors.address?.message}
						helperText={errors.address?.message?.toString()}
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
				<AddressNumber onChange={handleFloorInput} value={floor} place="Этаж" />
			</div>
			<div className={styles.comment}>
				<TextField
					onChange={handleCommentInput}
					value={comment}
					label="Комментарий к доставке"
				/>
			</div>
			<Checkbox
				onChange={changeCheckbox}
				label="Наличие лифта"
				checked={checked}
			/>
		</section>
	);
}
export default Courier;

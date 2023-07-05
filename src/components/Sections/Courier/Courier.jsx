import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './Courier.module.css';
import AddressNumber from '../../UI/AddressNumber/AddressNumber';
import TextField from '../../UI/TextField/TextField';
import Checkbox from '../../UI/Checkbox/Checkbox';
// import NameInput from '../../UI/NameInput/NameInput';
import Address from '../../UI/AddressInput/AddressInput';

function Courier() {
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
							value: 11,
							message: 'Длинна должна быть больше 10 символов',
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
							onClick={onSubmit}

						/>
					)}
				/>
				<div className={styles.addressNumbers}>
					<Controller
						name="apartament"
						control={control}
						render={({ field: { onBlur, onChange, value } }) => (
							<AddressNumber
								onBlur={onBlur}
								onChange={onChange}
								value={value}
								inputId="apartament"
								label="Квартира"
								helperText={errors.apartament?.message?.toString()}
								error={!!errors.apartament?.message}
							/>
						)}
					/>
					<Controller
						name="entrance"
						control={control}
						rules={{
							pattern: {
								value: /^(0|[1-9]\d*)(\.\d+)?$/,
								message:
									'Допустимы только цифры',
							},
						}}
						render={({ field: { onBlur, onChange, value } }) => (
							<AddressNumber
								onBlur={onBlur}
								onChange={onChange}
								value={value}
								inputId="entrance"
								label="Подъезд"
								helperText={errors.entrance?.message?.toString()}
								error={!!errors.entrance?.message}
							/>
						)}
					/>
					<Controller
						name="floor"
						control={control}
						rules={{
							pattern: {
								value: /^(0|[1-9]\d*)(\.\d+)?$/,
								message:
									'Допустимы только цифры',
							},
						}}
						render={({ field: { onBlur, onChange, value } }) => (
							<AddressNumber
								onBlur={onBlur}
								onChange={onChange}
								value={value}
								inputId="floor"
								label="Этаж"
								helperText={errors.floor?.message?.toString()}
								error={!!errors.floor?.message}
							/>
						)}
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

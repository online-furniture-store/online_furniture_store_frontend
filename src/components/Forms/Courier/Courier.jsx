import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import Address from '../../UI/AddressInput/AddressInput';
import AddressNumber from '../../UI/AddressNumber/AddressNumber';
import Checkbox from '../../UI/Checkbox/Checkbox';
import TextField from '../../UI/TextField/TextField';
import styles from './Courier.module.css';

function Courier({ control, errors, resetField }) {
	return (
		<section className={styles.address}>
			<p className={styles.text}>Адрес доставки</p>
			<div>
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
							onClick={() => resetField('address')}
						/>
					)}
				/>
				<div className={styles.addressNumbers}>
					<Controller
						name="apartament"
						control={control}
						rules={{
							pattern: {
								value: /^(0|[1-9]\d*)(\.\d+)?$/,
								message: 'Допустимы только цифры',
							},
						}}
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
								message: 'Допустимы только цифры',
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
								message: 'Допустимы только цифры',
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
				</div>
				<div className={styles.comment}>
					<Controller
						name="comment"
						control={control}
						render={({ field: { onBlur, onChange, value } }) => (
							<TextField
								onBlur={onBlur}
								onChange={onChange}
								value={value}
								label="Комментарий к доставке"
							/>
						)}
					/>
				</div>
			</div>
			<Controller
				name="lift"
				control={control}
				render={({ field: { onChange, checked } }) => (
					<Checkbox
						onChange={onChange}
						label="Наличие лифта"
						checked={checked}
					/>
				)}
			/>
		</section>
	);
}

Courier.propTypes = {
	control: PropTypes.oneOfType([PropTypes.object]),
	errors: PropTypes.oneOfType([PropTypes.object]),
	resetField: PropTypes.func,
};
export default Courier;

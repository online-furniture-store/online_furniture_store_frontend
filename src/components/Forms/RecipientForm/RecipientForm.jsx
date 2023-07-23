import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import NameInput from '../../UI/NameInput/NameInput';
import styles from './RecipientForm.module.css';

function RecipientForm({ control, errors, resetField }) {
	return (
		<div className={styles.formContainer}>
			<span>Получатель</span>
			<div className={styles.form}>
				<Controller
					control={control}
					rules={{
						required: 'Поле обязательное',
						minLength: {
							value: 2,
							message: 'Длина должна быть больше 1 символа',
						},
						pattern: {
							value: /^(?=.{1,29}$)[а-яА-ЯёЁa-zA-Z\s-]*$/gi,
							message:
								'Допустимы символы: пробел, кириллические, латинские, тире',
						},
					}}
					render={({ field: { onChange, onBlur, value, type = 'text' } }) => (
						<NameInput
							required
							onBlur={onBlur}
							onChange={onChange}
							value={value}
							type={type}
							inputId="first_name"
							label="Имя"
							helperText={errors.first_name?.message?.toString()}
							error={!!errors.first_name?.message}
							onClick={() => resetField('first_name')}
						/>
					)}
					name="first_name"
				/>
				<Controller
					control={control}
					rules={{
						required: 'Поле обязательное',
						minLength: {
							value: 2,
							message: 'Длина должна быть больше 1 символа',
						},
						pattern: {
							value: /^(?=.{1,29}$)[а-яА-ЯёЁa-zA-Z\s-]*$/gi,
							message:
								'Допустимы символы: пробел, кириллические, латинские, тире',
						},
					}}
					render={({ field: { onChange, onBlur, value, type = 'text' } }) => (
						<NameInput
							required
							onBlur={onBlur}
							onChange={onChange}
							value={value}
							type={type}
							inputId="last_name"
							label="Фамилия"
							helperText={errors.last_name?.message?.toString()}
							error={!!errors.last_name?.message}
							onClick={() => resetField('last_name')}
						/>
					)}
					name="last_name"
				/>
				<Controller
					control={control}
					rules={{
						required: 'Поле обязательное',
						minLength: {
							value: 10,
							message: 'Номер слишком короткий',
						},
						pattern: {
							value: /\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/g,
							message: 'Неверный формат телефона',
						},
					}}
					render={({ field: { onChange, onBlur, value, type = 'text' } }) => (
						<NameInput
							required
							onBlur={onBlur}
							onChange={onChange}
							value={value}
							inputId="telephone"
							type={type}
							label="Телефон"
							helperText={errors.telephone?.message?.toString()}
							error={!!errors.telephone?.message}
							onClick={() => resetField('telephone')}
						/>
					)}
					name="telephone"
				/>
				<Controller
					control={control}
					rules={{
						required: 'Поле обязательное',
						pattern: {
							value: /\S+@\S+\.\S+/gi,
							message: 'Неверный формат email',
						},
					}}
					render={({ field: { onChange, onBlur, value, type = 'email' } }) => (
						<NameInput
							required
							onBlur={onBlur}
							onChange={onChange}
							value={value}
							type={type}
							inputId="orderPageEmail"
							label="Электронная почта"
							helperText={errors.email?.message?.toString()}
							error={!!errors.email?.message}
							onClick={() => resetField('email')}
						/>
					)}
					name="email"
				/>
			</div>
		</div>
	);
}

RecipientForm.propTypes = {
	control: PropTypes.oneOfType([PropTypes.object]),
	errors: PropTypes.oneOfType([PropTypes.object]),
	resetField: PropTypes.func,
};

export default RecipientForm;

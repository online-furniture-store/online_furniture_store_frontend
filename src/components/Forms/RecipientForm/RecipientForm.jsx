<<<<<<< HEAD
import { Controller, useForm } from 'react-hook-form';
=======
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import styles from './RecipientForm.module.css';
>>>>>>> 0631155fe00ffdc0d3ef1b56b226e8c435762367
import NameInput from '../../UI/NameInput/NameInput';
import ContainerForms from '../ContainerForms/ContainerForms';
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
					render={({ field: { onChange, onBlur, value } }) => (
						<NameInput
							onBlur={onBlur}
							onChange={onChange}
							value={value}
							inputId="firstName"
							label="Имя"
							helperText={errors.firstName?.message?.toString()}
							error={!!errors.firstName?.message}
							onClick={() => resetField('firstName')}
						/>
					)}
					name="firstName"
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
					render={({ field: { onChange, onBlur, value } }) => (
						<NameInput
							onBlur={onBlur}
							onChange={onChange}
							value={value}
							inputId="surname"
							label="Фамилия"
							helperText={errors.surname?.message?.toString()}
							error={!!errors.surname?.message}
							onClick={() => resetField('surname')}
						/>
					)}
					name="surname"
				/>
				<Controller
					control={control}
					rules={{
						required: 'Поле обязательное',
						minLength: {
							value: 6,
							message: 'Номер слишком короткий',
						},
						pattern: {
							value: /^[+]?[0-9]+/g,
							message: 'Неверный формат телефона',
						},
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<NameInput
							onBlur={onBlur}
							onChange={onChange}
							value={value}
							inputId="telephone"
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
					render={({ field: { onChange, onBlur, value } }) => (
						<NameInput
							onBlur={onBlur}
							onChange={onChange}
							value={value}
							inputId="email"
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

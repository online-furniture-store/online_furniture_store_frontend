import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { openModal } from '../../../store/modal/modal-slice';
import styles from './Registration.module.css';
import NameInput from '../../UI/NameInput/NameInput';
import BlackButton from '../../UI/BlackButton/BlackButton';

function Registration() {
	const dispatch = useDispatch();

	const {
		control,
		handleSubmit,
		reset,
		resetField,
		getValues,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		defaultValues: {
			firstName: '',
			surname: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	const onSubmit = (data) => {
		// eslint-disable-next-line no-console
		console.log('submit', data);
		dispatch(openModal('registrationSuccessModal'));
		reset();
	};
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Авторизация</h2>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.inputs}>
					<Controller
						control={control}
						rules={{
							required: 'Поле обязательное',
							minLength: {
								value: 2,
								message: 'Длина должна быть больше 2 символов',
							},
							pattern: {
								value: /^(?=.{1,29}$)[а-яА-ЯёЁa\s-]*$/gi,
								message: 'Допустимые символы: пробел, кириллические, тире',
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
								message: 'Длина должна быть больше 2 символов',
							},
							pattern: {
								value: /^(?=.{1,29}$)[а-яА-ЯёЁ\s-]*$/gi,
								message: 'Допустимые символы: пробел, кириллические, тире',
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
					<Controller
						control={control}
						rules={{
							required: 'Поле обязательное',
							pattern: {
								value: /^(?=.*\d)\w{6,}$/m,
								message:
									'Пароль должен содержать цифры, латинские буквы верхнего и нижнего регистра, не менее 6 символов',
							},
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<NameInput
								onBlur={onBlur}
								onChange={onChange}
								value={value}
								inputId="password"
								label="Пароль"
								helperText={errors.password?.message?.toString()}
								error={!!errors.password?.message}
								onClick={() => resetField('password')}
							/>
						)}
						name="password"
					/>
					<Controller
						control={control}
						rules={{
							required: 'Поле обязательное',
							validate: (value) =>
								value === getValues('password') || 'Пароли не совпадают',
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<NameInput
								onBlur={onBlur}
								onChange={onChange}
								value={value}
								inputId="confirmPassword"
								label="Подтверждение пароля"
								helperText={errors.confirmPassword?.message?.toString()}
								error={!!errors.confirmPassword?.message}
								onClick={() => resetField('confirmPassword')}
							/>
						)}
						name="confirmPassword"
					/>
				</div>
				<BlackButton buttonText="Зарегистрироваться" type="submit" />
			</form>
			<p className={styles.caption}>
				Нажимая на кнопку, я даю{' '}
				<Link
					to="/rules-consent"
					target="_blanck"
					className={styles.captionLink}
				>
					согласие
				</Link>{' '}
				на обработку персональных данных в соответствии с{' '}
				<Link to="/rules-data" target="_blanck" className={styles.captionLink}>
					Политикой
				</Link>
				, соглашаюсь с{' '}
				<Link to="/rules-sale" target="_blanck" className={styles.captionLink}>
					Правилами
				</Link>
			</p>
				<button
					className={styles.link}
					onClick={() => dispatch(openModal('authModal'))}
					type="button"
				>
					Авторизация
				</button>
		</div>
	);
}

export default Registration;

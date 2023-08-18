import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { openModal } from '../../../store/modal/modal-slice';
import { registration } from '../../../store/user/user-slice';
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
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	const onSubmit = (data) => {
		dispatch(registration(data));
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
						render={({ field: { onChange, onBlur, value, type = 'text' } }) => (
							<NameInput
								required
								onBlur={onBlur}
								onChange={onChange}
								value={value}
								type={type}
								placeholder="Иван"
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
								message: 'Длина должна быть больше 2 символов',
							},
							pattern: {
								value: /^(?=.{1,29}$)[а-яА-ЯёЁ\s-]*$/gi,
								message: 'Допустимые символы: пробел, кириллические, тире',
							},
						}}
						render={({ field: { onChange, onBlur, value, type = 'text' } }) => (
							<NameInput
								required
								onBlur={onBlur}
								onChange={onChange}
								value={value}
								type={type}
								placeholder="Иванов"
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
							pattern: {
								value: /\S+@\S+\.\S+/gi,
								message: 'Неверный формат email',
							},
						}}
						render={({
							field: { onChange, onBlur, value, type = 'email' },
						}) => (
							<NameInput
								required
								onBlur={onBlur}
								onChange={onChange}
								value={value}
								type={type}
								placeholder="username@address.ru"
								inputId="regEmail"
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
						render={({
							field: { onChange, onBlur, value, type = 'password' },
						}) => (
							<NameInput
								required
								onBlur={onBlur}
								onChange={onChange}
								value={value}
								type={type}
								placeholder="Введите пароль"
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
						render={({
							field: { onChange, onBlur, value, type = 'password' },
						}) => (
							<NameInput
								required
								onBlur={onBlur}
								onChange={onChange}
								value={value}
								type={type}
								placeholder="Повторите пароль"
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

/* eslint-disable camelcase */
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ProfileForm.module.css';
import ContainerForms from '../../components/Forms/ContainerForms/ContainerForms';
import Checkbox from '../../components/UI/Checkbox/Checkbox';
import NameInput from '../../components/UI/NameInput/NameInput';
import SaveButton from '../../components/UI/SaveButton/SaveButton';
import { patchUser, changePassword, selectUser } from '../../store/user/user-slice';

function ProfileForm() {
	const { user } = useSelector(selectUser);
	const dispatch = useDispatch();
	const {
		control,
		watch,
		handleSubmit,
		reset,
		resetField,
		getValues,
		setValue,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			first_name: '',
			last_name: '',
			phone: '',
			email: '',
			birthday: '',
			current_password: '',
			new_password: '',
			confirmPassword: '',
		},
	});

	const newPassword = watch('new_password');

	useEffect(() => {
		setValue('first_name', user.first_name || '');
		setValue('last_name', user.last_name || '');
		setValue('email', user.email || '');
		setValue('phone', user.phone || '');
		setValue('birthday', user.birthday || '');
	}, [setValue, user]);

	const onSubmit = ({
		first_name,
		last_name,
		email,
		phone,
		birthday,
		new_password,
		current_password,
	}) => {
		dispatch(
			patchUser({
				first_name,
				last_name,
				email,
				phone,
				birthday,
				passowrd: current_password,
			}),
		);
		if (current_password && new_password) {
			dispatch(changePassword({ new_password, current_password }));
		}
	};

	return (
		<section className={styles.container}>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>Профиль</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.about}>
						<ContainerForms>
							<h3 className={styles.subtitle}>Контактные данные</h3>
							<div className={styles.inputs}>
								<Controller
									control={control}
									rules={{
										minLength: {
											value: 6,
											message: 'Номер слишком короткий',
										},
										pattern: {
											value: /\+?[78][-\\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
											message: 'Неверный формат телефона',
										},
									}}
									render={({
										field: { onBlur, value, onChange, type = 'tel' },
									}) => (
										<NameInput
											onBlur={onBlur}
											onChange={onChange}
											value={value}
											type={type}
											inputId="phone"
											label="Телефон"
											helperText={errors.phone?.message?.toString()}
											error={!!errors.phone?.message}
											onClick={() => resetField('phone')}
										/>
									)}
									name="phone"
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
											onBlur={onBlur}
											onChange={onChange}
											type={type}
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
									name="consent"
									control={control}
									render={({ field: { onChange, value } }) => (
										<Checkbox
											onChange={onChange}
											label=" Даю согласие  на получение уведомлений"
											checked={!!value}
										/>
									)}
								/>
							</div>
						</ContainerForms>
						<ContainerForms>
							<h3 className={styles.subtitle}>Личные данные</h3>
							<div className={styles.inputs}>
								<Controller
									control={control}
									rules={{
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
									render={({
										field: { onChange, onBlur, value, type = 'text' },
									}) => (
										<NameInput
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
									render={({
										field: { onChange, onBlur, value, type = 'text' },
									}) => (
										<NameInput
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
										pattern: {
											value:
												/^(19[4-9][0-9]|20[0-1][0-9])[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/,
											message:
												'Дата дня рождения должна быть в формате ГГГГ-ММ-ДД',
										},
									}}
									render={({
										field: { onChange, onBlur, value, type = 'text' },
									}) => (
										<NameInput
											onBlur={onBlur}
											onChange={onChange}
											value={value}
											type={type}
											inputId="birthday"
											label="Дата рождения"
											helperText={errors.birthday?.message?.toString()}
											error={!!errors.birthday?.message}
											onClick={() => resetField('birthday')}
										/>
									)}
									name="birthday"
								/>
							</div>
						</ContainerForms>
						<ContainerForms>
							<h3 className={styles.subtitle}>Смена пароля</h3>
							<div className={styles.inputs}>
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
									render={({ field: { onChange, onBlur, value, type = 'password' } }) => (
										<NameInput
											required
											onBlur={onBlur}
											onChange={onChange}
											value={value}
											type={type}
											inputId="current_password"
											label="Старый пароль"
											helperText={errors.current_password?.message?.toString()}
											error={!!errors.current_password?.message}
											onClick={() => resetField('current_password')}
										/>
									)}
									name="current_password"
								/>
								<Controller
									control={control}
									rules={{
										pattern: {
											value: /^(?=.*\d)\w{8,}$/m,
											message:
												'Пароль должен содержать цифры, латинские буквы верхнего и нижнего регистра, не менее 8 символов',
										},

										validate: (value) =>
											value !== getValues('current_password') ||
											'Пароль совпадает с прошлым паролем',
									}}
									render={({ field: { onChange, onBlur, value, type = 'password' } }) => (
										<NameInput
											onBlur={onBlur}
											onChange={onChange}
											value={value}
											type={type}
											inputId="new_password"
											label="Новый пароль"
											helperText={errors.new_password?.message?.toString()}
											error={!!errors.new_password?.message}
											onClick={() => resetField('new_password')}
										/>
									)}
									name="new_password"
								/>
								<Controller
									control={control}
									rules={{
										validate: (value) =>
											value === getValues('new_password') ||
											'Пароли не совпадают',
									}}
									render={({ field: { onChange, onBlur, value, type = 'password' } }) => (
										<NameInput
											required={newPassword}
											onBlur={onBlur}
											onChange={onChange}
											value={value}
											type={type}
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
						</ContainerForms>
						<div className={styles.buttons}>
							<SaveButton buttonText="Сохранить" type="submit" black />
							<SaveButton
								buttonText="Отменить"
								type="reset"
								onClick={() => {
									reset();
								}}
							/>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
}

export default ProfileForm;

import { useForm, Controller } from 'react-hook-form';
import styles from './ProfileForm.module.css';
import ContainerForms from '../../components/Forms/ContainerForms/ContainerForms';
import NameInput from '../../components/UI/NameInput/NameInput';
import Checkbox from '../../components/UI/Checkbox/Checkbox';
import SaveButton from '../../components/UI/SaveButton/SaveButton';
import AccountSidebar from '../../components/AccountSidebar/AccountSidebar';

function ProfileForm() {
	const {
		watch,
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
			date: '',
			oldPassword: '',
			newPassword: '',
			confirmedPassword: '',
		},
	});

	const newPassword = watch('newPassword');
	const oldPassword = watch('oldPassword');

	const onSubmit = () => {
		// console.log(data);
		reset();
	};

	return (
		<section className={styles.container}>
			<AccountSidebar />
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
										pattern: {
											value:
												/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19[4-9][0-9]|20[0-1][0-9])$/,
											message:
												'Дата дня рождения должна быть в формате ДД.ММ.ГГГГ',
										},
									}}
									render={({ field: { onChange, onBlur, value } }) => (
										<NameInput
											onBlur={onBlur}
											onChange={onChange}
											value={value}
											inputId="date"
											label="Дата рождения"
											helperText={errors.date?.message?.toString()}
											error={!!errors.date?.message}
											onClick={() => resetField('date')}
										/>
									)}
									name="date"
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
											value:
												/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20})/,
											message:
												'Допустимые символы: цифры, заглавные, строчные буквы, (@ # $%)',
										},
										minLength: {
											value: 8,
											message: 'Длина должна быть больше 8 символов',
										},
										maxLength: {
											value: 20,
											message: 'Длина должна быть меньше 20 символов',
										},
									}}
									render={({ field: { onChange, onBlur, value } }) => (
										<NameInput
											onBlur={onBlur}
											onChange={onChange}
											value={value}
											inputId="oldPassword"
											label="Старый пароль"
											helperText={errors.oldPassword?.message?.toString()}
											error={!!errors.oldPassword?.message}
											onClick={() => resetField('oldPassword')}
										/>
									)}
									name="oldPassword"
								/>
								<Controller
									control={control}
									rules={{
										required: 'Поле обязательное',
										pattern: {
											value:
												/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20})/,
											message:
												'Допустимые символы: цифры, заглавные, строчные буквы, (@ # $%)',
										},
										minLength: {
											value: 8,
											message: 'Длина должна быть больше 8 символов',
										},
										maxLength: {
											value: 20,
											message: 'Длина должна быть меньше 20 символов',
										},
										validate: (value) =>
											value !== oldPassword ||
											'Пароль совпадает с прошлым паролем',
									}}
									render={({ field: { onChange, onBlur, value } }) => (
										<NameInput
											onBlur={onBlur}
											onChange={onChange}
											value={value}
											inputId="newPassword"
											label="Новый пароль"
											helperText={errors.newPassword?.message?.toString()}
											error={!!errors.newPassword?.message}
											onClick={() => resetField('newPassword')}
										/>
									)}
									name="newPassword"
								/>
								<Controller
									control={control}
									rules={{
										required: 'Поле обязательное',
										validate: (value) =>
											value === newPassword || 'Пароли не совпадают',
									}}
									render={({ field: { onChange, onBlur, value } }) => (
										<NameInput
											onBlur={onBlur}
											onChange={onChange}
											value={value}
											inputId="confirmedPassword"
											label="Подтверждение пароль"
											helperText={errors.confirmedPassword?.message?.toString()}
											error={!!errors.confirmedPassword?.message}
											onClick={() => resetField('confirmedPassword')}
										/>
									)}
									name="confirmedPassword"
								/>
							</div>
						</ContainerForms>
						<div className={styles.buttons}>
							<SaveButton buttonText="Сохранить" type="submit" black />
							<SaveButton
								buttonText="Отменить"
								type="reset"
								onClick={(data) => {
									reset(data);
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

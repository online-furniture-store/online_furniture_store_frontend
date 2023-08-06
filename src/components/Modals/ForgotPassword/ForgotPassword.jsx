import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { openModal } from '../../../store/modal/modal-slice';
import { forgotPassword } from '../../../store/user/user-slice';
import styles from './ForgotPassword.module.css';
import NameInput from '../../UI/NameInput/NameInput';
import BlackButton from '../../UI/BlackButton/BlackButton';

function ForgotPassword() {
	const dispatch = useDispatch();

	const {
		control,
		handleSubmit,
		reset,
		resetField,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		defaultValues: {
			email: '',
		},
	});

	const onSubmit = (data) => {
		dispatch(forgotPassword(data));
		dispatch(openModal('resetPassSuccessModal'));
		reset();
	};
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Восстановление пароля</h2>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.input}>
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
								onBlur={onBlur}
								onChange={onChange}
								value={value}
								type={type}
								placeholder="Введите электронную почту"
								inputId="forgotEmail"
								label="Электронная почта"
								helperText={errors.email?.message?.toString()}
								error={!!errors.email?.message}
								onClick={() => resetField('email')}
							/>
						)}
						name="email"
					/>
				</div>
				<BlackButton buttonText="Сбросить пароль" type="submit" />
			</form>
		</div>
	);
}

export default ForgotPassword;

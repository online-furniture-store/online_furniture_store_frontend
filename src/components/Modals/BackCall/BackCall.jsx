import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { openModal } from '../../../store/modal/modal-slice';
import styles from './BackCall.module.css';
import NameInput from '../../UI/NameInput/NameInput';
import BlackButton from '../../UI/BlackButton/BlackButton';

function BackCall() {
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
			password: '',
		},
	});

	const onSubmit = (data) => {
		// eslint-disable-next-line no-console
		console.log('submit', data);
		dispatch(openModal('backCallSuccessModal'));
		reset();
	};
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Заказать обратный звонок</h2>
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
								required
								onBlur={onBlur}
								onChange={onChange}
								placeholder="Иван"
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
								required
								onBlur={onBlur}
								onChange={onChange}
								value={value}
								placeholder="+79999999999"
								inputId="telephone"
								label="Телефон"
								helperText={errors.telephone?.message?.toString()}
								error={!!errors.telephone?.message}
								onClick={() => resetField('telephone')}
							/>
						)}
						name="telephone"
					/>
				</div>
				<BlackButton buttonText="Свяжитесь со мной" type="submit" />
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
			</p>
		</div>
	);
}

export default BackCall;

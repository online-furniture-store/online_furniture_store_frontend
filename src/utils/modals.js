import Authorization from '../components/Modals/Authorization/Authorization';
import ForgotPassword from '../components/Modals/ForgotPassword/ForgotPassword';
import Registration from '../components/Modals/Registration/Registration';
import BackCall from '../components/Modals/BackCall/BackCall';
import Success from '../components/Modals/Success/Success';

export const modals = {
	authModal: <Authorization />,
	forgotPassModal: <ForgotPassword />,
	registrationModal: <Registration />,
	backCallModal: <BackCall />,
	registrationSuccessModal: (
		<Success>
			На Ваш email отправлено письмо. Пожалуйста, перейдите по ссылке из него
			для завершения регистрации
		</Success>
	),
	resetPassSuccessModal: <Success>Новый пароль отправлен на Ваш email</Success>,
	backCallSuccessModal: (
		<Success title="Спасибо!">
			Ваша заявка отправлена. Мы перезвоним Вам в ближайшее время.
		</Success>
	),
};

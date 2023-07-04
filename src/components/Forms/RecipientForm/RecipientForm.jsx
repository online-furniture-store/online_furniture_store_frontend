import { useForm, Controller } from 'react-hook-form';
import styles from './RecipientForm.module.css';
import ContainerForms from '../ContainerForms/ContainerForms';
import NameInput from '../../UI/NameInput/NameInput';

function RecipientForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      surname: '',
      telephone: '',
      email: '',
    },
  });

  const onSubmit = (data) => {
    // eslint-disable-next-line
    console.log(data);
    reset();
  };

  return (
    <ContainerForms>
      <div className={styles.formContainer}>
        <span>Получатель</span>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            rules={{
              required: 'Поле обязательное',
              minLength: {
                value: 2,
                message: 'Длинна должна быть больше 1 символа',
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
                message: 'Длинна должна быть больше 1 символа',
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
                inputId="emailInput"
                label="Электронная почта"
                helperText={errors.email?.message?.toString()}
                error={!!errors.email?.message}
              />
            )}
            name="email"
          />
          <input type="submit" />
        </form>
      </div>
    </ContainerForms>
  );
}

export default RecipientForm;

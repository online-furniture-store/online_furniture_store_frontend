import { useNavigate } from 'react-router-dom';
import styles from './PageInDevelopment.module.css';
import Title from '../../components/UI/Title/Title';
import BlackButton from '../../components/UI/BlackButton/BlackButton';

function PageInDevelopment() {
  const navigate = useNavigate();
  return (
    <div className={styles.content}>
      <div className={styles.img} />
      <Title titleText="Страница в разработке" />
      <span className={styles.text}>
        Совсем скоро она появится здесь
      </span>
      <div className={styles.buttonContainer}>
        <BlackButton
          buttonText="Вернуться назад"
          buttonLarge
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
}

export default PageInDevelopment;

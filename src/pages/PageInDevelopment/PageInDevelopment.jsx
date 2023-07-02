import { useNavigate } from 'react-router-dom';
import styles from './PageInDevelopment.module.css';
import Title from '../../components/UI/Title/Title';

function PageInDevelopment() {
  const navigate = useNavigate();
  return (
    <div className={styles.content}>
      <div className={styles.img} />
      <Title titleText="Страница в разработке" />
      <span className={styles.text}>
        Совсем скоро она появится здесь
      </span>
      <button
        type="button"
        className={styles.button}
        onClick={() => navigate(-1)}
      >
        Вернуться назад
      </button>
    </div>
  );
}

export default PageInDevelopment;

import { useNavigate } from 'react-router-dom';
import classes from './PageInDevelopment.module.css';
import Title from '../../components/UI/Title/Title';

function PageInDevelopment() {
  const navigate = useNavigate();
  return (
    <div className={classes.content}>
      <div className={classes.img} />
      <Title titleText="Страница в разработке" />
      <span className={classes.text}>
        Совсем скоро она появится здесь
      </span>
      <button
        type="button"
        className={classes.button}
        onClick={() => navigate(-1)}
      >
        Вернуться назад
      </button>
    </div>
  );
}

export default PageInDevelopment;

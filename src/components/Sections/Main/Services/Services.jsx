import { useNavigate } from 'react-router-dom';
import styles from './Services.module.css';
import Title from '../../../UI/Title/Title';
import LearnMoreButton from '../../../UI/LearnMoreButton/LearnMoreButton';
import truck from '../../../../assets/img/truckBrown.svg';
import drill from '../../../../assets/img/drillBrown.svg';
import crane from '../../../../assets/img/craneBrown.svg';

function Services() {
	const navigate = useNavigate();
	const changeText = () => {
		navigate('/under-construction');
	};

	return (
		<section className={styles.container}>
			<div className={styles.title}>
				<Title titleText="Услуги" />
			</div>
			<div className={styles.service}>
				<div className={styles.box}>
					<img className={styles.image} src={truck} alt="Truck" />
					<p className={styles.about}>Доставка и подъём мебели</p>
					<LearnMoreButton buttonText="Подробнее" onClick={changeText} />
				</div>
				<div className={styles.box}>
					<img className={styles.image} src={drill} alt="Drill" />
					<p className={styles.about}>Оперативная сборка в вашем офисе</p>
					<LearnMoreButton buttonText="Подробнее" onClick={changeText} />
				</div>
				<div className={styles.box}>
					<img className={styles.image} src={crane} alt="Crane" />
					<p className={styles.about}>Вывоз старой мебели в день доставки</p>
					<LearnMoreButton buttonText="Подробнее" onClick={changeText} />
				</div>
			</div>
		</section>
	);
}

export default Services;

import styles from './Services.module.css';
import Title from '../../../UI/Title/Title';
import LearnMoreButton from '../../../UI/LearnMoreButton/LearnMoreButton';
import truckGray from '../../../../assets/img/truckGrayTwo.svg';
import drill from '../../../../assets/img/drillTwo.svg';
import crane from '../../../../assets/img/craneTwo.svg';

function Services() {
	const textButton = {
		textLearn: 'Подробнее',
		textBooking: 'Заказать',
	};

	const changeText = () => {};

	const title = 'Услуги';

	return (
		<section className={styles.container}>
			<div className={styles.title}>
				<Title titleText={title} />
			</div>
			<div className={styles.services}>
				<div className={styles.service}>
					<div className={styles.box}>
						<img className={styles.image} src={truckGray} alt="Truck" />
						<p className={styles.about}>Доставка и подъём мебели</p>
						<LearnMoreButton
							buttonText={textButton.textLearn}
							onClick={changeText}
						/>
					</div>
					<div className={styles.box}>
						<img className={styles.image} src={drill} alt="Drill" />
						<p className={styles.about}>Оперативная сборка в вашем офисе</p>
						<LearnMoreButton
							buttonText={textButton.textBooking}
							onClick={changeText}
						/>
					</div>
					<div className={styles.box}>
						<img className={styles.image} src={crane} alt="Crane" />
						<p className={styles.about}>Вывоз старой мебели в день доставки</p>
						<LearnMoreButton
							buttonText={textButton.textBooking}
							onClick={changeText}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;

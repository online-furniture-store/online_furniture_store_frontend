import styles from './ServicesSection.module.css';
import Title from '../../../UI/Title/Title';
import LearnMoreButton from '../../../UI/LearnMoreButton/LearnMoreButton';
import truckGray from '../../../../assets/img/truckGrayTwo.svg';
import drill from '../../../../assets/img/drillTwo.svg';
import crane from '../../../../assets/img/craneTwo.svg';

function ServicesSections() {
	const textButton = {
		textLearn: 'Подробнее',
		textBooking: 'Заказать',
	};

	const changeText = () => {};

	const title = 'Услуги';

	return (
		<div className={styles.container}>
			<div className={styles.container__title}>
				<Title titleText={title} />
			</div>
			<div className={styles.container__services}>
				<div className={styles.services}>
					<div className={styles.services__box}>
						<img
							className={styles.services__image}
							src={truckGray}
							alt="Truck"
						/>
						<p className={styles.services__about}>Доставка и подъём мебели</p>
						<LearnMoreButton
							buttonText={textButton.textLearn}
							onClick={changeText}
						/>
					</div>
					<div className={styles.services__box}>
						<img className={styles.services__image} src={drill} alt="Drill" />
						<p className={styles.services__about}>
							Оперативная сборка в вашем офисе
						</p>
						<LearnMoreButton
							buttonText={textButton.textBooking}
							onClick={changeText}
						/>
					</div>
					<div className={styles.services__box}>
						<img className={styles.services__image} src={crane} alt="Crane" />
						<p className={styles.services__about}>
							Вывоз старой мебели в день доставки
						</p>
						<LearnMoreButton
							buttonText={textButton.textBooking}
							onClick={changeText}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ServicesSections;

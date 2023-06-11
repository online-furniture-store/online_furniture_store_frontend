import styles from './heart-counter.module.css';
import heart from '../../../assets/img/heart.svg';

function HeartCounter({ amount }) {
	return (
		<div className={styles.heart}>
			<img src={heart} alt={heart} />
			<div className={styles.circle}>{amount}</div>
		</div>
	);
}

export default HeartCounter;

import PropTypes from 'prop-types';
import heart from '../../../assets/img/heart.svg';
import styles from './heart-counter.module.css';

function HeartCounter({ amount }) {
	return (
		<div className={styles.heart}>
			<img src={heart} alt="иконка сердечко" className={styles.icon} />
			{amount !== 0
			&& <div className={styles.circle}>{amount}</div> }
		</div>
	);
}

export default HeartCounter;

HeartCounter.propTypes = {
	amount: PropTypes.number.isRequired,
};

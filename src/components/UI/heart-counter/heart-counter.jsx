import PropTypes from 'prop-types';
import styles from './heart-counter.module.css';
import heart from '../../../assets/img/heart.svg';

function HeartCounter({ amount }) {
	return (
		<div className={styles.heart}>
			<img src={heart} alt={heart} />
			{amount !== 0
			&& <div className={styles.circle}>{amount}</div> }
		</div>
	);
}

export default HeartCounter;

HeartCounter.propTypes = {
	amount: PropTypes.number.isRequired,
};

import PropTypes from 'prop-types';
import styles from './counter.module.css';
import minusActive from '../../../assets/img/minus.svg';
import minusDisabled from '../../../assets/img/minus-disabled.svg';
import plus from '../../../assets/img/plus.svg';
import plusDisabled from '../../../assets/img/plus-disabled.svg';

function Counter({
	increaseFunction,
	decreaseFunction,
	count,
	disabledIncrease,
	disabledDecrease,
}) {
	return (
		<div className={styles.counter}>
			<button
				onClick={decreaseFunction}
				className={styles.button}
				type="button"
				disabled={disabledDecrease}
			>
				{disabledDecrease ? (
					<img src={minusDisabled} alt="minus-disabled" />
					) : (
					<img src={minusActive} alt="minus-active" />
				)}
			</button>
			<p className={styles.text}>{count}</p>
			<button
				onClick={increaseFunction}
				className={styles.button}
				type="button"
				disabled={disabledIncrease}
			>
				{disabledIncrease ? (
					<img src={plusDisabled} alt="plus-disabled" />
					) : (
					<img src={plus} alt="plus-active" />
				)}
			</button>
		</div>
	);
}

export default Counter;

Counter.propTypes = {
	increaseFunction: PropTypes.func.isRequired,
	decreaseFunction: PropTypes.func.isRequired,
	count: PropTypes.number.isRequired,
	disabledIncrease: PropTypes.bool.isRequired,
	disabledDecrease: PropTypes.bool.isRequired,
};

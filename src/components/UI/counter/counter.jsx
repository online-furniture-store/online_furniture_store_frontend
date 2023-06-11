import styles from './counter.module.css';
import minusActive from '../../../assets/img/minus.svg';
import minusDisabled from '../../../assets/img/minus-disabled.svg';
import plus from '../../../assets/img/plus.svg';
import plusDisabled from '../../../assets/img/plus-disabled.svg';

function Counter({ increaseFunction, decreaseFunction, count, amount }) {
	return (
		<div className={styles.counter}>
			<button onClick={decreaseFunction} className={styles.button} type="button">
				{count > 0 ? (
					<img src={minusActive} alt="minus-active" />
				) : (
					<img src={minusDisabled} alt="minus-disabled" />
				)}
			</button>
			<p className={styles.text}>{count}</p>
			<button onClick={increaseFunction} className={styles.button} type="button">
				{count < amount ? (
					<img src={plus} alt="plus-active" />
				) : (
					<img src={plusDisabled} alt="plus-disabled" />
				)}
			</button>
		</div>
	);
}

export default Counter;

import PropTypes from 'prop-types';
import groсery from '../../../assets/img/grocery.svg';
import styles from './Grocery.module.css';

function Grocery({ amount }) {
	return (
		<div className={styles.grocery}>
			<img src={groсery} alt="groсery" className={styles.icon} />
			{amount !== 0
			&& <div className={styles.circle}>{amount}</div>}
		</div>
	);
}

export default Grocery;

Grocery.propTypes = {
	amount: PropTypes.number.isRequired,
};

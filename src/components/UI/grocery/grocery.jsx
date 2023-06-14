import PropTypes from 'prop-types';
import styles from './grocery.module.css';
import groсery from '../../../assets/img/grocery.svg';

function Grocery({ amount }) {
	return (
		<div className={styles.grocery}>
			<img src={groсery} alt="groсery" />
			{amount !== 0
			&& <div className={styles.circle}>{amount}</div>}
		</div>
	);
}

export default Grocery;

Grocery.propTypes = {
	amount: PropTypes.number.isRequired,
};

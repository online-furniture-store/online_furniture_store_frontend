import PropTypes from 'prop-types';
import styles from './grocery.module.css';
import grosery from '../../../assets/img/grocery.svg';

function Grosery({ amount }) {
	return (
		<div className={styles.grocery}>
			<img src={grosery} alt="grosery" />
			<div className={styles.circle}>{amount}</div>
		</div>
	);
}

export default Grosery;

Grosery.propTypes = {
	amount: PropTypes.number.isRequired,
};

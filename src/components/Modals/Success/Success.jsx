import PropTypes from 'prop-types';
import styles from './Success.module.css';
import success from '../../../assets/img/success.svg';

function Success({ children, title }) {
	return (
		<div className={styles.container}>
			<img src={success} alt="Дейтсвие выполнено" className={styles.success} />
			{title && <h2 className={styles.title}>{title}</h2>}
			<p className={styles.text}>
				{children}
			</p>
		</div>
	);
}

Success.propTypes = {
	children: PropTypes.string,
	title: PropTypes.string,
};

export default Success;

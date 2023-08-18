import PropTypes from 'prop-types';
import styles from './Title.module.css';

function Title({ titleText }) {
	return <h2 className={styles.title}>{titleText}</h2>;
}

Title.propTypes = {
	titleText: PropTypes.string.isRequired,
};

export default Title;

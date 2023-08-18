import PropTypes from 'prop-types';
import styles from './SearchField.module.css';

function SearchField({ onChange, value, isVisible }) {
	const handleFormClick = (evt) => {
		evt.stopPropagation();
	};

	return (
		<form
			className={isVisible ? styles.search : styles.search_inactive}
			onClick={(evt) => handleFormClick(evt)}
			role="presentation"
		>
			<label htmlFor="searchField" className={styles.label} alt="Иконка лупа" />
			<input
				className={styles.input}
				id="searchField"
				type="search"
				autoComplete="off"
				value={value || ''}
				onChange={onChange}
			/>
		</form>
	);
}

SearchField.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string,
	isVisible: PropTypes.bool,
};

export default SearchField;

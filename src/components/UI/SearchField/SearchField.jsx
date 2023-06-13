import PropTypes from 'prop-types';
import styles from './SearchField.module.css';

function SearchField({ onChange, value }) {
	return (
		<form className={styles.search}>
			<label
				htmlFor="searchField"
				className={styles.label}
				alt="Иконка лупа"
			/>
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
};

export default SearchField;

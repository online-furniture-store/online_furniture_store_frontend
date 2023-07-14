import PropTypes from 'prop-types';
import styles from './Documentation.module.css';

function DocumentationPage({ children }) {
  return (
    <div className={styles.documentation}>
      {children}
    </div>
  );
}

DocumentationPage.propTypes = {
  children: PropTypes.func,
};

export default DocumentationPage;

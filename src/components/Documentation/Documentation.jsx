import PropTypes from 'prop-types';
import classes from './Documentation.module.css';

function DocumentationPage({ children }) {
  return (
    <div className={classes.documentation}>
      {children}
    </div>
  );
}

DocumentationPage.propTypes = {
  children: PropTypes.func,
};

export default DocumentationPage;

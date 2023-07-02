import PropTypes from 'prop-types';
import styles from './ContainerForms.module.css';

function ContainerForms({ children }) {
  return (
    <div className={styles.container}>
      ffff
      {children}
    </div>
  );
}

ContainerForms.propTypes = {
  children: PropTypes.node,
};

export default ContainerForms;

import PropTypes from 'prop-types';
import AccountSidebar from '../../components/AccountSidebar/AccountSidebar';
import styles from './UserAccount.module.css';

function UserAccount({ children }) {
  return (
    <div className={styles.container}>
      <AccountSidebar />
      {children}
    </div>
  );
}

UserAccount.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserAccount;

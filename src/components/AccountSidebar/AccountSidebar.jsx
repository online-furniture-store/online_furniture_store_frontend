import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/auth/auth-slice';
import styles from './AccountSidebar.module.css';

function AccountSidebar() {
	const dispatch = useDispatch();

	const handleLogoutUser = () => {
		dispatch(logout());
	};
	return (
		<nav className={styles.container}>
			<ul className={styles.list}>
				<li>
					<NavLink
						to="/user/my_orders"
						className={({ isActive }) => {
							return isActive ? styles.active : styles.link;
						}}
					>
						Мои заказы
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/user/feedback"
						className={({ isActive }) => {
							return isActive ? styles.active : styles.link;
						}}
					>
						Отзывы
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/user/me"
						className={({ isActive }) => {
							return isActive ? styles.active : styles.link;
						}}
					>
						Личные данные
					</NavLink>
				</li>
				<li>
					<NavLink to="/" onClick={handleLogoutUser} className={styles.link}>
						Выход
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default AccountSidebar;

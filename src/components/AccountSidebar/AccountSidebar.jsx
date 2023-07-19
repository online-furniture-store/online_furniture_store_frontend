import { NavLink } from 'react-router-dom';
import styles from './AccountSidebar.module.css';

function AccountSidebar() {
	return (
		<nav className={styles.container}>
			<ul className={styles.list}>
				<li>
					<NavLink
						to="/user/my_orders"
						className={({ isActive }) =>
							(isActive ? styles.active : styles.link)}
					>
						Мои заказы
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/user/feedback"
						className={({ isActive }) =>
							(isActive ? styles.active : styles.link)}
					>
						Отзывы
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/user/me"
						className={({ isActive }) =>
							(isActive ? styles.active : styles.link)}
					>
						Личные данные
					</NavLink>
				</li>
				<li>
					<NavLink to="/" className={styles.link}>
						Выход
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default AccountSidebar;

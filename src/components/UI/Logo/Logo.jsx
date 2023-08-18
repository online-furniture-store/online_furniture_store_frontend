import { NavLink, useLocation } from 'react-router-dom';

import styles from './Logo.module.css';

function Logo() {
	const location = useLocation();
	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{location.pathname === '/' ? (
				<a href="#main" className={styles.homeLink}>
					<p className={styles.logo}>OFS</p>
				</a>
			) : (
				<NavLink className={styles.homeLink} to="/">
					<p className={styles.logo}>OFS</p>
				</NavLink>
			)}
		</>
	);
}

export default Logo;

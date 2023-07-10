import { NavLink, useLocation } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { routes } from '../../utils/breadcrumbsRoutes';
import styles from './Breadcrumbs.module.css';

function Breadcrumbs() {
	const breadcrumbs = useBreadcrumbs(routes);
	const location = useLocation();

	if (location.pathname === '/') {
		return null;
	}
	return (
		<ul className={styles.list}>
			{breadcrumbs.map(({ match, breadcrumb }, index) => (
				<li className={styles.crumb} key={match.pathname}>
					<NavLink className={styles.link} to={match.pathname}>
						{breadcrumb}
					</NavLink>
					{breadcrumbs.length === index + 1 ? null : (
						<div className={styles.arrow} />
					)}
				</li>
			))}
		</ul>
	);
}

export { Breadcrumbs };

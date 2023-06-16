import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import styles from './Header.module.css';
import user from '../../assets/img/person.svg';
import SearchField from '../../UI/SearchField/SearchField';
import HeartCounter from '../../UI/heart-counter/heart-counter';
import Grosery from '../../UI/grocery/grocery';

function Header() {
	const location = useLocation();
	const [contentShown, setContentShown] = useState(false);
	const [linkStateActive, setLinkStateActive] = useState(false);
	const handleShowContent = () => {
		setContentShown(!contentShown);
		setLinkStateActive(!linkStateActive);
	};

	return (
		<header className={styles.header}>
			<div className={styles.taken}>
				<div className={styles.taken__container}>
					<p className={styles.callback}>Обратный звонок</p>
				</div>
			</div>
			<div className={styles.main}>
				<div className={styles.main__container}>
					<p className={styles.logo}>OFS</p>
					<ul className={styles.menu}>
						<li>
							<button
								type="button"
								onClick={handleShowContent}
								className={
									linkStateActive ? styles.menu__item_active : styles.menu__item
								}
							>
								<p
									className={
										linkStateActive
											? styles.menu__text_active
											: styles.menu__text
									}
								>
									Каталог
								</p>
							</button>
						</li>
						<li>
							<NavLink to="/about" className={styles.menu__item}>
								<p className={styles.menu__text}>O компании</p>
							</NavLink>
						</li>
					</ul>
					<SearchField />
					<ul className={styles.contacts}>
						<select className={styles.cities}>
							<option className={styles.city}>Москва</option>
							<option className={styles.city}>Санкт-Петербург</option>
						</select>
						<p className={styles.phone}>+7 (495) 555-55-55</p>
					</ul>
					<nav className={styles.nav}>
						<NavLink className={styles.nav__item} to="/user">
							<img src={user} alt="иконка кабинет пользователя" />
						</NavLink>
						<NavLink className={styles.nav__item} to="/chosen">
							<HeartCounter />
						</NavLink>
						<NavLink className={styles.nav__item} to="/cart">
							<Grosery />
						</NavLink>
					</nav>
				</div>
			</div>
			<div
				className={contentShown ? styles.categories_visible : styles.categories}
			>
				<div className={styles.categories__container}>
					<nav className={styles.categories__list}>
						<NavLink
							to="/arm-chairs"
							className={
								location.pathname === '/' ||
								location.pathname === '/about' ||
								location.pathname === '/arm-chairs'
									? styles.categories__item_active
									: styles.categories__item
							}
						>
							Кресла и стулья
						</NavLink>
						<NavLink
							to="/tables"
							className={
								location.pathname === '/tables'
									? styles.categories__item_active
									: styles.categories__item
							}
						>
							Столы
						</NavLink>
						<NavLink
							to="/wardrobes"
							className={
								location.pathname === '/wardrobes'
									? styles.categories__item_active
									: styles.categories__item
							}
						>
							Шкафы и системы хранения
						</NavLink>
						<NavLink
							to="/sofas"
							className={
								location.pathname === '/sofas'
									? styles.categories__item_active
									: styles.categories__item
							}
						>
							Диваны
						</NavLink>
						<NavLink
							to="/sale"
							className={
								location.pathname === '/sale'
									? styles.categories__item_active_last
									: styles.categories__item
							}
						>
							Sale
						</NavLink>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;

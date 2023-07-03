import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import user from '../../../assets/img/person.svg';
import Logo from '../../UI/Logo/Logo';
import SearchField from '../../UI/SearchField/SearchField';
import SelectCity from '../../UI/SelectCity/SelectCity';
import Grocery from '../../UI/grocery/grocery';
import HeartCounter from '../../UI/heart-counter/heart-counter';
import styles from './Header.module.css';

function Header() {
	const location = useLocation();
	const [contentShown, setContentShown] = useState(false);
	const [linkStateActive, setLinkStateActive] = useState(false);
	const [searchValue, setSearchValue] = useState();
	const [searchInputShown, setSearchInputShow] = useState(false);

	const handleShowMenu = () => {
		setContentShown(!contentShown);
		setLinkStateActive(!linkStateActive);
	};

	const handleHideMenu = () => {
		setContentShown(false);
	};

	const handleChange = (evt) => {
		setSearchValue(evt.target.value);
	};

	const handleSearchInputShow = () => {
		setSearchInputShow((prev) => !prev);
	};

	const handleHideSearchInput = () => {
		if (searchInputShown) {
			setSearchInputShow(false);
		}
	};

	return (
		<div>
			{location.pathname === '/' ? (
				<header className={styles.header}>
					<div className={styles.main} onClick={handleHideSearchInput}>
						<div className={styles.main__container}>
							<Logo />
							<ul className={styles.menu}>
								<li>
									<button
										type="button"
										onClick={handleShowMenu}
										className={
											linkStateActive
												? styles.menu__item_active
												: styles.menu__item
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
								<li>
									<NavLink to="#" className={styles.menu__item}>
										<button type="button" className={styles.menu__text}>
											Обратный звонок
										</button>
									</NavLink>
								</li>
							</ul>
							<div
								className={
									searchInputShown ? styles.contacts_inactive : styles.contacts
								}
							>
								<a href="tel: +74955555555" className={styles.phone}>
									+7 (495) 555–55–55
								</a>
								<SelectCity />
							</div>
							<SearchField
								onChange={handleChange}
								value={searchValue}
								isVisible={searchInputShown}
							/>
							<nav className={styles.nav}>
								<button
									className={
										searchInputShown
											? styles.searchIcon_inactive
											: styles.searchIcon
									}
									type="button"
									onClick={handleSearchInputShow}
								/>
								<NavLink className={styles.nav__item} to="/user">
									<img
										className={styles.userIcon}
										src={user}
										alt="иконка кабинет пользователя"
									/>
								</NavLink>
								<NavLink className={styles.nav__item} to="/chosen">
									<HeartCounter amount={0} />
								</NavLink>
								<NavLink className={styles.nav__item} to="/cart">
									<Grocery amount={0} />
								</NavLink>
							</nav>
						</div>
					</div>
					<div
						onClick={handleHideMenu}
						className={
							contentShown ? styles.categories_visible : styles.categories
						}
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
			) : (
				<header className={styles.header}>
					<div className={styles.main} onClick={handleHideSearchInput}>
						<div className={styles.main__container}>
							<Logo />
							<div className={styles.wrapper}>
								<SearchField
									onChange={handleChange}
									value={searchValue}
									isVisible={searchInputShown}
								/>
								<button
									className={
										searchInputShown
											? styles.searchIcon_inactive
											: styles.searchIcon
									}
									type="button"
									onClick={handleSearchInputShow}
								/>
								<SelectCity />
							</div>
						</div>
					</div>
				</header>
			)}
		</div>
	);
}

export default Header;

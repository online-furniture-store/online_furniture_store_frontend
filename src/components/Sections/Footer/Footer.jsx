import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';
import telegram from '../../../assets/img/telegram.svg';
import whatsUp from '../../../assets/img/what_up.svg';
import vk from '../../../assets/img/vk.svg';
import EnteringEmail from '../../UI/EnteringEmail/EnteringEmail';

function Footer() {
    const [email, setEmail] = useState('');
    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3 className={styles.caption}>Свяжитесь с нами</h3>
                    <ul className={styles.ul}>
                        <li className={styles.link}>
                            <a
                                href="tel:+7 (495) 555–55–55"
                                className={styles.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                +7 (495) 555–55–55
                            </a>
                        </li>
                        <li className={styles.link}>
                            <a
                                href="mailto:furniture@ofs.ru"
                                className={styles.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                furniture@ofs.ru
                            </a>
                        </li>
                        <li className={styles.link}>
                            <a
                                href="mailto:furniture@ofs.ru"
                                className={styles.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Напишите нам
                            </a>
                        </li>
                        <li className={styles.link}>
                            <a
                                href="https://www.google.ru/maps/place/Светофор/@59.9542371,30.3436811,13z/data=!4m6!3m5!1s0x469633b689faf77d:0x47ec1ceb04e69d09!8m2!3d59.9656715!4d30.3679532!16s%2Fg%2F11lf_n909j?entry=ttu"
                                className={styles.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Адрес
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://web.telegram.org/k/"
                                className={styles.image}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={telegram} alt="telegram" />
                            </a>
                            <a
                                href="http://whatsapp.com"
                                className={styles.image}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={whatsUp} alt="whats-up" className={styles.image} />
                            </a>
                            <a
                                href="https://m.vk.com/feed"
                                className={styles.image}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={vk} alt="vk" className={styles.image} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3 className={styles.caption}>Информация для покупателей</h3>
                    <ul className={styles.ul}>
                        <li className={styles.link}>
                            <NavLink to="/" className={styles.link}>
                                Доставка и самовывоз
                            </NavLink>
                        </li>
                        <li className={styles.link}>
                            <NavLink to="/" className={styles.link}>
                                Как заказать
                            </NavLink>
                        </li>
                        <li className={styles.link}>
                            <NavLink to="/" className={styles.link}>
                                Как оплатить
                            </NavLink>
                        </li>
                        <li className={styles.link}>
                            <NavLink to="/" className={styles.link}>
                                Гарантия и возврат
                            </NavLink>
                        </li>
                        <li className={styles.link}>
                            <NavLink to="/" className={styles.link}>
                                Политика конфиденциальности
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3 className={styles.caption}>Подписаться на рассылку</h3>
                    <EnteringEmail placeholder="Email" onChange={handleEmailInput} value={email} />
                    <p className={styles.name}>2023, © Online Furniture Store</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

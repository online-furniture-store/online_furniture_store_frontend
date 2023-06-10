import styles from './heart-counter.module.css';
import heart from '../../../assets/img/heart.svg';

export default function HeartCounter() {
    return (
        <div className={styles.heart}>
            <img src={heart} alt={heart} />
            <div className={styles.circle}>2</div>
        </div>

    );
}

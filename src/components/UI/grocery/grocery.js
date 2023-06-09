import styles from './grocery.module.css';
import grosery from '../../../assets/img/grocery.svg';

export default function Grosery() {
    return (
        <div className={styles.grocery}>
            <img src={grosery} alt="grosery" />
            <div className={styles.circle}>2</div>
        </div>

    );
}

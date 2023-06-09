/* eslint-disable react/button-has-type */
import { useState } from 'react';
import styles from './counter.module.css';
import minusActive from '../../../assets/img/minus.svg';
import minusDisabled from '../../../assets/img/minus-disabled.svg';
import plus from '../../../assets/img/plus.svg';
import plusDisabled from '../../../assets/img/plus-disabled.svg';

export default function Counter() {
    const [value, setValue] = useState(1);
    const increaseNumber = () => {
        const secondValue = value + 1;
        setValue(secondValue);
    };

    const decreaseNumber = () => {
        const secondValue = value - 1;
        setValue(secondValue);
    };

    return (
        <div className={styles.counter}>
            <button onClick={decreaseNumber} className={styles.button}>
                {value > 0
                ? <img src={minusActive} alt="minus-active" />
                : <img src={minusDisabled} alt="minus-disabled" />}

            </button>
            <p className={styles.text}>{value}</p>
            <button onClick={increaseNumber} className={styles.button}>
            {value < 8
                ? <img src={plus} alt="plus-active" />
                : <img src={plusDisabled} alt="plus-disabled" />}
            </button>
        </div>
    );
}

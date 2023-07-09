import { useState } from 'react';
import styles from './WayToReceive.module.css';
import RadioCircleButton from '../../UI/RadioCircleButton/RadioCircleButton';
import Courier from '../../Forms/Courier/Courier';
import Pickup from '../../Forms/Pickup/Pickup';

function WayToReceive() {
  const [checked, setChecked] = useState(true);
  const [courier, setCourier] = useState(true);
  const isCourier = document.querySelector('input[value="Курьер"]:checked');
  const isPickup = document.querySelector('input[value="Самовывоз"]:checked');
  const changeCheckbox = () => {
    setChecked(!checked);
    setCourier(false);
  };

  return (
    <section>
      <p className={styles.header}>Способ получения</p>
      <div className={styles.firstRadio}>
        <RadioCircleButton text="Самовывоз" name="way" value="Самовывоз" onChange={changeCheckbox} checked={!checked} />
      </div>
      <RadioCircleButton text="Курьер" name="way" value="Курьер" onChange={changeCheckbox} checked={checked} />
      {courier && <Courier />}
      {isCourier && <Courier />}
      {isPickup && <Pickup />}

    </section>
  );
}

export default WayToReceive;

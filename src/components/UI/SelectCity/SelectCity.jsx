import styles from './SelectCity.module.css';

function SelectCity() {
  return (
    <select className={styles.cities}>
      <option className={styles.city}>Москва</option>
    </select>
  );
}

export default SelectCity;

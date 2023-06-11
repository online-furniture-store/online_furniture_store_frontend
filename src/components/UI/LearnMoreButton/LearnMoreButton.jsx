import styles from './LearnMoreButton.module.css';

function LearnMoreButton() {
  return (
    <button
      className={styles.button}
      type="button"
    >
      <span>Подробнее</span>
    </button>
  );
}

export default LearnMoreButton;

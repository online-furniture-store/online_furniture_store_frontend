import styles from './LearnMoreButton.module.css';

function LearnMoreButton({ onClick }) {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={onClick}
    >
      <span>Подробнее</span>
    </button>
  );
}
// не забыть кнопку прозрачной сделать
LearnMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LearnMoreButton;

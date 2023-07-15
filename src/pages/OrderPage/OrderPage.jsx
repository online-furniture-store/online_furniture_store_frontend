import styles from './OrderPage.module.css';
import Order from '../../components/Sections/Order/Order';
import TotalPrice from '../../components/TotalPrice/TotalPrice';

function OrderPage() {
  return (

    <div className={styles.container}>
      <Order />
      <TotalPrice />
    </div>

  );
}

export default OrderPage;

import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import styles from './Order.module.css';
import OrderElementCart from '../../OrderElementCart/OrderElementCart';

function Order({ isCourier }) {
  const { order } = useSelector((state) => state.orders);
  const { allProducts } = useSelector((state) => state.products);
  const productImages =
    order.products &&
    allProducts.filter((item) => {
      return order.products.some((f) => {
        return f.id === item.id;
      });
    });
  return (
    <section className={styles.container}>
      <h2 className={styles.order}>Заказ №{order.id}</h2>
      <p className={styles.orderDate}>
        {`от ${order.products && order.delivery.datetime_from}`}
      </p>
      <h3 className={styles.heading}>Статус:</h3>
      <p className={styles.caption}>Готов</p>
      {isCourier ? (
        <>
          <h3 className={styles.heading}>Доставка курьером:</h3>
          <p className={styles.caption}>{order.delivery.address}</p>
        </>
      ) : (
        <>
          <h3 className={styles.heading}>Пункт самовывоза:</h3>
          <p className={styles.caption}>Москва, Преображенская площадь, 4</p>
        </>
      )}
      <h3 className={styles.count}>
        Товары ({order.products && order.products.length}):
      </h3>
      {order.products?.map((item) =>
        productImages.map((el) => (
          <li className={styles.product} key={uuidv4()}>
            <OrderElementCart
              id={item.id}
              title={item.name}
              count={item.quantity}
              article={2645244}
              price={item.price}
              img={el.images.first_image}
            />
          </li>
        )))}
    </section>);
}

Order.propTypes = {
  isCourier: PropTypes.bool,
};
export default Order;

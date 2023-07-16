import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './Order.module.css';
import OrderElementCart from '../../OrderElementCart/OrderElementCart';

function Order({ orderNumber, date, status, isCourier, adress, count }) {
  const items = [
    {
      id: 0,
      user: 0,
      products:
        {
          id: 0,
          products: 'Диван хороший',
          quantity: 12,
          article: 123566,
          price: 50000,
          cost: 1e+38,
          img: 'https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg',
        },
      delivery: 'yes',
      total_cost: 1e+38,
      paid: true,
    },
    {
      id: 0,
      user: 0,
      products:
        {
          id: 0,
          products: 'Диван хороший',
          quantity: 12,
          article: 123566,
          price: 50000,
          cost: 1e+38,
          img: 'https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg',
        },
      delivery: 'yes',
      total_cost: 1e+38,
      paid: true,
    },
    {
      id: 0,
      user: 0,
      products:
      {
        id: 0,
        products: 'Диван хороший',
        quantity: 12,
        article: 123566,
        price: 50000,
        cost: 1e+38,
        img: 'https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg',
      },
    delivery: 'yes',
    total_cost: 1e+38,
    paid: true,
    },
  ];
return (
  <section className={styles.container}>
    <h2 className={styles.order}>Заказ №{orderNumber}</h2>
    <p className={styles.orderDate}>от {date}</p>
    <h3 className={styles.heading}>Статус:</h3>
    <p className={styles.caption}>{status}</p>
    {isCourier ? (
      <>
        <h3 className={styles.heading}>Доставка курьером:</h3>
        <p className={styles.caption}>{adress}</p>
      </>
    )
      : (
        <>
          <h3 className={styles.heading}>Пункт самовывоза:</h3>
          <p className={styles.caption}>Москва, Преображенская площадь, 4</p>
        </>
      )}
    <h3 className={styles.count}>Товары ({count}):</h3>
    {items?.map((item) => (
        <li className={styles.product} key={uuidv4()}>
          <OrderElementCart
            id={item.products.id}
            title={item.products.products}
            count={item.products.quantity}
            article={item.products.article}
            price={item.products.price}
            img={item.products.img}
          />
        </li>
      ))}
  </section>
);
}

Order.propTypes = {
  orderNumber: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  isCourier: PropTypes.bool.isRequired,
  adress: PropTypes.string,
  count: PropTypes.number.isRequired,
};
export default Order;

import styles from './PopularProducts.module.css';
import Title from '../../../UI/Title/Title';
import PopularProductCard from '../../../PopularProductCard/PopularProductCard';

const firstArray = [
  {
    id: '31',
    img: 'https://swiperjs.com/demos/images/nature-1.jpg',
    title: 'Шкаф Oak secret ',
    price: '59 990 ₽',
  },
  {
    id: '32',
    img: 'https://swiperjs.com/demos/images/nature-2.jpg',
    title: 'Кресло Cozy',
    price: '69 990 ₽',
  },
  {
    id: '33',
    img: 'https://swiperjs.com/demos/images/nature-3.jpg',
    title: 'Стол Cozy office Oak',
    price: '18 990 ₽',
  },
];

const secondArray = [
  {
    id: '34',
    img: 'https://swiperjs.com/demos/images/nature-4.jpg',
    title: 'Шкаф Сonvenience',
    price: '24 990 ₽',
  },
  {
    id: '35',
    img: 'https://swiperjs.com/demos/images/nature-5.jpg',
    title: 'Кресло Milky',
    price: '39 990 ₽',
  },
  {
    id: '36',
    img: 'https://swiperjs.com/demos/images/nature-6.jpg',
    title: 'Диван office Black',
    price: '69 990 ₽',
  },
];

function PopularProducts() {
  return (
    <section
      className={styles.section}
    >
      <div className={styles.container}>
        <Title titleText="Популярные товары" />
        <div className={styles.grid}>
          <div className={styles.leftColumn}>
            {
              firstArray.map((item, index) => (
                <div className={styles[`box${index}`]} key={item.id}>
                  <PopularProductCard
                    img={item.img}
                    productName={item.title}
                    productPrice={item.price}
                  />
                </div>
              ))
            }
          </div>
          <div className={styles.rightColumn}>
            {
              secondArray.map((item, index) => (
                <div className={styles[`box${index}`]} key={item.id}>
                  <PopularProductCard
                    img={item.img}
                    productName={item.title}
                    productPrice={item.price}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularProducts;

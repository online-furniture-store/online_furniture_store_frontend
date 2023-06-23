import { useSelector } from 'react-redux';
import styles from './PopularProducts.module.css';
import Title from '../../../UI/Title/Title';
import PopularProductCard from '../../../PopularProductCard/PopularProductCard';

function PopularProducts() {
  const { popularProducts } = useSelector((state) => state.products);
  return (
    <section
      className={styles.section}
    >
      <div className={styles.container}>
        <Title titleText="Популярные товары" />
        <div className={styles.grid}>
          <div className={styles.leftColumn}>
            {
              popularProducts.slice(0, 3).map((item, index) => (
                <div className={styles[`box${index}`]} key={item.id}>
                  <PopularProductCard
                    img={item.image}
                    productName={item.name}
                    productPrice={item.total_price}
                    productFavorited={item.is_favorited}
                  />
                </div>
              ))
            }
          </div>
          <div className={styles.rightColumn}>
            {
              popularProducts.slice(3).map((item, index) => (
                <div className={styles[`box${index}`]} key={item.id}>
                  <PopularProductCard
                    img={item.image}
                    productName={item.name}
                    productPrice={item.total_price}
                    productFavorited={item.is_favorited}
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

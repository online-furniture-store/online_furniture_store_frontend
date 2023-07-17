import { useDispatch, useSelector } from 'react-redux';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import styles from './PopularProducts.module.css';
import Title from '../../UI/Title/Title';
import PopularProductCard from '../../PopularProductCard/PopularProductCard';
import { fetchProduct } from '../../../store/furniture/furniture-slice';

function PopularProducts() {
  const { popularProducts } = useSelector((state) => state.products);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(fetchProduct(id));
  };
  return (
    <section
      className={styles.section}
    >
      <div className={location.pathname === '/cart' ? `${styles.container} ${styles.containerLocationCart}` : styles.container}>
        <NavLink className={styles.link} to="/under-construction"><Title titleText="Популярные товары" /></NavLink>
        {
          location.pathname === '/cart' ? (
            <div className={`${styles.grid} ${styles.gridLocationCart}`}>
              {
                popularProducts.map((item) => (
                  <PopularProductCard
                    key={item.id}
                    img={item.image}
                    productName={item.name}
                    productPrice={item.total_price}
                    productFavorited={item.is_favorited}
                    onClick={() => {
                      handleClick(item.id);
                      navigate('/product');
                    }}
                  />
                ))
              }
            </div>
          ) : (
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
                        onClick={() => {
                          handleClick(item.id);
                          navigate('/product');
                        }}
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
                        onClick={() => {
                          handleClick(item.id);
                          navigate('/product');
                        }}
                      />
                    </div>
                  ))
                }
              </div>
            </div>
          )
        }
      </div>
    </section>
  );
}

export default PopularProducts;

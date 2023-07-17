import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LargeCard from '../../components/LargeCard/LargeCard';
import Characteristic from '../../components/UI/Characteristic/Characteristic';
import { declensionWordYear } from '../../utils/utils';
import styles from './ProductPage.module.css';

function ProductPage() {
  const { product, loading } = useSelector((state) => state.furniture);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    loading ? (
      null
    ) : (
      <div className={styles.content}>
        <LargeCard />
        <div className={styles.description}>
          <h3 className={styles.title}>Описание</h3>
          <p className={styles.text}>{product.description}
          </p>
        </div>
        <div className={styles.specifications}>
          <h3 className={styles.title}>Характеристики</h3>
          <div className={styles.list}>
            <div className={styles.column}>
              <Characteristic property="Ширина" value={`${product.weight} см`} />
              <Characteristic property="Глубина" value={`${product.length} см`} />
              <Characteristic property="Высота" value={`${product.height} см`} />
              <Characteristic property="Материал" value={(product.material[0].name).toLowerCase()} />
              {
                product.material.length > 1 && <Characteristic property="Материал опор" value={(product.material[1].name).toLowerCase()} />
              }
              <Characteristic
                property="Цвет"
                value={(product.color.name).toLowerCase()}
              />
            </div>
            <div className={styles.column}>
              <Characteristic property="Максимальная нагрузка" value="100 кг" />
              <Characteristic property="Гарантия" value={declensionWordYear(product.warranty)} />
              <Characteristic property="Страна" value={product.country} />
            </div>
          </div>
        </div>
        <div>
          <h3 className={styles.title}>Похожие товары</h3>
        </div>
      </div>
    )
  );
}

export default ProductPage;

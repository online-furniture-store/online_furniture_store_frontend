import LargeCard from '../../components/LargeCard/LargeCard';
import Characteristic from '../../components/UI/Characteristic/Characteristic';
import { declensionWordYear } from '../../utils/utils';
import styles from './ProductPage.module.css';

const images = {
  id: 1,
  article: 3771939,
  name: 'Modern',
  price: 65799.0,
  is_favorited: false,
  discount: 10,
  total_price: 59219.0,
  available_quantity: 5,
  image: 'https://ofs.proninteam.ru/media/6_M7pxMkD.png',
  category: {
    id: 1,
    name: 'Кресла',
    slug: 'chairs',
  },
  material: [
    {
      id: 9,
      name: 'Металл',
    },
    {
      id: 11,
      name: 'Пластик',
    },
    {
      id: 1,
      name: 'Полиэстер',
    },
  ],
  width: 70,
  height: 128,
  length: 33,
  weight: 5.0,
  fast_delivery: true,
  country: 'Италия',
  brand: 'Стул Modern office Gray',
  warranty: 3,
  description: 'Комфорт – ключевое слово для описания стула Modern, который идеально вписывается в офисное пространство.Сиденье с мягким наполнителем обеспечивает удобство при длительном сидении.Элегантным силуэтом модель обязана слегка сужающейся кверху спинке, а угол ее наклона позволяет придвинуть стул вплотную к столу.Обивку из серебристого микровелюра делает еще выразительнее прошивка вертикальными полосами.',
  color: {
    id: 1,
    name: 'Черный',
  },
  pictures: [
    {
      id: 1,
      photo: 'https://ofs.proninteam.ru/media/6_M7pxMkD.png',
    },
    {
      photo: 'https://ofs.proninteam.ru/media/3_TPFA1pO.png',
      id: 2,
    },
    {
      photo: 'https://ofs.proninteam.ru/media/6_M7pxMkD.png',
      id: 3,
    },
    {
      photo: 'https://ofs.proninteam.ru/media/3_Xo7U2CH.png',
      id: 4,
    },
  ],
};

function ProductPage() {
  return (
    <div className={styles.content}>
      <LargeCard
        article={images.article}
        name={images.name}
        image={images.image}
        brand={images.brand}
        pictures={images.pictures}
        discount={images.discount}
        totalPrice={images.total_price}
        price={images.price}
        availableQuantity={images.available_quantity}
      />
      <div className={styles.description}>
        <h3 className={styles.title}>Описание</h3>
        <p className={styles.text}>{images.description}
        </p>
      </div>
      <div className={styles.specifications}>
        <h3 className={styles.title}>Характеристики</h3>
        <div className={styles.list}>
          <div className={styles.column}>
            <Characteristic property="Ширина" value={`${images.weight} см`} />
            <Characteristic property="Высота" value={`${images.height} см`} />
            <Characteristic property="Глубина" value={`${images.length} см`} />
            <Characteristic property="Материал" value={(images.material[0].name).toLowerCase()} />
            <Characteristic property="Материал опор" value={(images.material[1].name).toLowerCase()} />
            <Characteristic property="Цвет" value={(images.color.name).toLowerCase()} />
          </div>
          <div className={styles.column}>
            <Characteristic property="Максимальная нагрузка" value="100 кг" />
            <Characteristic property="Гарантия" value={declensionWordYear(images.warranty)} />
            <Characteristic property="Страна" value={images.country} />
          </div>
        </div>
      </div>
      <div>
        <h3 className={styles.title}>Похожие товары</h3>
      </div>
    </div>
  );
}

export default ProductPage;

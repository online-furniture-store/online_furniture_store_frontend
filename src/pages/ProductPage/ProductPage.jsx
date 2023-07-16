import LargeCard from '../../components/LargeCard/LargeCard';
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
  function rr(num) {
    if (num === 1) {
      return `${num} год`;
    }
    if (num > 1 && num < 5) {
      return `${num} годa`;
    }
    return `${num} лет`;
  }
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
            <div className={styles.wrapper}>
              <span className={styles.property}>Ширина</span>
              <div className={styles.line} />
              <span className={styles.value}>{`${images.weight} см`}</span>
            </div>

            <div className={styles.wrapper}>
              <span className={styles.property}>Высота</span>
              <div className={styles.line} />
              <span className={styles.value}>{`${images.height} см`}</span>
            </div>

            <div className={styles.wrapper}>
              <span className={styles.property}>Глубина</span>
              <div className={styles.line} />
              <span className={styles.value}>{`${images.length} см`}</span>
            </div>
            <div className={styles.wrapper}>
              <span className={styles.property}>Материал опор</span>
              <div className={styles.line} />
              <span className={styles.value}>{images.material[0].name}</span>
            </div>
            <div className={styles.wrapper}>
              <span className={styles.property}>Материал обивки</span>
              <div className={styles.line} />
              <span className={styles.value}>{images.material[1].name}</span>
            </div>
            <div className={styles.wrapper}>
              <span className={styles.property}>Цвет</span>
              <div className={styles.line} />
              <span className={styles.value}>{(images.color.name).toLowerCase()}</span>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.wrapper}>
              <span className={styles.property}>Максимальная нагрузка</span>
              <div className={styles.line} />
              <span className={styles.value}>100 кг</span>
            </div>
            <div className={styles.wrapper}>
              <span className={styles.property}>Гарантия</span>
              <div className={styles.line} />
              <span className={styles.value}>{rr(images.warranty)}</span>
            </div>
            <div className={styles.wrapper}>
              <span className={styles.property}>Страна</span>
              <div className={styles.line} />
              <span className={styles.value}>{images.country}</span>
            </div>
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

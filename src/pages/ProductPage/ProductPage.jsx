import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LargeCard from '../../components/LargeCard/LargeCard';
import ProductsWithScroll from '../../components/Sections/Main/ProductsWithScroll/ProductsWithScroll';
import Characteristic from '../../components/UI/Characteristic/Characteristic';
import { fetchProduct, selectFurniture } from '../../store/furniture/furniture-slice';
import { declensionWordYear } from '../../utils/utils';
import styles from './ProductPage.module.css';
import { selectCart } from '../../store/cart/cart-slice';

function ProductPage() {
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);
	const { furniture, loading } = useSelector(selectFurniture);
	const { cart } = useSelector(selectCart);
	useEffect(() => {
		dispatch(fetchProduct(id));
	}, [dispatch, id]);
	return loading ? null : (
		<div className={styles.content}>
			<LargeCard
				id={id}
				isFavorited={furniture.product.is_favorited}
				brand={furniture.product.brand}
				images={Object.values(furniture.product.images)}
				name={furniture.product.name}
				article={furniture.product.article}
				discount={furniture.product.discount}
				totalPrice={furniture.product.total_price}
				price={furniture.product.price}
				added={cart.products.some((elem) => elem.product.id === +id)}
				availableQuantity={furniture.product.available_quantity}
			/>
			<div className={styles.description}>
				<h3 className={styles.title}>Описание</h3>
				<p className={styles.text}>{furniture.product.description || ''}</p>
			</div>
			<div className={styles.specifications}>
				<h3 className={styles.title}>Характеристики</h3>
				<div className={styles.list}>
					<div className={styles.column}>
						{furniture.product.weight && (
							<Characteristic
								property="Ширина"
								value={`${furniture.product.weight} см`}
							/>
						)}
						{furniture.product.length && (
							<Characteristic
								property="Глубина"
								value={`${furniture.product.length} см`}
							/>
						)}
						{furniture.product.height && (
							<Characteristic
								property="Высота"
								value={`${furniture.product.height} см`}
							/>
						)}
						{furniture.product.material && (
							<Characteristic
								property="Материал"
								value={furniture.product.material.name.toLowerCase()}
							/>
						)}
						{furniture.product.legs_material && (
							<Characteristic
								property="Материал опор"
								value={furniture.product.legs_material.name.toLowerCase()}
							/>
						)}
						{furniture.product.color !== null && (
							<Characteristic
								property="Цвет"
								value={furniture.product.color.name.toLowerCase()}
							/>
						)}
					</div>
					<div className={styles.column}>
						<Characteristic property="Максимальная нагрузка" value="100 кг" />
						{furniture.product.warranty && (
							<Characteristic
								property="Гарантия"
								value={declensionWordYear(furniture.product.warranty)}
							/>
						)}
						{furniture.product.country && (
							<Characteristic
								property="Страна"
								value={furniture.product.country}
							/>
						)}
					</div>
				</div>
			</div>
			<div>
				<div className={styles.wrapper}>
					<h3 className={styles.title}>Похожие товары</h3>
				</div>
				<ProductsWithScroll sameProduct />
			</div>
		</div>
	);
}

export default ProductPage;

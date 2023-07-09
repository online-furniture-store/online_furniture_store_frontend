import Categories from '../../components/Sections/Main/Categories/Categories';
import Intro from '../../components/Sections/Main/Intro/Intro';
import ProductsWithScroll from '../../components/Sections/Main/ProductsWithScroll/ProductsWithScroll';

function HomePage() {
	return (
		<>
			<Intro />
			<Categories />
			<ProductsWithScroll />
			<PopularProducts />
			<Services />
			<ProductsWithScroll fastDelivery />
			<Courier />
		</>
	);
}

export default HomePage;

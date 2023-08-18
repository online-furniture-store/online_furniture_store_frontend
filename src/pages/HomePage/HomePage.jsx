import Categories from '../../components/Sections/Main/Categories/Categories';
import Intro from '../../components/Sections/Main/Intro/Intro';
import ProductsWithScroll from '../../components/Sections/Main/ProductsWithScroll/ProductsWithScroll';
import Services from '../../components/Sections/Main/Services/Services';
import PopularProducts from '../../components/Sections/PopularProducts/PopularProducts';

function HomePage() {
	return (
		<>
			<Intro />
			<Categories />
			<ProductsWithScroll icon="discount" />
			<PopularProducts />
			<Services />
			<ProductsWithScroll icon="delivery" isSmall />
		</>
	);
}

export default HomePage;

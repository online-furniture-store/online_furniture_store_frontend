import Intro from '../../components/Sections/Main/Intro/Intro';
import PopularProducts from '../../components/Sections/PopularProducts/PopularProducts';
import Categories from '../../components/Sections/Main/Categories/Categories';
import Services from '../../components/Sections/Main/Services/Services';
import ProductsWithScroll from '../../components/Sections/Main/ProductsWithScroll/ProductsWithScroll';
import Courier from '../../components/Sections/Courier/Courier';

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

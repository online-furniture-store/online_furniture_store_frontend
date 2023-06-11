import { useState } from 'react';
import DiscountCard from '../UI/DiscountCard/DiscountCard';

function Test() {
	const [isLike, setIsLike] = useState(false);
	const onLikeClick = () => {
		setIsLike(!isLike);
	};
	const data = {
		title: 'Диван Cozy Office Gray',
		newPrice: 42990,
		oldPrice: 49990,
		img: '',
		existense: 71,
		weight: 20,
		load: 100,
		material: 'Экокожа',
	};

	return (
		<DiscountCard
			likeActive={isLike}
			onLikeClick={onLikeClick}
			img={data.img}
			title={data.title}
			newPrice={data.newPrice}
			oldPrice={data.oldPrice}
			isSale
			existense={data.existense}
			weight={data.weight}
			load={data.load}
			material={data.material}
		/>
	);
}

export default Test;

import { useEffect, useState } from 'react';
import DiscountCard from '../UI/DiscountCard/DiscountCard';

function Test() {
	const [isLike, setIsLike] = useState(false);
	const [isSale, setSale] = useState(true);
	const onLikeClick = () => {
		setIsLike(!isLike);
	};

	// useEffect ниже для будущей проверки с запроса,
	// если из базы данных придут результаты, что товар в распродаже,
	// значит нужно поставить иконку, если нет, то не нужно
	// const a вместо нашего запроса из базы данных

	useEffect(() => {
		const a = true;
		if (a === true) {
			setSale(true);
		} else {
			setSale(false);
		}
	});

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
			isSale={isSale}
			existense={data.existense}
			weight={data.weight}
			load={data.load}
			material={data.material}
		/>
	);
}

export default Test;

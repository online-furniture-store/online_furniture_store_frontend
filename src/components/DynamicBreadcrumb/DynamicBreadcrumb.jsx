import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchProduct } from '../../store/furniture/furniture-slice';

export function DynamicBreadcrumb({ match }) {
	const { product } = useSelector((state) => state.furniture.furniture);
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProduct(match.params.pageId));
	}, [match.params.pageId, dispatch]);

	if (location.pathname === `/user/my_orders/${match.params.pageId}`) {
		return <span>{`Заказ № ${match.params.pageId}`}</span>;
	}
	if (location.pathname === `/product/${match.params.pageId}`) {
		return product && <span>{`${product.product_type} ${product.name}`}</span>;
	}
	return null;
}

DynamicBreadcrumb.propTypes = {
	match: PropTypes.oneOfType([PropTypes.object]),
};

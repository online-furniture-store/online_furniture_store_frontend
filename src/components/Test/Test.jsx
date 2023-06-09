import { useSelector, useDispatch } from 'react-redux';
import { getOddPosts } from '../../services/actions/commonActions';

function Test() {
	const { cartCounter, posts } = useSelector((store) => store.commonReducer);
	const dispatch = useDispatch();

	return (
		<>
			<h1>{cartCounter}</h1>
			<button type="button" onClick={() => dispatch(getOddPosts())}>button</button>
			{posts && posts.map(({ title, id }) => (
				<h1 key={id}>{title}</h1>
			))}
		</>
	);
}

export default Test;

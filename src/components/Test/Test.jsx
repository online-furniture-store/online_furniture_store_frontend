import { useSelector } from 'react-redux';

function Test() {
	const test = useSelector((store) => store.commonReducer.test);

	return <h1>{test}</h1>;
}

export default Test;

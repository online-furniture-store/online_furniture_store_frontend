import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppStyles from './App.module.css';
import Test from '../Test/Test';
import { testAction } from '../../services/actions/commonActions';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(testAction('Hello, world!'));
	}, [dispatch]);

	return (
		<div className={AppStyles.App}>
			<Test />
		</div>
	);
}

export default App;

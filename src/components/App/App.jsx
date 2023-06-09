import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './App.module.css';
import Test from '../Test/Test';
import { testAction, getPosts } from '../../services/actions/commonActions';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(testAction('Hello, world!'));
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<div className={styles.App}>
			<Test />
		</div>
	);
}

export default App;
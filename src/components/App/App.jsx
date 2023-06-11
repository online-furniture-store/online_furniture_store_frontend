import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './App.module.css';
import { testAction, getPosts } from '../../services/actions/commonActions';
// import FastDeliveryCard from '../FastDeliveryCard/FastDeliveryCard';
import Test from '../Test/Test';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(testAction('Hello, world!'));
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<div className={styles.App}>
			{/* demo */}
			{/* <FastDeliveryCard
				img=" "
				isFastDelivery="true"
				title="Сталлаж Single office"
				price="25 990"
			/> */}
			<Test />
		</div>
	);
}

export default App;

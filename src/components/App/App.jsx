import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './App.module.css';
import { testAction, getPosts } from '../../services/actions/commonActions';
import FastDeliveryCard from '../FastDeliveryCard/FastDeliveryCard';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(testAction('Hello, world!'));
		dispatch(getPosts());
	}, [dispatch]);

	return (

		<div className={styles.App}>
			{/* demo */}
			<FastDeliveryCard
				img=" "
				isFastDelivery="true"
				title="Сталлаж Single office"
				price="25 990"
			/>
		</div>
	);
}

export default App;

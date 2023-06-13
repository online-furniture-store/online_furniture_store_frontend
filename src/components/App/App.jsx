import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, AboutPage } from '../../pages';
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.App}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

import { useState } from 'react';
import styles from './Courier.module.css';
import Address from '../../UI/AddressInput/AddressInput';
import AddressNumber from '../../UI/AddressNumber/AddressNumber';
import TextField from '../../UI/TextField/TextField';
import Checkbox from '../../UI/Checkbox/Checkbox';

function Courier() {
	const [address, setAddress] = useState('');
	const handleAdressInput = (e) => {
		setAddress(e.target.value);
	};

	const [apartament, setApartament] = useState('');
	const handleApartamentInput = (e) => {
		setApartament(e.target.value);
	};

	const [entrance, setEntrance] = useState('');
	const handleEntranceInput = (e) => {
		setEntrance(e.target.value);
	};

	const [floor, setFloor] = useState('');
	const handleFloorInput = (e) => {
		setFloor(e.target.value);
	};

	const [comment, setComment] = useState('');
	const handleCommentInput = (e) => {
		setComment(e.target.value);
	};

	const [checked, setChecked] = useState(false);

	const changeCheckbox = () => {
		setChecked(!checked);
	};
	return (
		<section className={styles.address}>
			<p className={styles.text}>Адрес доставки</p>
			<Address
				onChange={handleAdressInput}
				value={address}
        isValid
			/>
			<div className={styles.addressNumbers}>
				<AddressNumber
					onChange={handleApartamentInput}
					value={apartament}
					place="Квартира"
				/>
				<AddressNumber
					onChange={handleEntranceInput}
					value={entrance}
					place="Подъезд"
				/>
				<AddressNumber onChange={handleFloorInput} value={floor} place="Этаж" />
			</div>
			<div className={styles.comment}>
				<TextField
					onChange={handleCommentInput}
					value={comment}
					label="Комментарий к доставке"
				/>
			</div>
			<Checkbox
				onChange={changeCheckbox}
				label="Наличие лифта"
				checked={checked}
			/>
		</section>
	);
}
export default Courier;

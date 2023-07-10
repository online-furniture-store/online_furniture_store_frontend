import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './WayToReceive.module.css';
import RadioCircleButton from '../../UI/RadioCircleButton/RadioCircleButton';
import Courier from '../../Forms/Courier/Courier';
import Pickup from '../../Forms/Pickup/Pickup';

import DateBtnForm from '../../Forms/DateBtnForm/DateBtnForm';
import ContainerForms from '../../Forms/ContainerForms/ContainerForms';
import RecipientForm from '../../Forms/RecipientForm/RecipientForm';

function WayToReceive({ control, errors, resetField }) {
	const [delivery, setDelivery] = useState('Самовывоз');
	const handleChangeRadio = (e) => {
		setDelivery(e.target.value);
	};

	return (
		<>
			<ContainerForms>
				<section>
					<p className={styles.header}>Способ получения</p>
					<div className={styles.firstRadio}>
						<RadioCircleButton
							text="Самовывоз"
							name="way"
							value="Самовывоз"
							onChange={handleChangeRadio}
							checked={delivery === 'Самовывоз'}
						/>
					</div>
					<RadioCircleButton
						text="Курьер"
						name="way"
						value="Курьер"
						onChange={handleChangeRadio}
						checked={delivery === 'Курьер'}
					/>
					{delivery === 'Самовывоз' && <Pickup />}
					{delivery === 'Курьер' && (
						<Courier
							control={control}
							errors={errors}
							resetField={resetField}
						/>
					)}
				</section>
			</ContainerForms>
			<ContainerForms>
				<RecipientForm
					control={control}
					errors={errors}
					resetField={resetField}
				/>
			</ContainerForms>

			{delivery === 'Курьер' && (
				<ContainerForms>
					<DateBtnForm control={control} />
				</ContainerForms>
			)}
		</>
	);
}

WayToReceive.propTypes = {
	control: PropTypes.oneOfType([PropTypes.object]),
	errors: PropTypes.oneOfType([PropTypes.object]),
	resetField: PropTypes.func,
};

export default WayToReceive;

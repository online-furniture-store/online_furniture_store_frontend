import React from 'react';
import PropTypes from 'prop-types';
import styles from './CategoriesLinkCard.module.css';
import placeholderImg from '../../assets/img/placeholder.png';

function CategoriesLinkCard({ title, cardRound, img }) {
	return (
		<article className={cardRound ? styles.card_round : styles.card}>
			<img
				alt={`изоражение категории: ${title}`}
				src={img}
				className={styles.image}
				onError={(e) => {
					e.currentTarget.src = placeholderImg;
				}}
			/>
			<h2 className={styles.title}>{title}</h2>
		</article>
	);
}

CategoriesLinkCard.propTypes = {
	title: PropTypes.string.isRequired,
	cardRound: PropTypes.bool,
	img: PropTypes.string.isRequired,
};

export default CategoriesLinkCard;

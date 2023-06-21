import { Pagination, Navigation, EffectCube } from 'swiper';

export const introSlider = {
	modules: [Navigation, Pagination, EffectCube],
	slidesPerView: 1,
	allowTouchMove: false,
	effect: 'cube',
	speed: 1000,
	cubeEffect: {
		shadow: true,
		slideShadows: true,
		shadowOffset: 50,
		shadowScale: 0.94,
	},
};

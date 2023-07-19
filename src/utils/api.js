export class Api {
	#baseurl;

	#headers;

	constructor({ baseUrl, headers }) {
		this.#baseurl = baseUrl;
		this.#headers = headers;
	}

	#onResponse(res) {
		return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
	}

	getAllProducts() {
		return fetch(`${this.#baseurl}api/products/`, {
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	getPopularProducts() {
		return fetch(`${this.#baseurl}api/products/popular/`, {
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	getCollections() {
		return fetch(`${this.#baseurl}api/collections/`, {
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	getCart() {
		return fetch(`${this.#baseurl}api/carts/items/`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	addToCart(product, quantity) {
		return fetch(`${this.#baseurl}api/carts/add_item/`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				...this.#headers,
			},
			body: JSON.stringify({
				product,
				quantity,
			}),
		}).then(this.#onResponse);
	}

	addToFavorites(id) {
		return fetch(`${this.#baseurl}api/products/${id}/favourite/`, {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify({
				id,
			}),
		}).then(this.#onResponse);
	}

	deleteFromCart(id) {
		return fetch(`${this.#baseurl}api/carts/del_item/${id}/`, {
			method: 'DELETE',
			credentials: 'include',
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	getProduct(id) {
		return fetch(`${this.#baseurl}api/products/${id}/`, {
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	jwtCreate(data) {
		return fetch(`${this.#baseurl}api/auth/jwt/create/`, {
			method: 'POST',
			headers: {
				...this.#headers,
			},
			body: JSON.stringify({ ...data }),
		}).then(this.#onResponse);
	}

	jwtRefresh(data) {
		return fetch(`${this.#baseurl}api/auth/jwt/refresh/`, {
			method: 'POST',
			headers: {
				...this.#headers,
			},
			body: JSON.stringify({ ...data }),
		}).then(this.#onResponse);
	}

	jwtVerify(data) {
		return fetch(`${this.#baseurl}api/auth/jwt/verify/`, {
			method: 'POST',
			headers: {
				...this.#headers,
			},
			body: JSON.stringify({ ...data }),
		}).then(this.#onResponse);
	}
}

const api = new Api({
	baseUrl: 'https://ofs.proninteam.ru/',
	headers: {
		'content-type': 'application/json',
	},
});

export default api;

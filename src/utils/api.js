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
		return fetch(`${this.#baseurl}/products/`, {
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}
}

const api = new Api({
	baseUrl: 'https://80.87.107.143/api',
	headers: {
		'content-type': 'application/json',
	},
});

export default api;

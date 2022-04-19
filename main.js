const app = Vue.createApp({
	data() {
		return {
			cart: 0,
			product: 'Socks',
			image: './assets/images/socks_blue.jpg',
			inStock: true,
			details: ['50% cotton', '30% wool', '20% polyester'],
			variants: [
				{ id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
				{ id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
			]

			// sizes: [
			// 	{ id: 100, type: 'small'},
			// 	{ id: 101, type: 'medium'},
			// 	{ id: 102, type: 'large'},
			// ],
			// inventory: 11,
			// onSale: true
			// description: 'Really Cool Socks'
			// url: 'https://github.com/audrywolters'
		}
	}
})

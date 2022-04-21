const app = Vue.createApp({
	data() {
		return {
			cart: 0,
			product: 'Socks',
            brand: 'Vue Mastery',
			selectedVariant: 0,
			details: ['50% cotton', '30% wool', '20% polyester'],
			variants: [
				{ id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
				{ id: 2235, color: 'blue',  image: './assets/images/socks_blue.jpg',  quantity: 0 },
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
	},
	methods: {
		addToCart() {
			this.cart += 1
		},
		updateVariant(index) {
			this.selectedVariant = index
		},
		// removeFromCart() {
		// 	if (this.cart > 0) {
		// 		this.cart -= 1
		// 	}
		// },
	},
	computed: {
		title() {
			return this.brand + ' ' + this.product
		},
		sockImage() {
			return this.variants[this.selectedVariant].image
		},
		inStock() {
			return this.variants[this.selectedVariant].quantity
		}
	}
})

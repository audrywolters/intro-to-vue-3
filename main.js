const app = Vue.createApp({
	data() {
		return {
			product: 'Socks',
			image: './assets/images/socks_green.jpg',
            inStock: true,
            details: [
				'50% cotton', 
				'30% wool', 
				'20% polyester'
			],
			variants: [
				{ id: 2234, color: 'green'},
				{ id: 2235, color: 'blue'},
			],
			sizes: [
				{ id: 100, type: 'small'},
				{ id: 101, type: 'medium'},
				{ id: 102, type: 'large'},
			],


			// inventory: 11,
			// onSale: true
			// description: 'Really Cool Socks'
			// url: 'https://github.com/audrywolters'
		}
	}
})

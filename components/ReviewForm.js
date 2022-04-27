app.component('review-form', {
	template:
		/*html*/
		`<form class="review-form" @submit.prevent="onSubmit">
			<h3>Leave a review</h3>
			<label for="name">Name:</label>
			<input id="name" v-model="name">
		
			<label for="review">Review:</label>      
			<textarea id="review" v-model="review"></textarea>
		
			<label for="rating">Rating:</label>
			<select id="rating" v-model.number="rating">
				<option>5</option>
				<option>4</option>
				<option>3</option>
				<option>2</option>
				<option>1</option>
			</select>

			<label for="recommend">Would you recommend these?</label>
			<select id="recommend" v-model="recommend">
				<option>yes</option>
				<option>no</option>
			</select>
		
			<input class="button" type="submit" value="Submit">
		</form>`,
	data() {
		return {
			name: '',
			review: '',
			recommend: null,
			rating: null
		}
	},
	methods: {
		onSubmit() {
			// user must fill out everything 
			if (this.name === '' || this.review === '' || this.recommend === null || this.rating === null) {
				alert('Review is incomplete. Please fill out every field.')
				return
			}

			// go, do
			let productReview = {
				name: this.name,
				review: this.review,
				recommend: this.recommend,
				rating: this.rating
			}
			this.$emit('review-submitted', productReview)

			// reset
			this.name = '',
			this.review = '',
			this.recommend = null,
			this.rating = null
		}
	}
})

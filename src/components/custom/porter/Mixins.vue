<script>
	export default {
		name: 'mixins',
		props: {
			color: String,
			'color-code': String,
		},
		computed: {
			mixins() {

				return this.$store.state.mixins

				// const mixins = {
				// 	'kubernetes': 4,
				// 	'terraform': 19,
				// 	'aws': 16,
				// 	'exec': 19,
				// 	'azure': 20,
				// 	'helm': 29,
				// }
				// return this.$store.getters.allClaims.reduce((acc, claim, i) => {

				// }, {})
			},
		},
	}
</script>

<template>
	<section :class='`bg_${color}_${colorCode} shadow_${color}_${colorCode}`' id='mixins'>
		<h2>Mixins</h2>
		<ul>
			<li v-for='key in Object.keys(mixins)' :key='key'>
				<span>
					{{key}}
				</span>
				<span>
					{{mixins[key]}}
				</span>
			</li>
		</ul>
	</section>
</template>

<style lang='scss' scoped>
#mixins {
	position: relative;
	grid-area: m;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		width: 80%;
	}

	li {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}
</style>

<script>
	export default {
		name: 'installers',
		props: {
			color: String,
			'color-code': String,
		},
		computed: {
			installers() {
				const res = {}
				for (const key in this.$store.state.claims) res[key] = this.$store.state.claims[key].length
				return res
			},
		},
	}
</script>

<template>
	<section :class='`bg_${color}_${colorCode} shadow_${color}_${colorCode}`' id='installers'>
		<h2>Installers</h2>
		<ul>
			<li v-for='key in Object.keys(installers)' :key='key'>
				<span>
					{{key}}
				</span>
				<span>
					{{installers[key]}}
				</span>
			</li>
		</ul>
	</section>
</template>

<style lang='scss' scoped>
#installers {
	position: relative;
	grid-area: i;

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

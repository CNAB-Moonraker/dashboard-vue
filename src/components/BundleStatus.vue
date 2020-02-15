<script>
	export default {
		name: 'bundle-status',
		props: {
			data: Object,
			color: String,
			'color-code': String,
		},
	}
</script>

<template>
	<section :class='`bg_${color}_${colorCode} shadow_${color}_${colorCode}`' id='bundle-status'>
		<h2>Bundle Status</h2>
		<div v-for='key in Object.keys(data)' :key='key'>
			<h1>{{data[key]}}</h1>
			<h3>{{key}}</h3>
		</div>
	</section>
</template>

<style lang='scss' scoped>
#bundle-status {
	position: relative;
	grid-area: bs;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h1 {
			font-size: 2rem;
			margin: 0;
		}
	}
}
</style>

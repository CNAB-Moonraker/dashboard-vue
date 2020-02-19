<script>
	export default {
		name: `bundles-installed`,
		props: {
			data: Number,
			color: String,
			'color-code': String,
		},
	}
</script>

<template>
	<section :class='`bg_${color}_${colorCode} shadow_${color}_${colorCode}`' id='bundles-installed'>
		<h2>Bundles Installed</h2>
		<h1>{{data}}</h1>
	</section>
</template>

<style lang='scss' scoped>
#bundles-installed {
	position: relative;
	grid-area: bi;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 3rem;
	}
}

</style>

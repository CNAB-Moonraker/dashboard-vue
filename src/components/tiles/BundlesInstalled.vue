<script>
	export default {
		name: `bundles-installed`,
		props: {
			color: String,
			'color-code': String,
		},
		computed: {
			bundlesInstalled() {
				return this.$store.getters.allClaims.filter(claim => claim.result.status !== `failure`).length
			},
			minW: () => 4,
			minH: () => 3,
		},
	}
</script>

<template>
	<section :class='`border_left_${color}_${colorCode}`' id='bundles-installed'>
		<h2>Bundles Installed</h2>
		<h1>{{bundlesInstalled}}</h1>
	</section>
</template>

<style lang='scss' scoped>
#bundles-installed {
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 3rem;
	}
}

</style>

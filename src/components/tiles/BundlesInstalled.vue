<script>
	export default {
		name: `bundles-installed`,
		props: {
			color: String,
			colorCode: String,
		},
		computed: {
			bundlesInstalled() {
				return this.$store.getters.allClaims.filter(claim => claim.result.action === `install` && claim.result.status !== `failure`).length
			},
			totalBundles() {
				return this.$store.getters.allClaims.length
			},
			failures() {
				return this.totalBundles - this.bundlesInstalled
			},
			minW: () => 2,
			minH: () => 1,
			defaultW: () => 8,
			defaultH: () => 3,
		},
	}
</script>

<template>
	<section :class='`border_left_${color}_${colorCode}`' id='bundles-installed'>
		<h2>Bundle Quicklook</h2>
		<div id='metrics' >
			<div class='metric-card'>
				<h3 class='title'>Total</h3>
				<h1>{{totalBundles}}</h1>
			</div>
			<div class='metric-card'>
				<h3 class='title'>Successes</h3>
				<h1>{{bundlesInstalled}}</h1>
			</div>
			<div class='metric-card'>
				<h3 class='title'>Failures</h3>
				<h1>{{failures}}</h1>
			</div>
		</div>
	</section>
</template>

<style lang='scss' scoped>
#bundles-installed {
	display: flex;
	flex-direction: column;
	align-items: center;
	#metrics {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		.metric-card {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			h1 {
				margin: 0;
				font-size: 3em;
			}
			.title {
				padding-bottom: 2px;
				margin: 0px;
			}
		}
	}
}
</style>

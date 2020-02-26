<script>
	export default {
		name: 'bundle-status',
		props: {
			color: String,
			'color-code': String,
		},
		computed: {
			bundleStatus() {
				const res = {
					'In Progress': 0,
					'Failed': 0,
					'Installed': 0,
				}
				for (const claim of this.$store.getters.allClaims)
				{
					switch (claim.result.status) {
						case `failure`:
							res['Failed']++
							break
						case `success`:
							if (claim.result.action === 'install') res['Installed']++
							break
						default:
							break
					}
				}
				return res
			},
		},
	}
</script>

<template>
	<section :class='`bg_${color}_${colorCode} shadow_${color}_${colorCode}`' id='bundle-status'>
		<h2>Bundle Status</h2>
		<div v-for='key in Object.keys(bundleStatus)' :key='key'>
			<h1>{{bundleStatus[key]}}</h1>
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

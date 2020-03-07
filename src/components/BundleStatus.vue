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
					const { status, action } = claim.result
					if (status === `failure`) res['Failed']++
					else if (action === `install` && status === `success`) res[`Installed`]++
					else res[`In Progress`]++
				}
				return res
			},
			minW: () => 4,
			minH: () => 6,
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
	display: flex;
	flex-direction: column;
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

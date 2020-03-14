<script>
	import DonutChart from '@/components/DonutChart.vue'

	export default {
		name: 'mixins',
		components: {
			DonutChart,
		},
		props: {
			color: String,
			'color-code': String,
		},
		computed: {
			mixins() {
				return this.$store.getters.allClaims.reduce((acc, item) => {
					if (!item.bundle.custom || !(item.bundle.custom['sh.porter']) || !('mixins' in item.bundle.custom['sh.porter'])) return acc
					const keys = Object.keys(item.bundle.custom['sh.porter'].mixins)
					keys.forEach(key => {
						if (key in acc) acc[key] = acc[key] + 1
						else acc[key] = 1
					})
					return acc
				}, {})
			},
			series() {
				const { mixins } = this
				return Object.keys(mixins).map(key => mixins[key])
			},
			labels() {
				const { mixins } = this
				return Object.keys(mixins)
			},
			minW: () => 4,
			minH: () => 3,
		},
	}
</script>

<template>
	<section :class='`border_left_${color}_${colorCode}`' id='mixins'>
		<h2>Mixins</h2>
		<donut-chart :series='series' :labels='labels' ></donut-chart>
	</section>
</template>

<style lang='scss' scoped>
#mixins {
	display: flex;
	flex-direction: column;
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

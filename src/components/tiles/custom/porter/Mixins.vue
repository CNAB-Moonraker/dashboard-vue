<script>
	import PieChart from '@/components/PieChart.vue'

	import { colors, getColor, getShade } from '@/util'

	export default {
		name: 'mixins',
		components: {
			PieChart,
		},
		props: {
			color: String,
			colorCode: String,
		},
		data: () => {

			if (!localStorage.moonrakerMixinColors) {

				const borderColor = []
				const backgroundColor = Object.keys(colors).reduce((acc, key) => {
					const c = getColor(acc, '500')
					acc.push(c)
					const b = getShade(c, '800')
					borderColor.push(b)
					return acc
				}, [])

				localStorage.moonrakerMixinColors = JSON.stringify({
					borderColor,
					backgroundColor,
				})
			}

			return {
				claims: [],
				chartData: {
					labels: [],
					datasets: [
						{
							backgroundColor: JSON.parse(localStorage.moonrakerMixinColors).backgroundColor,
							borderColor: JSON.parse(localStorage.moonrakerMixinColors).borderColor,
							borderAlign: 'inner',
							data: [],
						},
					],
				},
				options: {
					maintainAspectRatio: false,
					legend: {
						position: 'right',
						labels: {
							boxWidth: 20,
							fontSize: 20,
							fontColor: '#fff',
							fontFamily: `'Ubuntu', sans-serif`,
						},
					},
					layout: {
						padding: {
							top: 0,
							right: 30,
							bottom: 0,
							left: 30,
						},
					},
				},
			}
		},
		mounted() {
			this.getAllClaims()
			this.getChartData()
		},
		methods: {
			getChartData() {
				this.chartData = this.claims.reduce((acc, item) => {

					const { custom } = item.bundle
					if (!custom || !('sh.porter' in custom) || !('mixins' in custom['sh.porter'])) return acc

					const { mixins } = custom['sh.porter']

					const keys = Object.keys(mixins)
					const values = Object.values(mixins)

					keys.forEach(key => {
						let i = acc.labels.indexOf(key)
						if (i < 0) {
							acc.labels.push(key)
							acc.datasets[0].data.push(0)
							i = acc.labels.length - 1
						}

						acc.datasets[0].data[i]++
					})

					return acc
				}, this.chartData)
			},
			getAllClaims() {
				this.claims = this.$store.getters.allClaims
			},
		},
		computed: {
			minW: () => 2,
			minH: () => 1,
			defaultW: () => 5,
			defaultH: () => 5,
			myStyles () {
				return {
					position: `relative`,
					height: `calc(100% - 7rem)`,
					width: `100%`,
				}
			},
		},
	}
</script>

<template>
	<section :class='`border_left_${color}_${colorCode}`' id='mixins'>
		<h2>Mixins</h2>
		<pie-chart v-if='claims.length' :styles='myStyles' :chart-data='chartData' :options='options'></pie-chart>
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

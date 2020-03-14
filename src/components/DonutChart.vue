<script>
	// import VueApexCharts from 'apexcharts'
	import VueApexCharts from 'vue-apexcharts'

	export default {
		name: `donut-chart`,
		props: {
			series: {
				type: Array,
			},
			labels: {
				type: Array,
			},
		},
		components: {
			apexchart: VueApexCharts,
		},
		data() {
			return {
				options: {
					colors: [
						`#f44336`,
						`#00bcd4`,
						`#9c27b0`,
						`#009688`,
						`#03a9f4`,
						`#4caf50`,
						`#e91e63`,
						`#673ab7`,
						`#ff5722`,
						`#3f51b5`,
						`#2196f3`,
						`#8bc34a`,
						`#ffeb3b`,
						`#cddc39`,
						`#ffc107`,
						`#ff9800`,
					],
					labels: this.labels,
					legend: {
						fontSize: `20px`,
						labels: {
							colors: `#fff`,
						},
					},
					chart: {
						width: 200,
					},
					stroke: {
						width: 0,
					},
					dataLabels: {
						style: {
							borderWidth: 0,
						},
						formatter: (value) => {
							return value / 10
						},
					},
				},
			}
		},
	}
</script>

<template>
	<div id='donut-chart'>
		<apexchart type='donut' :series='series' height='500' :options='options'></apexchart>
	</div>
</template>

<style lang='scss' scoped>
#donut-chart {
	position: relative;
}
</style>

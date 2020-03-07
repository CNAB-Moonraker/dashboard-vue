<script>
	import VueApexCharts from 'apexcharts'

	export default {
		name: `donut-chart`,
		components: {
			apexchart: VueApexCharts,
		},
		data() {
			return {
				series: [44, 55, 41, 17, 15],
				chartOptions: {
					chart: {
						type: 'donut',
					},
					responsive: [
						{
							breakpoint: 480,
							options: {
								chart: {
									width: 200,
								},
								legend: {
									position: 'bottom',
								},
							},
						},
					],
				},
			}
		},
	}
</script>

<template>
	<div id='donut-chart'>
		<apexchart type='donut' :options='chartOptions' :series='series'></apexchart>
	</div>
</template>

<style lang='scss' scoped>
#donut-chart {
	position: relative;
}
</style>

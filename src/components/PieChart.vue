<script>

	import { Pie, mixins } from 'vue-chartjs'
	const { reactiveProp } = mixins

	export default {
		name: 'pie-chart',
		mixins: [reactiveProp],
		extends: Pie,
		props: ['options'],
		mounted() {
			this.renderChart(this.chartData, this.$props.options)
		},
	}
</script>

<script>
	export default {
		name: 'installers',
		props: {
			data: Object,
			color: String,
			'color-code': String,
		},
	}
</script>

<template>
	<section :class='`bg_${color}_${colorCode} shadow_${color}_${colorCode}`' id='installers'>
		<h2>Installers</h2>
		<ul>
			<li v-for='key in Object.keys(data)' :key='key'>
				<span>
					{{key}}
				</span>
				<span>
					{{data[key]}}
				</span>
			</li>
		</ul>
	</section>
</template>

<style lang='scss' scoped>
#installers {
	position: relative;
	grid-area: i;

	display: flex;
	flex-direction: column;
	justify-content: center;
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

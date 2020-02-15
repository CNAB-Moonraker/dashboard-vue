<script>
	export default {
		name: `recent-bundles`,
		props: {
			data: Array,
			color: String,
			'color-code': String,
		},
	}
</script>

<template>
	<section :class='`bg_${color}_${colorCode} shadow_${color}_${colorCode}`' id='RecentBundles'>
		<h2>Recent Bundles</h2>
		<ul>
			<li v-for='item in data' :key='item.name'>
				<span>
					{{item.name}}
				</span>
				<span>
					{{item.action}}
				</span>
			</li>
		</ul>
	</section>
</template>

<style lang='scss' scoped>
#RecentBundles {
	position: relative;
	grid-area: rb;

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

<script>
	export default {
		name: `recent-bundles`,
		props: {
			color: String,
			'color-code': String,
		},
		computed: {
			recentBundles() {
				return [...this.$store.getters.allClaims]
					.sort((a, b) =>
						new Date(a.modified).getTime() - new Date(b.modified).getTime()
					)
					.slice(0, 6)
					.map(claim => ({
						name: claim.name,
						action: claim.result.action,
					}))
			},
			minW: () => 4,
			minH: () => 3,
		},
	}
</script>

<template>
	<section :class='`bg_${color}_${colorCode} shadow_${color}_${colorCode}`' id='RecentBundles'>
		<h2>Recent Bundles</h2>
		<ul>
			<li v-for='item in recentBundles' :key='item.name'>
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

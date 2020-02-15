<template>
	<div id='dash-section'>
		<h1>Bundles Installed: {{test}}</h1>
	</div>
</template>

<script>
	export default {
		name: `dash-section`,
		props: {
			test: String,
		},
		data() {
			return {
			}
		},
		mounted() {
			console.log(this.$props.test)
		},
	}
</script>

<style lang='scss' scoped>
#dash-section {
	position: relative;
}
</style>

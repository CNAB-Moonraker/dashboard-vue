<template>
	<div id='app'>
		<DashSection :test='bundlesInstalled' />
	</div>
</template>

<script>
	import DashSection from '@/components/DashSection'

	import store from '@/store'

	export default {
		name: `app`,
		components: {
			DashSection,
		},
		data() {
			return {
				bundlesInstalled: store.bundlesInstalled,
			}
		},
	}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
:root {
	font-family: 'Ubuntu', sans-serif;
}

body {
	position: relative;
	margin: 0;
	height: 100vh;
	width: 100vw;
}

#app {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>

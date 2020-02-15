<script>
	import BundlesInstalled from '@/components/BundlesInstalled'
	import RecentBundles from '@/components/RecentBundles'
	import Mixins from '@/components/Mixins'
	import Installers from '@/components/Installers'
	import BundleStatus from '@/components/BundleStatus'

	import logo from '@/img/MOONRAKER.svg'

	import store from '@/store'

	export default {
		name: `app`,
		components: {
			BundlesInstalled,
			RecentBundles,
			Mixins,
			Installers,
			BundleStatus,
		},
		data() {
			return {
				state: store.state,
				logo,
				colorCode: 'A400',
			}
		},
		mounted() {
		},
	}
</script>

<template>
	<div id='app' class='bg_blue_grey_900'>
		<header>
			<img :src='logo' >
			<h4>Moonraker</h4>
		</header>
		<main>
			<bundles-installed :data='state.bundlesInstalled' color='orange' :color-code='colorCode' />
			<recent-bundles :data='state.recentBundles' color='indigo' :color-code='colorCode' />
			<mixins :data='state.mixins' color='deep_purple' :color-code='colorCode' />
			<installers :data='state.installers' color='green' :color-code='colorCode' />
			<bundle-status :data='state.bundleStatus' color='pink' :color-code='colorCode' />
		</main>
	</div>
</template>

<style lang='scss'>
// @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
@import url('scss/color.scss');

:root {
	font-family: 'Ubuntu', sans-serif;
	font-size: 20px;
}

body {
	position: relative;
	margin: 0;
	height: 100vh;
	width: 100vw;
}

#app {
	position: relative;

	height: 100vh;
	width: 100vw;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	color: white;

	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		img {
			height: 9rem;
		}

		h4 {
			font-size: 2rem;
			margin: 0;
			text-shadow: 0 0 10px rgba(255, 255, 255, .5);
			// text-shadow: 0 2px 5px rgba(0,0,0,0.5);
		}
	}

	main {
		height: 60vh;
		width: 80vw;

		display: grid;
		grid-gap: 2rem;
		grid-template-areas:
		'bi rb rb m'
		'i i bs m';

		section {
			border-radius: 4px;
			// box-shadow: 0 2px 5px 0 rgba(0,0,0,0.5);
		}
	}
}
</style>

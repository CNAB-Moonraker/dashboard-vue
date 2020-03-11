<script>
/* eslint-disable vue/no-unused-components */
	import Vue from 'vue'

	import VueGridLayout from 'vue-grid-layout'

	import BundlesInstalled from '@/components/tiles/BundlesInstalled.vue'
	import RecentCommands from '@/components/tiles/RecentCommands.vue'
	import Installers from '@/components/tiles/Installers.vue'

	// import Mixins from '@/components/custom/porter/Mixins.vue'

	import logo from '@/img/MOONRAKER.svg'

	export default {
		name: `app`,
		components: {
			GridLayout: VueGridLayout.GridLayout,
			GridItem: VueGridLayout.GridItem,
			BundlesInstalled,
			RecentCommands,
			Installers,
			// Mixins,
		},
		data() {
			return {
				logo,
				colorCode: '500',
				layout: [],
			}
		},
		mounted() {
			this.$store.dispatch('getClaims')

			if (localStorage.grid) this.layout = JSON.parse(localStorage.grid)
			else {

				const colors = [
					`red`,
					`pink`,
					`purple`,
					`deep_purple`,
					`indigo`,
					`blue`,
					`light_blue`,
					`cyan`,
					`teal`,
					`green`,
					`light_green`,
					`lime`,
					`amber`,
					`orange`,
					`deep_orange`,
				]

				const tiles = [
					BundlesInstalled,
					RecentCommands,
					Installers,
					// Mixins,
				]

				let curX = 0

				tiles.forEach((tile, i) => {

					const c = Math.floor(Math.random() * 15)

					const mw = tile.computed.minW() || 1
					const mh = tile.computed.minH() || 1

					if (curX + mw > 12) curX = 0

					this.layout.push({
						x: curX,
						y: 0,
						w: mw,
						h: mh,
						i,
						minW: mw,
						minH: mh,
						comp: tile.name,
						props: {
							color: colors[c],
							colorCode: this.colorCode,
						},
					})

					curX += mw

				})
			}
		},
		methods: {
			refresh() {
				if (confirm(`Pressing OK will reset all tiles on the dashboard. Are you sure?`)) {
					localStorage.clear()
					window.location.reload()
				}
			},
			movedEvent(){
				localStorage.grid = JSON.stringify(this.layout)
			},
			resizedEvent(){
				localStorage.grid = JSON.stringify(this.layout)
			},
			containerResizedEvent(){
				localStorage.grid = JSON.stringify(this.layout)
			},
		},
	}
</script>

<template>
	<div id='app'>
		<header>
			<img id='moonraker-logo' :src='logo'>
			<h4>Moonraker</h4>
			<i id='refresh-button' class='material-icons' @click='refresh' alt='test'>refresh</i>
		</header>
		<main>
			<grid-layout
				class='grid-layout'
				:responsive='false'
				:layout.sync='layout'
				:col-num='12'
				:row-height='80'
				:is-draggable='true'
				:is-resizable='true'
				:is-mirrored='false'
				:vertical-compact='true'
				:margin='[10, 10]'
				:use-css-transforms='true'
			>

				<grid-item
					class='grid-item'
					v-for='item in layout'
					:x='item.x'
					:y='item.y'
					:w='item.w'
					:h='item.h'
					:i='item.i'
					:minW='item.minW'
					:minH='item.minH'
					:key='item.i'
					@moved='movedEvent'
					@resized='resizedEvent'
					@container-resized='containerResizedEvent'
				>
					<component :is='item.comp' v-bind='item.props'></component>
				</grid-item>
			</grid-layout>
		</main>
	</div>
</template>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
@import url('scss/color.scss');

html {
	// background-color: #263238;
	background-color: #383d43;
}

* {
	-ms-overflow-style: none;
	scrollbar-width: none;
}

::-webkit-scrollbar {
	display: none;
}

:root {
	font-family: 'Ubuntu', sans-serif;
	font-size: 20px;
}

body {
	position: relative;
	margin: 0;
	min-height: 100vh;
	width: 100vw;
}

#app {
	position: relative;

	min-height: 100vh;
	width: 100vw;

	color: white;

	header {
		position: relative;

		display: flex;
		justify-content: center;
		align-items: center;

		img {
			height: 3rem;
		}

		h4 {
			font-size: 1.5rem;
			margin: 0;
			text-shadow: 0 2px 5px rgba(0,0,0,0.5);
		}
	}

	main {
		display: flex;
		justify-content: center;

		.grid-layout {
			min-height: 60vh;
			width: 80vw;
		}
	}
}

.grid-item {
	border-radius: 4px;
	box-shadow: 0 2px 5px 0 rgba(0,0,0,0.5);
	overflow: hidden;

	section {
		height: 100%;
		background-color: #43484f;
		// overflow-y: scroll;
	}
}

#refresh-button {
	position: absolute;
	top: 1rem;
	right: 1rem;
	cursor: pointer;
	transition: 1s ease-in-out;
}

#refresh-button:hover {
	transform: rotate(360deg);
}

</style>

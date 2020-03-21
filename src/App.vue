<script>
/* eslint-disable vue/no-unused-components */

	import Vue from 'vue'
	import VueGridLayout from 'vue-grid-layout'
	import BundlesInstalled from '@/components/tiles/BundlesInstalled.vue'
	import RecentCommands from '@/components/tiles/RecentCommands.vue'
	import Installers from '@/components/tiles/Installers.vue'
	import Mixins from '@/components/tiles/custom/porter/Mixins.vue'

	import logo from '@/img/MOONRAKER.svg'

	import { getColorName } from '@/util'

	export default {
		name: `app`,
		components: {
			GridLayout: VueGridLayout.GridLayout,
			GridItem: VueGridLayout.GridItem,
			BundlesInstalled,
			RecentCommands,
			Installers,
			Mixins,
		},
		data: () => ({
			logo,
			colorCode: '500',
			layout: [],
			menuOpen: false,
		}),
		async mounted() {
			await this.$store.dispatch('getClaims')

			if (localStorage.grid) this.layout = JSON.parse(localStorage.grid)
			else {

				const tiles = [
					Mixins,
					RecentCommands,
					Installers,
					BundlesInstalled,
				]

				let curX = 0

				const colorNames = []

				tiles.forEach((tile, i) => {

					const c = Math.floor(Math.random() * 15)

					const mw = tile.computed.minW() || 1
					const mh = tile.computed.minH() || 1
					const dw = tile.computed.defaultW() || 1
					const dh = tile.computed.defaultH() || 1

					if (curX + mw > 12) curX = 0

					colorNames.push(getColorName(colorNames))

					console.log(colorNames[i])

					this.layout.push({
						x: curX,
						y: 0,
						w: dw,
						h: dh,
						i,
						minW: mw,
						minH: mh,
						comp: tile.name,
						props: {
							color: colorNames[i],
							colorCode: this.colorCode,
						},
					})

					curX += dw

				})
			}
		},
		methods: {
			refresh() {
				if (confirm(`This will change the current dashboard layout to the default. Proceed?`)) {
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
			<i id='settings-button' :class='menuOpen ? `material-icons active` : `material-icons`' @click='menuOpen = !menuOpen' alt='test'>settings</i>

			<div id='nav-menu' :class='menuOpen ? `active` : ``'>
				<div class='dropdown-content'  @click='refresh'>
					Reset Layout
				</div>
			</div>

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

:root {
	--drawer-width: 300px;
	--drawer-trans: all .35s ease-in-out;
}

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

#nav-menu {
	position: fixed;
	top: 0;
	right: calc(var(--drawer-width) * -1);
	z-index: 1000;
	height: 100vh;
	width: var(--drawer-width);
	background-color: #43484f;
	transition: var(--drawer-trans);
	padding-top: 3rem;
}

#nav-menu.active {
	right: 0;
	box-shadow: 0 0 50px 0 rgba(0,0,0,0.5);
}

#settings-button {
	position: absolute;
	top: 1rem;
	right: 1rem;
	cursor: pointer;
	transition: var(--drawer-trans);
	z-index: 1001;
}

#settings-button.active {
	right: calc(var(--drawer-width) - 24px - 1rem);
}

/* Links inside the dropdown */
.dropdown-content {
	color: white;
	text-decoration: none;
	padding: 1rem;
	margin-right: 2px;
}

/* Change color of dropdown links on hover */
.dropdown-content:hover {
	cursor: pointer;
	background-color: #535963;
}

</style>

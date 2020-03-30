<script>

	import dockerapp from '@/img/dockerapp.png'
	import porter from '@/img/porter.png'
	import duffle from '@/img/duffle.png'

	export default {
		name: 'installers',
		props: {
			color: String,
			colorCode: String,
		},
		computed: {
			installers() {
				const res = {}
				for (const key in this.$store.state.claims) {
					res[key] = {
						number: this.$store.state.claims[key].length,
					}
					switch (key) {
						case `porter`:
							res[key].img = porter
							break
						case `duffle`:
							res[key].img = duffle
							break
						case `dockerapp`:
							res[key].img = dockerapp
							break
						default:
							break
					}
				}
				return res
			},
			minW: () => 2,
			minH: () => 1,
			defaultW: () => 4,
			defaultH: () => 3,
		},
	}
</script>

<template>
	<section :class='`border_left_${color}_${colorCode}`' id='installers'>
		<h2>Bundles by Installer</h2>
		<ul>
			<li class='installer-li' v-for='key in Object.keys(installers)' :key='key'>
				<span>
					<span class='installer-logo-container'>
						<img v-if='installers[key].img' class='installer-logo' :src='installers[key].img' />
						<i v-else class='installer-logo default material-icons' alt=''>work</i>
					</span>
					<span>{{key}}</span>
				</span>
				<span>
					{{installers[key].number}}
				</span>
			</li>
		</ul>
	</section>
</template>

<style lang='scss' scoped>
#installers {
	display: flex;
	flex-direction: column;
	align-items: center;

	.installer-li > span {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: .7rem;

		& > span {
			text-transform: capitalize;
			height: 2rem;
			width: 4rem;
			display: flex;
			align-items: center;

			&.installer-logo-container {
				justify-content: center;

				& > .installer-logo {
					height: 2rem;
					display: flex;
					justify-self: center;

					&.default {
						color: gray;
						font-size: 2rem;
					}
				}
			}
		}
	}

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

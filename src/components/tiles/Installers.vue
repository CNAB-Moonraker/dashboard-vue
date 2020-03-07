<script>

	import dockerapp from '@/img/dockerapp.png'
	import porter from '@/img/porter.png'
	import duffle from '@/img/duffle.png'

	export default {
		name: 'installers',
		props: {
			color: String,
			'color-code': String,
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
			minW: () => 3,
			minH: () => 3,
		},
	}
</script>

<template>
	<section :class='`border_left_${color}_${colorCode}`' id='installers'>
		<h2>Installers</h2>
		<ul>
			<li class='installer-li' v-for='key in Object.keys(installers)' :key='key'>
				<span>
					<img class='installer-logo' :src='installers[key].img' />
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
		margin-bottom: .7rem;

		> span {
			text-transform: capitalize;
		}

		img {
			margin-right: 1rem;
		}
	}

	.installer-logo {
		height: 2rem;
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

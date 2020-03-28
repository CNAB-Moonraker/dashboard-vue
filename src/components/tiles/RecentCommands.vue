<script>
	export default {
		name: `recent-commands`,
		props: {
			color: String,
			colorCode: String,
		},
		computed: {
			recentCommands() {
				return [...this.$store.getters.allClaims]
					.sort((a, b) =>
						new Date(a.modified).getTime() - new Date(b.modified).getTime()
					)
					.map(claim => {
						const res = {
							name: claim.name,
							action: claim.result.action,
						}
						switch(claim.result.status) {
							case `failure`:
								res.status = `Failure`
								res.color = `background-color: #E68080`
								break
							case `success`:
								res.status = `Success`
								res.color = `background-color: #A6CDA6`
								break
							default:
								res.status = `In Progress`
								res.color = `background-color: #FAE088`
								break
						}
						return res
					})
			},
			minW: () => 5,
			minH: () => 2,
			defaultW: () => 7,
			defaultH: () => 5,
		},
	}
</script>

<template>
	<section :class='`border_left_${color}_${colorCode}`' id='recent-commands'>
		<h2>Recent Commands</h2>
		<div class='wrapper'>
			<table>
				<thead>
					<tr>
						<th>Bundle Name</th>
						<th>Last Action</th>
						<th>Result</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for='item in recentCommands' :key='item.name'>
						<td>{{item.name}}</td>
						<td><span>{{item.action}}</span></td>
						<td><span>{{item.status}}<div class='dot' :style='item.color'></div></span></td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>

<style lang='scss' scoped>
#recent-commands {
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 0 2rem;

	.wrapper {
		width: 100%;
		overflow-y: scroll;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		thead {
			border-bottom: 3px solid rgba(255,255,255,0.5);

			tr {
				th {
					text-align: left;
					padding: 0 1rem .35rem 1rem;
				}
			}
		}

		tbody {
			tr:nth-child(even) {
				background-color: rgba(0,0,0,0.15);
			}

			tr {
				td {
					height: 2rem;
					padding: 0 1rem;
					span {
						text-transform: capitalize;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.dot {
							height: 15px;
							width: 15px;
							border-radius: 50%;
						}
					}
				}
			}
		}
	}
}
</style>

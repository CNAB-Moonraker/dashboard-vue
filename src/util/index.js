export const colors = [
	`#f44336`,
	`#00bcd4`,
	`#9c27b0`,
	`#009688`,
	`#03a9f4`,
	`#4caf50`,
	`#e91e63`,
	`#673ab7`,
	`#ff5722`,
	`#3f51b5`,
	`#2196f3`,
	`#8bc34a`,
	`#ffeb3b`,
	`#cddc39`,
	`#ffc107`,
	`#ff9800`,
]

export const getColor = (usedColors = []) => {
	let color = ``
	do color = colors[Math.floor(Math.random() * colors.length)]
	while(usedColors.includes(color))
	return color
}

export const colorNames = [
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

export const getColorName = (usedColorNames = []) => {
	let colorName = ``
	do colorName = colorNames[Math.floor(Math.random() * colorNames.length)]
	while(usedColorNames.includes(colorName))
	return colorName
}
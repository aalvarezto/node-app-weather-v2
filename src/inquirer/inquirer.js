"use strict"

import askOptions from "./askOptions.js"
import pause from "./pause.js"
import readInput from "./readInput.js"
import showPlaces from "./showPlaces.js"
import displayCityInfo from "./displayCityInfo.js"

const displaySelect = () =>
	console.log(
		`${
			"====================\n".green +
			"  Select an option:\n".white +
			"====================\n".green
		}`
	)

export {
	askOptions,
	pause,
	displaySelect,
	readInput,
	showPlaces,
	displayCityInfo,
}

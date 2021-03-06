"use strict"

import {
	displaySelect,
	askOptions,
	pause,
	readInput,
	displayCityInfo,
	showPlaces,
} from "./src/inquirer/inquirer.js"
import { getHistory, saveData } from "./src/model.js"
import { getWeather, requestCitys } from "./src/searches/index.js"
import { composeAsync, peek, traceAsync } from "./src/utils.js"
import dotenv from "dotenv"
dotenv.config()

const main = async () => {
	let opt

	do {
		console.clear()
		displaySelect()

		opt = await askOptions()

		opt =
			opt === 1
				? await composeAsync(
						saveData,
						displayCityInfo,
						getWeather,
						showPlaces,
						requestCitys,
						// traceAsync("estoy después de readInput()"),
						readInput
				  )()
				: opt === 2
				? await composeAsync(
						pause,
						displayCityInfo,
						getWeather,
						showPlaces,
						getHistory
				  )()
				: opt === 0
				? 0
				: ""

		opt && (await pause())
		console.clear()
	} while (opt !== 0)
}

main()

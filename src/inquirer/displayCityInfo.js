"use strict"

import colors from "colors"
import { capFirst, traceAsync } from "../utils.js"

const { blue, red, yellow, green } = colors

const openWeatherError = `
${red("Warning!!")}
Make sure you provided the right api keys in the .env file for:
		
	${blue("OpenWeather")}

	Link -> ${yellow("https://openweathermap.org")}
`

const removeID = ([x, y]) => x !== "id"

const formatKey = ([x, y]) => [(capFirst(x) + ":").padEnd(15), y]

const formatValue = ([x, y]) => [x, yellow(y)]

const createMessageString = ([x, y]) => `${x} ${y}`

const displayToConsole = x => console.log(x)

const displayCityInfo = async ([city, error]) =>
	String(error).match("Error: There are no inputs for this request.")
		? []
		: error
		? await traceAsync()(openWeatherError)
		: city
		? [
				green(`\nCity Information\n`),
				...Object.entries(city)
					.filter(removeID)
					.map(formatKey)
					.map(formatValue)
					.map(createMessageString),
		  ].forEach(displayToConsole) || city
		: console.log("No city selected.") || []

export default displayCityInfo

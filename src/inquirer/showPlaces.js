"use strict"

import colors from "colors"
import { traceAsync } from "../utils.js"
import _createPrompt from "./_createPrompt.js"

const { green, blue, red, yellow } = colors

const mapBoxError = `
${red("Warning!!")}
Make sure you provided the right api keys in the .env file for:
		
	${blue("MapBox")}

	Link -> ${yellow("https://www.mapbox.com")}
`

const showPlaces = async ([list, error]) =>
	String(error).match("Error: There are no inputs for this request.")
		? []
		: error
		? await traceAsync()(mapBoxError)
		: list[0]
		? _createPrompt({
				type: "list",
				name: "city",
				message: "Select Place: ",
				choices: [
					...list.map((place, i) => ({
						value: place,
						name: `${green(i + 1)}. ${place?.city}`,
					})),
					{ value: "0", name: `${green(0)}. Cancel\n` },
				],
		  })()
		: console.log("No city selected.") || []

export default showPlaces

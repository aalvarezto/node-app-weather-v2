"use strict"

import colors from "colors"
import inquirer from "inquirer"
import { capFirst } from "../utils.js"

const { green } = colors

const _createPrompt =
	(...input) =>
	async () =>
		(await inquirer.prompt(input))[input[0]["name"]]

const inquirerMenu = _createPrompt({
	type: "list",
	name: "option",
	message: "What would you like to do?",
	choices: [
		"Search City", //
		"History",
		"Exit",
	].map((option, i, { length }) => ({
		value: length > ++i ? i : 0,
		name: `${length > i ? green(i) : green(0)}. ${option}.`,
	})),
})

const pause = _createPrompt({
	type: "input",
	name: "enter",
	message: `Press ${"ENTER".green} to continue.`,
})

const readInput = _createPrompt({
	type: "input",
	name: "city",
	message: "City: ",
	validate: ({ length }) => (length === 0 ? "Please input a value" : true),
})

const showPlaces = ([list, error]) =>
	list[0]
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
		: console.log("No city selected.")

const displayCityInfo = async ([city]) =>
	city
		? [
				`\nCity Information\n`.green,
				...Object.entries(city)
					.filter(([key]) => key !== "id")
					.map(
						([key, value]) =>
							`${(capFirst(key) + ":").padEnd(15)} ${
								String(value).yellow
							}`
					),
		  ].forEach(v => console.log(v)) || city
		: console.log("No city selected.") || city

const displaySelect = () =>
	console.log(
		`${
			"====================\n".green +
			"  Select an option:\n".white +
			"====================\n".green
		}`
	)

export {
	inquirerMenu,
	pause,
	displaySelect,
	readInput,
	showPlaces,
	displayCityInfo,
}

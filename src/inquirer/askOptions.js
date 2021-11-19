"use strict"

import colors from "colors"
import _createPrompt from "./_createPrompt.js"

const { green } = colors

const askOptions = _createPrompt({
	type: "list",
	name: "option",
	message: "What would you like to do?",
	choices: [
		"Search City", //
		"History",
		"Exit",
	].map((option, i, { length }) => ({
		value: length > ++i ? i : 0,
		name: `${green(length > i ? i : 0)}. ${option}.`,
	})),
})

export default askOptions

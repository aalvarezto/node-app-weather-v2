"use strict"

import _createPrompt from "./_createPrompt.js"

const readInput = _createPrompt({
	type: "input",
	name: "city",
	message: "City: ",
	validate: ({ length }) => (length === 0 ? "Please input a value" : true),
})

export default readInput

"use strict"

import _createPrompt from "./_createPrompt.js"

const pause = _createPrompt({
	type: "input",
	name: "enter",
	message: `Press ${"ENTER".green} to continue.`,
})

export default pause

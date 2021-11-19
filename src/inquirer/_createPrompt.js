"use strict"

import inquirer from "inquirer"

const _createPrompt =
	(...input) =>
	async () =>
		(await inquirer.prompt(input))[input[0]["name"]]

export default _createPrompt

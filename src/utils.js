"use strict"

import ora from "ora"
import { pause } from "./inquirer/inquirer.js"

const spinnerTryCatch =
	f =>
	async (...xs) => {
		console.clear()
		const spinner = ora("Loading data").start()
		let [data, error] = [null, null]

		try {
			data = await f(...xs)
		} catch (err) {
			error = err
		}

		spinner.stop()
		return [data, error]
	}

const composeAsync =
	(...fns) =>
	async x => {
		let count = fns.length

		while (count > 0) {
			count--
			x = await fns[count](x)
		}

		return x
	}

const capFirst = string => string.slice(0, 1).toUpperCase() + string.slice(1)

const peek = x => {
	console.log(x)
	return x
}

const traceAsync = lable => async x => {
	console.log(lable)

	console.log(x)

	await pause()

	return x
}

export { spinnerTryCatch, composeAsync, peek, capFirst, traceAsync }

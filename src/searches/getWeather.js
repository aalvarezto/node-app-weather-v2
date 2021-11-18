"use strict"

import axios from "axios"
import colors from "colors"

const { green } = colors

const getWeatherParams = () => ({
	appid: process.env.OPENWEATHER_KEY,
	units: "metric",
})

const _getWeather = async objData => {
	const { lat, lon } = objData

	if (!lat || !lon) throw new Error(`There are no inputs for this request.`)

	const { data } = await axios
		.create({
			baseURL: `https://api.openweathermap.org/data/2.5/weather`,
			params: { ...getWeatherParams(), lat, lon },
		})
		.get()

	return {
		...objData,
		description: data.weather[0].description,
		temperature: green(data.main.temp),
		min: data.main.temp_min,
		max: data.main.temp_max,
	}
}

export default _getWeather

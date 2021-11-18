"use strict"

import axios from "axios"

const getCityParams = () => ({
	access_token: process.env.MAPBOX_KEY,
	limit: 5,
})

const _requestCitys = async places => {
	const { data } = await axios
		.create({
			baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${places}.json`,
			params: getCityParams(),
		})
		.get()

	return data.features.map(({ id, place_name, center }) => ({
		id,
		city: place_name,
		lon: center[0],
		lat: center[1],
	}))
}

export default _requestCitys

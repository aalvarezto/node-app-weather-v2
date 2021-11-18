"use strict"

import _getWeather from "./getWeather.js"
import _requestCitys from "./requestCitys.js"
import { spinnerTryCatch } from "../utils.js"

const requestCitys = spinnerTryCatch(_requestCitys)

const getWeather = spinnerTryCatch(_getWeather)

export { requestCitys, getWeather }

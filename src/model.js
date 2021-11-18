"use strict"

const History = []

const readDB = () => {}

const saveData = async data =>
	data &&
	!History.some(place => place.city === data.city) &&
	History.unshift(data) &&
	History.splice(5)

const getHistory = async () => [History.length && History]

export { getHistory, saveData }

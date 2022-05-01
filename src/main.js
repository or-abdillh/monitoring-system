// scripts
import createRow from "./script/createRow.js"

// Endpoint
const ENDPOINT = 'http://localhost:8080'

// Get data from server
const getData = async (callbcak) => {
	try {
		const rows = await fetch(ENDPOINT + '/activity')
		callbcak( await rows.json() )
	} catch(err) { alert(err) }
}

// Fetching
getData(res => {
	// Get table body 
	const tbody = document.querySelector('#table_body')
	const rows = res.results

	// array of element
	const elements = []

	// Create element by loop rows
	rows.forEach( (row, x) => {
		elements.push( createRow(row, x + 1, ENDPOINT) )
	})

	// Render
	tbody.innerHTML = elements.join('')
})

import createRow from './createRow.js'
import config from '../../config.js'

// Fetching

const renderTable = async () => {
	try {
		let rows = await fetch(config.endpoint + '/activity')
		rows = await rows.json()
		
		// Get table body 
		const tbody = document.querySelector('#table_body')

		// array of element
		const elements = []

		// Create element by loop rows
		rows.results.forEach( (row, x) => {
			elements.push( createRow(row, x + 1, config.endpoint) )
		})

		// Render
		tbody.innerHTML = elements.join('')
	
	} catch(err) { alert(err) }
}

export default renderTable

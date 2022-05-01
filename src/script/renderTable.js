import createRow from './createRow.js'
import getData from './getData.js'
import config from '../../config.js'

// Fetching

const renderTable = () => {

  getData(res => {
    // Get table body 
  	const tbody = document.querySelector('#table_body')
	const rows = res.results

	// array of element
    const elements = []

	// Create element by loop rows
	rows.forEach( (row, x) => {
		elements.push( createRow(row, x + 1, config.endpoint) )
	})

	// Render
	tbody.innerHTML = elements.join('')
  })
}

export default renderTable

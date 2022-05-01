// Get data from server
import config from "../../config.js"

const getData = async (callbcak) => {
	try {
		const rows = await fetch(config.endpoint + '/activity')
		callbcak( await rows.json() )
	} catch(err) { alert(err) }
}

export default getData

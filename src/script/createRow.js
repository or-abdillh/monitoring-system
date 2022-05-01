// Generate dynamic element
const createRow = (row, num, endpoint) => {
	// Destruct row
	const { title, client, leaderName, leaderEmail, leaderPicture, startAt, finishAt, progress, id } = row

	// Generate element
	const element = `
        <tr class="${ num % 2 === 0 ? 'table-light' : '' }">
			<td>${num}</td>
			<td>${title}</td>
            <td>${client}</td>
            <td>
				<div class="d-flex gap-2">
				 <img src="${endpoint}/public/${leaderPicture}" class="img-thumbnail rounded-circle border-none" width="50" alt="avatar" />
                  <span>
                    <p class="mb-0">${leaderName}</p>
                    <small class="text-secondary">${leaderEmail}</small>
                  </span>
                </div>
             </td>
			 <td>${ new Date(startAt).toLocaleDateString() }</td>
             <td>${ new Date(finishAt).toLocaleDateString() }</td>
			 <td>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: ${progress}%;" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100">${progress}%</div>
                </div>
            </td>
            <td>
              <div class="d-flex gap-1">
                <a class="btn btn-primary"><i class="fa fa-edit"></i></a>
                <a class="btn btn-danger"><i class="fa fa-trash"></i></a>
              </div>
            </td>
           </tr> 
	`
	return element
}

export default createRow

// Interactive form handler

const formActivityRange = () => {
  // Get range input
  const rangeInput = document.querySelector('#progress')
  const rangeEl = document.querySelector('#progress_value')
  
  rangeInput.addEventListener('input', e => {
    rangeEl.innerHTML = "Current progress " + e.target.value + "%"
  })
}

export default formActivityRange

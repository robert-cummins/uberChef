let citySelect = document.getElementById('city-select')
let mainSubmit = document.getElementById('main-submit')

mainSubmit.addEventListener('click', () => {
    let selectedCity = citySelect.value
    console.log(selectedCity)
})
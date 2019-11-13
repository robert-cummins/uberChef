let citySelect = document.getElementById('city-select')
let mainSubmit = document.getElementById('main-submit')
let mainForm = document.getElementById('main-form')

mainSubmit.addEventListener('click', () => {
    let selectedCity = citySelect.value
    console.log(selectedCity)
    mainForm.action = selectedCity
})
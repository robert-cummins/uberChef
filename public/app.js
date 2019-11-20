let citySelect = document.getElementById('city-select')
let mainSubmit = document.getElementById('main-submit')
let mainForm = document.getElementById('main-form')
let selectedCity


if(mainSubmit){
    mainSubmit.addEventListener('click', () => {
        let selectedCity = citySelect.value
        mainForm.action = selectedCity
    })
}

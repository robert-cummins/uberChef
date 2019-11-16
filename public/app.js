let citySelect = document.getElementById('city-select')
let mainSubmit = document.getElementById('main-submit')
let mainForm = document.getElementById('main-form')
let cuisineForm = document.getElementById('cuisine-form')
let cuisineSelect = document.getElementById('cuisine-select')
let cuisineSubmit = document.getElementById('cuisine-submit')
let selectedCity
let url = window.location.href
let anchor = document.getElementById('anchor')

function getImageDirectoryByFullURL(url){
    return url.split('/').pop()
}

if(mainSubmit){
    mainSubmit.addEventListener('click', () => {
        
        let selectedCity = citySelect.value
       
        mainForm.action = selectedCity
    })
}
selectedCity = getImageDirectoryByFullURL(url)



cuisineSubmit.addEventListener('click', () =>{
    console.log(anchor.href)
    location = getImageDirectoryByFullURL(url)
    console.log(location.pathname)
    anchor.href= "http://localhost:3000"+ location.pathname + '?' + cuisineSelect.value
    console.log(anchor.href)
    // console.log(url)
    // let selectedCuisine = cuisineSelect.value
    // console.log(selectedCuisine)
    // cuisineForm.action =  `${selectedCity}${selectedCuisine}`
    // console.log(cuisineForm.action)
})
const BASE_URL = 'http://universities.hipolabs.com/search?country=United+Kingdom'

window.addEventListener('DOMContentLoaded', () => {
  getSchools()
})

function getSchools() {
  // grabs ul where im gonna put the schools once I have them
  const ul = document.getElementById('univeristy-list')
  
  // only need one perameter for fetch bc defaults to send an HTTP GET request
  // fetch instantaneoulsy returns a promise object
  // promise object statuses: pending, fulfilled, rejected
  // fetch is asynchornus execution (allows execution to continute while fetch is being worked on) 
  fetch(BASE_URL)
  .then(res => res.json())
  .then(data => {
    console.log('a')
  })

}
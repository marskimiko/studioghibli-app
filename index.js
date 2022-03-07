const fetchLink = "https://ghibliapi.herokuapp.com/films";
let addFilm = false;
const addBtn = document.querySelector("#new-film-btn");
addBtn.addEventListener("click", addFilmButton);

document.addEventListener("DOMContentLoaded", () => {
  getFilms();
  document.getElementById("films").addEventListener("click", getFilms);

  document.querySelector("#submitBtn").addEventListener("click", handleSubmit);
});

function getFilms() {
  const ul = document.getElementById("film-list");
  const info = document.getElementById("info");
  info.innerHTML = "";
  ul.innerHTML = "";
  // only need one perameter for fetch bc defaults to send an HTTP GET request
  // fetch instantaneoulsy returns a promise object
  // promise object statuses: pending, fulfilled, rejected
  // fetch is asynchornus execution (allows execution to continute while fetch is being worked on)
  fetch(fetchLink)
    .then(res => res.json())
    .then(data => {
      // iterates over Lis to give me an array of the Lis
      // data-id adds id as a key in the dataset
      data.forEach(film => {
        // go through each show, make an li and add it (append it) to the innerHTML of the ul
        ul.innerHTML += `
      <li>
      <a href="#" data-id="${film.id}">${film.title}</a>
      </li>
      
      `;
      });
      attachClicksToLinks();
    });
}

const attachClicksToLinks = () => {
  const films = document.querySelectorAll("a");
  films.forEach(film => {
    film.addEventListener("click", showFilm);
  });
};

const showFilm = event => {
  // click on film and shows film's details 
  console.log(event.target.dataset.id);
  const info = document.getElementById("info");
  const ul = document.getElementById("film-list");
  ul.innerHTML = "";
  fetch(fetchLink + `/${event.target.dataset.id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      info.innerHTML = `<h1>${data.title}</h1>
<h3>Description:</h3>
<p>${data.description}</p>
<h3>Realse Date:</h3>
<p>${data.release_date}</p>
<h3>Running Time:</h3>
<p>${data.running_time}</p>
<h3>Rotten Tomato:</h3>
<p>${data.rt_score}%</p>`;
    });
};

function addFilmButton() {
  const filmFormContainer = document.querySelector(".container");
  addFilm = !addFilm;
  if (addFilm) {
    filmFormContainer.style.display = "block";
  } else {
    filmFormContainer.style.display = "none";
  }
}

function handleSubmit(event) {
  const ul = document.getElementById("film-list");

  // prevent reloading of page when clicking submit
  event.preventDefault();

  // get the input value
  const film = document.querySelector("#new-film-name");

  //create new list element
  const newFilm = document.createElement("li");
  console.log(film);
  newFilm.textContent = film.value;

  ul.appendChild(newFilm);

  // clear the input field
  film.value = "";
}

//////
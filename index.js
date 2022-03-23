const fetchLink = "https://ghibliapi.herokuapp.com/films";

let addFilm = false;
const addBtn = document.querySelector("#new-film-btn");
addBtn.addEventListener("click", addFilmButton);

document.addEventListener("DOMContentLoaded", () => {
  getFilms();
  document.getElementById("films").addEventListener("click", getFilms);

  document.querySelector("#submitBtn").addEventListener("click", handleSubmit);
});

// tghis function gets the films from the api and puts them on the page
function getFilms() {
  const ul = document.getElementById("film-list");
  const info = document.getElementById("info");
  info.innerHTML = "";
  ul.innerHTML = "";

  fetch(fetchLink)
    .then(response => response.json())
    .then(data => {
      data.forEach(film => {
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
<h3>Release Date:</h3>
<p>${data.release_date}</p>
<h3>Running Time:</h3>
<p>${data.running_time} minutes</p>
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
  event.preventDefault();
  
  const ul = document.getElementById("film-list");
  const film = document.querySelector("#new-film-name");
  const newFilm = document.createElement("li");
  
  console.log(film);
  
  newFilm.textContent = film.value;
  ul.appendChild(newFilm);
  film.value = "";
}

const fetchLink = "https://ghibliapi.herokuapp.com/films";

let addFilm = false;
const addBtn = document.querySelector("#new-film-btn");
addBtn.addEventListener("click", addFilmButton);

//anonymous arrow function to do when the dom is loaded
// uses getFilms() to get the films and put them on the page
document.addEventListener("DOMContentLoaded", () => {
  getFilms();
  document.getElementById("films").addEventListener("click", getFilms);

  document.querySelector("#submitBtn").addEventListener("click", handleSubmit);
});

// tghis function gets the films from the api and puts them on the page
function getFilms() {
  // grabs main ul as place we are going to put the films once we fetch them
  const ul = document.getElementById("film-list");

  // where we oput the information about the film
  const info = document.getElementById("info");

  //empties out the content so we can determine what goes inside using innerHTML
  info.innerHTML = "";
  ul.innerHTML = "";
    
  // fetch allows for asynchornus execution (allows execution to continute while fetch is being worked on)
  // two things fetch does is sends an HTTP GET request (default) and instantaneoulsy returns a promise object
  // promise object statuses: pending, fulfilled, rejected(failed)

  fetch(fetchLink)
    
     // .then is called on the promise object to keep checking the status of the fetch request to see if it has been exectured yet, once its done it will execute the .then
    // response.json converts JSON which returns a promise which we return from our callback function(returning the content from the response after converting it into the format we need
    .then(response => response.json())

    // . then receives the promise object returned from the first call to .then. We then capture the object in the parameter 'data' and pass it into a second callback function where we write code to do DOM maniputlation using the data returned from the server
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
// ______________________________________________________________________________



// Testing out like feature

// const fetchLink = "https://ghibliapi.herokuapp.com/films";
// let addFilm = false;
// const addBtn = document.querySelector("#new-film-btn");
// addBtn.addEventListener("click", addFilmButton);

// document.addEventListener("DOMContentLoaded", () => {
//   getFilms();
//   document.getElementById("films").addEventListener("click", getFilms);

//   document.querySelector("#submitBtn").addEventListener("click", handleSubmit);
// });

// function getFilms() {
//   const ul = document.getElementById("film-list");
//   const info = document.getElementById("info");
//   info.innerHTML = "";
//   ul.innerHTML = "";
//   // only need one perameter for fetch bc defaults to send an HTTP GET request
//   // fetch instantaneoulsy returns a promise object
//   // promise object statuses: pending, fulfilled, rejected
//   // fetch is asynchornus execution (allows execution to continute while fetch is being worked on)
//   fetch(fetchLink)
//     .then(res => res.json())
//     .then(data => {
//       // iterates over Lis to give me an array of the Lis
//       // data-id adds id as a key in the dataset
//       data.forEach(film => {
//         // go through each show, make an li and add it (append it) to the innerHTML of the ul
//         ul.innerHTML += `
//       <li>
//       <a href="#" data-id="${film.id}">${film.title}</a>
//       <button class="like-button">♥</button>
//       <span id="likes">0 likes</span>
//       </li>
//       `;
//       likeFeature(film);
//      });
//       attachClicksToLinks();
//             // searchFilms();
    
//     });
// }

// const attachClicksToLinks = () => {
//   const films = document.querySelectorAll("a");
//   films.forEach(film => {
//     film.addEventListener("click", showFilm);
//   });
// };

// const showFilm = event => {
//   // click on film and shows film's details 
//   console.log(event.target.dataset.id);
//   const info = document.getElementById("info");
//   const ul = document.getElementById("film-list");
//   ul.innerHTML = "";
//   fetch(fetchLink + `/${event.target.dataset.id}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       info.innerHTML = `<h1>${data.title}</h1>
// <h3>Description:</h3>
// <p>${data.description}</p>
// <h3>Release Date:</h3>
// <p>${data.release_date}</p>
// <h3>Running Time:</h3>
// <p>${data.running_time} minutes</p>
// <h3>Rotten Tomato:</h3>
// <p>${data.rt_score}%</p>`;
//     });
// };

// function addFilmButton() {
//   const filmFormContainer = document.querySelector(".container");
//   addFilm = !addFilm;
//   if (addFilm) {
//     filmFormContainer.style.display = "block";
//   } else {
//     filmFormContainer.style.display = "none";
//   }
// }

// function handleSubmit(event) {
//   const ul = document.getElementById("film-list");

//   // prevent reloading of page when clicking submit
//   event.preventDefault();

//   // get the input value
//   const film = document.querySelector("#new-film-name");

//   //create new list element
//   const newFilm = document.createElement("li");
//   console.log(film);
//   newFilm.textContent = film.value;

//   ul.appendChild(newFilm);

//   // clear the input field
//   film.value = "";
// }

// function likeFeature() {
//   const likeButton = document.querySelectorAll('.like-button')
//   //console.log(film)
  
//   //likeButton.addEventListener("click", incrementLikes)

//   likeButton.forEach(likeButton => {
//     likeButton.addEventListener("click", () => {
//       console.log()
//       let likes = document.querySelectorAll('#likes')
//       likes.forEach(likes => {
//         num = parseInt(likes.innerText)
//         num += 1
//         likes.innerText = `${num} likes`
//       })
//     })
//   })
// }

// // function incrementLikes() {
// //   let likes = document.querySelectorAll('#likes')
// //   likes.forEach(likes => {
// //     num = parseInt(likes.innerText)
// //     num += 1
// //     likes.innerText = `${num} likes`
// //   })
// // }



// // function incrementLikes() {
// //   console.log('boop')
// //   let likes = document.querySelector('#likes')
// //   console.log(likes)
// //   num = parseInt(likes.innerText)
// //   num += 1
// //   likes.innerText = `${num} likes`
// //   console.log(num)
// // }

// // function searchFilms() {
// //   const input = document.getElementById('myInput')
// //   const filter = input.value.toUpperCase();
// //   const ul = document.getElementById("film-list");
// //   const li = ul.getElementsByTagName('li')

// //   for (i = 0; i < li.length; i++) {
// //     a = li[i].getElementsByTagName("a")[0];
// //     txtValue = a.textConent || a.innerText;
// //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
// //       li[i].style.display = "";
// //     } else {
// //       li[i].style.display = "none;"
// //     }
// //   }
// // }
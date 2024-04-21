const API_toprated_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4ab94620b95053e9e2e2896b557594cc';
const API_popular_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=4ab94620b95053e9e2e2896b557594cc';
const API_upcoming_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=4ab94620b95053e9e2e2896b557594cc';

let topmovieInfo = [];


async function getTopRatedInfo(){
    try{const data = await fetch (API_toprated_URL);
    const dataToJSON = await data.json();
    topmovieInfo = dataToJSON.results || [];
    console.log(topmovieInfo);
    generateAllCards(topmovieInfo , movieContainer);}
    catch(error){
        console.log("There was an error", error);
        topmovieInfo = []
    }
}


const movieContainer = document.getElementById('movie-container');


function createMovieCard(data , container){
    let movieUI = `<div class="card" style="width: 300px; 
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    margin-right: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">


    <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" class="card-img-top" alt="...">
    <div class="card-body">
      <h4>${data.title}</h4>
      <p class="card-text">Release Date : ${data.release_date}</p>
      <p class="card-text">Viewers Rating : ${data.vote_average}</p>
      <p class="card-text">Popularity Score : ${data.popularity}</p>
    </div>
  </div>`;

  container.innerHTML += movieUI;
}

function generateAllCards(movieData = [],container) {
    for ( i = 0; i < movieData.length ; i++){
        createMovieCard(movieData[i],container);
    }

}

getTopRatedInfo();




let popmovieInfo = [];

const popmovieContainer = document.getElementById('movie-container-pop');


async function getPopularInfo(){
    try{const data = await fetch (API_popular_URL);
    const dataToJSON = await data.json();
    popmovieInfo = dataToJSON.results || [];
    console.log(popmovieInfo);
    generateAllCards(popmovieInfo , popmovieContainer);}
    catch(error){
        console.log("There was an error", error);
        popmovieInfo = []
    }
}

getPopularInfo();


let upmovieInfo = [];

const upmovieContainer = document.getElementById('movie-container-up');


async function getUpcomingInfo(){
    try{const data = await fetch (API_upcoming_URL);
    const dataToJSON = await data.json();
    upmovieInfo = dataToJSON.results || [];
    console.log(upmovieInfo);
    generateAllCards(upmovieInfo , upmovieContainer);}
    catch(error){
        console.log("There was an error", error);
        upmovieInfo = []
    }
}

getUpcomingInfo();
const addMvieButton = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const movies=[];
const movieList=document.getElementById('movie-list');
const validate = (value) => value.trim() === '';
const  renderMovies=()=>{
    if(movies.length===0){
        // if there is no mives then dont show the list
        movieList.classList.remove('visible');
    }
    else{
        movieList.classList.add('visible');
    }

}
const createMoviesDomLiElemet=(newMovie)=>{
    const movieDomLiItem=document.createElement('li');
    let text=newMovie.info.title + ' - ';
    for(const key in newMovie.info){
        if(key!=='title'){
            text=text+`${key}:${newMovie.info[key]}`;
        }
    }
    movieDomLiItem.textContent=text;
    movieList.appendChild(movieDomLiItem);
}
const addMovieHandler = () => {

    //becuse we do not need this inputs anywhere else of our code we are assigning them here
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    //checkinh for validation

    if (validate(title) || validate(extraName) || validate(extraValue)) {
        return;
    }
    
    //if everything is ok creating a new movie

    const newMovie={
        info:{
            title,
            [extraName]:extraValue
        },
        id:Math.random()
    };
    movies.push(newMovie);
    createMoviesDomLiElemet(newMovie);
    renderMovies();
}

const searchMovieHandler=()=>{
    const searchText=document.getElementById('filter-title').value;
    if(validate(searchText)){
        return;
    }
    const moviesToBeDeleted=Array.from(movieList.children).filter(movie=> {
       return !movie.textContent.includes(searchText);
    });
    moviesToBeDeleted.forEach(e=>{
        movieList.removeChild(e);
    });

    
}

addMvieButton.addEventListener('click',addMovieHandler);
searchBtn.addEventListener('click',searchMovieHandler);
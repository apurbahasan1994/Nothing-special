const modal=document.querySelector('.modal');
const addBtn=document.querySelector('.add-btn');
const backdrop=document.getElementById('backdrop');
const cancelAddMovieBtn=document.querySelector('.btn--passive');
const confirmAddMovieBtn=document.querySelector('.btn--success');
const inputs=document.querySelectorAll('input');
const movies=[];

const toogleBackdrop=()=>{
    backdrop.classList.toggle('visible');
}
const toogleMovieModal=()=>{
    modal.classList.toggle('visible');
    toogleBackdrop();
}
const cancelMovieModal=()=>{
    toogleMovieModal();
}
const backdropClickHandler=()=>{
    toogleMovieModal();
}
const clearMovieHandler=()=>{
    inputs.forEach(element=>element.value='');
}
const addMovieHandler=()=>{
    const titleValue=inputs[0].value;
    const imagrurlValue=inputs[1].value;
    const ratingValue=inputs[2].value;
    if(titleValue.trim()==='' || imagrurlValue.trim()===''|| ratingValue.trim()===''){
        alert('please enter a valid value');
        return;
    }
    const newMovies={
        title:titleValue,
        image:imagrurlValue,
        rating:ratingValue
    };
    movies.push(newMovies);
    toogleMovieModal();
    clearMovieHandler();
    
}

addBtn.addEventListener("click",toogleMovieModal);
backdrop.addEventListener('click',toogleBackdrop)
cancelAddMovieBtn.addEventListener("click",backdropClickHandler);
confirmAddMovieBtn.addEventListener('click',addMovieHandler);


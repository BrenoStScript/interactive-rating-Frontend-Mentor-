
function showRating(){

    let rating = document.querySelector('input[type="radio"]:checked');
    let text = document.querySelector('.rate-value');

    text.innerHTML = rating.value;

    let show = document.querySelector('.show');
    let hidden = document.querySelector('.hidden');

    hidden.classList.remove('hidden');
    show.classList.add('hidden');



}


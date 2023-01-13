fetch("movies.json")
    .then(res => res.json())
    .then(films => {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let film of films) {
            out += `
            <td class="td-list"> 
            <img class="image" src='${film.img_url}'> 
            <li class="list">${film.title}</li> 
            <li class="list">${'Réalisateur : ' + film.real}</li> 
            <li class="list">${'Durée :' + film.time}</li> 
            <li class="list">${'Année de production : ' + film.year}</li> 
            <li class="list">${'Acteurs : ' + film.actor}</li> 
            </td>
            `
        }
        placeholder.innerHTML = out;
    });

function searchPage() {
    let input = document.getElementById('search').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('td-list', 'tBody');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "block";
        }
    }
}


let submitButton = document.querySelector('.button');
let input = document.querySelector('.form');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    let inputValue = input.value;
    console.log(inputValue);
});
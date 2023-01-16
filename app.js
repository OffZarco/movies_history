let sortOrder = 1;
window.onload = sortItems();

var btnSort = document.getElementById("btnSort");
var values = ["A > Z", "Z > A"];
var currentValue = 1;

function sortItems() {
    fetch("movies.json")
        .then(res => res.json())
        .then(films => {
            films.sort((a, b) => (a.title > b.title) ? sortOrder : -sortOrder);
            sortOrder *= -1;
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
            <li class="list actor">${'Acteurs : ' + film.actor}</li> 
            </td>
            `
            }
            placeholder.innerHTML = out;
        });
    currentValue = (currentValue + 1) % values.length;
    btnSort.innerHTML = values[currentValue];
}


function searchPage() {
    let input = document.getElementById('search').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('td-list', 'tBody');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "";
        }
    }
}
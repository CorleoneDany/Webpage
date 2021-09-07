import {getFilmDetail} from "./request.js";

export default async function setModal(){
    let modal = document.getElementById("myModal");

    let info = await document.getElementById("modal-div")

    let films = document.querySelectorAll(".open-modal")
    for(let film of films){
        film.addEventListener("click", async function (event){
            let filmInfo = await getFilmDetail(film.getAttribute("data-url"))
            let title = await document.getElementById("modal-title")
            title.innerText = filmInfo.title
            let img = await document.getElementById("modal-img")
            img.src = filmInfo.image_url


            info.innerHTML += "Genres : " + filmInfo.genres + "<br/>"
            info.innerHTML += "Date de sortie : " +filmInfo.date_published + "<br/>"
            info.innerHTML += "Rated : " + filmInfo.rated + "<br/>"
            info.innerHTML += "Score : " + filmInfo.imdb_score + "<br/>"
            info.innerHTML += "Directeurs : " + filmInfo.directors + "<br/>"
            info.innerHTML += "Acteurs : " + filmInfo.actors + "<br/>"
            info.innerHTML += "Description : " + filmInfo.description + "<br/>"
            info.innerHTML += "Durée : " + filmInfo.duration + "<br/>"
            info.innerHTML += "Pays : " + filmInfo.countries + "<br/>"
            info.innerHTML += "Résultats box office : " + filmInfo.worldwide_gross_income + "<br/>"

            // insérer les données dans les éléments de la modale
            modal.style.display = "flex";
        })
    }

    let span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
        info.innerHTML = ""
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            info.innerHTML = ""
        }
    }
}


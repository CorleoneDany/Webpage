import Carousel from "./carousel.js"
import "./carousel_v2.js"

const requestURL = "http://localhost:8000/api/v1"
let movies = {}

/**
 * Retourne le meilleur film et place les donnèes dans l'html.
 */
export function get_Best_Movie() {
    fetch(requestURL + "/titles/?sort_by=-imdb_score")
        .then(response => response.json())
        .then(data => {
            let element = document.getElementById("MeilleurFilm")
            return_html_from_data(element, data["results"][0])
        });
}

export async function getFilmDetail(url) {
    const response = await fetch(url)
    const film = await response.json()
    return film
}

/**
 * Retourne les 7 premiers films d'une catégorie et les place dans la constante movies (dict) par type de films (list).
 */
export async function get_Movies_By_Type(type) {
    let genre = type
    if (!type) {
        genre = ""
        type = "Best"
    }
    let best_movies = []
    let page1 = requestURL + "/titles/?sort_by=-imdb_score&genre=" + genre
    let page2 = requestURL + "/titles/?page=2&sort_by=-imdb_score&genre=" + genre
    for (let url of [page1, page2]) {
        const response = await fetch(url)
        const data = await response.json()
        let movies_data = data["results"]
        for (let result in movies_data) {
            best_movies.push(movies_data[result]);
        }
    }

    return_carousel_v2(best_movies, type)
}


/**
 * Retourne les données via les id de films.
 */
function return_Data_From_Id(id) {
    fetch(requestURL + "/titles/" + id)
        .then(response => response.json())
        .then(data => {
            return data
        })
}


function print_Image_From_Id(element, data) {
    let content = `<div id="${data.title}" class="square">

    <img src="${data.image_url}" alt="L'image du film ${data.title}" class="img"></img>`

    element.innerHTML += content + "</div>"

}

/**
 * Ajoute les données dans l'element html via les données de film.
 */
function return_html_from_data(element, data) {
    let content = `<div id="${data.title}" class="square">

    <img src="${data.image_url}" alt="L'image du film ${data.title}" class="img"></img>
    <h1> ${data.title} </h1>`


    for (let genre of data.genres) {
        content += `<p> ${genre} </p>`
    }
    content += `<p> ${data.year} </p>
                <p> ${data.imdb_score} </p>`

    for (let director of data.directors) {
        content += `<p> ${director} </p>`
    }

    element.innerHTML += content + "</div>"
}

/**
 * Ajoute les données dans l'element html via les données de film + données supplémentaires prises via l'id du film.
 */
function return_complete_html_from_data(element, data) {
    let content = `<div id="${data.title}" class="square">

    <img src="${data.image_url}" alt="L'image du film ${data.title}" class="img"></img>
    <p> ${data.title} </p>`


    for (let genre of data.genres) {
        content += `<p> ${genre} </p>`
    }
    content += `<p> ${data.year} </p>
                <p> ${data.imdb_score} </p>`

    for (let director of data.directors) {
        content += `<p> ${director} </p>`
    }
    content += `<p> ${data.duration} </p>
                <p> ${data.countries} </p>
                <p> ${data.usa_gross_income} </p>
                <p> ${data.description} </p>`

    element.innerHTML += content + "</div>"
}

function return_carousel(films, type) {
    let element = document.getElementById("Container")
    let category = document.createElement("h1")
    category.style = "text-align: center;"
    category.innerText = type
    // crée le titre

    element.appendChild(category)
    let id = `carousel_${type}`
    let carousel = document.createElement("div")
    carousel.setAttribute("class", "js-carousel")
    carousel.setAttribute("id", id)
    let ul = document.createElement("ul")

    // crée la div 

    for (let film of films) {
        let li = document.createElement("li")
        let img = document.createElement("img")
        img.setAttribute("src", film.image_url)
        img.setAttribute("alt", `L'image du film ${film.title}`)
        li.appendChild(img)
        li.setAttribute("class", "open-modal")
        li.setAttribute("data-url", film.url)
        ul.appendChild(li)
    }

    // ajoute les affiches de films dans la div 

    carousel.appendChild(ul)

    element.appendChild(carousel)
    return new Carousel({
        elem: id,    // id of the carousel container
        autoplay: false,     // starts the rotation automatically
        infinite: true,      // enables the infinite mode
        interval: 15000,      // interval between slide changes
        initial: 0,          // slide to start with
        dots: false,          // show navigation dots
        arrows: true,        // show navigation arrows
        buttons: false,      // hide play/stop buttons,
        btnStopText: 'Pause' // STOP button text
    });

    // transforme les images en carousel
}

function return_carousel_v2(films, type) {
    let container = document.getElementById("Container")
    let category = document.createElement("h1")
    category.style = "text-align: center;"
    category.innerText = type
    // crée le titre

    container.appendChild(category)
    let id = `carousel_${type}`
    let carousel = document.createElement("div")
    carousel.setAttribute("id", id)
    carousel.setAttribute("class", "carousel_v2")
    let div_Elder = document.createElement("div")
    div_Elder.setAttribute("class", `Elder-carousel_${type}`)

    // crée la div 

    for (let film of films) {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute("src", film.image_url)
        img.setAttribute("alt", `L'image du film ${film.title}`)
        img.setAttribute("class", "ec__img")
        div.appendChild(img)
        div.setAttribute("class", "open-modal")

        div.setAttribute("data-url", film.url)
        div_Elder.appendChild(div)
    }

    // ajoute les affiches de films dans la div 

    carousel.appendChild(div_Elder)

    container.appendChild(carousel)
    return new ElderCarousel(`.Elder-carousel_${type}`);


    // transforme les images en carousel
}
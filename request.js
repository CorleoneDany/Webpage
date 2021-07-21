const requestURL = "http://localhost:8000/api/v1"
const movies = {}

function get_Data() {

    fetch(requestURL + "/titles/")
        .then(response => {
            return response.json()
        })
        .then(response => {
            console.log(response)
        })



    // le js retournera le html dans les grilles

    // boucle pour chaque film dans result -> modifier le html des squares dynamiquement -> dataset < data- >


}

function get_Best_Movie() {
    fetch(requestURL + "/titles/?sort_by=-imdb_score")
        .then(response => response.json())
        .then(data => console.log(data["results"][0]));

    // <div id="Meilleur_Film">

    //     <div class="square">

    //     </div>

    // </div>
}

function get_Movies_By_Type(type) {
    fetch(requestURL + "/titles/?sort_by=-imdb_score&genre=" + type.charAt(0).toUpperCase())
        .then(response => response.json())
        .then(data => console.log(data["results"][0, 6]))
    //for (movie in data) {
    //    movies[type] = data
    //}
}

function update_Body() {
    let body = document.getElementById("Container")
    for (type in movies) {
        for (movie_info in type) {
            // Ajouter l'html dans le body 
        }
    }
}
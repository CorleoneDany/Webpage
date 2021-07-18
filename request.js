const requestURL = "http://localhost:8000/api/v1"

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

    // action / animation / fantasy / horror genre=<name>

}

function get_Best_Movie() {
    fetch(requestURL + "/titles/?sort_by=-imdb_score")
        .then(response => {
            return response.json()
            // Prendre seulement le premier resultat de results et ok
        })
}

function get_Movies_By_Type(type) {
    fetch(requestURL + "/titles/?sort_by=-imdb_score&genre=" + type)
        .then(response => {
            return response.json()
            // Prendre seulement les 7 premiers résultats dans results puis les insérer dans la div avec la data = a type
        })
}
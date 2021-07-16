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

    // sort_by=<imdb_score>
}
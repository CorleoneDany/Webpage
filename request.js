const requestURL = "http://localhost:8000/api/v1"

function get_Data() {

    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            return request.response['results'];
        }
    }

    request.open('GET', requestURL + "/titles");
    request.responseType = 'json';
    request.send();

}
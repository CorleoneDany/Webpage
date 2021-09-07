import setModal from "./modal.js";
import { get_Best_Movie, get_Movies_By_Type } from "./request.js";

async function run() {
    get_Best_Movie()
    let bestMovies = await get_Movies_By_Type("")
    let actionMovies = await get_Movies_By_Type("Action")
    let animationMovies = await get_Movies_By_Type("Animation")
    let fantasyMovies = await get_Movies_By_Type("Fantasy")
    let horrorMovies = await get_Movies_By_Type("Horror")
    setModal()
}

run()
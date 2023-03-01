const btnEl = document.getElementById("btn");

const animeContainerEl = document.getElementById("animeContainer");

const animeEl = document.getElementById("anime"); 

const animeNameEl = document.getElementById("animeName");

const apiURL = "https://api.catboys.com/img";

btnEl.addEventListener("click", async function(){
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading.."
        animeNameEl.innerText = "Updating.."
        animeEl.src = "spinner.gif";
        const result = await fetch(apiURL).then((res) => res.json());
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime"
        animeContainerEl.style.display="block"
        animeEl.src = result.url;
        animeNameEl.innerText = result.artist;
    } catch (error) {
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime"
        animeNameEl.innerText = "an error occured, please try later again"
    }
})
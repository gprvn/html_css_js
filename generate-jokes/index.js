const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apikey = "a19NC2CRvIcKLu/XHj4cUQ==Kj0AbobMKWoSLPOI"

const options = {
    method: "GET",
    headers: { "X-Api-Key": apikey }
}
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke() {

    try {
        jokeEl.innerText = "getting a joke for you...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading.."
        const response = await fetch(apiURL, options)
            .then((response) => response.json())
            .then((joke) => {
                jokeEl.innerText = joke[0].joke;
            });
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE"
    } catch (error) {
        jokeEl.innerText = "An Error happened, try later!!"
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE"
        console.log(error)
    }



    //  const data = response.json();
    //  console.log(data.joke);
}
btnEl.addEventListener("click", getJoke)
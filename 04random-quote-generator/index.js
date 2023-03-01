// const containerEl = document.getElementById("container");

const btnEl = document.getElementById("btn");
const apiURL = "https://api.quotable.io/random";
const quoteEle = document.getElementById("quote");
const authorEle = document.getElementById("author")

async function getQuote(){
    try {
        btnEl.innerText = "Loading..";
        btnEl.disabled = true;
        quoteEle.innerText = "updating...";
        authorEle.innerText = "updating...";
        const response = await fetch(apiURL).then((res)=>res.json());
        quoteEle.innerText = response.content;
        authorEle.innerText = "~"+response.author;
        btnEl.innerText = "get a quote";
        btnEl.disabled = false;
    } catch (error) {
        console.log(error);
        quoteEle.innerText = "an error occured, please try again later";
        authorEle.style.display = "none";
        btnEl.innerText = "get a quote";
        btnEl.disabled = true;
    }
}
getQuote()
btnEl.addEventListener("click", getQuote )
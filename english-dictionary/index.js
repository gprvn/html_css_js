const inoutEl = document.getElementById("input");

const infoTextEl = document.getElementById("info-text");

const meaningContainerEle = document.getElementById("meaning-container");

const titleEle = document.getElementById("title");

const meaningEle = document.getElementById("meaning");

const audioEle = document.getElementById("audio");

async function fetchAPI(word){
    try {
        infoTextEl.style.display = "block";
        meaningContainerEle.style.display = "none"
        infoTextEl.innerText = `Searching the meaning of "${word}"`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res)=> res.json());

        if(result.title){
            meaningContainerEle.style.display = "block";
            titleEle.innerText = word;
            meaningEle.innerText = "N/A";
            audioEle.style.display = "none";
        }else{
            infoTextEl.style.display = "none";
            meaningContainerEle.style.display = "block";
            audioEle.style.display = "inline-flex";
            titleEle.innerText = result[0].word;
            meaningEle.innerText = result[0].meanings[0].definitions[0].definition;
            audioEle.src = result[0].phonetics[0].audio;
        }
    } catch (error) {
        console.log(error);
        infoTextEl.innerText = `an error happened, try again later.`
    }
}

inoutEl.addEventListener("keyup", (e)=>{
    if(e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value)
    }
});
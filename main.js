
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://api.quotable.io/random";

async function getquote (url){
    const rensponse = await fetch(url);
    let data = await rensponse.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;

}

getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " - " + author.innerHTML ,
    "Tweet Window", "width=600, height=300")
}





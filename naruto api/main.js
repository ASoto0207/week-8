let bttn = document.querySelector('button')

function  narutoQuotes(){
    const url = `https://animechan.vercel.app/api/random/anime?title=naruto`
    fetch(url)
    .then( res => res.json())
    .then(quote => {
        console.log(quote)
        document.querySelector('#character').innerText = quote.character
        document.querySelector('#quote').innerText = quote.quote
        document.querySelector('#anime').innerText = quote.anime
    })
}
document.querySelector('#button').addEventListener('click', narutoQuotes)
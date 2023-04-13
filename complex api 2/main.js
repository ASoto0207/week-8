
let button = document.querySelector('#funnyBoy')

function funTime(){
    const url = `https://api.giphy.com/v1/gifs/random?api_key=bkImcDB9PBBpitgcF6kitacbXQ5HROUA&tag=&rating=r`
    fetch(url)
    .then(res => res.json())
    .then(funny => {
        console.log(funny)
         document.querySelector('img').src = funny.data.images.downsized_large.url


    const url2 = 'https://api.breakingbadquotes.xyz/v1/quotes'
    fetch(url2)
    .then(res => res.json())
    .then(words => {
        console.log(words)
        document.querySelector('h3').innerText = words[0].quote
    })
        

    })
        
    
}
button.addEventListener('click', funTime)
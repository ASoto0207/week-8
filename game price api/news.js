let button = document.querySelector('#getGame')
let gameList = document.querySelector('#slots')


function gameSale() {

    const url = `https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.forEach(games => {
                let title = games.title
                let salePrice = Number(games.salePrice)
                let savings = Number(games.savings)

                const gameItems = document.createElement('li')

                gameItems.innerText = `${title}, ${salePrice}, ${Math.round(savings)}`
                gameList.appendChild(gameItems)
                console.log(games.savings)
            })
            // document.querySelector('#game').innerText = data[0].title
            // document.querySelector('#price').innerText = data[0].salePrice
            // document.querySelector('#discount').innerText=data[0].savings
            


        })

}
document.querySelector('#getGame').addEventListener('click', gameSale)
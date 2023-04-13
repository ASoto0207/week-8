let showItems =  document.querySelector('#listed') //ul
let button = document.querySelector('#location') //button

function nasaLocation() {
    // let location = document.querySelector('input').value
    const url = 'https://data.nasa.gov/resource/gvk9-iz74.json'
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(locationdata => {
            console.log(locationdata)
            const domItOut = (obj) => {
                console.log(obj)
                const { latitude: lat, longitude: lon } = obj.location
                const { facility: addr, city, state } = obj
                const itemList = document.createElement('li')
                itemList.innerText = `${addr}, ${city}, ${state}`
            



            const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=95190a903baacab132dd93f72dab523f`
            fetch(url2)
                .then(res => res.json()) // parse response as JSON
                .then(weathertype => {
                    if (weathertype?.main?.temp) {
                        let kelvin = weathertype.main.temp
                        let fahrenheit = (kelvin - 273.15) * 1.8 + 32
                        itemList.innerText += ` Temp: ${Math.floor(fahrenheit)}`
                    }

                    // console.log(weathertype[0])
                    // const weather = document.querySelector('#tempo').innerText = (`temps: ${Math.floor(fahrenheit)}`)



                }
                )
            showItems.appendChild(itemList)
        }
    locationdata.forEach(domItOut)

    }
    )
}
button.addEventListener('click', nasaLocation) 

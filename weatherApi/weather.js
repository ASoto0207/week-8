


function weatherApp(){
    let cityName = document.querySelector('input').value
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=95190a903baacab132dd93f72dab523f`
    fetch(url)
    .then(res => res.json()) // parse response as JSON 
    .then(data => {
        console.log(data)
        let kelvin = data.main.temp
        let fahrenheit = (kelvin - 273.15) * 1.8 + 32
         document.querySelector('#cityName').innerText = data.name
        document.querySelector('h3').innerText = (`The Temp is : ${Math.floor(fahrenheit)}`)
        document.querySelector('#country').innerText= data.sys.country
        // document.querySelector('').innerText = data.
        // document.querySelector('').innerText = data.
        // document.querySelector('').innerText = data.
        // document.querySelector('').innerText = data.

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
document.querySelector('button').addEventListener('click', weatherApp)
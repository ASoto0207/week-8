let btn = document.querySelector('#jokes')//button 
let listed = document.querySelector('#people')// ul 

function dadJokes(){
  const url = 'https://randomuser.me/api/'
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const domOut =(obj) => {
       
        data.results.forEach(person =>{
          let name = `${person.name.first} ${person.name.last}`
          let pic = person.picture.medium
           

          const listedPpl = document.createElement('li')
          listedPpl.innerHTML = `<img src="${pic}" alt="${name}"> Name: ${name} `
          listed.appendChild(listedPpl)


          const url2 = 'https://api.kanye.rest'
          fetch(url2)
            .then(res => res.json())
            .then(kanyeWest => {
              console.log(kanyeWest)

              let words = document.querySelector('#west')
              words.innerText = kanyeWest.quote
            })
        })
        

      }
        domOut(data)
    })

}
btn.addEventListener('click', dadJokes)
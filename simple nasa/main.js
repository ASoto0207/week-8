const getBtn = document.querySelector('#btn')
let image = document.querySelector('img')
let iframe = document.querySelector('iframe')


// worked with house hayden. 

function picutuePretty(){
  let selector = document.querySelector('input').value
  const url =`https://api.nasa.gov/planetary/apod?api_key=O7K70kabhZXc67xcvhOs9WJkC2NukOOkGEPz0DB6&date=${selector}`
  fetch(url)

.then(res => res.json()) // parse response as JSON 
.then(data => { 
  console.log(data) 
  document.querySelector('h2').innerText = data.title
  document.querySelector('h3').innerText = data.explanation
  if(data.media_type === 'image'){
    document.querySelector('img').src = data.url 
    image.classList.remove('hidden')
    iframe.classList.add('hidden')
  }else if (data.media_type === 'video'){
    document.querySelector('iframe').src = data.url
    image.classList.add('hidden')
    iframe.classList.remove('hidden')
  }else{
    console.log('unknow media type', data.media_type)
  }
    
}) 
.catch(err => { 
    console.log(`error ${err}`) 
}); 

}
getBtn.addEventListener('click', picutuePretty)


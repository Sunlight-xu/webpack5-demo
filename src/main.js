import './map/stage'
console.log('app')
import './assets/styles/index.css'
import im from './assets/images/start.png'
let app =  document.getElementById('app')
let div = document.createElement('div')
div.innerHTML = 'app'
let img = document.createElement('img')
img.src = im
app.append(div)
app.append(img)

let now = new Date()
let guitar = document.querySelector('#guitar')
function innertext() {
  //document.getElementById('current').innerText = '<h1>' + now + '</h1>'
  document.querySelector('#current').innerText = now + 'wa! text!'
}
function innerhtml() {
  //document.getElementById('current').innerHTML = '<h1>' + now + '</h1>'
  //document.querySelector('#current').innerHTML = '<button>' + now + '</h1>'
  document.querySelector('li').innerHTML = '<button>' + now + '</button>'
}
function displaySrc(event) {
  document.querySelector('li').innerHTML =
    guitar.getAttribute('src') +
    ' : Clicked : ' +
    event.screenX +
    ',' +
    event.screenY
}
function displaydblSrc() {
  alert('source : ' + guitar.getAttribute('src'))
  document.querySelector('li').innerHTML =
    guitar.getAttribute('src') + ' : DoubleClicked'
}
function changeSrc() {
  document.querySelector('#guitar').setAttribute('src', '/img2.png')
  document.querySelector('li').innerHTML =
    guitar.getAttribute('src') + ' : Changed'
}
function backSrc() {
  document.querySelector('#guitar').setAttribute('src', '/img.png')
  document.querySelector('li').innerHTML =
    guitar.getAttribute('src') + ' : Backed'
}

guitar.ondblclick = function () {
  displaydblSrc()
}
guitar.onclick = function (event) {
  displaySrc(event)
}

// guitar.onmouseover = function () {
//   changeSrc()
// }
guitar.addEventListener('mouseover', changeSrc)

guitar.onmouseout = function () {
  backSrc()
}

let myRect = document.querySelector('#rect')
myRect.addEventListener('mouseover', function () {
  myRect.style.backgroundColor = 'black'
  myRect.style.borderRadius = '100%'
})
myRect.addEventListener('mouseout', function () {
  myRect.style.backgroundColor = 'skyblue'
  myRect.style.borderRadius = '0%'
})

function addP() {
  let newP = document.createElement('p')
}

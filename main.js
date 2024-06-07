// const current = document.getElementById('guitar_current')

// const imgs = document.querySelectorAll('.guitar_imgs img')

// imgs.forEach((img) => img.addEventListener('click', imgClick))

// function imgClick(e) {
//   imgs.forEach((img) => (img.style.opacity = 1))
//   current.src = e.target.src
//   current.classList.add('fade-in')
//   setTimeout(() => current.classList.remove('fade-in'), 500)
//   e.target.style.opacity = 0.4
// }

const current = document.getElementById('guitar_current')
const imgs = document.querySelectorAll('.guitar_imgs img')
const images = [
  '/img/guitar1.jpg',
  '/img/guitar2.jpg',
  '/img/guitar3.jpg',
  '/img/guitar4.jpg',
  '/img/guitar5.jpg',
  '/img/guitar6.jpg',
  '/img/guitar7.jpg',
  '/img/guitar8.jpg',
  '/img/guitar9.jpg',
  '/img/guitar10.jpg',
]

let currentIndex = 0
let slideInterval

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length
  updateCurrentImage(images[currentIndex])
}

function updateCurrentImage(src) {
  current.src = src
  current.classList.add('fade-in')
  setTimeout(() => current.classList.remove('fade-in'), 500)
  imgs.forEach((img) => {
    if (img.src.endsWith(src)) {
      img.style.opacity = 0.4
    } else {
      img.style.opacity = 1
    }
  })
}

function resetSlideInterval() {
  clearInterval(slideInterval)
  slideInterval = setInterval(showNextImage, 3000)
}

function imgClick(e) {
  imgs.forEach((img) => (img.style.opacity = 1))
  current.src = e.target.src
  current.classList.add('fade-in')
  setTimeout(() => current.classList.remove('fade-in'), 500)
  e.target.style.opacity = 0.4
  currentIndex = images.indexOf(e.target.src.replace(location.origin, ''))
  resetSlideInterval()
}

imgs.forEach((img) => img.addEventListener('click', imgClick))

slideInterval = setInterval(showNextImage, 3000)

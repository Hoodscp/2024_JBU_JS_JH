const left = document.getElementById('left')
const lSetScore = document.getElementById('lSetscore')
const lScore = document.getElementById('lscore')

const right = document.getElementById('right')
const rSetScore = document.getElementById('rSetscore')
const rScore = document.getElementById('rscore')

left.style.backgroundColor = 'lightblue'
lScore.style.height = '200px'
lScore.style.fontSize = '100px'

right.style.backgroundColor = 'pink'
rScore.style.height = '200px'
rScore.style.fontSize = '100px'

const finalScore = 11
const serveChange = 2
let ls = 0
let rs = 0
let lss = 0
let rss = 0

function init() {
  lScore.innerHTML = ls
  rScore.innerHTML = rs
  lSetScore.innerHTML = lss
  rSetScore.innerHTML = rss
  left.style.borderBottom = '20px solid lightblue'
}
init()

left.addEventListener('click', function () {
  ls++
  lScore.innerHTML = ls
  if (ls >= finalScore) {
    lss++
    lSetScore.innerHTML = lss
    ls = 0
    rs = 0
    lScore.innerHTML = ls
    rScore.innerHTML = rs
  }
  checkServe()
})

right.addEventListener('click', function () {
  rs++
  rScore.innerHTML = rs
  if (rs >= finalScore) {
    rss++
    rSetScore.innerHTML = rss
    ls = 0
    rs = 0
    lScore.innerHTML = ls
    rScore.innerHTML = rs
  }
  checkServe()
})

function checkServe() {
  let total = ls + rs
  if (total % (serveChange * 2) === 0) {
    left.style.borderBottom = '20px solid blue'
    right.style.borderBottom = ''
  } else if (total % (serveChange * 2) === 2) {
    left.style.borderBottom = ''
    right.style.borderBottom = '20px solid red'
  }
}

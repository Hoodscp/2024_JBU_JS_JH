// let now = new Date()
// document.write(
//   'Current Time is : ' +
//     now.getFullYear() +
//     ' ' +
//     (now.getMonth() + 1) +
//     ' ' +
//     now.getDate() +
//     '<br>'
// )

// //document.write(now.toJSON())

// let numbers = [1, 2, 3, 4, 5]
// numbers = ['wa', 'sans', 'is', 'alive']
// console.log(numbers)
// for (let i = 0; i < numbers.length; i++) {
//   document.write('<p>' + numbers[i] + '<p>')
// }
// let num = [1, 2, 3, 4, 5]
// let chars = ['um', 'jun', 'sik']
// let numchars = num.concat(chars)
// document.write(numchars + '<br>')

// let string = numchars.join('!!')
// document.write(string + '<br>')

// numchars.pop()
// document.write(numchars + '<br>')
// numchars.push('SIK')
// document.write(numchars + '<br>')
// numchars.unshift('WHAT')
// document.write(numchars + '<br>')
// let result = numchars.shift()
// document.write(result + '<br>')
// document.write(numchars + '<br>')

// result = numchars.slice(3, 6)
// document.write(result + '<br>')
// document.write(numchars + '<br>')

// num_spl = [1, 2, 3, 4, 5, 6, 7, 8]
// document.write(num_spl + '<br>')
// result = num_spl.splice(3, 2)
// document.write(num_spl + '<br>')

// now.setFullYear(now.getFullYear() + 1)
// document.write(now.toDateString() + '<br>')

// document.write(Math.abs(-10.111) + '<br>')
// document.write(Math.cos(Math.PI) + '<br>')
// document.write(Math.cos(Math.PI * 2) + '<br>')
// document.write(Math.ceil(1.384727493) + '<br>')
// document.write(Math.round(1.384727493) + '<br>')
// document.write(Math.ceil(Math.random() * 100) + '<br>')

// 05.22 : Object 객체를 다루는 방법

const person = {
  firstName: 'junsik',
  lastName: 'um',
  age: 100,
  hobbies: ['sal', 'a', 'it', 'da'],
  address: {
    street: 'umjungu sikdong',
    city: 'seoul',
    country: 'korea',
  },
}
console.log(person.address.street)
console.log(person)

const tools = [
  {
    id: 1,
    text: '과제물 제출',
    isCompleted: true,
  },
  {
    id: 2,
    text: '점심식사',
    isCompleted: false,
  },
  {
    id: 3,
    text: '프로젝트 미팅',
    isCompleted: true,
  },
]

console.log(tools[0])

for (let i = 0; i < tools.length; i++) {
  console.log(tools[i].id + ':' + tools[i].text)
}

for (let a of tools) {
  console.log(a.text)
}

tools.forEach(function (todo) {
  console.log(todo.id)
})

const todotext = tools.map(function (todo) {
  return todo.text
})
console.log(todotext)

const todocompleted = tools
  .filter(function (todo) {
    return todo.isCompleted === true
  })
  .map(function (todo) {
    return todo.text
  })
console.log(todocompleted)

// 객체지향 프로그래밍

function People(firstName, lastName, dob) {
  this.firstName = firstName
  this.lastName = lastName
  this.dob = dob
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
  }
}

const people1 = new People('jihoon', 'lee', 2002)
console.log(people1)

const people2 = new People('sans', 'wa', 999)
const p2n = people2.getFullName()
console.log(p2n)

class Man {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = dob
  }
  getKname() {
    return `${this.lastName}${this.firstName}`
  }
  getUname() {
    return `${this.firstName}${this.lastName}`
  }
}
const man1 = new Man('Seokyeol', 'Yun', 1960)
const p1kn = man1.getKname()
console.log(p1kn)

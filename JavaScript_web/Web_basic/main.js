// // // let select = confirm('abc')
// // console.log('12345')
// // //let name = prompt('Type your name', 'ex_ JH')
// // //console.log('name is :', name)
// // //document.write(name)

// // const num = 100
// // const sum = 200

// // // var let const
// // var avar = 100
// // var bvar = 'abc'
// // var cvar = true

// // let alet = 100
// // let blet = 'abcd'
// // let clet = false

// // const acon = 200
// // const bcon = ['a', 'b', 100]

// // let datelet = new Date()
// // // document.write(datelet.getDate(), '-', datelet.toDateString(), '--')

// // let anum = 100
// // let bnum = '100'

// // let checknum = anum == bnum
// // document.write(checknum)
// // checknum = anum === bnum
// // document.write('  ', checknum)

// // var xornum = 7
// // var xornum_2 = 6
// // var xorsum = xornum ^ xornum_2
// // document.write('    ', xorsum)

// // let usrnum = prompt('usr num :')
// // if (usrnum != null) {
// //   if (usrnum % 3 === 0) {
// //     alert('3의 배수')
// //   } else {
// //     alert('3의 배수가 아님')
// //   }
// //   usrnum % 4 === 0 ? alert('4의 배수임') : alert('4의 배수가 아님')
// // } else {
// //   alert('you did not type')
// // }

// let num = 10
// let num_2 = 20
// let num_3 = 3
// num == 10 && num + num_2 == 30 ? alert('correct') : alert('wrong')

// // function addnumber(a, b, c) {
// //   let result = (a + b) * c
// //   alert(a + ' plus ' + b + ' times ' + c + ' result = ' + result)
// // }

// addnumber(num, num_2, num_3)

// function addnumber(a, b, c) {
//   let result = (a + b) * c
//   alert(a + ' plus ' + b + ' times ' + c + ' result = ' + result)
// }

// // let 은 재할당 가능한 무난한 변수
// // const 는 재할당 안되는 딱딱한 변수
// // var는 걍 막 쓸 수 있는 너무 물렁한 변수

// function calcsum(n) {
//   let sum = 0
//   for (let i = 1; i <= n; i++) {
//     sum += i
//   }
//   return sum
// }

// alert(calcsum(3))
// alert(calcsum(10))

// // 함수 선언 간략화
// let hello = (a) => alert('hello function : ' + a)

// let usrname = 'Jihoon'
// hello(usrname)
// hello('JH')

// let helloinhtml = (a) => document.write(a + '<br>')

// helloinhtml(usrname)
// helloinhtml('JH')

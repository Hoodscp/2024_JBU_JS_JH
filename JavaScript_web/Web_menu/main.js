const menu = [
  {
    id: 0,
    item: 'fender',
    price: 100,
    stock: 10,
    qty: 0,
    itemprice: 0,
  },
  {
    id: 1,
    item: 'Gibson',
    price: 400,
    stock: 13,
    qty: 0,
    itemprice: 0,
  },
  {
    id: 2,
    item: 'PRS',
    price: 800,
    stock: 7,
    qty: 0,
    itemprice: 0,
  },
  {
    id: 3,
    item: 'Hex',
    price: 40,
    stock: 53,
    qty: 0,
    itemprice: 0,
  },
  {
    id: 4,
    item: 'Schecter',
    price: 300,
    stock: 21,
    qty: 0,
    itemprice: 0,
  },
  {
    id: 5,
    item: 'Suhr',
    price: 450,
    stock: 5,
    qty: 0,
    itemprice: 0,
  },
  {
    id: 6,
    item: 'Swing',
    price: 30,
    stock: 41,
    qty: 0,
    itemprice: 0,
  },
  {
    id: 7,
    item: 'ESP',
    price: 340,
    stock: 4,
    qty: 0,
    itemprice: 0,
  },
  {
    id: 8,
    item: 'Ibanez',
    price: 50,
    stock: 27,
    qty: 0,
    itemprice: 0,
  },
  {
    id: 9,
    item: 'Edge',
    price: 1000,
    stock: 3,
    qty: 0,
    itemprice: 0,
  },
]

let menuTable = document.getElementById('menuTable')
let totalprice = document.getElementById('totalPrice')

function genTable() {
  menuTable.innerHTML = ''
  menu.forEach(function (item) {
    let tr = `<tr>
        <td>${item.id}</td>
        <td>${item.item}</td>
        <td>\$${new Intl.NumberFormat().format(item.price)}</td>
        <td>${item.stock}</td>
        <td>${item.qty}</td>
        <td>\$${item.itemprice}</td>
        <td><button type='button' class='btn btn-primary' onclick='select(${
          item.id
        })'> + </button></td>
        <td><button type='button' class='btn btn-secondary' onclick='unselect(${
          item.id
        })'> - </button> <button type='button' class='btn btn-secondary' onclick='deselect(${
      item.id
    })'> x </button></td>
        </tr>`
    menuTable.innerHTML += tr
  })
}

function select(item) {
  if (menu[item].qty < menu[item].stock) {
    menu[item].qty += 1
    menu[item].itemprice = menu[item].price * menu[item].qty
    genTable()
    calcSum()
  }
}

function unselect(item) {
  if (menu[item].qty > 0) {
    menu[item].qty -= 1
    menu[item].itemprice = menu[item].price * menu[item].qty
    genTable()
    calcSum()
  }
}

function deselect(item) {
  menu[item].qty = 0
  menu[item].itemprice = menu[item].price * menu[item].qty
  genTable()
  calcSum()
}

function calcSum() {
  let sum = 0
  menu.forEach(function (item) {
    sum += item.price * item.qty
  })
  totalPrice.innerHTML = sum
}

genTable()
calcSum()

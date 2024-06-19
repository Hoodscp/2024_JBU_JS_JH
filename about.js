// 1. Comment class
class Comment {
  constructor(title, cmt) {
    this.title = title
    this.cmt = cmt
  }
}

// 2. UI class: UI를 다루는 기능
class UI {
  // 2.1 Display comments
  static displayComments() {
    const comments = Store.getComments()
    comments.forEach((comment) => UI.addCommentToList(comment))
  }

  // 2.2 Add comment to UI
  static addCommentToList(comment) {
    const list = document.getElementById('comment-list')
    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${comment.title}</td>
      <td>${comment.cmt}</td>
      <td> <a href="#" class="btn btn-danger btn-sm delete" id="delbtn"> X </a> </td>
      `
    list.appendChild(row)
  }

  // 2.3 Delete comment from UI
  static deleteComment(target) {
    // console.log(target);
    target.parentElement.parentElement.remove()
  }

  // 2.4 알림메시지 표시
  static showAlert(message, className) {
    const div = document.createElement('div')
    div.className = `alert alert-${className}`
    div.appendChild(document.createTextNode(message))
    const container = document.querySelector('.my_con')
    const form = document.querySelector('#comment-form')
    container.insertBefore(div, form)

    setTimeout(() => document.querySelector('.alert').remove(), 2000)
  }

  // 2.5 Clear Fields
  static clearFields() {
    document.querySelector('#title').value = ''
    document.querySelector('#cmt').value = ''
  }
}

// 3. 사용자 Event 처리 기능

// 3.1 Event: Display comments (페이지 초기 로드시 실행)
document.addEventListener('DOMContentLoaded', UI.displayComments)

// 3.2 Event: Add a comment
document.querySelector('#comment-form').addEventListener('submit', (e) => {
  e.preventDefault()
  // console.log(e.target);

  const title = document.querySelector('#title').value
  const cmt = document.querySelector('#cmt').value

  // validation, 입력 검증
  if (title === '' || cmt === '') {
    // alert("모든 필드를 입력해 주세요...");
    UI.showAlert('모든 필드를 입력해 주세요', 'warning')
  } else {
    const comment = new Comment(title, cmt)

    // 화면 테이블에 추가
    UI.addCommentToList(comment)

    // Store에 저장하기
    Store.addComment(comment)

    UI.showAlert('방명록에 추가되었습니다.', 'primary')

    // Clear field
    UI.clearFields()
  }
})

// 3.3 Event: Remove a comment
document.querySelector('#comment-list').addEventListener('click', (e) => {
  // Remove comment from UI
  UI.deleteComment(e.target)

  console.log(e.target.parentElement.previousElementSibling.textContent)
  Store.removeComment(e.target.parentElement.previousElementSibling.textContent)

  // 메시지 표시
  UI.showAlert('방명록에서 삭제했습니다', 'info')
})

// 4. Store class : localStorage에 저장하는 기능
class Store {
  static getComments() {
    let comments
    if (localStorage.getItem('comments') === null) {
      comments = []
    } else {
      comments = JSON.parse(localStorage.getItem('comments'))
    }
    return comments
  }

  static addComment(comment) {
    const comments = Store.getComments()
    comments.push(comment)
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  static removeComment(cmt) {
    const comments = Store.getComments()

    comments.forEach((comment, index) => {
      if (comment.cmt === cmt) {
        comments.splice(index, 1)
      }
    })

    localStorage.setItem('comments', JSON.stringify(comments))
  }
}

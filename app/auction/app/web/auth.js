import {User} from "./api_caller"

class User {
    constructor(name) {
      this.name = name;
      this.password = password;
    }
    post() {   
    }
}


document.querySelector('form').addEventListener('submit', e => {
    // отмена действия по умолчанию (т.е. не отправляем форму)
    e.preventDefault()
    test()
      .then(ok => {
        if (ok) return e.target.submit()
        alert('Форма не прошла валидацию...')
      })
      .catch(err => console.log(err))
  })
  //
  async function test() {
    return false
  }
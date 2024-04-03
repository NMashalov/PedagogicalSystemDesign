const Direction = {
  Up: 'Up',
  Down: 'Down',
  Left: 'Left',
  Right: 'Right'
};

async function test() {
  return false
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
  }
)
  //



myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
  location.href
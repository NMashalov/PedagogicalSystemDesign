const formElem = document.querySelector("form");


async function test_form(formData){
    let msg = JSON.stringify(formData)

    console.log(msg)

    return await fetch('/api/v1/validate', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: msg,
    }).then((response) => {
        if (response.ok) {
            return 1
        } else {
            console.log(`Response error: ${response.text()}`);
            throw new Error(`Server response status code ${response.status}`);
        }
    }    
    ).catch((error) => {
        console.log(`Upload error: ${error.message}`);
        return 0 
    })
} 



formElem.addEventListener('submit', async (e) => {
    // отмена действия по умолчанию (т.е. не отправляем форму)
    e.preventDefault()
    
    var username = document.getElementById("Username").value
    var password = document.getElementById("Password").value

    await test_form({
        username,
        password
    }).
        then(async (ok) => {
            console.log(await ok) 
            if (ok){
                e.target.submit()
            } else {
                alert('Форма не прошла валидацию...')
            }
        })
        .catch(err => console.log(err))
    }
);



  //


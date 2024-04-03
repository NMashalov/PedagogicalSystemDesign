var $go = $('#go');
var $bad = $('#bad');


$go.bind('click', async (e) => {
    e.preventDefault()
    alert('go')
})

$bad.bind('click', async (e) => {
    e.preventDefault()
    alert('skip')
})

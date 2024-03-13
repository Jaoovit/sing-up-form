function matchPassword() {
    let a = document.querySelector('#password').value
    let b = document.querySelector('#confPassword').value
    if(a != b) {
        a.value = ''
        b.value = ''
        document.querySelector('.erro').innerHTML = '* Password do not match'
        document.querySelector('.password').style.border = `1px solid red`
        document.querySelector('.confpassword').style.border = `1px solid red`
    } else {
        document.querySelector('.erro').innerHTML = ''
        document.querySelector('.password').style.border = `1px solid gray`
        document.querySelector('.confpassword').style.border = `1px solid gray`
    }
}

document.querySelector('input[type="submit"]').addEventListener('click', function Onclick() {
    matchPassword()
})




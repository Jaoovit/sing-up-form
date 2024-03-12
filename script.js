function matchPassword() {
    let a = document.querySelector('#password').value
    let b = document.querySelector('#confPassword').value
    if(a != b)
    {
        document.querySelector('.erro').innerHTML = '* Password do not match'
        document.querySelector('.password').style.border = `1px solid red`
        document.querySelector('.confpassword').style.border = `1px solid red`
    }
}

document.querySelector('.teste').addEventListener('click', function Onclick() {
    matchPassword()
})




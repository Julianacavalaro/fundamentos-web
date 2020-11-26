let nome = window.document.getElementById('nome'); //acessando o dom , acessa o espaço
let email = document.querySelector('input#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false




function validaNome(){
    let txtNome = document.querySelector('#nome')
    if(nome.value.length < 3) {
      txtNome.innerHTML ='Nome Inválido'
      txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk =true
    }
}
function validaEmail() {
    let txtEmail = document.querySelector('#email')
    if (email.value.indexOf('@') == -1  || email.value.indexOf('.')== -1) { //Se não tiver @ no email indexOf =-1, caso contrário indexOf=1
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color ='red'
    } else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk =true
    }
}
function validaAssunto() {
    let txtAssunto = document.querySelector('#assunto')

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracters'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display ='block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk =true
    }
}
function enviar () {
    if(nomeOk ==true && emailOk ==true && assuntoOk ==true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente')
    }
}
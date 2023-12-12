const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


function redireccionarPaciente(){
    window.location.href = "../../Interfaz Paciente/index.html";
}

function redireccionarDoctor(){
    window.location.href = "../../Interfaz Doctor/index.html";
}
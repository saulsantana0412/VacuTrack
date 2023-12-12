const body = document.querySelector("body");
const modeToggle = body.querySelector(".mode-toggle");
const sidebar = body.querySelector("nav");
const sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if (sidebar.classList.contains("close")) {
        localStorage.setItem("status", "close");
    } else {
        localStorage.setItem("status", "open");
    }
});

const dash = document.getElementById("contenido");
const registroPacienteElement = document.getElementById("registroPaciente");
const registroVacunaElement = document.getElementById("registroVacuna");


function registroPaciente() {
    if (registroPacienteElement.style.display == "none") {
        registroPacienteElement.style.display = "flex";
        dash.style.display = "none";
        registroVacunaElement.style.display="none";
    }
}

function inicio() {
    if (dash.style.display == "none") {
        dash.style.display = "block";
        registroPacienteElement.style.display = "none";
        registroVacunaElement.style.display="none";
    }
}

function registroVacuna() {
    if (registroVacunaElement.style.display == "none") {
        
        dash.style.display = "none";
        registroPacienteElement.style.display="none";
        registroVacunaElement.style.display="flex";   
         }
}

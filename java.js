
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
    var x = document.getElementById("nav");
    x.className = "";
}


function menuResponsive() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

window.onscroll = function() { habilidades() };

function habilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("am").classList.add("barras-progreso1");
        document.getElementById("rd").classList.add("barras-progreso2");
        document.getElementById("pa").classList.add("barras-progreso3");
        document.getElementById("dw").classList.add("barras-progreso4");
        document.getElementById("bd").classList.add("barras-progreso5");
        document.getElementById("py").classList.add("barras-progreso6");
    }
}
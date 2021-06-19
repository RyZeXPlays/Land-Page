let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("mouseover", function(e){
    e.preventDefault();
    if (contador == 0){
        enlaces.className = ("enlaces tres");
    }
})

boton.addEventListener("mouseout", function(e){
    e.preventDefault();
    enlaces.classList.remove("tres");
    if (contador == 0){
        enlaces.className = ("enlaces uno");
    }
    else{
        enlaces.className = ("enlaces dos");
    }
})

boton.addEventListener("click", function(e){
    e.preventDefault();
    if (contador == 0){
        enlaces.classList.remove("tres");
        enlaces.className = ("enlaces dos");
        contador = 1;
    }
    else{
        enlaces.classList.remove("dos");
        enlaces.className = ("enlaces uno");
        contador = 0;
    }
})

function closeCircle() {
    contador = 0;
    enlaces.classList.remove("dos");
    enlaces.className = ("enlaces uno");
}

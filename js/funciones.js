var mostrar = document.getElementsByClassName('mostrar_off');
var ocultar = document.getElementsByClassName('ocultar');
var prefix = document.getElementById('prefix');
var span = document.getElementsByName('span');
var admin = document.getElementById('administrador');
var mod = document.getElementById('moderador');
var extras = document.getElementById('extras');
//var span2 = document.getElementsByName('span')
//console.log(span2)


function cambiar(){
    for(var i = mostrar.length-1; i>-1; i--){
        mostrar[i].classList.toggle('mostrar');
    }
    for(var i = ocultar.length-1; i>-1; i--){
        ocultar[i].classList.toggle('ocultar_off');
    }
}

function guardar(){
    alert("GUARDADO CON EXITACION EXITOSA!!!");
    for(var i = 0; i < span.length; i++){
        span[i].textContent = prefix.value;
    }
    /*aca ira pa cambiar el prefix :v*/
    cambiar();
}

function reestablecer(){
    alert("y volvemos a la normalidad");
    prefix.value ="k<"
    for(var i = 0; i < span.length; i++){
        span[i].textContent = prefix.value;
    }
    
    /*aca ira pa cambiar el prefix :v*/
}

function ense(){
    alert("asd");
    mod.style.display = "inline-block"
}

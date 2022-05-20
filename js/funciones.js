var mostrar = document.getElementsByClassName('mostrar_off');
var ocultar = document.getElementsByClassName('ocultar');
var prefix = document.getElementById('prefix');
var span = document.getElementsByName('span');
var admin = document.getElementsByClassName('administrador');
var mod = document.getElementsByClassName('moderador');
var extras = document.getElementsByClassName('extras');
//var span2 = document.getElementsByName('span')
//console.log(span2)
var as = [false,false,false];
//        admin, mod ,extras
console.log(as);

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
    console.log(admin);
    for(var i=0;i<admin.length;i++){
        admin[i].classList.toggle('off');
    }
    console.log(admin);
}

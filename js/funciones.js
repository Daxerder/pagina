var mostrar = document.getElementsByClassName('mostrar_off');
var ocultar = document.getElementsByClassName('ocultar');
var prefix = document.getElementById('prefix');
var span = document.getElementsByName('span');
var inicio = document.getElementsByClassName('descripcion')
var admin = document.getElementsByClassName('administrador');
var mod = document.getElementsByClassName('moderador');
var ext = document.getElementsByClassName('extras');
//var span2 = document.getElementsByName('span')
//console.log(span2)
var validar = [false,false,false];
//        admin, mod ,extras

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

function ense(cond) {
    switch(cond){
        case 'inicio':
            for(var i = 0; i<validar.length;i++){
                if(validar[i]){
                    switch(i){
                        case 0:
                            mos(admin)
                            break
                        case 1:
                            mos(mod)
                            break
                        case 2:
                            mos(ext)
                            break
                    }
                    validar[i]=false;
                }
            }
            mos(inicio);
            break;
        case 'admin':
            if(!validar[0]){
                mos(admin);
                validar[0]=true;
                if(validar[1]){
                    mos(mod);
                    validar[1]=false;
                }
                if(validar[2]){
                    mos(ext);
                    validar[2]=false;
                }
            }
            break;
        case 'mod':
            if(!validar[1]){
                mos(mod);
                validar[1]=true;
                if(validar[0]){
                    mos(admin);
                    validar[0]=false;
                }
                if(validar[2]){
                    mos(ext);
                    validar[2]=false;
                }
            }
            break;

        case 'ext':
            if(!validar[2]){
                mos(ext);
                validar[2]=true;
                if(validar[0]){
                    mos(admin);
                    validar[0]=false;
                }
                if(validar[1]){
                    mos(mod);
                    validar[1]=false;
                }
            }
            break;
    }
    console.log("sale",validar)
}

function mos(cuadro){
    for(var i=0;i<cuadro.length;i++){
        cuadro[i].classList.toggle('off');
    }
}

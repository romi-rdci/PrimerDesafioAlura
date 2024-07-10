// Mensaje a descubrir
// fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!

//si hay tilde es un dato invalido
function esValido(dato){
    if(dato.includes("á")||dato.includes("é")||dato.includes("í")||dato.includes("ó")||dato.includes("ú")){
        return false;
    } else { return true}
}
//hay que pasarle el id del elemento html para asignarle el texto que se pasa como parametro
function asignarTxtElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//limpia el value cuando le pasan el elemento en formato querySelector
function limpiarQS(elemento){
    let valor = document.querySelector(elemento);
    valor.value = '';
}
//realiza la validacion y encriptado del texto si corresponde
function encriptar(){
    let txtAreaHTML = document.getElementById('txt_paraencriptar').value;
    if(esValido(txtAreaHTML)){
        let txtEncriptado = txtAreaHTML
        .split('')
        .map(char => {
            switch (char) {
                case 'a': return 'ai'; break;
                case 'e': return 'enter'; break;
                case 'i': return 'imes'; break;
                case 'o': return 'ober'; break;
                case 'u': return 'ufat'; break;
                default:
                    return char;
            }
        })
        .join('');
        
        asignarTxtElemento('txt_encriptado' ,txtEncriptado);
    }
    else{
        alert("No se permite el ingreso de tilde");
    }
    limpiarQS('#txt_paraencriptar');
}
//realiza la desencriptacion del texto ingresado
function desencriptar(){
    let cadena = document.getElementById('txt_encriptado').value;
    cadena = cadena.replace(/ai/g,'a');
    cadena = cadena.replace(/enter/g,'e');
    cadena = cadena.replace(/imes/g,'i');
    cadena = cadena.replace(/ober/g,'o');
    cadena = cadena.replace(/ufat/g,'u');
    asignarTxtElemento('txt_paraencriptar',cadena);
    limpiarQS('#txt_encriptado')
}



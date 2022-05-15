export function valida(input){
    const tipoDeInput = input.dataset.tipo;

    if(input.validity.valid){
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }
    else{
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
    }
}

const tipoDeErrores = [
    "valueMissing"
]

const mensajesDeError = {
    nombre:{
        valueMissing: "El campo nombre no puede estar vacio"
    },
    mensaje:{
        valueMissing: "El campo email no puede estar vacio",
    }
}


function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje = "";

    tipoDeErrores.forEach(error => {
        if (input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });

    return mensaje;
}



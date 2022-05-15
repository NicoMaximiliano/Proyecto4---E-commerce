import {valida} from "./validar-formulario.js";

const inputs = document.querySelector("input");

input.addEventListener("blur",(input) => {
    valida(input.target);
});

import { argv } from "process";

import { GET, POST, PUT, DELETE } from "./js/crud.js";

const [,, operacion, datos, articulo, precio, categoria] = argv;
if (!operacion) {
    console.log("Debe especificar una operación: GET, POST o DELETE");
} else {
    switch (operacion.toUpperCase()) {
        case "GET": datos ? GET(datos) : console.log("Debe especificar el parámetro de datos para la operación GET"); break;
        case "POST": POST( {title: articulo, price: precio, category: categoria}); break;
        case "PUT": PUT( {id: datos, title: articulo, price: precio, category: categoria}); break;
        case "DELETE": DELETE(datos); break;
        default: console.log("Operación no válida");
    }
}
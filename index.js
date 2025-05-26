import path from "path";
import { fileURLToPath } from "url";
import { argv } from "process";

import { GET, POST, DELETE } from "./crud.js";

const [,, operacion, datos, articulo, precio, categoria] = argv;
console.log([,, operacion, datos, articulo, precio, categoria]);
switch (operacion.toUpperCase()) {
    case "GET": GET(datos); break;
    case "POST": POST({
            title: articulo,
            price: precio,
            category: categoria,
        }); break;
    case "PUT": PUT(datos); break;
    case "DELETE": DELETE(datos); break;
    default: console.log("Operación no válida");
}
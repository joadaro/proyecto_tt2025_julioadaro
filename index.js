import { argv } from "process";

import { GET, POST, PUT, DELETE } from "./js/crud.js";

const main = () => {
    const [,, method, operation, article, price, category] = argv;
    const input = {
        "method": (method && isNaN(method)) ? method.toUpperCase() : method,
        "operation": (operation && isNaN(operation)) ? operation.toLowerCase() : operation,
        "article": article,
        "price": (price && !isNaN(price)) ? parseFloat(price).toFixed(2) : price,
        "category": (category && isNaN(category)) ? category.toLowerCase() : category
    };
    console.log(`Prompt => {Método: ${input.method}, Operación: ${input.operation}, Artículo: ${input.article}, Precio: ${input.price}, Categoría: ${input.category}}`);
    switch (input.method) {
        case "GET":     GET(input); break;
        case "POST":    POST(input); break;
        case "PUT":     PUT(input); break;
        case "DELETE":  DELETE(input); break;
        default:        input.method ? console.log("ERROR: método no válido") : console.log("ERROR: se requiere método");
    }
}

main();
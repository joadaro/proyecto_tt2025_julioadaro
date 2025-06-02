// Módulo de validación de métodos y operaciones CRUD

export const validate = (input) => {
    const { method, operation, article, price, category } = input;
    const index = operation ? operation.split("/")[1] : undefined;
    if (!operation) {
        console.log(`ERROR: se requiere parámetro de operación para el método ${method}`);
        return false;
    }

    switch (method) {
        case "GET":
            if (!operation.startsWith("products")) {
                console.log(`ERROR: la operación para el método ${method} debe comenzar con el parámetro 'products'`);
                return false;
            }
            if (index && isNaN(index)) {
                console.log(`ERROR: la operación para el método ${method} debe contener un índice válido al final del parámetro 'products/{índice}'`);
                return false;
            }
            break;
        case "POST":
            if (operation !== "products") {
                console.log(`ERROR: la operación para el método ${method} debe ser el parámetro 'products'`); 
                return false;
            }
            if (!article) {
                console.log(`ERROR: se requiere indicar el dato de artículo para el método ${method}`);
                return false;
            }
            if (!price || isNaN(price)) {
                console.log(`ERROR: se requiere indicar el dato de precio en formato numérico para el método ${method}`);
                return false;
            }
            if (!category) {
                console.log(`ERROR: se requiere indicar el dato de categoría para el método ${method}`);
                return false;
            }
            break;
        case "PUT":
            if (!operation.startsWith("products/")) {
                console.log(`ERROR: la operación para el método ${method} debe ser el parámetro 'products/'`);	
                return false;
            }
            break;
        case "DELETE":
            if (!operation) {
                console.log(`ERROR: se requiere parámetro de operación para el método ${method}`);	
                return false;
            }
            if (!operation.startsWith("products/")) {
                console.log(`ERROR: la operación para el método ${method} debe ser el parámetro 'products/{indice}'`);
                return false;
            }
            if (!index && isNaN(index)) {
                console.log(`ERROR: la operación para el método ${method} debe contener un índice válido al final del parámetro 'products/{índice}'`);
                return false;
            }
            break;
        default:
            return false;
    }
        return true;
}
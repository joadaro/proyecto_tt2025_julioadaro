// Módulo de validación de métodos y operaciones CRUD
const REGEXP = /products\/\d+/;

export const validate = (input) => {
    const { method, operation, article, price, category } = input;
    if (!operation) {
        console.log(`ERROR: se requiere parámetro de operación para el método ${method}`);
        return false;
    }
    switch (method) {
        case "GET":
            if ((operation !== "products") && !REGEXP.test(operation)) {
                console.log(`ERROR: el método ${method} debe continuar con el parámetro 'products' o bien 'products/{índice}'`);
                return false;
            }
            break;
        case "POST":
            if (operation !== "products") {
                console.log(`ERROR: el método ${method} debe continuar con el parámetro 'products'`); 
                return false;
            }
            if (!article) {
                console.log(`ERROR: se debe indicar el dato de artículo para el método ${method}`);
                return false;
            }
            if (!price || isNaN(price)) {
                console.log(`ERROR: se debe indicar el dato de precio en formato numérico para el método ${method}`);
                return false;
            }
            if (!category) {
                console.log(`ERROR: se debe indicar el dato de categoría para el método ${method}`);
                return false;
            }
            break;
        case "PUT":
            if (!REGEXP.test(operation)) {
                console.log(`ERROR: el método ${method} debe continuar con el parámetro 'products/{indice}'`);
                return false;
            }
            if (!article) {
                console.log(`ERROR: se debe indicar el dato de artículo para el método ${method}`);
                return false;
            }
            if (!price || isNaN(price)) {
                console.log(`ERROR: se debe indicar el dato de precio en formato numérico para el método ${method}`);
                return false;
            }
            if (!category) {
                console.log(`ERROR: se debe indicar el dato de categoría para el método ${method}`);
                return false;
            }
            break;
        case "DELETE":
            if (!REGEXP.test(operation)) {
                console.log(`ERROR: el método ${method} debe continuar con el parámetro 'products/{indice}'`);
                return false;
            }
            break;
        default:
            return false;
    }
    return true;
}
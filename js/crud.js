// Módulo de operaciones CRUD

import { validate } from "./validation.js";

const API_URL = "https://fakestoreapi.com/products";

export const GET = async (input) => {
    if (validate(input)) {
        console.log("Operación GET: Obteniendo datos...");
        const index = input.operation.split("/")[1];
        let API_REQUEST = !index ? API_URL : API_URL + `/${index}`;
        // Simulando una solicitud GET
        try {
            const response = await fetch(API_REQUEST);
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error("Error en la operación GET:", error);
        } finally {
            console.log("Operación GET finalizada.");
        }
    }
}

export const POST = async (input) => {
    if (validate(input)) {
        console.log("Operación POST: Guardando datos...");
        const { article, price, category } = input;
        const product = { 
            title: article,
            price: price,
            category: category
        };
        // Simulando una solicitud POST
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error en la operación POST:", error);
        } finally {
            console.log("Operación POST finalizada.");
        }
    }
}

export const PUT = async (input) => {
    if (validate(input)) {
        console.log("Operación PUT: Actualizando datos...");
        const index = input.operation.split("/")[1];
        const { article, price, category } = input;
        const product = { 
            title: article,
            price: price,
            category: category
        };
        // Simulando una solicitud PUT
        try {
            const response = await fetch(API_URL + `/${index}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error en la operación PUT:", error);
        } finally {
            console.log("Operación PUT finalizada.");
        }
    }
}

export const DELETE = async (input) => {
    if (validate(input)) {
        console.log("Operación DELETE: Eliminando datos...");
        const index = input.operation.split("/")[1];
        // Simulando una solicitud DELETE
        try {
            const response = await fetch(API_URL + `/${index}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error en la operación DELETE:", error);
        } finally {
            console.log("Operación DELETE finalizada.");
        }
    }
}
// Módulo de operaciones CRUD
const API_URL = "https://fakestoreapi.com/";

export const GET = async (data) => {
    console.log("Operación GET: Obteniendo datos...");
    try {
        // Fetching data from the API
        await fetch(API_URL + data)
            .then(response => response.json())
            .then(data => console.log(data));
        return data;
    } catch (error) {
        console.error("Error en la operación GET:", error);
    } finally {
        console.log("Operación GET finalizada.");
    }
}

export const POST = async (data) => {
    console.log("Operación POST: Guardando datos...");
    try {
        // Simulating a POST request
        const product = data;
        await fetch(API_URL + "products", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => console.log(data));
    } catch (error) {
        console.error("Error en la operación POST:", error);
    } finally {
        console.log("Operación POST finalizada.");
    }
}

export const PUT = async (data) => {
    console.log("Operación PUT: Actualizando datos...");
    try {
        // Simulating a PUT request
        const { id, title, price, category } = data;
        await fetch(API_URL + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, price, category })
        })
            .then(response => response.json())
            .then(data => console.log(data));
    } catch (error) {
        console.error("Error en la operación PUT:", error);
    } finally {
        console.log("Operación PUT finalizada.");
    }
}

export const DELETE = async (data) => {
    console.log("Operación DELETE: Eliminando datos...");
    try {
        // Simulating a DELETE request
        await fetch(API_URL + data, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => console.log(data));
    } catch (error) {
        console.error("Error en la operación DELETE:", error);
    } finally {
        console.log("Operación DELETE finalizada.");
    }
}
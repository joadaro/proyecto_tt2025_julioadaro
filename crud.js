// CRUD operations module
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
    }
}
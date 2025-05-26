import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { argv } from "process";

import { GET, POST, DELETE } from "./crud.js";

switch (argv[2].toUpperCase()) {
    case "GET": GET(argv[3]); break;
    case "POST": POST({
            title: argv[4],
            price: argv[5],
            category: argv[6],
        }); break;
    case "PUT": PUT(argv[3]); break;
    case "DELETE": DELETE(argv[3]); break;
    default: console.log("Operación no válida");
}
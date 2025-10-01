"use strict";

alert("¡Hola, Mundo!");
console.log("¡Hola, Mundo!");

let edad=24;
console.log(edad);

let nombre="Santi";
console.log(nombre);

console.log(nombre+" "+edad);

/*
a = 10; // Error: a no está definida

function suma(a, a) {
// Error: parámetros duplicados
return a + a;
};

console.log(suma);
*/

// Información general
console.log("Mensaje informativo");

// Advertencias
console.warn("¡Cuidado con esto!");

// Errores
console.error("Algo salió mal");

// Medición de tiempo
console.time("miProceso");
// Código que queremos medir
console.timeEnd("miProceso");

// Tablas para datos estructurados
console.table([
{nombre: "Ana", edad: 25},
{nombre: "Juan", edad: 30}
]);

// El objeto no puede reasignarse...
const CONFIGURACION = {
version: "1.0",
api: "https://api.ejemplo.com"
};

// ...pero sus propiedades sí pueden modificarse
CONFIGURACION.version = "1.1"; // Válido

console.log(CONFIGURACION);

// Lo mismo aplica para arrays
const COLORES = ["rojo", "verde", "azul"];
COLORES.push("amarillo"); // Válido

console.log(COLORES);

COLORES.pop();
console.log(COLORES);

console.log(typeof edad);

let id = prompt("¿Cómo te llamas?");
console.log("Bienvenido "+id);

if (id === "admin" ){
    
}else{
    
};
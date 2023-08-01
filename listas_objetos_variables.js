//Listas, array o arreglo
//conjunto de variables, puestas en orden

const lista1 = [ 1,"hola",true, undefined];
const lista2 = new Array (2,"hola",true, undefined);
const lista3 = new Array (3);
lista3[0] = "soy el primer elemento del array, index 0";

//lista de listas
const lista4 = [lista1,lista2,lista3];

console.log(lista1)
console.log(lista2)
console.log(lista3)
console.log(lista4)

//Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Poco",
    isWhite: false,
    contactos: ["Nieves", "Irene", "Carlos"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    }
}
movil.anyo = 2019;
movil.marca = "Samsung";
console.log(movil.marca)
//accedemos al atributo y a un item del array
console.log(movil.contactos[2])

//Fechas
//Librerias de apoyo Moment.js
const ahora = new Date(); //fecha en el momento que se crea la variable
console.log(ahora)

const fecha_milis = new Date(10);//utilizando los milisegundos

const fecha_cadena = new Date ("march 25 2020");
console.log(fecha_cadena)

const fecha_valores = new Date (2022,2,15);
console.log (fecha_valores)

const dia = ahora.getDate();
const mes = ahora.getMonth()+1;
const anyo = ahora.getFullYear();
console.log (dia,mes,anyo)
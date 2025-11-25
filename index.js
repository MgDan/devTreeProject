
// Para cambiar de commonjs a ecmascript modules hay que ir a package.json y agregar el campo "type" de preferencia debajo del campo "name"
// cambiar en el campo "type" el valor a "module"
// NOTA: si intentas correr la app y no has quitado el metodo "require" va a marcar error porque ese metodo no esta en ecmascipt modules

// TODO borrar estos comentarios ya no sera necesario importar de manera de commonjs
// en node la sintaxis por defult es commonjs
// const express = require('express')

import express from 'express';

/*
* para ver que este funcionando
console.log(express);
*/



//crea una instancia de servidor y almacena el objeto en la variable app
const app = express();

app.get('/',(req, res)=>{
    res.send('Hola mundo en Express')
})

app.get('/valores',(req, res)=>{
    res.send('valores')
})


app.get('/ecom',(req, res)=>{
    res.send('Este es el ecommerce')
})


// Agregamos el puerto en una variable
const port = 4000;

// para crear el servidor
app.listen(port, ()=>{
    console.log('Servidor funcionando en el puerto ', port);
    // ahora lo puedes ejecutar de 2 maneras:

    // node --watch index.js
    // esta es la opcion nativa de node, al punto del tutorial que estoy viendo era experimental, pero yo lo corri y no aparece ya el mensaje, tambien dice que no lo puedes correr con archivos de typescript


    // la otra opcion es nodemon y lo recomendado es instalarla como dependencia de desarrollo --> npm i -D nodemon --> -D es para especificar que es una dependencia de Desarrollo y te crea el campo para las dependencias de desarrollo en package.json
    // nodemon index.js



    // puedes agregar el script en package.json en el campo "scripts"
    
    // script que no necesitan la palabra reservada "run" son "start" y "test" todos los demas en especial los scripts personalizados deben decir "npm run {script}" 
})
/** 
 * 
 * esperado ver en el navegador "cannot GET /" 
 * no se ha especificado que hay que mostrar en esa url
 * 
 * 
 * necesitas agregar el routing 
 * 
 * app.get('/',(req, res)=>{
 * 
 * })
 */

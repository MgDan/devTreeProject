
//en node la sintaxis por defult es commonjs
const express = require('express')

/*
* para ver que este funcionando
console.log(express);
*/



//crea una instancia de servidor y almacena el objeto en la variable app
const app = express();

app.get('/',(req, res)=>{
    res.send('Hola mundo en Express')
})

app.get('/ecom',(req, res)=>{
    res.send('Este es el ecommerce')
})

// para crear el servidor
app.listen(4000, ()=>{ 
    console.log('Servidor funcionando')
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

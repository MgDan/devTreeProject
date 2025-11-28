import express from 'express';


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
const port = process.env.port || 4000;

// para crear el servidor
app.listen(port, ()=>{
    console.log('Servidor funcionando en el puerto ', port);

})

/**
 * Para instalar Typescript lo vamos a instalar como dependencia de desarrollo
 * 
 * npm i -D typescript ts-node
 * 
 * NOTA: ts-node --> sirve para ejecutar archivos typscript directamente con node "node index.ts"
 * 
 */

/**
 * 
 * Como express no soporta typescript directamente tienes que crear un tsconfig.json
 * hay que crear ese archivo en la raiz del proyecto
 * 
 * campos usados para este proyecto:
 * 
 * {
 *      "compilerOptions":{
 *          "outDir": "./dist", // donde se va compilar el proyecto una vez que creemos el build de produccion
 *          "rootDir": "./src", // carpeta principal donde encontrara nuestro codigo (de hecho el archivo index se movera a esta carpeta) 
 *          "Lib": ["ESNext"], // Aqui indicas la lista de bibliotecas y caracteristicas de javascript que quieres que esten disponibles en el codigo de Typescript ||| cuando usas ESNext se refiere a la version mas reciente de ECMASCRIPT
 *          "target": "ESNext", // entiendo que es la version a la que se va a compilar el codigo typescript a javascript cuando lo liberes a produccion osea cuando hagas el build
 *          "moduleResolution": "NodeNext", // para la sintaxis de modules EcmascriptModules en lugar de commonjs esto tanto en tiempo de desarrollo y en tiempo de compilacion
 *          "module": "NodeNext", // tambien es para la sintaxis de export/import de modules pero en el javascript resultante
 *          "strict": false, // modo stricto
 *          "sourceMap": true, // es un archivo para poder debbugear ya que cuando compile a javascript ya no podrias ver el codigo original pero con esta opcion te lo permite ver el typescript original
 *          "esModuleInterop": true, // te permite utilizar modules de commonjs como de ESModule
 *          "declaration": true // te permite la generaicion de los archivos .d.ts ya que una vez compilado a javascript se pierden los tipos y esto da una idea a quien lo esta leyendo de los tipados y de informacion que se pierde al compilar
 *      },
 *      "include": [] // archivos a incluir en la compilacion del bundle (** todaas las carpetas) (*.ts todos los archivos ts) [hay que cambiar el archivo index.js a index.ts y tambien cambiar el script de nodemon de index.js a index.ts]
 * }
 * 
 * 
 * NOTA: si sale el error: code: 'ERR_UNKNOWN_FILE_EXTENSION' es porque en package.json tienes el campo "type": "module" y eso hace conflicto con la configuracion de typescript "moduleResolution" y "module"
 * 
 */
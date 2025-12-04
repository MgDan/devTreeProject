import mongoose from "mongoose";

// primero instalar mongoose --> npm i mongoose NOTA: no es dependencia de desarrollo

export const connDB = async ()=>{
    try {
        // estamos usando mongo atlas (hay que crear cuenta y crear una base de datos gratuita)
        // creas un usuario para autenticar, guarda el usuario y contraseña que genera porque despues no se puede recuperar (1)
        // una vez hecho eso, te vas al panel izquierdo donde dice Database -> clusters
        // en "clusters" te vas a "conect" (es un boton que esta al lado de donde dice "cluster 0" abajo del buscador)
        // te da varias opciones, elige "Drivers"
        // (*) copia el texto que viene en el punto "3. Add your connection string into your application code" y pegalo en URL
        // NOTA: NO HABILITES la opcion que dice "View full code sample" es para el ORM mongo client y no estamos usando ese ORM 
        // const url = '' (SE QUITA PARA PONER MEJOR LA VARIABLE DE ENTORNO en archivo .env); // (*) NOTA: reemplaza <password> con el password que te genero para auntenticarte --> (1)
        // reemplaza "/?appName=Cluster0" en la variable url por el nombre de tu db, si es nueva y no tienes nada, pon un nombre y el mismo mongoose se encargara de definir el nombre que pusiste en mongo atlas
        const {connection} = await mongoose.connect(process.env.MONGO_URI) // nodemon no tiene soporte de variables de entorno, asi que hay que instalar dotenv --> npm i dotenv NOTA: node agrego el soporte a variables de entorno recientemente asi que dejaremos dotenv como dependencia de produccion para evitar fallos con node

        const url2 = `${connection.host}:${connection.port}`
        console.log(`Mongo conectado en  ${url2}`);

        console.log('conexion!!');
    } catch (error) {
        console.log('error ', error);
        process.exit();
    }
}
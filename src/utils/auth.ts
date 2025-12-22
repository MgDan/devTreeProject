import bcrypt from 'bcrypt';

export const hashPassword = async ( password: string) => {
    const salt = await bcrypt.genSalt(10); 
    // si hay 10 strings con el mismo mismo valor,
    // el hash generado para cada una de ellas sera distinto,
    // el onceavo ya puede que repita el hash,
    // ahi tendrias que cambiar el valor del parametro si quieres que sean mas
    // a ese parametro se le llama rondas, entre mas rondas, el proceso sera lento

    return await bcrypt.hash(password, salt); // regresa el password hashado
}
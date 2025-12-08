import mongoose, { Schema } from "mongoose";

interface IUser {
    handler: string,
    name: string,
    email: string,
    password: string,
}

// crear el Schema
const userSchema = new Schema({
    handler: {}, 
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    }
});

// crear el modelo
const User = mongoose.model<IUser>('User', userSchema);

export default User;
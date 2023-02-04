import mongoose from "mongoose";
const userSchema = new mongoose.Schema (
    {
        id: {type: String},
        name:{
            type: String, 
            required: true,
        },
        email:{
            type: String, 
            required: true,
            match: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        },
        password:{
            type: String,
            required: true,
            match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,10}$/
        },
        cpf:{
            type: String,
            required: true,
            match:/^(\d){11}$/
        },
        phone:{
            type: String,
            required: true,
            match:/^(\d){11,13}$/
        }
    },
    {
        versionKey: false
    }
);

const users = mongoose.model('users', userSchema);
export default users;
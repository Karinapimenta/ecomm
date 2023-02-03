import mongoose from "mongoose";
const categorySchema = new mongoose.Schema (
    {
        id: {type: String},
        nome: {
            type: String, 
            required: true,
            minlength: 3,
            match: /^\D+\w{2,}$/
        },
        status: {type: Boolean, required: true}
    },
    {
        versionKey: false
    }
);

const categories = mongoose.model('categories', categorySchema);

export default categories;
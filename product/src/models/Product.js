import mongoose from "mongoose";
const productSchema = new mongoose.Schema (
    {
        id: {type: String},
        product: {
            type: String, 
            required: true,
            minlength: 3,
            match: /^\D+\w{2,}$/
        },
        description: {type: String, rquired: true},
        slug:{
            type: String,
            required: true,
            match: /^[A-Za-z0-9]*$/
        },
        pricePerUnit:{
            type: mongoose.Types.Decimal128,
            required: true,
            min: 0.01
        },
        quantityInStock:{
            type: mongoose.Types.Number,
            required: true,
            min: 1,
            max: 10000,
            required: true
        },
        category:{
            type: String,
            required: true,
        }
    },
    {
        versionKey: false
    }
);

const products = mongoose.model('products', productSchema);

export default products;
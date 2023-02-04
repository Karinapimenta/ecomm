import products from "../models/Product.js";

class ProductController{
    static getProducts = (req, res) =>{
        products.find((err, products)=>{
            if (err){
                res.status(404).send({message:`${err.message} - No products found`})
            } else {
            res.status(200).json(products);
            }
        })
    }
    static getProductbyId =(req, res) =>{
        const id = req.params.id;
        products.findById(id, (err, products)=>{
            if (err){
                res.status(404).send({message:`${err.message} - Product not found`})
            } else {
                res.status(200).send(products);
            }
        })
    }
    static registerProduct = (req, res) => {
        let product = new products(req.body);
        product.save((err)=>{
            if(err){
                res.status(401).send({
                    message:`${err.message} - Access Denied`})
            } else {
                res.status(201).send(product.toJSON())
            }
        })
    }
    static updateProduct =(req, res) =>{
        const id = req.params.id;
        products.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if (!err){
                res.status (200).send({message:'Product updated successfully'})
            }else{
                res.status(404).send({message:err.message})            }
        })
    }
    static deleteProduct =(req, res) =>{
        const id = req.params.id;
        products.findByIdAndDelete(id, (err)=> {
            if(!err){
                res.status(200).send({message:'Product removed successfully'})
            }else{
                res.status(404).send({message: err.message})
            }
        })
    }
}

export default ProductController;
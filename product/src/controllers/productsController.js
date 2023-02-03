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
}

export default ProductController;
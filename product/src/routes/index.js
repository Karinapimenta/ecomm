import express from "express";
import products from "./productsRoutes.js"
import categories from "./categoriesRoutes.js";

const routes =(app)=>{
    app.route('/').get ((req, res)=>{
        res.status(200).send({titulo: 'Ecomm-product'})
    })
    app.use (
        express.json(),
        categories, 
        products
    )
}

export default routes
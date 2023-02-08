import express from "express";
import products from "./productsRoutes.js";
import categories from "./categoriesRoutes.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const swaggerDocument = YAML.load('./swagger/product.yaml');
const routes =(app)=>{
    app.route('/').get ((req, res)=>{
        res.status(200).send({titulo: 'Ecomm-product'})
    });
    app.use(
        express.json(),
        categories,
        products
    );
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

export default routes
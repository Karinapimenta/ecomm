import categories from "../models/Category.js";

class CategoryController{
    static getCategories = (req, res) =>{
        categories.find((err, categories)=>{
            if (err){
                res.status(404).send({message:`${err.message} - No category found`})
            } else {
            res.status(200).json(categories);
            }
        })
    }
    static getCategorybyId =(req, res) =>{
        const id = req.params.id;
        categories.findById(id, (err, categories)=>{
            if (err){
                res.status(404).send({message:`${err.message} - Category not found`})
            } else {
                res.status(200).send(categories);
            }
        })
    }
    static registerCategory = (req, res) => {
        let category = new categories(req.body);
        category.save((err)=>{
            if(err){
                res.status(401).send({
                    message:`${err.message} - Access Denied`})
            } else {
                res.status(201).send(category.toJSON())
            }
        })
    }
    static updateCategory =(req, res) =>{
        const id = req.params.id;
        categories.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if (!err){
                res.status (200).send({message:'Category updated successfully'})
            }else{
                res.status(404).send({message:err.message})            }
        })
    }
    static deleteCategory =(req, res) =>{
        const id = req.params.id;
        categories.findByIdAndDelete(id, (err)=> {
            if(!err){
                res.status(200).send({message:'Category removed successfully'})
            }else{
                res.status(404).send({message: err.message})
            }
        })
    }
    static activateCategory = (req, res) =>{
        const id = req.params.id;
        categories.findByIdAndUpdate(id, {$set:{"status": true}},(err)=>{
            if(!err){
                res.status(200).send({message: 'Category activated successfully'})
            } else {
                res.status(404).send({message: err.message})
            }
        })
    }
}

export default CategoryController;
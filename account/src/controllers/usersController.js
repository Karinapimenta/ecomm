import users from "../models/User.js";

class UserController{
    static getUsers = (req, res) =>{
        users.find((err, users)=>{
            if (err){
                res.status(404).send({message:`${err.message} - No users found`})
            } else {
            res.status(200).json(users);
            }
        })
    }
    static getUserbyId =(req, res) =>{
        const id = req.params.id;
        users.findById(id, (err, users)=>{
            if (err){
                res.status(404).send({message:`${err.message} - User not foundi`})
            } else {
                res.status(200).send(users);
            }
        })
    }
    static saveUser = (req, res) => {
        let user = new users(req.body);
        user.save((err)=>{
            if(err){
                res.status(40).send({
                    message:`${err.message} - Bad Request`})
            } else {
                res.status(201).send(user.toJSON())
            }
        })
    }
    static updateUser =(req, res) =>{
        const id = req.params.id;
        users.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if (!err){
                res.status(200).send({message:'User updated successfully'})
            }else{
                res.status(404).send({message:err.message})            
            }
        })
    }
    static deleteUser =(req, res) =>{
        const id = req.params.id;
        users.findByIdAndDelete(id, (err)=> {
            if(err){
                res.status(404).send({message:'User could not be deleted!'})
            }else{
                res.status(200).send({message:'User deleted successfully'})
            }
        })
    }
}

export default UserController;
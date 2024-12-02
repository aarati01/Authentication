import { Model }from "mongoose";
import mongoose from "mongoose";
import path from "path";

export const createUser=async(req,res)=>{
    try{
        const{username,password}=req.body;
        //validation
        if(!username||!password){
            return res.send(400).json({"error:Username and passsword are required"});

        }
        const newUser =new UserActivation({username,password});
        await newUser.isActive();
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Failed to create user" });
    }
};
    
import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";
import { database } from "../index.ts";

type createUserBody = {
    firstName: string;
    lastName: string;
}
export const createUser = async(c:Context)=>{
    try{
        const body = await c.req.json<createUserBody>();
        if(!body.firstName || !body.lastName)
            return c.json({
                success:false,
                data:null,
                msg:"Missing some required fields"
            },400)
        if(await userModel.isDuplicate(body.firstName,body.lastName)){
            return c.json({
                success:false,
                data:null,
                msg: "The first name or last name is duplicated"
            })
        }
        const newUser = await userModel.createUser(
            body.firstName,
            body.lastName
        )
        return c.json({
            success:true,
            data:newUser,
            msg: "Finished creating new user"
        })
    }catch(e){
        return c.json({
            success:false,
            data:null,
            msg:`${e}`
        },500)
    }
}

export const updateUser = async(c:Context)=>{
    try{
        const id = Number(c.req.param("id"))
        const body = await c.req.json<createUserBody>();
        if(!body.firstName || !body.lastName){
            return c.json({
                success:false,
                data:null,
                msg:"Missing some required fields"
            },400)
        }
        const updatedUser = await userModel.editUserName(id, body.firstName,body.lastName )
        return c.json({
            success:true,
            data:updatedUser,
            msg:"user updated"
        })
    }catch(e){
        return c.json({
            success:false,
            data:null,
            msg:`${e}`
        },500)
    }
}

export const getUser = async(c:Context)=>{
    try{
        const id = Number(c.req.param("id"));
        const user = await userModel.getUserById(id);
        if(!user){
            return c.json({
                success: false,
                data: null,
                msg: "User not found"
            }, 404);  
        }
        return c.json({
            success:true,
            data:user,
            msg:"User fetch sucessful"
        })
    }catch(e){
        return c.json({
            success: false,
            data: null,
            msg: `${e}`
        },500)
    }
}

export const deleteUser = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        const deletedUser = await userModel.deleteUser(id);

        return c.json({
            success: true,
            data: deletedUser,
            msg: "User deleted successfully"
        });
    } catch (e) {
        console.error("Delete Error:", e);
        return c.json({
            success: false,
            data: null,
            msg: `Fail to delete user ${e}`
        }, 500);
    }
};
 
export const getAllUsers = async (c: Context) => {
    try {
        const users = await userModel.getAllUsers();
        return c.json({
            success: true,
            data: users,
            msg: "Fetched all users"
        });
    } catch (e) {
        return c.json({
            success: false,
            data: null,
            msg: "Failed to fetch users"
        }, 500);
    }
};

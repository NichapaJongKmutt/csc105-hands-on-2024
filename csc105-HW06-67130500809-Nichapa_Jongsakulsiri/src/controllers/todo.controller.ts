import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts"
import { database } from "../index.ts";

type createTodoListBody = {
    title:string,
    userId: number,
}

export const createTodoList = async(c:Context)=>{
    try{
        const body = await c.req.json<createTodoListBody>();
        if(!body.title || !body.userId)
            return c.json(
                {
                    success:false,
                    data:null,
                    msg:"Missing some required fields"
                },
                400
            )
        const newTodo = await todoModel.createTodoList(body.title, body.userId);
        return c.json({
            success:true,
            data:newTodo,
            msg: "You have created new Todo list",
        })
    }catch(e){
        return c.json(
            {
                success: false,
                data:null,
                msg: `${e}`
            },
            500
        )
    }
}

export const getTodoList = async(c:Context)=>{
    try{
        const param = c.req.param("id");
        console.log("PARAM:", param);
        if(param !== undefined && param !== null){
            const data = await todoModel.getTodoList(parseInt(param));
            return c.json(data,200);
        }
        return c.json({
            success:false,
            data:null,
            msg:"Missing some required fields"
        },400
    )
    }catch(e){
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}



export const deleteTodoList = async (c:Context) => {
    try{
        const query = c.req.param("id");
        if(query !== undefined && query !== null){
            const data = await todoModel.deleteTodoList(parseInt(query))
            return c.json(data,200)
        }
        return c.json(
            {
                success:false,
                data:null,
                msg:"Missing some required fields"
            },400
        )
    }catch(e){
        return c.json({
            success:false,
            data:null,
            msg: `${e}`

        },500)
    }
    


}

export const editTodoList = async (c:Context) =>{
    try{
        const idParam = c.req.param("id");
        const body = await c.req.json<{title:string}>();
        if(!idParam || !body.title){
            return c.json({
                sucess:false,
                data:null,
                msg:"Missing some required fields"
            },400
        )
        }
        const updatedTodo = await todoModel.editTodoList(parseInt(idParam), body.title)
        return c.json({
            sucess:true,
            data:updatedTodo,
            msg:"Todo updated sucessfully"
        })
    }catch(e){
        return c.json(
            {
              success: false,
              data: null,
              msg: `${e}`,
            },
            500
          );
    }
}

export const getAllTodos = async (c: Context) => {
    try {
        const users = await todoModel.getAllTodos();
        return c.json({
            success: true,
            data: users,
            msg: "Fetched all todos"
        });
    } catch (e) {
        return c.json({
            success: false,
            data: null,
            msg: "Failed to fetch todos"
        }, 500);
    }
};


export const updateTodoStatus = async (c:Context)=>{
    try{
        const idParam = c.req.param("id");
        const body = await c.req.json<{complete:boolean}>();
        if(!idParam || typeof body.complete !== "boolean"){
            return c.json({
                success:false,
                data: null,
                msg:"Missing fields"

            },400)
        }
        const updatedTodo = await todoModel.updatedTodoStatus(parseInt(idParam),body.complete)
        return c.json({
            success:true,
            data:updatedTodo,
            msg:"Todo status updated"
        })
    }catch(e){
        return c.json({
            success:false,
            data:null,
            msg:`${e}`
        },500)
    }
}

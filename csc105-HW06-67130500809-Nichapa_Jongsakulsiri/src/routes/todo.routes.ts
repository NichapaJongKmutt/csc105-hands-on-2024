import { Hono } from "hono";
import {updateTodoStatus ,createTodoList, getTodoList, editTodoList, deleteTodoList, getAllTodos } from "../controllers/todo.controller.ts";

const todoRoutes= new Hono();

todoRoutes.post("/",createTodoList)
todoRoutes.get("/:id",getTodoList)
todoRoutes.delete("/:id",deleteTodoList)
todoRoutes.put("/:id",editTodoList);
todoRoutes.get("/",getAllTodos);
todoRoutes.put("/:id/complete", updateTodoStatus);
export default todoRoutes;

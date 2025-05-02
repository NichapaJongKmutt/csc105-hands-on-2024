import { Hono } from "hono";
import {getAllUsers, deleteUser, createUser , updateUser, getUser } from "../controllers/user.controller.ts";
const userRoute = new Hono();
userRoute.post("/",createUser);
userRoute.get("/:id", getUser);
userRoute.put("/:id", updateUser);
userRoute.delete("/:id",deleteUser);
userRoute.get("/", getAllUsers);
export default userRoute;

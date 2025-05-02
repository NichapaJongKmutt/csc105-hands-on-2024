import { Hono } from "hono";
import userRoute from "./user.routes.ts";
import todoRoutes from "./todo.routes.ts";

const mainRouter = new Hono();
mainRouter.route("/users",userRoute)
mainRouter.route("/todos", todoRoutes);
export default mainRouter;


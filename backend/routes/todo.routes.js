import express from "express";
import { addTodo, getTodoList,getTodoById, updateTodoStatus, deleteTodo } from "../controllers/todo.controller.js";
import {auth} from '../middleware/auth.middleware.js'
const todoRoutes = express.Router();



// todoRoutes.post("/",auth,  addTodo);
// todoRoutes.get("/",auth,  getTodoList);
// todoRoutes.get("/:id",auth,  getTodoById);
// todoRoutes.put("/:id",auth,  updateTodoStatus);
// todoRoutes.delete("/:id",auth,  deleteTodo);


todoRoutes.post("/",  addTodo);
todoRoutes.get("/",  getTodoList);
todoRoutes.get("/:id", getTodoById);
todoRoutes.put("/:id",  updateTodoStatus);
todoRoutes.delete("/:id",  deleteTodo);
export default todoRoutes;
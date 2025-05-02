import { db } from "../index.ts";

const GetTodo = async () => {
    const todo = await db.todo.findMany();
    return todo;
};

const AddTodo = async (newTodoName: string) => {
    const newTodo = await  db.todo.create({
        data: {
            title: newTodoName,
        },
    })
    return newTodo;
}

const EditTodo = async (todoId: number, editTodoName: string) =>{
    const editedTodo = await db.todo.update({
        where: {
            id: todoId,
        },
        data: {
            title: editTodoName,
        },
    })
    return editedTodo;
}

const SuccessTodo = async (todoId:number) => {
    const completedTodo = await db.todo.update({
        where: { 
            id: todoId,
        },
        data: {
            completed: true,
        },
    })
    return completedTodo;
}

const DeleteTodo = async (todoId:number) => {
    const deletedTodo = await db.todo.delete({
		where: {
			id: todoId,
		},
	});
	return deletedTodo; 
}

export { GetTodo, AddTodo, EditTodo, SuccessTodo, DeleteTodo };
import { database } from "../index.ts";

export const createTodoList = async (title:string, userId:number) => {
    const todo = await database.todo.create({
        data: {
            title:title,
            userId: userId,
        }
    })
    return todo;
}

export const getTodoList = async (id:number)=>{
    const todo = await database.todo.findUniqueOrThrow({
        where: {
            id:id
        },
        include:{
            user:true
        }
    })
    return todo;
}

export const deleteTodoList = async (id:number) =>{
    const todo = await database.todo.delete({
        where:{
            id:id
        }
    })
    return todo;
}

export const editTodoList = async(id:number, title:string )=>{
    const existingTodo = await database.todo.findUnique({
        where: { id }
    });

    if (!existingTodo) {
        throw new Error("Todo not found");
    }

    const todo = await database.todo.update({
        where: { id },
        data: { title }
    });

    return todo;
}

export const getAllTodos = async () => {
    const todos = await database.todo.findMany();
    return todos;
};

export const updatedTodoStatus = async (id:number, complete:boolean)=>{
    const todo = await database.todo.update({
        where:{id},
        data:{complete}
    })
    return todo;
}
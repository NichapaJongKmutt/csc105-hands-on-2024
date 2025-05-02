
import { database } from "../index.ts";

export const isDuplicate = async(firstName: string ,lasNname: string)=>{
    const user = await database.user.findFirst({
        where:{
            firstname:firstName,
            lastname: lasNname
        }
    })
    return user
}

export const createUser = async(firstName: string, lastName: string)=>{
    const user = await database.user.create({
        data:{
            firstname:firstName,
            lastname:lastName
        }
    })
    return user;
}
export const editUserName = async(userId:number, firstName:string, lastName:string)=>{
    const user = await database.user.update({
        where:{
            id:userId,
        },
        data:{
            firstname:firstName,
            lastname:lastName
        }
    })
    return user;
}

export const getUserById = async(userId: number)=>{
    const user = await database.user.findUnique({
        where:{
            id:userId
        }
    })
    return user
}


export const deleteUser = async(userId: number)=>{
    await database.user.deleteMany({
        where: { id: userId }
    });

    const user = await database.user.delete({
        where:{
            id:userId
        }
    })
    return user;
}

export const getAllUsers = async () => {
    const users = await database.user.findMany();
    return users;
};

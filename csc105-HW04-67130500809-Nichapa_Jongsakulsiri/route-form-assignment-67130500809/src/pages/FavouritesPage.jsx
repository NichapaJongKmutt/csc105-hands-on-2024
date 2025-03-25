import { useState } from "react";
import {z} from "zod";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {useForm} from "react-hook-form";
function FavPage(){
    const schema = z.object({
        number: z.number().min(1).max(100),
        q: z.enum(['love','like']),
        size: z.enum(['small','medium','large'])
    })
    const navigateToDetail = useNavigate();
    const {register, handleSubmit , setError , formState:{errors}} = useForm();
    const onSubmit = (data) =>{
        const parseData = {
            number: Number(data.number),
            q: data.q,
            size: data.size,
        }
        const result = schema.safeParse(parseData);
        if(!result.success){
            result.error.issues.forEach((issue)=>{
                setError(issue.path[0], {message: issue.message})
            })
            return;
        }
        navigateToDetail(`/fav/${parseData.number}?q=${parseData.q}&size=${parseData.size}`)
    }
    
    
    
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col gap-5 bg-white p-8 rounded-2xl shadow-md w-100">
            <h2 className="text-center text-3xl font-bold">Favourites Pages</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="text-[20px]">Number:</label>
                    <br/>
                    <input 
                        className="bg-white mt-3 border-1 w-full border-gray-300 p-2 rounded-2xl"
                        type="number"
                        {...register("number")}   
                    />
                    {errors.number && <span className="mt-3 text-red-500">{errors.number.message}</span>}
                </div>
                <div className="mt-3">
                    <label className="text-[20px]">
                       Q: 
                    </label>
                    <br/>
                    <select {...register("q")} className="border-1 w-full border-gray-300 p-2 rounded-2xl mt-3">
                        <option value="love">love</option>
                        <option value="like">like</option>
                    </select>
                    {errors.q && <span>{errors.q.message}</span>}
                </div>
                <div className="mt-3">
                    <label className="text-[20px]">Size:</label>
                    <br/>
                    <select {...register("size")} className="border-1 w-full border-gray-300 p-2 rounded-2xl mt-3">
                        <option>small</option>
                        <option>medium</option>
                        <option>large</option>
                    </select>
                    {errors.size && <span>{errors.size.message}</span>}

                </div>
                <div className="mt-6">
                <button className="bg-blue-500 w-50% p-4  text-white rounded-2xl w-full" type="submit">Submit</button>
                </div>
                
            </form>
            </div>
            
        </div>
    )
}
export default FavPage;
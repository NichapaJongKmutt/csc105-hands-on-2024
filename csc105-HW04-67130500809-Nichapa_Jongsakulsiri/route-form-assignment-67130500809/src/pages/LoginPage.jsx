import { useState } from "react";
import {z} from "zod";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Login(){
    const homeNavigate = useNavigate();
    const [errors, setErrors] = useState({});
    const userSchema = z.object({
        email: z.string().email(),
        password: z.string().min(6)
    })
    const [formData, setFormData] = useState({
        email: "",
        password:""
    })

    const handleChange = (e) =>{
       const {name, value} = e.target;
       setFormData({...formData, [name]: value});
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
        const result = userSchema.safeParse(formData);
        if(result.success){
            setErrors({});
            console.log("Validaiton sucessful" , result.data);
            homeNavigate("/");
        }else{
            const errorMap = {};
            result.error.errors.forEach((err)=>{
                errorMap[err.path[0]] = err.message
            })
            setErrors(errorMap);
            console.log("Validation errors:", result.error.errors);
        }
    }
    return(
        <div className=" bg-gradient-to-r from-green-200 to-blue-500 h-screen flex justify-center items-center">
            <div className="flex flex-col gap-5 bg-white p-8 rounded-2xl shadow-md w-100">
                <h2 className="text-center text-3xl font-bold">
                    Login
                </h2>
                <div>
                <form onSubmit={handleSubmit}>
                    <div className="">
                        <label className="text-[20px]">Email</label>
                        <br/>
                        <input
                        className="bg-white mt-3 border-1 w-full border-gray-300 p-2 rounded-2xl"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email"
                        />
                        {errors.email && <p className="my-3 text-red-500">{errors.email}</p>}
                    </div>
                    <div className="mt-3">
                        <label className="text-[20px]">Password</label>
                        <br/>
                        <input
                        className="bg-white mt-3 border-1 w-full border-gray-300 p-2 rounded-2xl"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="password"
                        
                        />
                        {errors.password && <p className="my-3 text-red-500">{errors.password}</p>}
                    </div>
                    <button className="bg-blue-500 text-[24px] my-4 rounded-2xl py-3 text-white w-full" type="submit">Login</button>
                </form>
                <div className="text-center">  
                    <span>Don't have an account?  </span><NavLink className="font-bold" to="/signup">Sign Up</NavLink>
                </div>
                </div>
            </div>
            
            
            
        </div>
    )
}
export default Login;
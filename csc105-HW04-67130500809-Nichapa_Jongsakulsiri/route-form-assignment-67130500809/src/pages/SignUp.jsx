import { useState } from "react";
import {z} from "zod";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
function SignUp(){
    const loginNavigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email:"",
        password:"",
    })
    const [errors, setErrors] = useState({});
    const userSchema = z.object({
        name: z.string().min(1),
        email:z.string().email(),
        password: z.string().min(6)
    })
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData({...formData, [name]: value});
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
        const result = userSchema.safeParse(formData);
        if(result.success){
            setErrors({});
            console.log("Validaiton sucessful" , result.data);
            loginNavigate("/login")
        }else{
            const errorMap = {};
            result.error.errors.forEach((err)=>{
                errorMap[err.path[0]] = err.message;
            })
            setErrors(errorMap);
            console.log("Validation errors:", result.error.errors);
            
        }
    }
    return(
        <div className=" bg-gradient-to-r from-green-200 to-blue-500 h-screen flex justify-center items-center">
            <div className="flex flex-col gap-5 bg-white p-8 rounded-2xl shadow-md w-100">
                <h2  className="text-center text-3xl font-bold">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                <div>
                    <label className="text-[20px]">name</label>
                    <br/>
                    <input
                    className="bg-white mt-3 border-1 w-full border-gray-300 p-2 rounded-2xl"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="name"
                    />
                    {errors.name && <p className="my-3 text-red-500">{errors.name}</p>}
                </div>
                <div className="mt-3">
                    <label className="text-[20px]">email</label>
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
                    <label >password</label>
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
                <button className="bg-blue-500 text-[24px] mt-5 rounded-2xl py-3 text-white w-full"  type="submit">Create account</button>
            </form>
            <div className="text-center" > 
                <span>Already have an account?  </span><NavLink className="font-bold" to="/login">Login</NavLink>
            </div>
            </div>
            
            
            
    </div>
        
    )
}
export default SignUp;
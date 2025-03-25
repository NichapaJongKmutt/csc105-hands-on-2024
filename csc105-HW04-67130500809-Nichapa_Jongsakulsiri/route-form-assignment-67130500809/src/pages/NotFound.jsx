import { NavLink } from "react-router-dom";
function NotFound(){
    return(
        <div className="flex h-screen justify-center items-center bg-gray-200">
            <div className="w-100 bg-white p-8 shadow-md rounded-2xl flex flex-col gap-5 text-center">
                <h1 className="text-red-500 text-4xl font-bold">404 - Page Not Found.</h1>
                <p className="text-2xl">Oops! The page you're looking for doesn't exist</p>
                <button className="bg-blue-500 w-50% p-4 text-white rounded-2xl"><NavLink to="/">Go to home</NavLink></button>
            </div>
        </div>
            
    )
}
export default NotFound;